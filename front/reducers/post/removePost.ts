export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE' as const;

export interface RemovePostRequest {
  type: typeof REMOVE_POST_REQUEST;
  data: number;
}

export interface RemovePostSuccess {
  type: typeof REMOVE_POST_SUCCESS;
  data: {
    PostId: number;
  };
}

export interface RemovePostFailure {
  type: typeof REMOVE_POST_FAILURE;
  error: string;
}

export const removePostRequest = (data: number): RemovePostRequest => ({
  type: REMOVE_POST_REQUEST,
  data,
});

export const removePostSuccess = (data: { PostId: number }): RemovePostSuccess => ({
  type: REMOVE_POST_SUCCESS,
  data,
});

export const removePostFailure = (error: string): RemovePostFailure => ({
  type: REMOVE_POST_FAILURE,
  error,
});

export type RemovePost = RemovePostRequest | RemovePostSuccess | RemovePostFailure;
