import ThemeRegistration from '../models/ThemeRegistration.js';
import { addThemeRegistrationToSheet } from '../services/googleSheets.js';
import Logger from '../utils/logger.js';

/**
 * @desc    Create new theme registration (University/Professional)
 * @route   POST /api/themes
 * @access  Public
 */
export const createThemeRegistration = async (req, res) => {
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

    // Check for duplicate registration
    const existing = await ThemeRegistration.findOne({
        email: email.toLowerCase(),
        projectTitle: projectTitle.trim(),
        selectedTheme: selectedTheme.trim(),
    });

    if (existing) {
        return res.status(409).json({
            success: false,
            message: 'You have already registered this project for this theme',
        });
    }

    // Create registration
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

    Logger.success('Theme registration created', {
        id: registration._id,
        participantType: registration.participantType,
        organizationName: registration.organizationName,
        selectedTheme: registration.selectedTheme,
    });

    // Push to Google Sheets (non-blocking)
    addThemeRegistrationToSheet(registration.toObject()).catch((err) => {
        Logger.error('Failed to sync theme registration to Google Sheets', err);
    });

    res.status(201).json({
        success: true,
        message: 'Registration submitted successfully',
        data: {
            id: registration._id,
            email: registration.email,
            projectTitle: registration.projectTitle,
            status: registration.status,
            submittedAt: registration.submittedAt,
        },
    });
};

/**
 * @desc    Get all theme registrations with pagination
 * @route   GET /api/themes
 * @access  Public (should be protected in production)
 */
export const getAllThemeRegistrations = async (req, res) => {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const status = req.query.status;
    const theme = req.query.theme;
    const participantType = req.query.participantType;

    const query = {};
    if (status) query.status = status;
    if (theme) query.selectedTheme = theme;
    if (participantType) query.participantType = participantType;

    const [registrations, total] = await Promise.all([
        ThemeRegistration.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v')
            .lean(),
        ThemeRegistration.countDocuments(query),
    ]);

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
};

/**
 * @desc    Get single theme registration by ID
 * @route   GET /api/themes/:id
 * @access  Public (should be protected in production)
 */
export const getThemeRegistrationById = async (req, res) => {
    const registration = await ThemeRegistration.findById(req.params.id)
        .select('-__v')
        .lean();

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
};

/**
 * @desc    Update theme registration status
 * @route   PATCH /api/themes/:id/status
 * @access  Private (should be protected in production)
 */
export const updateThemeRegistrationStatus = async (req, res) => {
    const { status } = req.body;

    const validStatuses = ['pending', 'reviewing', 'shortlisted', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
        });
    }

    const registration = await ThemeRegistration.findByIdAndUpdate(
        req.params.id,
        { status, updatedAt: Date.now() },
        { new: true, runValidators: true }
    ).select('-__v');

    if (!registration) {
        return res.status(404).json({
            success: false,
            message: 'Registration not found',
        });
    }

    Logger.info('Theme registration status updated', {
        id: registration._id,
        oldStatus: registration.status,
        newStatus: status,
    });

    res.json({
        success: true,
        message: 'Status updated successfully',
        data: registration,
    });
};

/**
 * @desc    Get theme registration statistics
 * @route   GET /api/themes/analytics/stats
 * @access  Public (should be protected in production)
 */
export const getThemeRegistrationStats = async (req, res) => {
    const [
        total,
        pending,
        reviewing,
        shortlisted,
        approved,
        rejected,
        byTheme,
        byParticipantType,
    ] = await Promise.all([
        ThemeRegistration.countDocuments(),
        ThemeRegistration.countDocuments({ status: 'pending' }),
        ThemeRegistration.countDocuments({ status: 'reviewing' }),
        ThemeRegistration.countDocuments({ status: 'shortlisted' }),
        ThemeRegistration.countDocuments({ status: 'approved' }),
        ThemeRegistration.countDocuments({ status: 'rejected' }),
        ThemeRegistration.aggregate([
            {
                $group: {
                    _id: '$selectedTheme',
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
        ]),
        ThemeRegistration.aggregate([
            {
                $group: {
                    _id: '$participantType',
                    count: { $sum: 1 },
                },
            },
        ]),
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
};

export default {
    createThemeRegistration,
    getAllThemeRegistrations,
    getThemeRegistrationById,
    updateThemeRegistrationStatus,
    getThemeRegistrationStats,
};

