import { User } from '../../interfaces/user';

export const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST' as const;
export const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS' as const;
export const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE' as const;

export interface LoadMeRequest {
  type: typeof LOAD_ME_REQUEST;
}

export interface LoadMeSuccess {
  type: typeof LOAD_ME_SUCCESS;
  data: User;
}

export interface LoadMeFailure {
  type: typeof LOAD_ME_FAILURE;
  error: string;
}

export const loadMeRequest = (): LoadMeRequest => ({
  type: LOAD_ME_REQUEST,
});

export const loadMeSuccess = (data: User): LoadMeSuccess => ({
  type: LOAD_ME_SUCCESS,
  data,
});

export const loadMeFailure = (error: string): LoadMeFailure => ({
  type: LOAD_ME_FAILURE,
  error,
});

export type LoadMe = LoadMeRequest | LoadMeSuccess | LoadMeFailure;
