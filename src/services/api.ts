const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-production-api.com/api';

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  courses?: T;
  course?: T;
  enrollments?: T;
  enrollment?: T;
}

interface Course {
  _id: string;
  id: string;
  title: string;
  description: string;
  type: 'cohort' | 'crash-course';
  slug: string;
  price: number;
  originalPrice?: number;
  duration: string;
  students: string;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  features: string[];
  isActive: boolean;
  isEnrolled?: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Enrollment {
  _id: string;
  userId: string;
  courseId: Course;
  enrollmentDate: string;
  status: 'enrolled' | 'completed' | 'cancelled';
  progress: number;
  createdAt: string;
  updatedAt: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      credentials: 'include', // Include cookies for authentication
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  // Course methods
  async getAllCourses(): Promise<Course[]> {
    const response = await this.request<Course[]>('/courses');
    return response.courses || [];
  }

  async getCourseBySlug(slug: string): Promise<Course> {
    const response = await this.request<Course>(`/courses/${slug}`);
    return response.course!;
  }

  // Enrollment methods
  async enrollInCourse(courseId: string): Promise<Enrollment> {
    const response = await this.request<Enrollment>('/courses/enroll', {
      method: 'POST',
      body: JSON.stringify({ courseId }),
    });
    return response.enrollment!;
  }

  async getUserEnrollments(): Promise<Enrollment[]> {
    const response = await this.request<Enrollment[]>('/courses/user/enrollments');
    return response.enrollments || [];
  }

  // Auth methods (for reference, if needed)
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async refreshToken() {
    return this.request('/auth/refresh-token', {
      method: 'POST',
    });
  }

  async getProfile() {
    return this.request('/auth/profile');
  }
}

export const apiService = new ApiService();
export type { Course, Enrollment };
