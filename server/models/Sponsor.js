import mongoose from 'mongoose';

const sponsorSchema = new mongoose.Schema({
    // Common fields
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
    },

    // Sponsor specific fields
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        trim: true,
    },
    companyWebsite: {
        type: String,
        trim: true,
    },
    sponsorshipType: {
        type: String,
        enum: [
            'title',
            'platinum',
            'gold',
            'silver',
            'bronze',
            'inkind',
            'media',
            'marketing',
            'stall',
            'other',
        ],
        required: [true, 'Sponsorship type is required'],
    },
    budgetRange: {
        type: String,
        enum: [
            'under50k',
            '50k-1l',
            '1l-3l',
            '3l-5l',
            '5l-10l',
            'above10l',
            'discuss',
        ],
    },
    marketingGoals: {
        type: String,
        required: [true, 'Marketing goals are required'],
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },

    // Metadata
    status: {
        type: String,
        enum: ['pending', 'reviewing', 'negotiating', 'confirmed', 'rejected'],
        default: 'pending',
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

// Index for faster queries
sponsorSchema.index({ email: 1 });
sponsorSchema.index({ companyName: 1 });
sponsorSchema.index({ submittedAt: -1 });
sponsorSchema.index({ status: 1 });
sponsorSchema.index({ sponsorshipType: 1 });

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;
