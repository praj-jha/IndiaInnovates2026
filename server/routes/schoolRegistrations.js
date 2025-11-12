import express from 'express';
import { asyncHandler, validateRequest, validateObjectId } from '../middleware/validation.js';
import { schoolRegistrationRules, statusUpdateRules } from '../middleware/validationRules.js';
import {
    createSchoolRegistration,
    getAllSchoolRegistrations,
    getSchoolRegistrationById,
    updateSchoolRegistrationStatus,
    getSchoolRegistrationStats,
} from '../controllers/schoolRegistrationController.js';

const router = express.Router();

/**
 * @route   POST /api/schools
 * @desc    Create new school competition registration
 * @access  Public
 */
router.post(
    '/',
    schoolRegistrationRules,
    validateRequest,
    asyncHandler(createSchoolRegistration)
);

/**
 * @route   GET /api/schools
 * @desc    Get all school registrations with pagination
 * @access  Public (should be protected in production)
 * @query   page - Page number (default: 1)
 * @query   limit - Items per page (default: 10, max: 100)
 * @query   status - Filter by status (optional)
 */
router.get(
    '/',
    asyncHandler(getAllSchoolRegistrations)
);

/**
 * @route   GET /api/schools/analytics/stats
 * @desc    Get school registration statistics
 * @access  Public (should be protected in production)
 */
router.get(
    '/analytics/stats',
    asyncHandler(getSchoolRegistrationStats)
);

/**
 * @route   GET /api/schools/:id
 * @desc    Get single school registration by ID
 * @access  Public (should be protected in production)
 */
router.get(
    '/:id',
    validateObjectId('id'),
    asyncHandler(getSchoolRegistrationById)
);

/**
 * @route   PATCH /api/schools/:id/status
 * @desc    Update registration status
 * @access  Private (should be protected in production)
 */
router.patch(
    '/:id/status',
    validateObjectId('id'),
    statusUpdateRules,
    validateRequest,
    asyncHandler(updateSchoolRegistrationStatus)
);

export default router;
