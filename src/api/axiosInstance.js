import axios from 'axios';

const API_URL = 'https://sequence.agong.store/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;