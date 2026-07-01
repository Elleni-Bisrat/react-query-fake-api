import { apiClient } from '../../../infrastructure/api/apiClient';
import { ENDPOINTS } from '../../../infrastructure/api/endpoints';
import type { LoginCredentials, AuthResponse } from '../types';

export const authService = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, credentials),
  logout: () => apiClient.post(ENDPOINTS.AUTH.LOGOUT),
  getMe: () => apiClient.get<string>(ENDPOINTS.AUTH.ME),
};