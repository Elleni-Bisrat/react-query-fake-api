// import { apiClient } from "./apiClient";
// apiClient.interceptors.request.use((config) => {
//   console.log("sending request");
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );


import { apiClient } from './apiClient';
import { authStorage } from '../storage/auth.storage';

// Request interceptor – attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = authStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor – handle 401 globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);