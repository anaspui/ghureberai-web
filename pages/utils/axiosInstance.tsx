import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error here
    console.error('Axios request error:', error);

    // You can throw a custom error here or return a rejected Promise
    // to propagate the error to the code that uses axiosInstance
    return Promise.reject(error);
  }
);

export default axiosInstance;
