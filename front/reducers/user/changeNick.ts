export const CHANGE_NICK_REQUEST = 'CHANGE_NICK_REQUEST' as const;
export const CHANGE_NICK_SUCCESS = 'CHANGE_NICK_SUCCESS' as const;
export const CHANGE_NICK_FAILURE = 'CHANGE_NICK_FAILURE' as const;
export interface ChangeNickRequest {
  type: typeof CHANGE_NICK_REQUEST;
  data: string;
}

export interface ChangeNickSuccess {
  type: typeof CHANGE_NICK_SUCCESS;
  data: string;
}

export interface ChangeNickFailure {
  type: typeof CHANGE_NICK_FAILURE;
  error: string;
}

export const changeNickRequest = (data: string): ChangeNickRequest => ({
  type: CHANGE_NICK_REQUEST,
  data,
});

export const changeNickSuccess = (data: string): ChangeNickSuccess => ({
  type: CHANGE_NICK_SUCCESS,
  data,
});

export const changeNickFailure = (error: string): ChangeNickFailure => ({
  type: CHANGE_NICK_FAILURE,
  error,
});

export type changeNick = ChangeNickRequest | ChangeNickSuccess | ChangeNickFailure;
