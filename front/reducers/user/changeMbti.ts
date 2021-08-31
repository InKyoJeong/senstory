export const CHANGE_MBTI_REQUEST = 'CHANGE_MBTI_REQUEST' as const;
export const CHANGE_MBTI_SUCCESS = 'CHANGE_MBTI_SUCCESS' as const;
export const CHANGE_MBTI_FAILURE = 'CHANGE_MBTI_FAILURE' as const;

export interface ChangeMbtiRequest {
  type: typeof CHANGE_MBTI_REQUEST;
  data: string;
}

export interface ChangeMbtiSuccess {
  type: typeof CHANGE_MBTI_SUCCESS;
  data: { mbti: string };
}

export interface ChangeMbtiFailure {
  type: typeof CHANGE_MBTI_FAILURE;
  error: string;
}

export const changeMbtiRequest = (data: string): ChangeMbtiRequest => ({
  type: CHANGE_MBTI_REQUEST,
  data,
});

export const changeMbtiSuccess = (data: { mbti: string }): ChangeMbtiSuccess => ({
  type: CHANGE_MBTI_SUCCESS,
  data,
});

export const changeMbtiFailure = (error: string): ChangeMbtiFailure => ({
  type: CHANGE_MBTI_FAILURE,
  error,
});

export type ChangeMbti = ChangeMbtiRequest | ChangeMbtiSuccess | ChangeMbtiFailure;
