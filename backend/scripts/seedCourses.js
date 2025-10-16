
const mongoose = require('mongoose');
require('dotenv').config();
const Course = require('../models/Course');

const courses = [
  {
    id: "ib",
    title: "Investment Banking",
    description: "Master the fundamentals of investment banking with expert mentors from top-tier firms.",
    type: "cohort",
    slug: "investment-banking",
    price: 24999,
    originalPrice: 29999,
    duration: "12 weeks",
    students: "250+",
    rating: 4.9,
    level: "Intermediate",
    image: "/MC.jpeg",
    features: [
      "Live sessions with industry experts",
      "Real IB case studies",
      "Financial modeling and valuation",
      "M&A analysis training",
      "1-on-1 mentorship",
      "Certificate of completion",
      "Career guidance and placement support"
    ]
  },
  {
    id: "mc",
    title: "Management Consulting",
    description: "Learn case-solving methodologies and frameworks used by leading consulting firms.",
    type: "cohort",
    slug: "management-consultancy",
    price: 14999,
    originalPrice: 29999,
    duration: "10 weeks",
    students: "180+",
    rating: 4.8,
    level: "Intermediate",
    image: "/MC.jpeg",
    features: [
      "Case study practice",
      "Framework training",
      "Mock interviews",
      "Industry insights",
      "Problem-solving methodologies",
      "Peer learning sessions",
      "Expert mentor guidance"
    ]
  },
  {
    id: "pm",
    title: "Product Management",
    description: "Build product strategy and management skills with hands-on projects and mentorship.",
    type: "cohort",
    slug: "product-management",
    price: 14999,
    originalPrice: 29999,
    duration: "8 weeks",
    students: "320+",
    rating: 4.9,
    level: "Beginner",
    image: "/MC.jpeg",
    features: [
      "Product strategy development",
      "User research methods",
      "Agile methodologies",
      "Analytics and metrics",
      "Portfolio projects",
      "Industry case studies",
      "Hands-on experience"
    ]
  },
  {
    id: "crash1",
    title: "Finance Fundamentals Track",
    description: "Intensive crash course covering essential finance concepts and modeling techniques.",
    type: "crash-course",
    slug: "track-1",
    price: 4999,
    originalPrice: 9999,
    duration: "4 weeks",
    students: "150+",
    rating: 4.7,
    level: "Beginner",
    image: "/MC.jpeg",
    features: [
      "Financial statements analysis",
      "Valuation methods",
      "Risk management",
      "Investment principles",
      "Excel modeling techniques",
      "Quick skill building"
    ]
  },
  {
    id: "crash2",
    title: "Consulting Case Prep Track",
    description: "Fast-track preparation for consulting case interviews with proven frameworks.",
    type: "crash-course",
    slug: "track-2",
    price: 7499,
    originalPrice: 14999,
    duration: "3 weeks",
    students: "200+",
    rating: 4.8,
    level: "Beginner",
    image: "/IB.jpeg",
    features: [
      "Problem-solving frameworks",
      "Case interview practice",
      "Structured thinking",
      "Communication skills",
      "Mock case sessions",
      "Interview preparation"
    ]
  },
  {
    id: "crash3",
    title: "Product Strategy Track",
    description: "Learn product thinking and strategy development in an accelerated format.",
    type: "crash-course",
    slug: "track-3",
    price: 9999,
    originalPrice: 19999,
    duration: "5 weeks",
    students: "180+",
    rating: 4.6,
    level: "Intermediate",
    image: "/IB.jpeg",
    features: [
      "Product roadmapping",
      "Strategic thinking",
      "Market analysis",
      "User experience design",
      "Data-driven decisions",
      "Product launch strategies"
    ]
  }
];

const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert new courses
    await Course.insertMany(courses);
    console.log('Courses seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
