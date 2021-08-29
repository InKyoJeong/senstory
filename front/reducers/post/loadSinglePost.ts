import { Post } from '../../interfaces/post';

export const LOAD_SINGLE_POST_REQUEST = 'LOAD_SINGLE_POST_REQUEST' as const;
export const LOAD_SINGLE_POST_SUCCESS = 'LOAD_SINGLE_POST_SUCCESS' as const;
export const LOAD_SINGLE_POST_FAILURE = 'LOAD_SINGLE_POST_FAILURE' as const;

export interface LoadSinglePostRequest {
  type: typeof LOAD_SINGLE_POST_REQUEST;

  data: number;
}

export interface LoadSinglePostSuccess {
  type: typeof LOAD_SINGLE_POST_SUCCESS;
  data: Post;
}

export interface LoadSinglePostFailure {
  type: typeof LOAD_SINGLE_POST_FAILURE;
  error: string;
}

export const loadSinglePostRequest = (data: number): LoadSinglePostRequest => ({
  type: LOAD_SINGLE_POST_REQUEST,
  data,
});

export const loadSinglePostSuccess = (data: Post): LoadSinglePostSuccess => ({
  type: LOAD_SINGLE_POST_SUCCESS,
  data,
});

export const loadSinglePostFailure = (error: string): LoadSinglePostFailure => ({
  type: LOAD_SINGLE_POST_FAILURE,
  error,
});

export type LoadSinglePost = LoadSinglePostRequest | LoadSinglePostSuccess | LoadSinglePostFailure;
