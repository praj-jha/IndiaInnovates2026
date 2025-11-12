import { validationResult } from 'express-validator';
import Logger from '../utils/logger.js';

/**
 * Validation middleware to handle express-validator errors
 * This middleware should be used after validation rules
 */
export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(err => ({
            field: err.path || err.param,
            message: err.msg,
            value: err.value,
        }));

        Logger.warn('Validation failed', {
            path: req.path,
            method: req.method,
            errors: formattedErrors,
        });

        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: formattedErrors,
        });
    }

    next();
};

/**
 * Common phone regex pattern for validation
 */
export const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

/**
 * Common pincode regex pattern (6 digits for India)
 */
export const PINCODE_REGEX = /^\d{6}$/;

/**
 * Validate MongoDB ObjectId format
 */
export const isValidObjectId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id);
};

/**
 * Middleware to validate ObjectId in route params
 */
export const validateObjectId = (paramName = 'id') => {
    return (req, res, next) => {
        const id = req.params[paramName];
        
        if (!isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: `Invalid ${paramName} format`,
            });
        }
        
        next();
    };
};

/**
 * Async error wrapper to catch async errors and pass to error handler
 */
export const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default {
    validateRequest,
    validateObjectId,
    asyncHandler,
    PHONE_REGEX,
    PINCODE_REGEX,
    isValidObjectId,
};

