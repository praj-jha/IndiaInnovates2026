#!/usr/bin/env node
/**
 * Comprehensive Backend Testing Suite
 * Tests all registration endpoints with edge cases
 */

const API_BASE = process.env.API_BASE || 'http://localhost:5001';

// ANSI color codes
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m',
};

const log = {
    success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
    error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
    info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
    warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
    section: (msg) => console.log(`\n${colors.cyan}${colors.bold}${msg}${colors.reset}`),
};

let testResults = {
    passed: 0,
    failed: 0,
    warnings: 0,
};

// Helper function to make API requests
async function apiRequest(endpoint, method = 'GET', data = null) {
    const url = `${API_BASE}${endpoint}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return { status: response.status, data: result, ok: response.ok };
    } catch (error) {
        return { status: 0, error: error.message, ok: false };
    }
}

// Test health endpoint
async function testHealthCheck() {
    log.section('1. HEALTH CHECK');
    
    const result = await apiRequest('/health');
    
    if (result.status === 200 && result.data.status === 'ok') {
        log.success('Server is healthy');
        log.info(`  Database: ${result.data.database.status}`);
        log.info(`  Uptime: ${Math.floor(result.data.uptime)}s`);
        testResults.passed++;
    } else {
        log.error('Health check failed');
        testResults.failed++;
    }
}

// Test volunteer registration
async function testVolunteerRegistration() {
    log.section('2. VOLUNTEER REGISTRATION');
    
    const timestamp = Date.now();
    
    // Valid registration
    const validData = {
        name: 'Test Volunteer',
        email: `test.volunteer.${timestamp}@example.com`,
        mobile: '+919876543210',
        studentStatus: 'yes',
        institution: 'Test University',
        course: 'B.Tech',
        yearOfStudy: '3rd',
        department: 'tech',
        skillset: 'JavaScript, React, Node.js',
        availability: 'parttime',
        message: 'I want to help organize this amazing event!',
    };
    
    log.info('Testing valid volunteer registration...');
    const result1 = await apiRequest('/api/volunteers', 'POST', validData);
    
    if (result1.status === 201 && result1.data.success) {
        log.success('Valid volunteer registration successful');
        testResults.passed++;
    } else {
        log.error(`Valid registration failed: ${result1.data.message}`);
        testResults.failed++;
    }
    
    // Test duplicate email
    log.info('Testing duplicate email prevention...');
    const result2 = await apiRequest('/api/volunteers', 'POST', validData);
    
    if (result2.status === 400 && result2.data.message.includes('already exists')) {
        log.success('Duplicate email correctly rejected');
        testResults.passed++;
    } else {
        log.error('Duplicate email not prevented');
        testResults.failed++;
    }
    
    // Test missing required field
    log.info('Testing validation (missing email)...');
    const invalidData = { ...validData };
    delete invalidData.email;
    const result3 = await apiRequest('/api/volunteers', 'POST', invalidData);
    
    if (result3.status === 400) {
        log.success('Missing field validation working');
        testResults.passed++;
    } else {
        log.error('Missing field validation failed');
        testResults.failed++;
    }
    
    // Test invalid enum value
    log.info('Testing enum validation...');
    const result4 = await apiRequest('/api/volunteers', 'POST', {
        ...validData,
        email: `test.${timestamp}.2@example.com`,
        department: 'invalid_department',
    });
    
    if (result4.status === 400) {
        log.success('Enum validation working');
        testResults.passed++;
    } else {
        log.error('Enum validation failed');
        testResults.failed++;
    }
}

// Test sponsor registration
async function testSponsorRegistration() {
    log.section('3. SPONSOR REGISTRATION');
    
    const timestamp = Date.now();
    
    // Valid registration
    const validData = {
        name: 'John Doe',
        email: `sponsor.${timestamp}@company.com`,
        mobile: '+919876543210',
        companyName: 'Tech Innovations Inc',
        designation: 'Marketing Director',
        companyWebsite: 'https://techinnovations.com',
        sponsorshipType: 'gold',
        budgetRange: '1l-3l',
        marketingGoals: 'We want to reach young innovators and showcase our brand to tech-savvy audience.',
        message: 'Interested in gold sponsorship package',
    };
    
    log.info('Testing valid sponsor registration...');
    const result1 = await apiRequest('/api/sponsors', 'POST', validData);
    
    if (result1.status === 201 && result1.data.success) {
        log.success('Valid sponsor registration successful');
        testResults.passed++;
    } else {
        log.error(`Valid registration failed: ${result1.data.message}`);
        testResults.failed++;
    }
    
    // Test duplicate email
    log.info('Testing duplicate email prevention...');
    const result2 = await apiRequest('/api/sponsors', 'POST', validData);
    
    if (result2.status === 409 && result2.data.message.includes('already exists')) {
        log.success('Duplicate email correctly rejected');
        testResults.passed++;
    } else {
        log.error('Duplicate email not prevented');
        testResults.failed++;
    }
    
    // Test invalid URL
    log.info('Testing URL validation...');
    const result3 = await apiRequest('/api/sponsors', 'POST', {
        ...validData,
        email: `sponsor.${timestamp}.2@company.com`,
        companyWebsite: 'not-a-valid-url',
    });
    
    if (result3.status === 400) {
        log.success('URL validation working');
        testResults.passed++;
    } else {
        log.error('URL validation failed');
        testResults.failed++;
    }
    
    // Test short marketing goals
    log.info('Testing marketing goals length validation...');
    const result4 = await apiRequest('/api/sponsors', 'POST', {
        ...validData,
        email: `sponsor.${timestamp}.3@company.com`,
        marketingGoals: 'Short',
    });
    
    if (result4.status === 400) {
        log.success('Length validation working');
        testResults.passed++;
    } else {
        log.error('Length validation failed');
        testResults.failed++;
    }
}

// Test school competition registration
async function testSchoolRegistration() {
    log.section('4. SCHOOL COMPETITION REGISTRATION');
    
    const timestamp = Date.now();
    
    // Valid registration
    const validData = {
        schoolName: 'Delhi Public School',
        teamName: `Team Innovators ${timestamp}`,
        teamLeadName: 'Rahul Kumar',
        teamLeadEmail: `rahul.${timestamp}@student.com`,
        teamLeadPhone: '+919876543210',
        teamLeadAge: '16',
        parentGuardianName: 'Mr. Kumar',
        parentGuardianPhone: '+919876543211',
        city: 'New Delhi',
        state: 'Delhi',
        teamMembers: [
            { name: 'Priya Sharma', age: '15', phone: '+919876543212' },
            { name: 'Amit Singh', age: '16', phone: '+919876543213' },
        ],
        selectedCompetitions: ['drone-obstacle', 'robots-war'],
    };
    
    log.info('Testing valid school registration...');
    const result1 = await apiRequest('/api/schools', 'POST', validData);
    
    if (result1.status === 201 && result1.data.success) {
        log.success('Valid school registration successful');
        testResults.passed++;
    } else {
        log.error(`Valid registration failed: ${JSON.stringify(result1.data)}`);
        testResults.failed++;
    }
    
    // Test duplicate team
    log.info('Testing duplicate team prevention...');
    const result2 = await apiRequest('/api/schools', 'POST', validData);
    
    if (result2.status === 400 && result2.data.message.includes('already registered')) {
        log.success('Duplicate team correctly rejected');
        testResults.passed++;
    } else {
        log.error('Duplicate team not prevented');
        testResults.failed++;
    }
    
    // Test invalid age
    log.info('Testing age validation...');
    const result3 = await apiRequest('/api/schools', 'POST', {
        ...validData,
        teamLeadEmail: `rahul.${timestamp}.2@student.com`,
        teamName: `Team ${timestamp} 2`,
        teamLeadAge: '25',
    });
    
    if (result3.status === 400) {
        log.success('Age validation working');
        testResults.passed++;
    } else {
        log.error('Age validation failed');
        testResults.failed++;
    }
    
    // Test empty competitions
    log.info('Testing empty competitions validation...');
    const result4 = await apiRequest('/api/schools', 'POST', {
        ...validData,
        teamLeadEmail: `rahul.${timestamp}.3@student.com`,
        teamName: `Team ${timestamp} 3`,
        selectedCompetitions: [],
    });
    
    if (result4.status === 400) {
        log.success('Empty competitions validation working');
        testResults.passed++;
    } else {
        log.error('Empty competitions validation failed');
        testResults.failed++;
    }
}

// Test theme registration
async function testThemeRegistration() {
    log.section('5. THEME REGISTRATION (University/Professional)');
    
    const timestamp = Date.now();
    
    // Valid university registration
    const validUniversityData = {
        participantType: 'university',
        organizationName: 'IIT Delhi',
        participantName: 'Sneha Patel',
        designation: 'B.Tech 4th Year',
        email: `sneha.${timestamp}@iitd.ac.in`,
        phone: '+919876543210',
        address: 'IIT Delhi Campus',
        city: 'New Delhi',
        state: 'Delhi',
        pincode: '110016',
        projectTitle: 'AI-Powered Healthcare Diagnosis System',
        projectDescription: 'This project aims to develop an artificial intelligence system that can assist doctors in diagnosing diseases more accurately and quickly. The system uses deep learning algorithms trained on thousands of medical images and patient records to identify patterns and anomalies. Our solution can reduce diagnosis time by 60% and improve accuracy by 25%. The project has potential applications in rural healthcare where specialist doctors are scarce.',
        teamSize: '4',
        selectedTheme: 'healthcare-medtech',
    };
    
    log.info('Testing valid university theme registration...');
    const result1 = await apiRequest('/api/themes', 'POST', validUniversityData);
    
    if (result1.status === 201 && result1.data.success) {
        log.success('Valid university registration successful');
        testResults.passed++;
    } else {
        log.error(`Valid registration failed: ${JSON.stringify(result1.data)}`);
        testResults.failed++;
    }
    
    // Valid professional registration
    const validProfessionalData = {
        participantType: 'professional',
        organizationName: 'Green Energy Solutions Pvt Ltd',
        participantName: 'Dr. Rajesh Verma',
        designation: 'Senior Research Scientist',
        email: `rajesh.${timestamp}@greenenergy.com`,
        phone: '+919876543211',
        address: '123 Tech Park',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        projectTitle: 'Solar-Powered Water Purification System',
        projectDescription: 'An innovative solar-powered water purification system designed for rural areas without electricity. The system uses advanced UV filtration and solar energy to purify contaminated water, making it safe for drinking. It can purify up to 500 liters per day and requires minimal maintenance. The project addresses the critical need for clean drinking water in remote villages.',
        teamSize: '3',
        selectedTheme: 'energy-sustainability',
    };
    
    log.info('Testing valid professional theme registration...');
    const result2 = await apiRequest('/api/themes', 'POST', validProfessionalData);
    
    if (result2.status === 201 && result2.data.success) {
        log.success('Valid professional registration successful');
        testResults.passed++;
    } else {
        log.error(`Valid registration failed: ${JSON.stringify(result2.data)}`);
        testResults.failed++;
    }
    
    // Test duplicate project
    log.info('Testing duplicate project prevention...');
    const result3 = await apiRequest('/api/themes', 'POST', validUniversityData);
    
    if (result3.status === 400 && result3.data.message.includes('already registered')) {
        log.success('Duplicate project correctly rejected');
        testResults.passed++;
    } else {
        log.error('Duplicate project not prevented');
        testResults.failed++;
    }
    
    // Test short project description
    log.info('Testing project description length validation...');
    const result4 = await apiRequest('/api/themes', 'POST', {
        ...validUniversityData,
        email: `sneha.${timestamp}.2@iitd.ac.in`,
        projectTitle: 'Another Project',
        projectDescription: 'Too short',
    });
    
    if (result4.status === 400) {
        log.success('Description length validation working');
        testResults.passed++;
    } else {
        log.error('Description length validation failed');
        testResults.failed++;
    }
    
    // Test invalid pincode
    log.info('Testing pincode validation...');
    const result5 = await apiRequest('/api/themes', 'POST', {
        ...validUniversityData,
        email: `sneha.${timestamp}.3@iitd.ac.in`,
        projectTitle: 'Yet Another Project',
        pincode: '12345',
    });
    
    if (result5.status === 400) {
        log.success('Pincode validation working');
        testResults.passed++;
    } else {
        log.error('Pincode validation failed');
        testResults.failed++;
    }
    
    // Test custom category
    log.info('Testing custom category registration...');
    const customCategoryData = {
        ...validUniversityData,
        email: `sneha.${timestamp}.4@iitd.ac.in`,
        projectTitle: 'Blockchain for Education',
        selectedTheme: 'custom-category',
        projectDescription: 'A blockchain-based system for verifying educational credentials and preventing certificate fraud. This innovative solution uses distributed ledger technology to create tamper-proof records of academic achievements. Universities can issue digital certificates that employers can instantly verify, reducing hiring fraud and streamlining the verification process.',
    };
    
    const result6 = await apiRequest('/api/themes', 'POST', customCategoryData);
    
    if (result6.status === 201 && result6.data.success) {
        log.success('Custom category registration successful');
        testResults.passed++;
    } else {
        log.error('Custom category registration failed');
        testResults.failed++;
    }
}

// Test pagination and retrieval
async function testDataRetrieval() {
    log.section('6. DATA RETRIEVAL & PAGINATION');
    
    log.info('Testing volunteer list retrieval...');
    const result1 = await apiRequest('/api/volunteers?page=1&limit=5');
    
    if (result1.status === 200 && result1.data.success && Array.isArray(result1.data.data)) {
        log.success(`Retrieved ${result1.data.data.length} volunteers`);
        log.info(`  Total: ${result1.data.pagination.total}`);
        log.info(`  Pages: ${result1.data.pagination.pages}`);
        testResults.passed++;
    } else {
        log.error('Volunteer list retrieval failed');
        testResults.failed++;
    }
    
    log.info('Testing sponsor list retrieval...');
    const result2 = await apiRequest('/api/sponsors?page=1&limit=5');
    
    if (result2.status === 200 && result2.data.success && Array.isArray(result2.data.data)) {
        log.success(`Retrieved ${result2.data.data.length} sponsors`);
        testResults.passed++;
    } else {
        log.error('Sponsor list retrieval failed');
        testResults.failed++;
    }
    
    log.info('Testing school list retrieval...');
    const result3 = await apiRequest('/api/schools?page=1&limit=5');
    
    if (result3.status === 200 && result3.data.success && Array.isArray(result3.data.data)) {
        log.success(`Retrieved ${result3.data.data.length} school registrations`);
        testResults.passed++;
    } else {
        log.error('School list retrieval failed');
        testResults.failed++;
    }
    
    log.info('Testing theme list retrieval...');
    const result4 = await apiRequest('/api/themes?page=1&limit=5');
    
    if (result4.status === 200 && result4.data.success && Array.isArray(result4.data.data)) {
        log.success(`Retrieved ${result4.data.data.length} theme registrations`);
        testResults.passed++;
    } else {
        log.error('Theme list retrieval failed');
        testResults.failed++;
    }
}

// Test analytics endpoints
async function testAnalytics() {
    log.section('7. ANALYTICS & STATISTICS');
    
    log.info('Testing volunteer statistics...');
    const result1 = await apiRequest('/api/volunteers/analytics/stats');
    
    if (result1.status === 200 && result1.data.success) {
        log.success('Volunteer statistics retrieved');
        log.info(`  Total: ${result1.data.data.total}`);
        log.info(`  Pending: ${result1.data.data.byStatus.pending}`);
        testResults.passed++;
    } else {
        log.error('Volunteer statistics failed');
        testResults.failed++;
    }
    
    log.info('Testing sponsor statistics...');
    const result2 = await apiRequest('/api/sponsors/analytics/stats');
    
    if (result2.status === 200 && result2.data.success) {
        log.success('Sponsor statistics retrieved');
        log.info(`  Total: ${result2.data.data.total}`);
        testResults.passed++;
    } else {
        log.error('Sponsor statistics failed');
        testResults.failed++;
    }
    
    log.info('Testing school statistics...');
    const result3 = await apiRequest('/api/schools/analytics/stats');
    
    if (result3.status === 200 && result3.data.success) {
        log.success('School statistics retrieved');
        log.info(`  Total: ${result3.data.data.total}`);
        testResults.passed++;
    } else {
        log.error('School statistics failed');
        testResults.failed++;
    }
    
    log.info('Testing theme statistics...');
    const result4 = await apiRequest('/api/themes/analytics/stats');
    
    if (result4.status === 200 && result4.data.success) {
        log.success('Theme statistics retrieved');
        log.info(`  Total: ${result4.data.data.total}`);
        testResults.passed++;
    } else {
        log.error('Theme statistics failed');
        testResults.failed++;
    }
}

// Test error handling
async function testErrorHandling() {
    log.section('8. ERROR HANDLING');
    
    log.info('Testing 404 for invalid route...');
    const result1 = await apiRequest('/api/invalid-route');
    
    if (result1.status === 404) {
        log.success('404 handling working');
        testResults.passed++;
    } else {
        log.error('404 handling failed');
        testResults.failed++;
    }
    
    log.info('Testing malformed JSON...');
    try {
        const response = await fetch(`${API_BASE}/api/volunteers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: 'invalid json{',
        });
        
        if (response.status === 400) {
            log.success('Malformed JSON handled');
            testResults.passed++;
        } else {
            log.error('Malformed JSON not handled');
            testResults.failed++;
        }
    } catch (error) {
        log.warn('Malformed JSON test inconclusive');
        testResults.warnings++;
    }
}

