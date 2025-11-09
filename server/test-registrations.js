// Node.js v18+ has built-in fetch
const API_BASE_URL = 'http://localhost:5001/api';

// Colors for console output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[36m',
    reset: '\x1b[0m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testSchoolRegistration() {
    log('\n🏫 Testing School Competition Registration...', 'blue');
    
    const testData = {
        schoolName: 'Test High School ' + Date.now(),
        teamName: 'Tech Wizards ' + Date.now(),
        teamLeadName: 'John Doe',
        teamLeadEmail: `test-school-${Date.now()}@example.com`,
        teamLeadPhone: '+919876543210',
        teamLeadAge: 16,
        parentGuardianName: 'Jane Doe',
        parentGuardianPhone: '+919876543211',
        city: 'New Delhi',
        state: 'Delhi',
        teamMembers: [
            {
                name: 'Alice Smith',
                age: 15,
                phone: '+919876543212'
            }
        ],
        selectedCompetitions: ['drone-obstacle', 'agritech']
    };

    try {
        const response = await fetch(`${API_BASE_URL}/schools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            log('✅ School registration successful!', 'green');
            log(`   ID: ${result.data.id}`, 'green');
            log(`   Team: ${result.data.teamName}`, 'green');
            log(`   Email: ${result.data.teamLeadEmail}`, 'green');
            return true;
        } else {
            log('❌ School registration failed!', 'red');
            log(`   Status: ${response.status}`, 'red');
            log(`   Message: ${result.message}`, 'red');
            if (result.errors) {
                result.errors.forEach(err => {
                    log(`   - ${err.path || err.field}: ${err.msg || err.message}`, 'red');
                });
            }
            return false;
        }
    } catch (error) {
        log(`❌ School registration error: ${error.message}`, 'red');
        return false;
    }
}

async function testUniversityRegistration() {
    log('\n🎓 Testing University Competition Registration...', 'blue');
    
    const testData = {
        participantType: 'university',
        organizationName: 'Test University ' + Date.now(),
        participantName: 'Sarah Johnson',
        designation: 'B.Tech 3rd Year',
        email: `test-university-${Date.now()}@example.com`,
        phone: '+919876543220',
        address: '123 University Road',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        projectTitle: 'AI-Powered Smart Farming Solution ' + Date.now(),
        projectDescription: 'This is a comprehensive project description that meets the minimum 50 character requirement for university project submissions. The project aims to revolutionize farming using artificial intelligence.',
        teamSize: 4,
        selectedTheme: 'agriculture-food'
    };

    try {
        const response = await fetch(`${API_BASE_URL}/themes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            log('✅ University registration successful!', 'green');
            log(`   ID: ${result.data.id}`, 'green');
            log(`   Email: ${result.data.email}`, 'green');
            return true;
        } else {
            log('❌ University registration failed!', 'red');
            log(`   Status: ${response.status}`, 'red');
            log(`   Message: ${result.message}`, 'red');
            if (result.errors) {
                result.errors.forEach(err => {
                    log(`   - ${err.path || err.field}: ${err.msg || err.message}`, 'red');
                });
            }
            return false;
        }
    } catch (error) {
        log(`❌ University registration error: ${error.message}`, 'red');
        return false;
    }
}

