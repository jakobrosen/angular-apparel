/**
 * Shape of login request body sent by the Angular frontend.
 */
export interface LoginRequest {
  username: string;
  password: string;
}

/**
 * Shape of login response returned by the server.
 */
export interface LoginResponse {
  token: string;
}
