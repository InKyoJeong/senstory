import { Comment } from '../../interfaces/post';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export interface CommentContent {
  content: string;
  postId: number;
  userId: number;
}

export interface AddCommentRequest {
  type: typeof ADD_COMMENT_REQUEST;
  data: CommentContent;
}

export interface AddCommentSuccess {
  type: typeof ADD_COMMENT_SUCCESS;
  data: Comment;
}

export interface AddCommentFailure {
  type: typeof ADD_COMMENT_FAILURE;
  error: string;
}

export const addCommentRequest = (data: CommentContent): AddCommentRequest => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

export const addCommentSuccess = (data: Comment): AddCommentSuccess => ({
  type: ADD_COMMENT_SUCCESS,
  data,
});

export const addCommentFailure = (error: string): AddCommentFailure => ({
  type: ADD_COMMENT_FAILURE,
  error,
});

export type AddComment = AddCommentRequest | AddCommentSuccess | AddCommentFailure;
