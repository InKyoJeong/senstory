export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST' as const;
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS' as const;
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE' as const;

export interface UnfollowRequest {
  type: typeof UNFOLLOW_REQUEST;
  data: number;
}

export interface UnfollowSuccess {
  type: typeof UNFOLLOW_SUCCESS;
  data: { UserId: number };
}

export interface UnfollowFailure {
  type: typeof UNFOLLOW_FAILURE;
  error: string;
}

export const unfollowRequest = (data: number): UnfollowRequest => ({
  type: UNFOLLOW_REQUEST,
  data,
});

export const unfollowSuccess = (data: { UserId: number }): UnfollowSuccess => ({
  type: UNFOLLOW_SUCCESS,
  data,
});

export const unfollowFailure = (error: string): UnfollowFailure => ({
  type: UNFOLLOW_FAILURE,
  error,
});

export type Unfollow = UnfollowRequest | UnfollowSuccess | UnfollowFailure;
