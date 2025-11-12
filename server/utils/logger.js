/**
 * Production-ready Logger Utility
 * Only logs important information in production
 */

const isProduction = process.env.NODE_ENV === 'production';

class Logger {
    /**
     * Log informational messages (only in development)
     */
    static info(message, ...args) {
        if (!isProduction) {
            console.log(`[INFO] ${message}`, ...args);
        }
    }

    /**
     * Log warning messages (always logged)
     */
    static warn(message, ...args) {
        console.warn(`[WARN] ${message}`, ...args);
    }

    /**
     * Log error messages (always logged)
     */
    static error(message, error) {
        console.error(`[ERROR] ${message}`, error?.message || error);
        if (!isProduction && error?.stack) {
            console.error(error.stack);
        }
    }

    /**
     * Log success messages (only in development)
     */
    static success(message, ...args) {
        if (!isProduction) {
            console.log(`[SUCCESS] ✅ ${message}`, ...args);
        }
    }

    /**
     * Log debug messages (only in development)
     */
    static debug(message, ...args) {
        if (!isProduction && process.env.DEBUG) {
            console.log(`[DEBUG] ${message}`, ...args);
        }
    }

    /**
     * Log startup information (always logged)
     */
    static startup(message, ...args) {
        console.log(`[STARTUP] 🚀 ${message}`, ...args);
    }

    /**
     * Log database connection (always logged)
     */
    static database(message, ...args) {
        console.log(`[DATABASE] 💾 ${message}`, ...args);
    }

    /**
     * Log request information (only in development)
     */
    static request(method, path, statusCode, duration) {
        if (!isProduction) {
            const emoji = statusCode >= 400 ? '❌' : '✅';
            console.log(`[REQUEST] ${emoji} ${method} ${path} - ${statusCode} (${duration}ms)`);
        }
    }
}

export default Logger;





