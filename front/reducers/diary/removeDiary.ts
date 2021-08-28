export const REMOVE_DIARY_REQUEST = 'REMOVE_DIARY_REQUEST' as const;
export const REMOVE_DIARY_SUCCESS = 'REMOVE_DIARY_SUCCESS' as const;
export const REMOVE_DIARY_FAILURE = 'REMOVE_DIARY_FAILURE' as const;

export interface RemoveDiaryRequest {
  type: typeof REMOVE_DIARY_REQUEST;
  data: number;
}

export interface RemoveDiarySuccess {
  type: typeof REMOVE_DIARY_SUCCESS;
  data: number;
}

export interface RemoveDiaryFailure {
  type: typeof REMOVE_DIARY_FAILURE;
  error: string;
}

export const removeDiaryRequest = (data: number): RemoveDiaryRequest => ({
  type: REMOVE_DIARY_REQUEST,
  data,
});

export const removeDiarySuccess = (data: number): RemoveDiarySuccess => ({
  type: REMOVE_DIARY_SUCCESS,
  data,
});

export const removeDiaryFailure = (error: string): RemoveDiaryFailure => ({
  type: REMOVE_DIARY_FAILURE,
  error,
});

export type RemoveDiary = RemoveDiaryRequest | RemoveDiarySuccess | RemoveDiaryFailure;
