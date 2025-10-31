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
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
    },

    // Team member specific fields
    studentStatus: {
        type: String,
        enum: ['yes', 'no'],
    },
    institution: {
        type: String,
        trim: true,
    },
    course: {
        type: String,
        trim: true,
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
    },
    availability: {
        type: String,
        enum: ['fulltime', 'parttime', 'flexible', 'remote'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
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

// Index for faster queries
volunteerSchema.index({ email: 1 });
volunteerSchema.index({ submittedAt: -1 });
volunteerSchema.index({ status: 1 });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
