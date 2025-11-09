import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import Logger from './utils/logger.js';
import { apiLimiter, registrationLimiter } from './middleware/rateLimiter.js';
import volunteersRouter from './routes/volunteers.js';
import sponsorsRouter from './routes/sponsors.js';
import schoolRegistrationsRouter from './routes/schoolRegistrations.js';
import themeRegistrationsRouter from './routes/themeRegistrations.js';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingEnvVars.length > 0) {
    Logger.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
    process.exit(1);
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'production',
    crossOriginEmbedderPolicy: false,
}));
app.use(compression());

// CORS configuration
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://localhost:3000',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        Logger.request(req.method, req.path, res.statusCode, duration);
    });
    next();
});

// Apply rate limiting to all API routes
app.use('/api/', apiLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
    const dbStatus = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting',
    };

    const isHealthy = mongoose.connection.readyState === 1;

    res.status(isHealthy ? 200 : 503).json({
        status: isHealthy ? 'ok' : 'degraded',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: {
            status: dbStatus[mongoose.connection.readyState],
            readyState: mongoose.connection.readyState,
            host: mongoose.connection.host || 'N/A',
            name: mongoose.connection.name || 'N/A',
        },
    });
});

// API Routes (with rate limiting on registration endpoints)
app.use('/api/volunteers', registrationLimiter, volunteersRouter);
app.use('/api/sponsors', registrationLimiter, sponsorsRouter);
app.use('/api/schools', registrationLimiter, schoolRegistrationsRouter);
app.use('/api/themes', registrationLimiter, themeRegistrationsRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

// Global error handler
app.use((err, req, res, next) => {
    Logger.error('Global error handler', err);

    // Don't leak error details in production
    const message = process.env.NODE_ENV === 'production' && err.status !== 400
        ? 'Internal server error'
        : err.message;

    res.status(err.status || 500).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
});

// Start server
app.listen(PORT, () => {
    Logger.startup(`Server running on port ${PORT}`);
    Logger.startup(`Environment: ${process.env.NODE_ENV || 'development'}`);
    Logger.info(`CORS enabled for: ${allowedOrigins.join(', ')}`);
    
    if (process.env.NODE_ENV === 'production') {
        Logger.startup('Rate limiting ENABLED');
    }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    Logger.error('Unhandled Promise Rejection', err);
    process.exit(1);
});

export default app;
