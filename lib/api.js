// lib/api.js
const API_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;  // Rethrow the error after logging it
  }
}

export { fetchData };
