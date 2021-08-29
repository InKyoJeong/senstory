export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST' as const;
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS' as const;
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE' as const;

export interface UnlikePostRequest {
  type: typeof UNLIKE_POST_REQUEST;
  data: number;
}

export interface UnlikePostSuccess {
  type: typeof UNLIKE_POST_SUCCESS;
  data: {
    PostId: number;
    UserId: number;
  };
}

export interface UnlikePostFailure {
  type: typeof UNLIKE_POST_FAILURE;
  error: string;
}

export const unlikePostRequest = (data: number): UnlikePostRequest => ({
  type: UNLIKE_POST_REQUEST,
  data,
});

export const unlikePostSuccess = (data: { PostId: number; UserId: number }): UnlikePostSuccess => ({
  type: UNLIKE_POST_SUCCESS,
  data,
});

export const unlikePostFailure = (error: string): UnlikePostFailure => ({
  type: UNLIKE_POST_FAILURE,
  error,
});

export type LikePost = UnlikePostRequest | UnlikePostSuccess | UnlikePostFailure;
