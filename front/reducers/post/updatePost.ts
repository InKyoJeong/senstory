export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST' as const;
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS' as const;
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE' as const;

export interface PostUpdateContent {
  PostId: number;
  content: string;
}

export interface UpdatePostRequest {
  type: typeof UPDATE_POST_REQUEST;
  data: PostUpdateContent;
}

export interface UpdatePostSuccess {
  type: typeof UPDATE_POST_SUCCESS;
  data: PostUpdateContent;
}

export interface UpdatePostFailure {
  type: typeof UPDATE_POST_FAILURE;
  error: string;
}

export const updatePostRequest = (data: { PostId: number; content: string }): UpdatePostRequest => ({
  type: UPDATE_POST_REQUEST,
  data,
});

export const updatePostSuccess = (data: { PostId: number; content: string }): UpdatePostSuccess => ({
  type: UPDATE_POST_SUCCESS,
  data,
});

export const updatePostFailure = (error: string): UpdatePostFailure => ({
  type: UPDATE_POST_FAILURE,
  error,
});

export type UpdatePost = UpdatePostRequest | UpdatePostSuccess | UpdatePostFailure;
