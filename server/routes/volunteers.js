import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import Volunteer from '../models/Volunteer.js';
import { addVolunteerToSheet } from '../services/googleSheets.js';

const router = express.Router();

// Validation rules
const volunteerValidation = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('mobile').trim().notEmpty().withMessage('Mobile number is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
    body('studentStatus').optional().isIn(['yes', 'no']),
    body('department').optional().isIn([
        'marketing',
        'content',
        'design',
        'tech',
        'operations',
        'pr',
        'event',
        'research',
    ]),
    body('yearOfStudy').optional().isIn(['1st', '2nd', '3rd', '4th', 'postgrad']),
    body('availability').optional().isIn(['fulltime', 'parttime', 'flexible', 'remote']),
];

// POST /api/volunteers - Create new volunteer registration
router.post('/', volunteerValidation, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        const {
            name,
            email,
            mobile,
            studentStatus,
            institution,
            course,
            yearOfStudy,
            department,
            skillset,
            availability,
            message,
        } = req.body;

        // Check database connection
        if (!mongoose.connection.readyState) {
            console.error('❌ Database not connected');
            return res.status(503).json({
                success: false,
                message: 'Database connection unavailable. Please try again later.',
            });
        }

        // Check if volunteer already exists
        const existingVolunteer = await Volunteer.findOne({ email });
        if (existingVolunteer) {
            return res.status(400).json({
                success: false,
                message: 'A registration with this email already exists',
            });
        }

        // Create new volunteer
        const volunteer = new Volunteer({
            name,
            email,
            mobile,
            studentStatus,
            institution,
            course,
            yearOfStudy,
            department,
            skillset,
            availability,
            message,
        });

        // Save to MongoDB
        await volunteer.save();

        // Add to Google Sheets (non-blocking)
        addVolunteerToSheet(volunteer.toObject())
            .catch((error) => {
                console.error('Failed to add to Google Sheets:', error);
                // Don't fail the request if sheets update fails
            });

        res.status(201).json({
            success: true,
            message: 'Volunteer registration submitted successfully',
            data: {
                id: volunteer._id,
                name: volunteer.name,
                email: volunteer.email,
                status: volunteer.status,
            },
        });
    } catch (error) {
        console.error('❌ Error creating volunteer:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({
            success: false,
            message: 'Failed to submit registration. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
});

// GET /api/volunteers - Get all volunteers (with pagination and filtering)
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const status = req.query.status;

        const query = status ? { status } : {};

        const volunteers = await Volunteer.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await Volunteer.countDocuments(query);

        res.json({
            success: true,
            data: volunteers,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('❌ Error fetching volunteers:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch volunteers',
        });
    }
});

// GET /api/volunteers/:id - Get single volunteer
router.get('/:id', async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id).select('-__v');

        if (!volunteer) {
            return res.status(404).json({
                success: false,
                message: 'Volunteer not found',
            });
        }

        res.json({
            success: true,
            data: volunteer,
        });
    } catch (error) {
        console.error('❌ Error fetching volunteer:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch volunteer',
        });
    }
});

// PATCH /api/volunteers/:id/status - Update volunteer status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['pending', 'reviewing', 'accepted', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value',
            });
        }

        const volunteer = await Volunteer.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!volunteer) {
            return res.status(404).json({
                success: false,
                message: 'Volunteer not found',
            });
        }

        res.json({
            success: true,
            message: 'Volunteer status updated',
            data: volunteer,
        });
    } catch (error) {
        console.error('❌ Error updating volunteer status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update volunteer status',
        });
    }
});

// GET /api/volunteers/stats - Get volunteer statistics
router.get('/analytics/stats', async (req, res) => {
    try {
        const total = await Volunteer.countDocuments();
        const pending = await Volunteer.countDocuments({ status: 'pending' });
        const reviewing = await Volunteer.countDocuments({ status: 'reviewing' });
        const accepted = await Volunteer.countDocuments({ status: 'accepted' });
        const rejected = await Volunteer.countDocuments({ status: 'rejected' });

        const byDepartment = await Volunteer.aggregate([
            {
                $group: {
                    _id: '$department',
                    count: { $sum: 1 },
                },
            },
        ]);

        res.json({
            success: true,
            data: {
                total,
                byStatus: {
                    pending,
                    reviewing,
                    accepted,
                    rejected,
                },
                byDepartment,
            },
        });
    } catch (error) {
        console.error('❌ Error fetching volunteer stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
        });
    }
});

export default router;
