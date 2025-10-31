import express from 'express';
import { body, validationResult } from 'express-validator';
import Sponsor from '../models/Sponsor.js';
import { addSponsorToSheet } from '../services/googleSheets.js';

const router = express.Router();

// Validation rules
const sponsorValidation = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('mobile').trim().notEmpty().withMessage('Mobile number is required'),
    body('companyName').trim().notEmpty().withMessage('Company name is required'),
    body('designation').trim().notEmpty().withMessage('Designation is required'),
    body('sponsorshipType')
        .isIn([
            'title',
            'platinum',
            'gold',
            'silver',
            'bronze',
            'inkind',
            'media',
            'marketing',
            'stall',
            'other',
        ])
        .withMessage('Valid sponsorship type is required'),
    body('marketingGoals').trim().notEmpty().withMessage('Marketing goals are required'),
    body('budgetRange')
        .optional()
        .isIn(['under50k', '50k-1l', '1l-3l', '3l-5l', '5l-10l', 'above10l', 'discuss']),
];

// POST /api/sponsors - Create new sponsor registration
router.post('/', sponsorValidation, async (req, res) => {
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
            companyName,
            designation,
            companyWebsite,
            sponsorshipType,
            budgetRange,
            marketingGoals,
            message,
        } = req.body;

        // Check if sponsor already exists
        const existingSponsor = await Sponsor.findOne({ email });
        if (existingSponsor) {
            return res.status(400).json({
                success: false,
                message: 'A registration with this email already exists',
            });
        }

        // Create new sponsor
        const sponsor = new Sponsor({
            name,
            email,
            mobile,
            companyName,
            designation,
            companyWebsite,
            sponsorshipType,
            budgetRange,
            marketingGoals,
            message,
        });

        // Save to MongoDB
        await sponsor.save();

        // Add to Google Sheets (non-blocking)
        addSponsorToSheet(sponsor.toObject())
            .catch((error) => {
                console.error('Failed to add to Google Sheets:', error);
                // Don't fail the request if sheets update fails
            });

        res.status(201).json({
            success: true,
            message: 'Sponsor registration submitted successfully',
            data: {
                id: sponsor._id,
                name: sponsor.name,
                companyName: sponsor.companyName,
                email: sponsor.email,
                status: sponsor.status,
            },
        });
    } catch (error) {
        console.error('❌ Error creating sponsor:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit registration. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
});

// GET /api/sponsors - Get all sponsors (with pagination and filtering)
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const status = req.query.status;
        const type = req.query.type;

        const query = {};
        if (status) query.status = status;
        if (type) query.sponsorshipType = type;

        const sponsors = await Sponsor.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await Sponsor.countDocuments(query);

        res.json({
            success: true,
            data: sponsors,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('❌ Error fetching sponsors:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch sponsors',
        });
    }
});

// GET /api/sponsors/:id - Get single sponsor
router.get('/:id', async (req, res) => {
    try {
        const sponsor = await Sponsor.findById(req.params.id).select('-__v');

        if (!sponsor) {
            return res.status(404).json({
                success: false,
                message: 'Sponsor not found',
            });
        }

        res.json({
            success: true,
            data: sponsor,
        });
    } catch (error) {
        console.error('❌ Error fetching sponsor:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch sponsor',
        });
    }
});

// PATCH /api/sponsors/:id/status - Update sponsor status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['pending', 'reviewing', 'negotiating', 'confirmed', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value',
            });
        }

        const sponsor = await Sponsor.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!sponsor) {
            return res.status(404).json({
                success: false,
                message: 'Sponsor not found',
            });
        }

        res.json({
            success: true,
            message: 'Sponsor status updated',
            data: sponsor,
        });
    } catch (error) {
        console.error('❌ Error updating sponsor status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update sponsor status',
        });
    }
});

// GET /api/sponsors/analytics/stats - Get sponsor statistics
router.get('/analytics/stats', async (req, res) => {
    try {
        const total = await Sponsor.countDocuments();
        const pending = await Sponsor.countDocuments({ status: 'pending' });
        const reviewing = await Sponsor.countDocuments({ status: 'reviewing' });
        const negotiating = await Sponsor.countDocuments({ status: 'negotiating' });
        const confirmed = await Sponsor.countDocuments({ status: 'confirmed' });
        const rejected = await Sponsor.countDocuments({ status: 'rejected' });

        const bySponsorshipType = await Sponsor.aggregate([
            {
                $group: {
                    _id: '$sponsorshipType',
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
                    negotiating,
                    confirmed,
                    rejected,
                },
                bySponsorshipType,
            },
        });
    } catch (error) {
        console.error('❌ Error fetching sponsor stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
        });
    }
});

export default router;
