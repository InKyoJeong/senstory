import { Post } from '../../interfaces/post';
import { LoadUserAllPostFailure } from './loadUserAllPost';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST' as const;
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS' as const;
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE' as const;

export interface LoadHashtagPostsRequest {
  type: typeof LOAD_HASHTAG_POSTS_REQUEST;
  data: string;
  lastId: number;
}

export interface LoadHashtagPostsSuccess {
  type: typeof LOAD_HASHTAG_POSTS_SUCCESS;
  data: Post[];
}

export interface LoadHashtagPostsFailure {
  type: typeof LOAD_HASHTAG_POSTS_FAILURE;
  error: string;
}

export const loadHashtagPostsRequest = (data: string, lastId: number): LoadHashtagPostsRequest => ({
  type: LOAD_HASHTAG_POSTS_REQUEST,
  data,
  lastId,
});

export const loadHashtagPostsSuccess = (data: Post[]): LoadHashtagPostsSuccess => ({
  type: LOAD_HASHTAG_POSTS_SUCCESS,
  data,
});

export const loadHashtagPostsFailure = (error: string): LoadHashtagPostsFailure => ({
  type: LOAD_HASHTAG_POSTS_FAILURE,
  error,
});

export type LoadHashtagPosts = LoadHashtagPostsRequest | LoadHashtagPostsSuccess | LoadHashtagPostsFailure;
