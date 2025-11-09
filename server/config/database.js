import mongoose from 'mongoose';
import Logger from '../utils/logger.js';

const connectDB = async () => {
    try {
        // MongoDB connection options
        const options = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
            minPoolSize: 2,
            retryWrites: true,
            retryReads: true,
            compressors: ['zlib'],
        };

        const conn = await mongoose.connect(process.env.MONGODB_URI, options);

        Logger.database(`Connected: ${conn.connection.host}`);
        Logger.database(`Database: ${conn.connection.name}`);

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            Logger.error('MongoDB connection error', err);
        });

        mongoose.connection.on('disconnected', () => {
            Logger.warn('MongoDB disconnected. Attempting to reconnect...');
        });

        mongoose.connection.on('reconnected', () => {
            Logger.database('Reconnected successfully');
        });

        // Enable mongoose debug mode in development
        if (process.env.NODE_ENV === 'development') {
            mongoose.set('debug', true);
        }

        // Graceful shutdown
        process.on('SIGINT', async () => {
            try {
                await mongoose.connection.close();
                Logger.database('Connection closed through app termination');
                process.exit(0);
            } catch (error) {
                Logger.error('Error closing MongoDB connection', error);
                process.exit(1);
            }
        });

        return conn;
    } catch (error) {
        Logger.error('Error connecting to MongoDB', error);
        
        // Retry connection after 5 seconds in production
        if (process.env.NODE_ENV === 'production') {
            Logger.warn('Retrying connection in 5 seconds...');
            setTimeout(connectDB, 5000);
        } else {
            process.exit(1);
        }
    }
};

export default connectDB;
