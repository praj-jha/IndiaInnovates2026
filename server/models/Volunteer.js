import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
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

    // Team member specific fields
    studentStatus: {
        type: String,
        enum: ['yes', 'no'],
    },
    institution: {
        type: String,
        trim: true,
        maxlength: [200, 'Institution name is too long'],
    },
    course: {
        type: String,
        trim: true,
        maxlength: [100, 'Course name is too long'],
    },
    yearOfStudy: {
        type: String,
        enum: ['1st', '2nd', '3rd', '4th', 'postgrad'],
    },
    department: {
        type: String,
        enum: [
            'marketing',
            'content',
            'design',
            'tech',
            'operations',
            'pr',
            'event',
            'research',
        ],
    },
    skillset: {
        type: String,
        trim: true,
        maxlength: [500, 'Skillset description is too long'],
    },
    availability: {
        type: String,
        enum: ['fulltime', 'parttime', 'flexible', 'remote'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minlength: [1, 'Message is too short'],
        maxlength: [1000, 'Message is too long'],
    },

    // Metadata
    status: {
        type: String,
        enum: ['pending', 'reviewing', 'accepted', 'rejected'],
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
volunteerSchema.pre('save', function(next) {
    if (this.email) {
        this.email = this.email.toLowerCase();
    }
    next();
});

// Index for faster queries
volunteerSchema.index({ email: 1 }, { unique: true });
volunteerSchema.index({ submittedAt: -1 });
volunteerSchema.index({ status: 1 });
volunteerSchema.index({ department: 1 });
volunteerSchema.index({ createdAt: -1 });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
