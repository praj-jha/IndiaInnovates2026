import SchoolRegistration from '../models/SchoolRegistration.js';
import { addSchoolRegistrationToSheet } from '../services/googleSheets.js';
import Logger from '../utils/logger.js';

/**
 * @desc    Create new school competition registration
 * @route   POST /api/schools
 * @access  Public
 */
export const createSchoolRegistration = async (req, res) => {
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

    // Validate team members count
    if (teamMembers.length > 4) {
        return res.status(400).json({
            success: false,
            message: 'Maximum 4 additional team members allowed (5 total including team lead)',
        });
    }

    // Check for duplicate registration
    const existing = await SchoolRegistration.findOne({
        teamLeadEmail: teamLeadEmail.toLowerCase(),
        teamName: teamName.trim(),
    });

    if (existing) {
        return res.status(409).json({
            success: false,
            message: 'This team has already registered with this email',
        });
    }

    // Create registration
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

    Logger.success('School registration created', {
        id: registration._id,
        teamName: registration.teamName,
        schoolName: registration.schoolName,
    });

    // Push to Google Sheets (non-blocking)
    addSchoolRegistrationToSheet(registration.toObject()).catch((err) => {
        Logger.error('Failed to sync school registration to Google Sheets', err);
    });

    res.status(201).json({
        success: true,
        message: 'Registration submitted successfully',
        data: {
            id: registration._id,
            teamName: registration.teamName,
            teamLeadEmail: registration.teamLeadEmail,
            status: registration.status,
            submittedAt: registration.submittedAt,
        },
    });
};

/**
 * @desc    Get all school registrations with pagination
 * @route   GET /api/schools
 * @access  Public (should be protected in production)
 */
export const getAllSchoolRegistrations = async (req, res) => {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const status = req.query.status;

    const query = status ? { status } : {};

    const [registrations, total] = await Promise.all([
        SchoolRegistration.find(query)
            .sort({ submittedAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .select('-__v')
            .lean(),
        SchoolRegistration.countDocuments(query),
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
 * @desc    Get single school registration by ID
 * @route   GET /api/schools/:id
 * @access  Public (should be protected in production)
 */
export const getSchoolRegistrationById = async (req, res) => {
    const registration = await SchoolRegistration.findById(req.params.id)
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
 * @desc    Update school registration status
 * @route   PATCH /api/schools/:id/status
 * @access  Private (should be protected in production)
 */
export const updateSchoolRegistrationStatus = async (req, res) => {
    const { status } = req.body;

    const validStatuses = ['pending', 'reviewing', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
        });
    }

    const registration = await SchoolRegistration.findByIdAndUpdate(
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

    Logger.info('School registration status updated', {
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
 * @desc    Get school registration statistics
 * @route   GET /api/schools/analytics/stats
 * @access  Public (should be protected in production)
 */
export const getSchoolRegistrationStats = async (req, res) => {
    const [
        total,
        pending,
        reviewing,
        approved,
        rejected,
        byCompetition,
    ] = await Promise.all([
        SchoolRegistration.countDocuments(),
        SchoolRegistration.countDocuments({ status: 'pending' }),
        SchoolRegistration.countDocuments({ status: 'reviewing' }),
        SchoolRegistration.countDocuments({ status: 'approved' }),
        SchoolRegistration.countDocuments({ status: 'rejected' }),
        SchoolRegistration.aggregate([
            { $unwind: '$selectedCompetitions' },
            {
                $group: {
                    _id: '$selectedCompetitions',
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
        ]),
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
};

export default {
    createSchoolRegistration,
    getAllSchoolRegistrations,
    getSchoolRegistrationById,
    updateSchoolRegistrationStatus,
    getSchoolRegistrationStats,
};

