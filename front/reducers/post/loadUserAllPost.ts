import { Post } from '../../interfaces/post';

export const LOAD_USER_ALL_POST_REQUEST = 'LOAD_USER_ALL_POST_REQUEST' as const;
export const LOAD_USER_ALL_POST_SUCCESS = 'LOAD_USER_ALL_POST_SUCCESS' as const;
export const LOAD_USER_ALL_POST_FAILURE = 'LOAD_USER_ALL_POST_FAILURE' as const;

export interface LoadUserAllPostRequest {
  type: typeof LOAD_USER_ALL_POST_REQUEST;
  data: string | number;
  lastId?: number;
}

export interface LoadUserAllPostSuccess {
  type: typeof LOAD_USER_ALL_POST_SUCCESS;
  data: Post[];
}

export interface LoadUserAllPostFailure {
  type: typeof LOAD_USER_ALL_POST_FAILURE;
  error: string;
}

export const loadUserAllPostRequest = (data: string | number, lastId?: number): LoadUserAllPostRequest => ({
  type: LOAD_USER_ALL_POST_REQUEST,
  data,
  lastId,
});

export const loadUserAllPostSuccess = (data: Post[]): LoadUserAllPostSuccess => ({
  type: LOAD_USER_ALL_POST_SUCCESS,
  data,
});

export const loadUserAllPostFailure = (error: string): LoadUserAllPostFailure => ({
  type: LOAD_USER_ALL_POST_FAILURE,
  error,
});

export type LoadUserAllPost = LoadUserAllPostRequest | LoadUserAllPostSuccess | LoadUserAllPostFailure;
