import { User } from '../../interfaces/user';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_IN_ERROR_FINISH = 'LOG_IN_ERROR_FINISH' as const;

export interface LoginRequest {
  type: typeof LOG_IN_REQUEST;
  data: { email: string; password: string };
}

export interface LoginSuccess {
  type: typeof LOG_IN_SUCCESS;
  data: User;
}

export interface LoginFailure {
  type: typeof LOG_IN_FAILURE;
  error: string;
}

export interface LoginErrorFinish {
  type: typeof LOG_IN_ERROR_FINISH;
}

export const loginRequest = (data: { email: string; password: string }): LoginRequest => ({
  type: LOG_IN_REQUEST,
  data,
});

export const loginSuccess = (data: User): LoginSuccess => ({
  type: LOG_IN_SUCCESS,
  data,
});

export const loginFailure = (error: string): LoginFailure => ({
  type: LOG_IN_FAILURE,
  error,
});

export const loginErrorFinish = (): LoginErrorFinish => ({
  type: LOG_IN_ERROR_FINISH,
});

export type Login = LoginRequest | LoginSuccess | LoginFailure | LoginErrorFinish;