async function testProfessionalRegistration() {
    log('\n💼 Testing Professional Competition Registration...', 'blue');
    
    const testData = {
        participantType: 'professional',
        organizationName: 'Tech Innovations Inc ' + Date.now(),
        participantName: 'Michael Brown',
        designation: 'Research Scientist',
        email: `test-professional-${Date.now()}@example.com`,
        phone: '+919876543230',
        address: '456 Research Park',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        projectTitle: 'Quantum Computing for Climate Prediction ' + Date.now(),
        projectDescription: 'This innovative project leverages quantum computing algorithms to create more accurate climate prediction models. The solution aims to help governments and organizations better prepare for climate change impacts through advanced computational methods.',
        teamSize: 6,
        selectedTheme: 'advanced-computing'
    };

    try {
        const response = await fetch(`${API_BASE_URL}/themes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            log('✅ Professional registration successful!', 'green');
            log(`   ID: ${result.data.id}`, 'green');
            log(`   Email: ${result.data.email}`, 'green');
            return true;
        } else {
            log('❌ Professional registration failed!', 'red');
            log(`   Status: ${response.status}`, 'red');
            log(`   Message: ${result.message}`, 'red');
            if (result.errors) {
                result.errors.forEach(err => {
                    log(`   - ${err.path || err.field}: ${err.msg || err.message}`, 'red');
                });
            }
            return false;
        }
    } catch (error) {
        log(`❌ Professional registration error: ${error.message}`, 'red');
        return false;
    }
}

async function testValidationErrors() {
    log('\n🔍 Testing Validation Errors...', 'blue');
    
    const invalidSchoolData = {
        schoolName: 'Test School',
        teamName: 'T', // Too short
        teamLeadEmail: 'invalid-email', // Invalid format
        teamLeadAge: 25, // Out of range
    };

    try {
        const response = await fetch(`${API_BASE_URL}/schools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidSchoolData),
        });

        const result = await response.json();

        if (!response.ok && result.errors && result.errors.length > 0) {
            log('✅ Validation errors correctly detected:', 'green');
            result.errors.forEach(err => {
                log(`   - ${err.path || err.field}: ${err.msg || err.message}`, 'yellow');
            });
            return true;
        } else {
            log('❌ Validation should have failed but passed!', 'red');
            return false;
        }
    } catch (error) {
        log(`❌ Validation test error: ${error.message}`, 'red');
        return false;
    }
}

async function testHealthCheck() {
    log('\n❤️  Testing Health Check...', 'blue');
    
    try {
        const response = await fetch('http://localhost:5001/health');
        const result = await response.json();

        if (response.ok && result.status === 'ok') {
            log('✅ Server is healthy', 'green');
            log(`   Uptime: ${result.uptime.toFixed(2)}s`, 'green');
            log(`   Database: ${result.database.status}`, 'green');
            return true;
        } else {
            log('❌ Server health check failed!', 'red');
            return false;
        }
    } catch (error) {
        log(`❌ Health check error: ${error.message}`, 'red');
        log('   Make sure the backend server is running on port 5001', 'yellow');
        return false;
    }
}

async function runAllTests() {
    log('\n' + '='.repeat(60), 'blue');
    log('🧪 INDIA INNOVATES - BACKEND INTEGRATION TEST SUITE', 'blue');
    log('='.repeat(60) + '\n', 'blue');

    const results = {
        healthCheck: false,
        schoolRegistration: false,
        universityRegistration: false,
        professionalRegistration: false,
        validationErrors: false,
    };

    // Run tests
    results.healthCheck = await testHealthCheck();
    
    if (results.healthCheck) {
        results.schoolRegistration = await testSchoolRegistration();
        results.universityRegistration = await testUniversityRegistration();
        results.professionalRegistration = await testProfessionalRegistration();
        results.validationErrors = await testValidationErrors();
    }

    // Summary
    log('\n' + '='.repeat(60), 'blue');
    log('📊 TEST SUMMARY', 'blue');
    log('='.repeat(60), 'blue');

    const passed = Object.values(results).filter(Boolean).length;
    const total = Object.keys(results).length;

    Object.entries(results).forEach(([test, passed]) => {
        const status = passed ? '✅ PASSED' : '❌ FAILED';
        const color = passed ? 'green' : 'red';
        const testName = test.replace(/([A-Z])/g, ' $1').trim();
        log(`${status} - ${testName}`, color);
    });

    log('\n' + '='.repeat(60), 'blue');
    log(`Total: ${passed}/${total} tests passed`, passed === total ? 'green' : 'red');
    log('='.repeat(60) + '\n', 'blue');

    if (passed === total) {
        log('🎉 ALL TESTS PASSED! Backend integration is working correctly.', 'green');
        process.exit(0);
    } else {
        log('⚠️  SOME TESTS FAILED! Please check the errors above.', 'red');
        process.exit(1);
    }
}

// Run the tests
runAllTests();

