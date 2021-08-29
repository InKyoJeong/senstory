import { Post } from '../../interfaces/post';

export const LOAD_ALL_POST_REQUEST = 'LOAD_ALL_POST_REQUEST' as const;
export const LOAD_ALL_POST_SUCCESS = 'LOAD_ALL_POST_SUCCESS' as const;
export const LOAD_ALL_POST_FAILURE = 'LOAD_ALL_POST_FAILURE' as const;

export interface LoadAllPostRequest {
  type: typeof LOAD_ALL_POST_REQUEST;
  lastId?: number;
}

export interface LoadAllPostSuccess {
  type: typeof LOAD_ALL_POST_SUCCESS;
  data: Post[];
}

export interface LoadAllPostFailure {
  type: typeof LOAD_ALL_POST_FAILURE;
  error: string;
}

export const loadAllPostRequest = (lastId?: number): LoadAllPostRequest => ({
  type: LOAD_ALL_POST_REQUEST,
  lastId,
});

export const loadAllPostSuccess = (data: Post[]): LoadAllPostSuccess => ({
  type: LOAD_ALL_POST_SUCCESS,
  data,
});

export const loadAllPostFailure = (error: string): LoadAllPostFailure => ({
  type: LOAD_ALL_POST_FAILURE,
  error,
});

export type LoadAllPost = LoadAllPostRequest | LoadAllPostSuccess | LoadAllPostFailure;
