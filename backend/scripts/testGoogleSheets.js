const googleSheetsService = require('../services/googleSheetsService');
require('dotenv').config();

async function testGoogleSheetsIntegration() {
    console.log('🧪 Testing Google Sheets Integration...\n');

    try {
        // Test authentication
        console.log('1. Testing authentication...');
        await googleSheetsService.authenticate();
        console.log('✅ Authentication successful\n');

        // Test sheet initialization
        console.log('2. Testing sheet initialization...');
        await googleSheetsService.initializeSheet();
        console.log('✅ Sheet initialization successful\n');

        // Test adding a sample user
        console.log('3. Testing user addition...');
        const testUser = {
            _id: 'test-id-' + Date.now(),
            name: 'Test User',
            email: 'test@example.com',
            phone: '+1234567890',
            organization: 'Test Organization',
            country: 'Test Country',
            state: 'Test State'
        };

        const success = await googleSheetsService.addUserToSheet(testUser);
        if (success) {
            console.log('✅ Test user added successfully\n');
        } else {
            console.log('❌ Failed to add test user\n');
        }

        console.log('🎉 Google Sheets integration test completed!');
        console.log('Check your sheet: https://docs.google.com/spreadsheets/d/1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE/edit');

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.log('\n📋 Troubleshooting checklist:');
        console.log('- Ensure all environment variables are set in backend/.env');
        console.log('- Verify Google Sheets API is enabled in Google Cloud Console');
        console.log('- Check that the service account has access to the sheet');
        console.log('- Confirm the private key format is correct (with \\n line breaks)');
    }
}

testGoogleSheetsIntegration();
