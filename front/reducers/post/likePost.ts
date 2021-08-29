export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE' as const;

export interface LikePostRequest {
  type: typeof LIKE_POST_REQUEST;
  data: number;
}

export interface LikePostSuccess {
  type: typeof LIKE_POST_SUCCESS;
  data: {
    PostId: number;
    UserId: number;
  };
}

export interface LikePostFailure {
  type: typeof LIKE_POST_FAILURE;
  error: string;
}

export const likePostRequest = (data: number): LikePostRequest => ({
  type: LIKE_POST_REQUEST,
  data,
});

export const likePostSuccess = (data: { PostId: number; UserId: number }): LikePostSuccess => ({
  type: LIKE_POST_SUCCESS,
  data,
});

export const likePostFailure = (error: string): LikePostFailure => ({
  type: LIKE_POST_FAILURE,
  error,
});

export type LikePost = LikePostRequest | LikePostSuccess | LikePostFailure;
