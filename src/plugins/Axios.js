import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient;
