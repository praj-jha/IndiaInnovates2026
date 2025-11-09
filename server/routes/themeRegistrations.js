import express from 'express';
import { body, validationResult } from 'express-validator';
import ThemeRegistration from '../models/ThemeRegistration.js';
import { addThemeRegistrationToSheet } from '../services/googleSheets.js';

const router = express.Router();

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

const themeValidation = [
    body('participantType').notEmpty().isIn(['university', 'professional']),
    body('organizationName').trim().notEmpty().isLength({ min: 2, max: 200 }),
    body('participantName').trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('designation').trim().notEmpty().isLength({ min: 2, max: 100 }),
    body('email').trim().notEmpty().isEmail().normalizeEmail().isLength({ max: 255 }),
    body('phone').trim().notEmpty().matches(phoneRegex).isLength({ min: 10, max: 15 }),
    body('address').trim().notEmpty().isLength({ max: 255 }),
    body('city').trim().notEmpty().isLength({ max: 100 }),
    body('state').trim().notEmpty().isLength({ max: 100 }),
    body('pincode').trim().notEmpty().matches(/^\d{6}$/).withMessage('Pincode must be exactly 6 digits'),
    body('projectTitle').trim().notEmpty().isLength({ min: 3, max: 200 }),
    body('projectDescription').trim().notEmpty().isLength({ min: 50, max: 5000 }),
    body('teamSize').notEmpty().isInt({ min: 1, max: 10 }),
    body('selectedTheme').trim().notEmpty(),
];

// POST /api/themes - Create new theme registration
router.post('/', themeValidation, async (req, res) => {
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
            participantType,
            organizationName,
            participantName,
            designation,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            projectTitle,
            projectDescription,
            teamSize,
            selectedTheme,
        } = req.body;

        // Prevent duplicates for the same email + project title + theme
        const existing = await ThemeRegistration.findOne({
            email: email.toLowerCase(),
            projectTitle: projectTitle.trim(),
            selectedTheme: selectedTheme.trim(),
        });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: 'You have already registered this project for this theme',
            });
        }

        const registration = new ThemeRegistration({
            participantType,
            organizationName,
            participantName,
            designation,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            projectTitle,
            projectDescription,
            teamSize,
            selectedTheme,
        });

        await registration.save();

        // Push to Google Sheets (non-blocking)
        addThemeRegistrationToSheet(registration.toObject()).catch((err) => {
            console.error('Failed to sync theme registration to Sheets:', err.message);
        });

        res.status(201).json({
            success: true,
            message: 'Registration submitted successfully',
            data: {
                id: registration._id,
                email: registration.email,
                status: registration.status,
            },
        });
    } catch (error) {
        console.error('❌ Error creating theme registration:', error);
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'A registration for this project has already been submitted',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Failed to submit registration. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
});

// GET /api/themes - Get all theme registrations (with pagination)
router.get('/', async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
        const status = req.query.status;
        const theme = req.query.theme;

        const query = {};
        if (status) query.status = status;
        if (theme) query.selectedTheme = theme;

        const registrations = await ThemeRegistration.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await ThemeRegistration.countDocuments(query);

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
        console.error('❌ Error fetching theme registrations:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registrations',
        });
    }
});

// GET /api/themes/:id - Get single theme registration
router.get('/:id', async (req, res) => {
    try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid registration ID format',
            });
        }

        const registration = await ThemeRegistration.findById(req.params.id).select('-__v');

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
        console.error('❌ Error fetching theme registration:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registration',
        });
    }
});

// PATCH /api/themes/:id/status - Update registration status
router.patch('/:id/status', async (req, res) => {
    try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid registration ID format',
            });
        }

        const { status } = req.body;

        if (!status || !['pending', 'reviewing', 'shortlisted', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value',
            });
        }

        const registration = await ThemeRegistration.findByIdAndUpdate(
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
        console.error('❌ Error updating theme registration status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update status',
        });
    }
});

// GET /api/themes/analytics/stats - Get theme registration statistics
router.get('/analytics/stats', async (req, res) => {
    try {
        const total = await ThemeRegistration.countDocuments();
        const pending = await ThemeRegistration.countDocuments({ status: 'pending' });
        const reviewing = await ThemeRegistration.countDocuments({ status: 'reviewing' });
        const shortlisted = await ThemeRegistration.countDocuments({ status: 'shortlisted' });
        const approved = await ThemeRegistration.countDocuments({ status: 'approved' });
        const rejected = await ThemeRegistration.countDocuments({ status: 'rejected' });

        const byTheme = await ThemeRegistration.aggregate([
            {
                $group: {
                    _id: '$selectedTheme',
                    count: { $sum: 1 },
                },
            },
        ]);

        const byParticipantType = await ThemeRegistration.aggregate([
            {
                $group: {
                    _id: '$participantType',
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
                    shortlisted,
                    approved,
                    rejected,
                },
                byTheme,
                byParticipantType,
            },
        });
    } catch (error) {
        console.error('❌ Error fetching theme statistics:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
        });
    }
});

export default router;
