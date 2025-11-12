import ThemeRegistration from '../models/ThemeRegistration.js';
import { addThemeRegistrationToSheet } from '../services/googleSheets.js';
import Logger from '../utils/logger.js';

/**
 * @desc    Create new theme registration (University/Professional)
 * @route   POST /api/themes
 * @access  Public
 */
export const createThemeRegistration = async (req, res) => {
    try {
        console.log('📝 Received theme registration request');
        console.log('Request body:', JSON.stringify(req.body, null, 2));

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

        // Convert teamSize to number if it's a string
        const teamSizeNumber = typeof teamSize === 'string' ? parseInt(teamSize, 10) : teamSize;

        console.log('🔍 Converted teamSize:', teamSizeNumber);

        // Check for duplicate registration
        const existing = await ThemeRegistration.findOne({
            email: email.toLowerCase(),
            projectTitle: projectTitle.trim(),
            selectedTheme: selectedTheme.trim(),
        });

        if (existing) {
            console.log('❌ Duplicate registration found');
            return res.status(409).json({
                success: false,
                message: 'You have already registered this project for this theme',
            });
        }

        console.log('✅ No duplicate found, creating registration...');

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
            teamSize: teamSizeNumber,
            selectedTheme,
        });

        await registration.save();

        console.log('✅ Registration saved successfully:', registration._id);

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
    } catch (error) {
        console.error('❌ Error in createThemeRegistration:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
        });

        // Handle mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.keys(error.errors).map(key => ({
                field: key,
                message: error.errors[key].message,
            }));
            
            console.error('Validation errors:', errors);
            
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors,
            });
        }

        // Handle other errors
        res.status(500).json({
            success: false,
            message: 'Failed to submit registration. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * @desc    Get all theme registrations with pagination
 * @route   GET /api/themes
 * @access  Public (should be protected in production)
 */
export const getAllThemeRegistrations = async (req, res) => {
    try {
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
    } catch (error) {
        console.error('❌ Error in getAllThemeRegistrations:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registrations',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * @desc    Get single theme registration by ID
 * @route   GET /api/themes/:id
 * @access  Public (should be protected in production)
 */
export const getThemeRegistrationById = async (req, res) => {
    try {
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
    } catch (error) {
        console.error('❌ Error in getThemeRegistrationById:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch registration',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * @desc    Update theme registration status
 * @route   PATCH /api/themes/:id/status
 * @access  Private (should be protected in production)
 */
export const updateThemeRegistrationStatus = async (req, res) => {
    try {
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
    } catch (error) {
        console.error('❌ Error in updateThemeRegistrationStatus:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update status',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * @desc    Get theme registration statistics
 * @route   GET /api/themes/analytics/stats
 * @access  Public (should be protected in production)
 */
export const getThemeRegistrationStats = async (req, res) => {
    try {
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
    } catch (error) {
        console.error('❌ Error in getThemeRegistrationStats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

export default {
    createThemeRegistration,
    getAllThemeRegistrations,
    getThemeRegistrationById,
    updateThemeRegistrationStatus,
    getThemeRegistrationStats,
};
