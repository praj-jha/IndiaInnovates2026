const express = require('express');
const User = require('../models/User');
const googleSheetsService = require('../services/googleSheetsService');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Admin endpoint to sync all existing users to Google Sheets
router.post('/sync-users-to-sheets', authMiddleware, async (req, res) => {
    try {
        // You might want to add admin role checking here
        // For now, any authenticated user can trigger this

        const users = await User.find({}, '-password -refreshToken');
        let successCount = 0;
        let failureCount = 0;

        for (const user of users) {
            try {
                const success = await googleSheetsService.addUserToSheet(user);
                if (success) {
                    successCount++;
                } else {
                    failureCount++;
                }

                // Add a small delay to avoid hitting API limits
                await new Promise(resolve => setTimeout(resolve, 100));
            } catch (error) {
                failureCount++;
            }
        }

        res.json({
            success: true,
            message: 'User sync completed',
            stats: {
                total: users.length,
                successful: successCount,
                failed: failureCount
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to sync users to Google Sheets',
            error: error.message
        });
    }
});

// Endpoint to get sync status
router.get('/sheets-status', authMiddleware, async (req, res) => {
    try {
        // Test Google Sheets connection
        await googleSheetsService.authenticate();

        res.json({
            success: true,
            message: 'Google Sheets integration is working',
            sheetUrl: 'https://docs.google.com/spreadsheets/d/1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE/edit'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Google Sheets integration is not configured properly',
            error: error.message
        });
    }
});

module.exports = router;
