
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const User = require('../models/User');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true });

    // If user is authenticated, check enrollment status for each course
    if (req.user) {
      const userId = req.user._id;
      const enrollments = await Enrollment.find({ userId }).select('courseId');
      const enrolledCourseIds = enrollments.map(e => e.courseId.toString());

      const coursesWithEnrollmentStatus = courses.map(course => ({
        ...course.toObject(),
        isEnrolled: enrolledCourseIds.includes(course._id.toString())
      }));

      return res.json({
        success: true,
        courses: coursesWithEnrollmentStatus
      });
    }

    res.json({
      success: true,
      courses
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses'
    });
  }
};

// Get single course by slug
const getCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await Course.findOne({ slug, isActive: true });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if user is enrolled (if authenticated)
    let isEnrolled = false;
    if (req.user) {
      const enrollment = await Enrollment.findOne({
        userId: req.user._id,
        courseId: course._id
      });
      isEnrolled = !!enrollment;
    }

    res.json({
      success: true,
      course: {
        ...course.toObject(),
        isEnrolled
      }
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch course'
    });
  }
};

// Enroll user in a course (purchase)
const enrollInCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course || !course.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if user is already enrolled
    const existingEnrollment = await Enrollment.findOne({
      userId,
      courseId
    });

    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: 'You are already enrolled in this course'
      });
    }

    // Create enrollment
    const enrollment = new Enrollment({
      userId,
      courseId,
      status: 'enrolled'
    });

    await enrollment.save();

    // Update user's enrolledCourses array
    await User.findByIdAndUpdate(
      userId,
      { $addToSet: { enrolledCourses: courseId.toString() } }
    );

    res.json({
      success: true,
      message: 'Successfully enrolled in course',
      enrollment
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to enroll in course'
    });
  }
};

// Get user's enrolled courses
const getUserEnrollments = async (req, res) => {
  try {
    const userId = req.user._id;

    const enrollments = await Enrollment.find({ userId })
      .populate({
        path: 'courseId',
        model: 'Course',
        select: 'id title description type slug price originalPrice duration students rating level image features isActive'
      })
      .sort({ enrollmentDate: -1 });

    // Filter out enrollments where course no longer exists or is inactive
    const validEnrollments = enrollments.filter(enrollment =>
      enrollment.courseId && enrollment.courseId.isActive
    );

    res.json({
      success: true,
      enrollments: validEnrollments
    });
  } catch (error) {
    console.error('Get enrollments error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollments'
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  enrollInCourse,
  getUserEnrollments
};
