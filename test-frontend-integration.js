#!/usr/bin/env node

/**
 * Frontend Integration Test
 * 
 * This script verifies that the frontend API service can successfully
 * communicate with the backend registration endpoints.
 */

import fetch from 'node-fetch';
import chalk from 'chalk';

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5001/api';

const log = {
    success: (msg) => console.log(chalk.green('✓'), msg),
    error: (msg) => console.log(chalk.red('✗'), msg),
    info: (msg) => console.log(chalk.blue('ℹ'), msg),
    section: (msg) => console.log(chalk.cyan.bold(`\n${msg}`)),
};

async function testEndpointConnectivity() {
    console.log(chalk.bold.cyan('\n╔═══════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.cyan('║         FRONTEND INTEGRATION VERIFICATION TEST           ║'));
    console.log(chalk.bold.cyan('╚═══════════════════════════════════════════════════════════╝\n'));

    log.info(`Testing API connectivity at: ${API_BASE_URL}\n`);

    let allPassed = true;

    // Test 1: Check server health
    log.section('TEST 1: Server Health Check');
    try {
        const response = await fetch('http://localhost:5001/health');
        const data = await response.json();
        
        if (response.ok && data.status === 'ok') {
            log.success('Backend server is healthy and running');
            log.info(`  Database: ${data.database.status}`);
            log.info(`  Uptime: ${Math.floor(data.uptime)}s`);
        } else {
            log.error('Backend server health check failed');
            allPassed = false;
        }
    } catch (error) {
        log.error(`Cannot connect to backend server: ${error.message}`);
        log.error('Make sure the backend server is running on port 5001');
        allPassed = false;
    }

    // Test 2: School registrations endpoint
    log.section('\nTEST 2: School Registrations Endpoint');
    try {
        const response = await fetch(`${API_BASE_URL}/schools?page=1&limit=1`);
        const data = await response.json();
        
        if (response.ok && data.success) {
            log.success('School registrations endpoint is accessible');
            log.info(`  Total registrations: ${data.pagination.total}`);
        } else {
            log.error('School registrations endpoint failed');
            allPassed = false;
        }
    } catch (error) {
        log.error(`School endpoint error: ${error.message}`);
        allPassed = false;
    }

    // Test 3: Theme registrations endpoint
    log.section('\nTEST 3: University/Professional Registrations Endpoint');
    try {
        const response = await fetch(`${API_BASE_URL}/themes?page=1&limit=1`);
        const data = await response.json();
        
        if (response.ok && data.success) {
            log.success('Theme registrations endpoint is accessible');
            log.info(`  Total registrations: ${data.pagination.total}`);
        } else {
            log.error('Theme registrations endpoint failed');
            allPassed = false;
        }
    } catch (error) {
        log.error(`Theme endpoint error: ${error.message}`);
        allPassed = false;
    }

    // Test 4: School statistics endpoint
    log.section('\nTEST 4: School Statistics Endpoint');
    try {
        const response = await fetch(`${API_BASE_URL}/schools/analytics/stats`);
        const data = await response.json();
        
        if (response.ok && data.success) {
            log.success('School statistics endpoint is working');
            log.info(`  Total: ${data.data.total}, Pending: ${data.data.byStatus.pending}`);
        } else {
            log.error('School statistics endpoint failed');
            allPassed = false;
        }
    } catch (error) {
        log.error(`School statistics error: ${error.message}`);
        allPassed = false;
    }

    // Test 5: Theme statistics endpoint
    log.section('\nTEST 5: Theme Statistics Endpoint');
    try {
        const response = await fetch(`${API_BASE_URL}/themes/analytics/stats`);
        const data = await response.json();
        
        if (response.ok && data.success) {
            log.success('Theme statistics endpoint is working');
            log.info(`  Total: ${data.data.total}, Pending: ${data.data.byStatus.pending}`);
        } else {
            log.error('Theme statistics endpoint failed');
            allPassed = false;
        }
    } catch (error) {
        log.error(`Theme statistics error: ${error.message}`);
        allPassed = false;
    }

    // Test 6: CORS Headers
    log.section('\nTEST 6: CORS Configuration');
    try {
        const response = await fetch(`${API_BASE_URL}/schools?page=1&limit=1`, {
            headers: {
                'Origin': 'http://localhost:5173'
            }
        });
        
        const corsHeader = response.headers.get('access-control-allow-origin');
        if (corsHeader) {
            log.success('CORS is properly configured');
            log.info(`  Allowed origin: ${corsHeader}`);
        } else {
            log.error('CORS headers not found - frontend may have issues');
            allPassed = false;
        }
    } catch (error) {
        log.error(`CORS test error: ${error.message}`);
        allPassed = false;
    }

    // Final Results
    console.log(chalk.bold.cyan('\n╔═══════════════════════════════════════════════════════════╗'));
    console.log(chalk.bold.cyan('║                     INTEGRATION RESULT                    ║'));
    console.log(chalk.bold.cyan('╚═══════════════════════════════════════════════════════════╝\n'));

    if (allPassed) {
        console.log(chalk.green.bold('✅ All integration tests passed!'));
        console.log(chalk.green('Frontend can successfully communicate with backend.\n'));
        
        console.log(chalk.bold('Next Steps:'));
        console.log('1. Start the frontend: cd .. && npm run dev');
        console.log('2. Navigate to the registration pages:');
        console.log('   - School: http://localhost:5173/school-competition-registration');
        console.log('   - University: http://localhost:5173/university-competition-registration');
        console.log('3. Test form submissions through the UI\n');
    } else {
        console.log(chalk.red.bold('❌ Some integration tests failed!'));
        console.log(chalk.red('Please review the errors above and fix them before proceeding.\n'));
        process.exit(1);
    }
}

testEndpointConnectivity().catch((error) => {
    console.error(chalk.red(`\nFatal error: ${error.message}`));
    process.exit(1);
});

