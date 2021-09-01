export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST' as const;
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS' as const;
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE' as const;

export interface RemoveFollowerRequest {
  type: typeof REMOVE_FOLLOWER_REQUEST;
  data: number;
}

export interface RemoveFollowerSuccess {
  type: typeof REMOVE_FOLLOWER_SUCCESS;
  data: { UserId: number };
}

export interface RemoveFollowerFailure {
  type: typeof REMOVE_FOLLOWER_FAILURE;
  error: string;
}

export const removeFollowerRequest = (data: number): RemoveFollowerRequest => ({
  type: REMOVE_FOLLOWER_REQUEST,
  data,
});

export const removeFollowerSuccess = (data: { UserId: number }): RemoveFollowerSuccess => ({
  type: REMOVE_FOLLOWER_SUCCESS,
  data,
});

export const removeFollowerFailure = (error: string): RemoveFollowerFailure => ({
  type: REMOVE_FOLLOWER_FAILURE,
  error,
});

export type RemoveFollower = RemoveFollowerRequest | RemoveFollowerSuccess | RemoveFollowerFailure;
