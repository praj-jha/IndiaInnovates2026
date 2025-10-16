
const express = require('express');
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Optional auth middleware for enrollment status
const optionalAuth = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (token) {
        return authMiddleware(req, res, next);
    }
    next();
};

// Public routes (with optional auth for enrollment status)
router.get('/', optionalAuth, courseController.getAllCourses);
router.get('/:slug', optionalAuth, courseController.getCourseBySlug);

// Protected routes
router.post('/enroll', authMiddleware, courseController.enrollInCourse);
router.get('/user/enrollments', authMiddleware, courseController.getUserEnrollments);

module.exports = router;
