import { Diary } from '../../interfaces/diary';

export const LOAD_USER_DIARYS_REQUEST = 'LOAD_USER_DIARYS_REQUEST' as const;
export const LOAD_USER_DIARYS_SUCCESS = 'LOAD_USER_DIARYS_SUCCESS' as const;
export const LOAD_USER_DIARYS_FAILURE = 'LOAD_USER_DIARYS_FAILURE' as const;

export interface LoadUserDiarysRequest {
  type: typeof LOAD_USER_DIARYS_REQUEST;
  data: number;
  lastId: number;
}

export interface LoadUserDiarysSuccess {
  type: typeof LOAD_USER_DIARYS_SUCCESS;
  data: Diary[];
}

export interface LoadUserDiarysFailure {
  type: typeof LOAD_USER_DIARYS_FAILURE;
  error: string;
}

export const loadUserDiarysRequest = (data: number, lastId: number): LoadUserDiarysRequest => ({
  type: LOAD_USER_DIARYS_REQUEST,
  data,
  lastId,
});

export const loadUserDiarysSuccess = (data: Diary[]): LoadUserDiarysSuccess => ({
  type: LOAD_USER_DIARYS_SUCCESS,
  data,
});

export const loadUserDiarysFailure = (error: string): LoadUserDiarysFailure => ({
  type: LOAD_USER_DIARYS_FAILURE,
  error,
});

export type LoadUserDiarys = LoadUserDiarysRequest | LoadUserDiarysSuccess | LoadUserDiarysFailure;
