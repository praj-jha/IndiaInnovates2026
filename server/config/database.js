import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // MongoDB connection options
        const options = {
            // Connection timeout settings
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            
            // Connection pool settings for better performance
            maxPoolSize: 10,
            minPoolSize: 2,
            
            // Retry settings
            retryWrites: true,
            retryReads: true,
            
            // Compression for better network performance
            compressors: ['zlib'],
        };

        const conn = await mongoose.connect(process.env.MONGODB_URI, options);

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`💾 Database: ${conn.connection.name}`);

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('⚠️ MongoDB disconnected. Attempting to reconnect...');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('✅ MongoDB reconnected');
        });

        mongoose.connection.on('connected', () => {
            console.log('✅ MongoDB connected');
        });

        // Enable mongoose debug mode in development
        if (process.env.NODE_ENV === 'development') {
            mongoose.set('debug', true);
        }

        // Graceful shutdown
        process.on('SIGINT', async () => {
            try {
                await mongoose.connection.close();
                console.log('🔒 MongoDB connection closed through app termination');
                process.exit(0);
            } catch (error) {
                console.error('❌ Error closing MongoDB connection:', error);
                process.exit(1);
            }
        });

        return conn;
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error.message);
        
        // Retry connection after 5 seconds in production
        if (process.env.NODE_ENV === 'production') {
            console.log('🔄 Retrying connection in 5 seconds...');
            setTimeout(connectDB, 5000);
        } else {
            process.exit(1);
        }
    }
};

export default connectDB;
