
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    trim: true
  },
  type: {
    type: String,
    enum: ['cohort', 'crash-course'],
    required: [true, 'Course type is required']
  },
  slug: {
    type: String,
    required: [true, 'Course slug is required'],
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Course price is required'],
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required']
  },
  students: {
    type: String,
    default: "0+"
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Course level is required']
  },
  image: {
    type: String,
    default: "/MC.jpeg"
  },
  features: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
