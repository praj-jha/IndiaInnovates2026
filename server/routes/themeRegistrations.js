import express from 'express';
import { asyncHandler, validateRequest, validateObjectId } from '../middleware/validation.js';
import { themeRegistrationRules, statusUpdateRules } from '../middleware/validationRules.js';
import {
    createThemeRegistration,
    getAllThemeRegistrations,
    getThemeRegistrationById,
    updateThemeRegistrationStatus,
    getThemeRegistrationStats,
} from '../controllers/themeRegistrationController.js';

const router = express.Router();

/**
 * @route   POST /api/themes
 * @desc    Create new theme registration (University/Professional)
 * @access  Public
 */
router.post(
    '/',
    themeRegistrationRules,
    validateRequest,
    asyncHandler(createThemeRegistration)
);

/**
 * @route   GET /api/themes
 * @desc    Get all theme registrations with pagination
 * @access  Public (should be protected in production)
 * @query   page - Page number (default: 1)
 * @query   limit - Items per page (default: 10, max: 100)
 * @query   status - Filter by status (optional)
 * @query   theme - Filter by theme (optional)
 * @query   participantType - Filter by participant type (optional)
 */
router.get(
    '/',
    asyncHandler(getAllThemeRegistrations)
);

/**
 * @route   GET /api/themes/analytics/stats
 * @desc    Get theme registration statistics
 * @access  Public (should be protected in production)
 */
router.get(
    '/analytics/stats',
    asyncHandler(getThemeRegistrationStats)
);

/**
 * @route   GET /api/themes/:id
 * @desc    Get single theme registration by ID
 * @access  Public (should be protected in production)
 */
router.get(
    '/:id',
    validateObjectId('id'),
    asyncHandler(getThemeRegistrationById)
);

/**
 * @route   PATCH /api/themes/:id/status
 * @desc    Update registration status
 * @access  Private (should be protected in production)
 */
router.patch(
    '/:id/status',
    validateObjectId('id'),
    statusUpdateRules,
    validateRequest,
    asyncHandler(updateThemeRegistrationStatus)
);

export default router;
