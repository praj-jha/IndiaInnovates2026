const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Volunteer Registration
export const submitVolunteerRegistration = async (data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/volunteers`, {
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
    const response = await fetch(`${API_BASE_URL}/sponsors`, {
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

    const response = await fetch(url);
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

    const response = await fetch(url);
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
    const response = await fetch(`${API_BASE_URL}/volunteers/analytics/stats`);
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
    const response = await fetch(`${API_BASE_URL}/sponsors/analytics/stats`);
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
