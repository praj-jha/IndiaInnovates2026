
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  country?: string;
  state?: string;
  enrolledCourses?: string[];
};

type Course = {
  _id: string;
  title: string;
  description: string;
  type: string;
  slug: string;
  price: number;
  duration: string;
  level: string;
  features: string[];
  isEnrolled?: boolean;
};

type Enrollment = {
  _id: string;
  courseId: Course;
  enrollmentDate: string;
  status: string;
  progress: number;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  enrollInCourse: (courseId: string) => Promise<void>;
  getUserEnrollments: () => Promise<Enrollment[]>;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-production-api.com/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
    
    // Set up token refresh interval
    const refreshInterval = setInterval(() => {
      if (isAuthenticated) {
        refreshToken();
      }
    }, 14 * 60 * 1000); // Refresh every 14 minutes (before 15 min expiry)

    return () => clearInterval(refreshInterval);
  }, [isAuthenticated]);

  const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      // If token expired, try to refresh
      if (response.status === 401) {
        const data = await response.json();
        if (data.code === 'TOKEN_EXPIRED') {
          await refreshToken();
          // Retry the original request
          return fetch(url, {
            ...options,
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              ...options.headers,
            },
          });
        }
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  const refreshToken = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      await logout();
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setUser({
            id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            organization: data.user.organization,
            country: data.user.country,
            state: data.user.state,
            enrolledCourses: data.user.enrolledCourses || []
          });
          setIsAuthenticated(true);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.success) {
        const userData = {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          organization: data.user.organization,
          country: data.user.country,
          state: data.user.state,
          enrolledCourses: data.user.enrolledCourses || []
        };
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      if (data.success) {
        const userObj = {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          organization: data.user.organization,
          country: data.user.country,
          state: data.user.state,
          enrolledCourses: data.user.enrolledCourses || []
        };
        setUser(userObj);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const enrollInCourse = async (courseId: string) => {
    try {
      const response = await makeAuthenticatedRequest(`${API_BASE_URL}/courses/enroll`, {
        method: 'POST',
        body: JSON.stringify({ courseId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Enrollment failed');
      }

      // Refresh user data to get updated enrolled courses
      await checkAuthStatus();
      
      return data;
    } catch (error) {
      throw error;
    }
  };

  const getUserEnrollments = async (): Promise<Enrollment[]> => {
    try {
      const response = await makeAuthenticatedRequest(`${API_BASE_URL}/courses/user/enrollments`, {
        method: 'GET',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch enrollments');
      }

      return data.enrollments || [];
    } catch (error) {
      return [];
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // Silently handle logout errors in production
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      enrollInCourse, 
      getUserEnrollments, 
      isLoading,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
