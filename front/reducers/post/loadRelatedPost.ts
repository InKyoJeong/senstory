import { Post } from '../../interfaces/post';

export const LOAD_RELATED_POSTS_REQUEST = 'LOAD_RELATED_POSTS_REQUEST' as const;
export const LOAD_RELATED_POSTS_SUCCESS = 'LOAD_RELATED_POSTS_SUCCESS' as const;
export const LOAD_RELATED_POSTS_FAILURE = 'LOAD_RELATED_POSTS_FAILURE' as const;

export interface LoadRelatedPostRequest {
  type: typeof LOAD_RELATED_POSTS_REQUEST;
  lastId?: number;
}

export interface LoadRelatedPostSuccess {
  type: typeof LOAD_RELATED_POSTS_SUCCESS;
  data: Post[];
}

export interface LoadRelatedPostFailure {
  type: typeof LOAD_RELATED_POSTS_FAILURE;
  error: string;
}

export const loadRelatedPostRequest = (lastId?: number): LoadRelatedPostRequest => ({
  type: LOAD_RELATED_POSTS_REQUEST,
  lastId,
});

export const loadRelatedPostSuccess = (data: Post[]): LoadRelatedPostSuccess => ({
  type: LOAD_RELATED_POSTS_SUCCESS,
  data,
});

export const loadRelatedPostFailure = (error: string): LoadRelatedPostFailure => ({
  type: LOAD_RELATED_POSTS_FAILURE,
  error,
});

export type LoadRelatedPost = LoadRelatedPostRequest | LoadRelatedPostSuccess | LoadRelatedPostFailure;
