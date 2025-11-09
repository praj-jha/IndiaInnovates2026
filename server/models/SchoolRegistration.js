import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Team member name is required'],
        trim: true,
        minlength: [2, 'Name is too short'],
        maxlength: [100, 'Name is too long'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [5, 'Minimum age is 5'],
        max: [20, 'Maximum age is 20'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        minlength: [10, 'Phone number is too short'],
        maxlength: [15, 'Phone number is too long'],
    },
}, { _id: false });

const schoolRegistrationSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: [true, 'School name is required'],
        trim: true,
        minlength: [2, 'School name is too short'],
        maxlength: [200, 'School name is too long'],
    },
    teamName: {
        type: String,
        required: [true, 'Team name is required'],
        trim: true,
        minlength: [2, 'Team name is too short'],
        maxlength: [100, 'Team name is too long'],
    },
    teamLeadName: {
        type: String,
        required: [true, 'Team lead name is required'],
        trim: true,
        minlength: [2, 'Name is too short'],
        maxlength: [100, 'Name is too long'],
    },
    teamLeadEmail: {
        type: String,
        required: [true, 'Team lead email is required'],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        maxlength: [255, 'Email is too long'],
    },
    teamLeadPhone: {
        type: String,
        required: [true, 'Team lead phone is required'],
        trim: true,
        minlength: [10, 'Phone number is too short'],
        maxlength: [15, 'Phone number is too long'],
    },
    teamLeadAge: {
        type: Number,
        required: [true, 'Team lead age is required'],
        min: [5, 'Minimum age is 5'],
        max: [20, 'Maximum age is 20'],
    },
    parentGuardianName: {
        type: String,
        required: [true, 'Parent/Guardian name is required'],
        trim: true,
        minlength: [2, 'Name is too short'],
        maxlength: [100, 'Name is too long'],
    },
    parentGuardianPhone: {
        type: String,
        required: [true, 'Parent/Guardian phone is required'],
        trim: true,
        minlength: [10, 'Phone number is too short'],
        maxlength: [15, 'Phone number is too long'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
        maxlength: [100, 'City name is too long'],
    },
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
        maxlength: [100, 'State name is too long'],
    },
    teamMembers: {
        type: [teamMemberSchema],
        validate: [(members) => members.length <= 4, 'Maximum 4 additional team members allowed'],
        default: [],
    },
    selectedCompetitions: {
        type: [String],
        validate: [(arr) => Array.isArray(arr) && arr.length > 0, 'Select at least one competition'],
    },
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

// indexes
schoolRegistrationSchema.index({ teamLeadEmail: 1, teamName: 1 }, { unique: true });
schoolRegistrationSchema.index({ submittedAt: -1 });
schoolRegistrationSchema.index({ status: 1 });

const SchoolRegistration = mongoose.model('SchoolRegistration', schoolRegistrationSchema);

export default SchoolRegistration;


