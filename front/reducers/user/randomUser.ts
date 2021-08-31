export const RANDOM_USER_REQUEST = 'RANDOM_USER_REQUEST' as const;
export const RANDOM_USER_SUCCESS = 'RANDOM_USER_SUCCESS' as const;
export const RANDOM_USER_FAILURE = 'RANDOM_USER_FAILURE' as const;

export interface RandomUserRequest {
  type: typeof RANDOM_USER_REQUEST;
}

export interface RandomUserSuccess {
  type: typeof RANDOM_USER_SUCCESS;
  data: RandomUser;
}

export interface RandomUserFailure {
  type: typeof RANDOM_USER_FAILURE;
  error: string;
}

export const randomUserRequest = (): RandomUserRequest => ({
  type: RANDOM_USER_REQUEST,
});

export const randomUserSuccess = (data: RandomUser): RandomUserSuccess => ({
  type: RANDOM_USER_SUCCESS,
  data,
});

export const randomUserFailure = (error: string): RandomUserFailure => ({
  type: RANDOM_USER_FAILURE,
  error,
});

export type RandomUser = RandomUserRequest | RandomUserSuccess | RandomUserFailure;