// Main test runner
async function runTests() {
    console.log(`${colors.bold}${colors.cyan}
╔═══════════════════════════════════════════════════════════╗
║   INDIA INNOVATES 2026 - BACKEND TESTING SUITE          ║
║   Comprehensive API & Database Validation                ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);
    
    log.info(`Testing API at: ${API_BASE}`);
    log.info(`Started at: ${new Date().toISOString()}\n`);
    
    try {
        await testHealthCheck();
        await testVolunteerRegistration();
        await testSponsorRegistration();
        await testSchoolRegistration();
        await testThemeRegistration();
        await testDataRetrieval();
        await testAnalytics();
        await testErrorHandling();
        
        // Print summary
        console.log(`\n${colors.bold}${colors.cyan}═══════════════════════════════════════════════════════════${colors.reset}`);
        log.section('TEST SUMMARY');
        console.log(`${colors.green}Passed:${colors.reset}   ${testResults.passed}`);
        console.log(`${colors.red}Failed:${colors.reset}   ${testResults.failed}`);
        console.log(`${colors.yellow}Warnings:${colors.reset} ${testResults.warnings}`);
        
        const total = testResults.passed + testResults.failed;
        const percentage = total > 0 ? ((testResults.passed / total) * 100).toFixed(1) : 0;
        
        console.log(`\n${colors.bold}Success Rate: ${percentage}%${colors.reset}`);
        
        if (testResults.failed === 0) {
            console.log(`\n${colors.green}${colors.bold}✓ ALL TESTS PASSED!${colors.reset}`);
            console.log(`${colors.green}Backend is production-ready.${colors.reset}\n`);
            process.exit(0);
        } else {
            console.log(`\n${colors.red}${colors.bold}✗ SOME TESTS FAILED${colors.reset}`);
            console.log(`${colors.red}Please review the errors above.${colors.reset}\n`);
            process.exit(1);
        }
    } catch (error) {
        log.error(`Fatal error: ${error.message}`);
        console.error(error);
        process.exit(1);
    }
}

// Run the tests
runTests();

