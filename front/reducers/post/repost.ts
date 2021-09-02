import { Post } from '../../interfaces/post';

export const REPOST_REQUEST = 'REPOST_REQUEST' as const;
export const REPOST_SUCCESS = 'REPOST_SUCCESS' as const;
export const REPOST_FAILURE = 'REPOST_FAILURE ' as const;
export const REPOST_ERROR_FINISH = 'REPOST_ERROR_FINISH' as const;

export interface RepostRequest {
  type: typeof REPOST_REQUEST;
  data: number;
}

export interface RepostSuccess {
  type: typeof REPOST_SUCCESS;
  data: Post;
}

export interface RepostFailure {
  type: typeof REPOST_FAILURE;
  error: string;
}

export interface RepostErrorFinish {
  type: typeof REPOST_ERROR_FINISH;
}

export const repostRequest = (data: number): RepostRequest => ({
  type: REPOST_REQUEST,
  data,
});

export const repostSuccess = (data: Post): RepostSuccess => ({
  type: REPOST_SUCCESS,
  data,
});

export const repostFailure = (error: string): RepostFailure => ({
  type: REPOST_FAILURE,
  error,
});

export const repostErrorFinish = (): RepostErrorFinish => ({
  type: REPOST_ERROR_FINISH,
});

export type Repost = RepostRequest | RepostSuccess | RepostFailure | RepostErrorFinish;
