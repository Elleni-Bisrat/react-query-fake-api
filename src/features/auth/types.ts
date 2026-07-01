export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: string;
  token: string;
}