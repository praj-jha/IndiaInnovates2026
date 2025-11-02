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
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        maxlength: [255, 'Email is too long'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
        minlength: [10, 'Mobile number is too short'],
        maxlength: [15, 'Mobile number is too long'],
    },

    // Sponsor specific fields
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
        minlength: [2, 'Company name is too short'],
        maxlength: [200, 'Company name is too long'],
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        trim: true,
        minlength: [2, 'Designation is too short'],
        maxlength: [100, 'Designation is too long'],
    },
    companyWebsite: {
        type: String,
        trim: true,
        maxlength: [255, 'Website URL is too long'],
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
        minlength: [10, 'Marketing goals are too short'],
        maxlength: [1000, 'Marketing goals are too long'],
    },
    message: {
        type: String,
        trim: true,
        maxlength: [1000, 'Message is too long'],
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

// Pre-save middleware to ensure email is lowercase
sponsorSchema.pre('save', function(next) {
    if (this.email) {
        this.email = this.email.toLowerCase();
    }
    next();
});

// Index for faster queries
sponsorSchema.index({ email: 1 }, { unique: true });
sponsorSchema.index({ companyName: 1 });
sponsorSchema.index({ submittedAt: -1 });
sponsorSchema.index({ status: 1 });
sponsorSchema.index({ sponsorshipType: 1 });
sponsorSchema.index({ createdAt: -1 });

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;
