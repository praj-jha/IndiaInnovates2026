import mongoose from 'mongoose';

const themeRegistrationSchema = new mongoose.Schema({
    participantType: {
        type: String,
        enum: ['university', 'professional'],
        required: [true, 'Participant type is required'],
    },
    organizationName: {
        type: String,
        required: [true, 'Organization/University name is required'],
        trim: true,
        minlength: [2, 'Name is too short'],
        maxlength: [200, 'Name is too long'],
    },
    participantName: {
        type: String,
        required: [true, 'Participant name is required'],
        trim: true,
        minlength: [2, 'Name is too short'],
        maxlength: [100, 'Name is too long'],
    },
    designation: {
        type: String,
        required: [true, 'Designation/Course is required'],
        trim: true,
        minlength: [2, 'Designation is too short'],
        maxlength: [100, 'Designation is too long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        maxlength: [255, 'Email is too long'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        minlength: [10, 'Phone number is too short'],
        maxlength: [15, 'Phone number is too long'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
        maxlength: [255, 'Address is too long'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
        maxlength: [100, 'City is too long'],
    },
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
        maxlength: [100, 'State is too long'],
    },
    pincode: {
        type: String,
        required: [true, 'Pincode is required'],
        trim: true,
        match: [/^\d{6}$/, 'Pincode must be exactly 6 digits'],
    },
    projectTitle: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true,
        minlength: [3, 'Project title is too short'],
        maxlength: [200, 'Project title is too long'],
    },
    projectDescription: {
        type: String,
        required: [true, 'Project description is required'],
        trim: true,
        minlength: [5, 'Project description is too short'],
        maxlength: [5000, 'Project description is too long'],
    },
    teamSize: {
        type: Number,
        required: [true, 'Team size is required'],
        min: [1, 'Minimum team size is 1'],
        max: [10, 'Maximum team size is 10'],
    },
    selectedTheme: {
        type: String,
        required: [true, 'Selected theme is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'reviewing', 'shortlisted', 'approved', 'rejected'],
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

// indexes
themeRegistrationSchema.index({ email: 1, projectTitle: 1, selectedTheme: 1 }, { unique: true });
themeRegistrationSchema.index({ submittedAt: -1 });
themeRegistrationSchema.index({ status: 1 });

const ThemeRegistration = mongoose.model('ThemeRegistration', themeRegistrationSchema);

export default ThemeRegistration;


