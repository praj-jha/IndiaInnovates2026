import { body } from 'express-validator';
import { PHONE_REGEX, PINCODE_REGEX } from './validation.js';

/**
 * Validation rules for School Competition Registration
 */
export const schoolRegistrationRules = [
    // School & Team Information
    body('schoolName')
        .trim()
        .notEmpty()
        .withMessage('School name is required')
        .isLength({ min: 2, max: 200 })
        .withMessage('School name must be between 2 and 200 characters'),

    body('teamName')
        .trim()
        .notEmpty()
        .withMessage('Team name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Team name must be between 2 and 100 characters'),

    // Team Lead Information
    body('teamLeadName')
        .trim()
        .notEmpty()
        .withMessage('Team lead name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Team lead name must be between 2 and 100 characters'),

    body('teamLeadEmail')
        .trim()
        .notEmpty()
        .withMessage('Team lead email is required')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail()
        .isLength({ max: 255 })
        .withMessage('Email is too long'),

    body('teamLeadPhone')
        .trim()
        .notEmpty()
        .withMessage('Team lead phone is required')
        .matches(PHONE_REGEX)
        .withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 })
        .withMessage('Phone number must be between 10 and 15 characters'),

    body('teamLeadAge')
        .notEmpty()
        .withMessage('Team lead age is required')
        .isInt({ min: 5, max: 20 })
        .withMessage('Age must be between 5 and 20 years'),

    // Parent/Guardian Information
    body('parentGuardianName')
        .trim()
        .notEmpty()
        .withMessage('Parent/Guardian name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Parent/Guardian name must be between 2 and 100 characters'),

    body('parentGuardianPhone')
        .trim()
        .notEmpty()
        .withMessage('Parent/Guardian phone is required')
        .matches(PHONE_REGEX)
        .withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 })
        .withMessage('Phone number must be between 10 and 15 characters'),

    // Location Information
    body('city')
        .trim()
        .notEmpty()
        .withMessage('City is required')
        .isLength({ max: 100 })
        .withMessage('City name is too long'),

    body('state')
        .trim()
        .notEmpty()
        .withMessage('State is required')
        .isLength({ max: 100 })
        .withMessage('State name is too long'),

    // Team Members (optional)
    body('teamMembers')
        .optional()
        .isArray()
        .withMessage('Team members must be an array'),

    body('teamMembers.*.name')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Team member name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Team member name must be between 2 and 100 characters'),

    body('teamMembers.*.age')
        .optional()
        .isInt({ min: 5, max: 20 })
        .withMessage('Team member age must be between 5 and 20 years'),

    body('teamMembers.*.phone')
        .optional()
        .trim()
        .matches(PHONE_REGEX)
        .withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 })
        .withMessage('Phone number must be between 10 and 15 characters'),

    // Competition Selection
    body('selectedCompetitions')
        .isArray({ min: 1 })
        .withMessage('Please select at least one competition'),
];

/**
 * Validation rules for University/Professional Theme Registration
 */
export const themeRegistrationRules = [
    // Participant Type
    body('participantType')
        .notEmpty()
        .withMessage('Participant type is required')
        .isIn(['university', 'professional'])
        .withMessage('Participant type must be either university or professional'),

    // Organization Information
    body('organizationName')
        .trim()
        .notEmpty()
        .withMessage('Organization/University name is required')
        .isLength({ min: 2, max: 200 })
        .withMessage('Organization name must be between 2 and 200 characters'),

    // Participant Information
    body('participantName')
        .trim()
        .notEmpty()
        .withMessage('Participant name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Participant name must be between 2 and 100 characters'),

    body('designation')
        .trim()
        .notEmpty()
        .withMessage('Designation/Course is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Designation must be between 2 and 100 characters'),

    // Contact Information
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail()
        .isLength({ max: 255 })
        .withMessage('Email is too long'),

    body('phone')
        .trim()
        .notEmpty()
        .withMessage('Phone number is required')
        .matches(PHONE_REGEX)
        .withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 })
        .withMessage('Phone number must be between 10 and 15 characters'),

    // Address Information
    body('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required')
        .isLength({ max: 255 })
        .withMessage('Address is too long'),

    body('city')
        .trim()
        .notEmpty()
        .withMessage('City is required')
        .isLength({ max: 100 })
        .withMessage('City is too long'),

    body('state')
        .trim()
        .notEmpty()
        .withMessage('State is required')
        .isLength({ max: 100 })
        .withMessage('State is too long'),

    body('pincode')
        .trim()
        .notEmpty()
        .withMessage('Pincode is required')
        .matches(PINCODE_REGEX)
        .withMessage('Pincode must be exactly 6 digits'),

    // Project Information
    body('projectTitle')
        .trim()
        .notEmpty()
        .withMessage('Project title is required')
        .isLength({ min: 3, max: 200 })
        .withMessage('Project title must be between 3 and 200 characters'),

    body('projectDescription')
        .trim()
        .notEmpty()
        .withMessage('Project description is required')
        .isLength({ min: 50, max: 5000 })
        .withMessage('Project description must be between 50 and 5000 characters'),

    body('teamSize')
        .notEmpty()
        .withMessage('Team size is required')
        .isInt({ min: 1, max: 10 })
        .withMessage('Team size must be between 1 and 10 members'),

    body('selectedTheme')
        .trim()
        .notEmpty()
        .withMessage('Selected theme is required'),
];

/**
 * Validation rules for status update
 */
export const statusUpdateRules = [
    body('status')
        .notEmpty()
        .withMessage('Status is required')
        .isString()
        .withMessage('Status must be a string'),
];

export default {
    schoolRegistrationRules,
    themeRegistrationRules,
    statusUpdateRules,
};

