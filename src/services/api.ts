const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// API Configuration
const API_CONFIG = {
  timeout: 10000, // 10 seconds
  retries: 3,
  retryDelay: 1000, // 1 second
};

// Helper: Sleep function for retry delays
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper: Fetch with timeout and retry logic
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retriesLeft = API_CONFIG.retries
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Retry on 5xx errors
    if (!response.ok && response.status >= 500 && retriesLeft > 0) {
      await sleep(API_CONFIG.retryDelay);
      return fetchWithRetry(url, options, retriesLeft - 1);
    }

    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);

    // Retry on network errors or timeout
    if (retriesLeft > 0 && (error.name === 'AbortError' || error.message.includes('Failed to fetch'))) {
      await sleep(API_CONFIG.retryDelay);
      return fetchWithRetry(url, options, retriesLeft - 1);
    }

    throw error;
  }
}

// Volunteer Registration
export const submitVolunteerRegistration = async (data: any) => {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/volunteers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit registration');
    }

    return result;
  } catch (error) {
    console.error('Error submitting volunteer registration:', error);
    throw error;
  }
};

// Sponsor Registration
export const submitSponsorRegistration = async (data: any) => {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/sponsors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit registration');
    }

    return result;
  } catch (error) {
    console.error('Error submitting sponsor registration:', error);
    throw error;
  }
};

// Get all volunteers (admin)
export const getVolunteers = async (page = 1, limit = 10, status?: string) => {
  try {
    let url = `${API_BASE_URL}/volunteers?page=${page}&limit=${limit}`;
    if (status) url += `&status=${status}`;

    const response = await fetchWithRetry(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch volunteers');
    }

    return result;
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    throw error;
  }
};

// Get all sponsors (admin)
export const getSponsors = async (page = 1, limit = 10, status?: string, type?: string) => {
  try {
    let url = `${API_BASE_URL}/sponsors?page=${page}&limit=${limit}`;
    if (status) url += `&status=${status}`;
    if (type) url += `&type=${type}`;

    const response = await fetchWithRetry(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch sponsors');
    }

    return result;
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    throw error;
  }
};

// Get volunteer statistics (admin)
export const getVolunteerStats = async () => {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/volunteers/analytics/stats`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch statistics');
    }

    return result;
  } catch (error) {
    console.error('Error fetching volunteer stats:', error);
    throw error;
  }
};

// Get sponsor statistics (admin)
export const getSponsorStats = async () => {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/sponsors/analytics/stats`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch statistics');
    }

    return result;
  } catch (error) {
    console.error('Error fetching sponsor stats:', error);
    throw error;
  }
};

export default {
  submitVolunteerRegistration,
  submitSponsorRegistration,
  getVolunteers,
  getSponsors,
  getVolunteerStats,
  getSponsorStats,
};

// School Competition Registration
export const submitSchoolCompetitionRegistration = async (data: any) => {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/schools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit registration');
    }

    return result;
  } catch (error) {
    console.error('Error submitting school competition registration:', error);
    throw error;
  }
};

// Theme Registration (Universities & Professionals)
export const submitThemeRegistration = async (data: any) => {
  try {
    console.log('📤 Submitting theme registration:', data);
    
    // Ensure teamSize is a number
    const payload = {
      ...data,
      teamSize: typeof data.teamSize === 'string' ? parseInt(data.teamSize, 10) : data.teamSize,
    };

    console.log('📦 Final payload:', payload);

    const response = await fetchWithRetry(`${API_BASE_URL}/themes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log('📥 Server response:', result);

    if (!response.ok) {
      // Format validation errors if present
      if (result.errors && Array.isArray(result.errors)) {
        const errorMessages = result.errors.map((err: any) => `${err.field}: ${err.message}`).join(', ');
        throw new Error(errorMessages || result.message || 'Failed to submit registration');
      }
      throw new Error(result.message || 'Failed to submit registration');
    }

    return result;
  } catch (error: any) {
    console.error('❌ Error submitting theme registration:', error);
    throw error;
  }
};
