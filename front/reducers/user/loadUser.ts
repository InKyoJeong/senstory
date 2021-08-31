import { User } from '../../interfaces/user';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST' as const;
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS' as const;
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE' as const;

export interface LoadUserRequest {
  type: typeof LOAD_USER_REQUEST;
  data: number | string;
}

export interface LoadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  data: User;
}

export interface LoadUserFailure {
  type: typeof LOAD_USER_FAILURE;
  error: string;
}

export const loadUserRequest = (data: number | string): LoadUserRequest => ({
  type: LOAD_USER_REQUEST,
  data,
});

export const loadUserSuccess = (data: User): LoadUserSuccess => ({
  type: LOAD_USER_SUCCESS,
  data,
});

export const loadUserFailure = (error: string): LoadUserFailure => ({
  type: LOAD_USER_FAILURE,
  error,
});

export type LoadUser = LoadUserRequest | LoadUserSuccess | LoadUserFailure;
