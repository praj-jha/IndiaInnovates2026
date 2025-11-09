import express from 'express';
import { body, validationResult } from 'express-validator';
import SchoolRegistration from '../models/SchoolRegistration.js';
import { addSchoolRegistrationToSheet } from '../services/googleSheets.js';

const router = express.Router();

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

// Validation rules
const schoolValidation = [
    body('schoolName').trim().notEmpty().isLength({ min: 2, max: 200 }),
    body('teamName').trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('teamLeadName').trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('teamLeadEmail').trim().notEmpty().isEmail().normalizeEmail().isLength({ max: 255 }),
    body('teamLeadPhone').trim().notEmpty().matches(phoneRegex).isLength({ min: 10, max: 15 }),
    body('teamLeadAge').notEmpty().isInt({ min: 5, max: 20 }),
    body('parentGuardianName').trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('parentGuardianPhone').trim().notEmpty().matches(phoneRegex).isLength({ min: 10, max: 15 }),
    body('city').trim().notEmpty().isLength({ max: 100 }),
    body('state').trim().notEmpty().isLength({ max: 100 }),
    body('teamMembers').isArray().optional(),
    body('teamMembers.*.name').optional().trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('teamMembers.*.age').optional().isInt({ min: 5, max: 20 }),
    body('teamMembers.*.phone').optional().trim().matches(phoneRegex).isLength({ min: 10, max: 15 }),
    body('selectedCompetitions').isArray({ min: 1 }).withMessage('Select at least one competition'),
];

// POST /api/schools - Create new school competition registration
router.post('/', schoolValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array(),
            });
        }

        const {
            schoolName,
            teamName,
            teamLeadName,
            teamLeadEmail,
            teamLeadPhone,
            teamLeadAge,
            parentGuardianName,
            parentGuardianPhone,
            city,
            state,
            teamMembers = [],
            selectedCompetitions,
        } = req.body;

        if (teamMembers.length > 4) {
            return res.status(400).json({
                success: false,
                message: 'Maximum 4 additional team members allowed',
            });
        }

        // Check duplicates by teamLeadEmail + teamName
        const existing = await SchoolRegistration.findOne({
            teamLeadEmail: teamLeadEmail.toLowerCase(),
            teamName: teamName.trim(),
        });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: 'This team has already registered with this email',
            });
        }

        const registration = new SchoolRegistration({
            schoolName,
            teamName,
            teamLeadName,
            teamLeadEmail,
            teamLeadPhone,
            teamLeadAge,
            parentGuardianName,
            parentGuardianPhone,
            city,
            state,
            teamMembers,
            selectedCompetitions,
        });

        await registration.save();

        // Push to Google Sheets (non-blocking)
        addSchoolRegistrationToSheet(registration.toObject()).catch((err) => {
            console.error('Failed to sync school registration to Sheets:', err.message);
        });

        res.status(201).json({
            success: true,
            message: 'Registration submitted successfully',
            data: {
                id: registration._id,
                teamName: registration.teamName,
                teamLeadEmail: registration.teamLeadEmail,
                status: registration.status,
            },
        });
    } catch (error) {
        console.error('❌ Error creating school registration:', error);
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'A registration with this team and email already exists',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Failed to submit registration. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
});

// GET /api/schools - Get all school registrations (with pagination)
router.get('/', async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
        const status = req.query.status;

        const query = status ? { status } : {};

        const registrations = await SchoolRegistration.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await SchoolRegistration.countDocuments(query);

        res.json({
            success: true,
            data: registrations,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('❌ Error fetching school registrations:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registrations',
        });
    }
});

// GET /api/schools/:id - Get single school registration
router.get('/:id', async (req, res) => {
    try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid registration ID format',
            });
        }

        const registration = await SchoolRegistration.findById(req.params.id).select('-__v');

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: 'Registration not found',
            });
        }

        res.json({
            success: true,
            data: registration,
        });
    } catch (error) {
        console.error('❌ Error fetching school registration:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registration',
        });
    }
});

// PATCH /api/schools/:id/status - Update registration status
router.patch('/:id/status', async (req, res) => {
    try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid registration ID format',
            });
        }

        const { status } = req.body;

        if (!status || !['pending', 'reviewing', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value',
            });
        }

        const registration = await SchoolRegistration.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: 'Registration not found',
            });
        }

        res.json({
            success: true,
            message: 'Status updated successfully',
            data: registration,
        });
    } catch (error) {
        console.error('❌ Error updating school registration status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update status',
        });
    }
});

// GET /api/schools/analytics/stats - Get school registration statistics
router.get('/analytics/stats', async (req, res) => {
    try {
        const total = await SchoolRegistration.countDocuments();
        const pending = await SchoolRegistration.countDocuments({ status: 'pending' });
        const reviewing = await SchoolRegistration.countDocuments({ status: 'reviewing' });
        const approved = await SchoolRegistration.countDocuments({ status: 'approved' });
        const rejected = await SchoolRegistration.countDocuments({ status: 'rejected' });

        const byCompetition = await SchoolRegistration.aggregate([
            { $unwind: '$selectedCompetitions' },
            {
                $group: {
                    _id: '$selectedCompetitions',
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
                    approved,
                    rejected,
                },
                byCompetition,
            },
        });
    } catch (error) {
        console.error('❌ Error fetching school statistics:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
        });
    }
});

export default router;
