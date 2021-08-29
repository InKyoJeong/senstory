import { Post } from '../../interfaces/post';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE' as const;
export const ADD_POST_ERROR_FINISH = 'ADD_POST_ERROR_FINISH' as const;

export interface PostContent {
  image: string;
  content: string;
}

export interface AddPostRequest {
  type: typeof ADD_POST_REQUEST;
  data: PostContent;
}

export interface AddPostSuccess {
  type: typeof ADD_POST_SUCCESS;
  data: Post;
}

export interface AddPostFailure {
  type: typeof ADD_POST_FAILURE;
  error: string;
}

export interface AddPostErrorFinish {
  type: typeof ADD_POST_ERROR_FINISH;
}

export const addPostRequest = (data: PostContent): AddPostRequest => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addPostSuccess = (data: Post): AddPostSuccess => ({
  type: ADD_POST_SUCCESS,
  data,
});

export const addPostFailure = (error: string): AddPostFailure => ({
  type: ADD_POST_FAILURE,
  error,
});

export const addPostErrorFinish = (): AddPostErrorFinish => ({
  type: ADD_POST_ERROR_FINISH,
});

export type AddPost = AddPostRequest | AddPostSuccess | AddPostFailure | AddPostErrorFinish;
