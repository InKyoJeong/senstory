import { Diary } from '../../interfaces/diary';

export const LOAD_SINGLE_DIARY_REQUEST = 'LOAD_SINGLE_DIARY_REQUEST' as const;
export const LOAD_SINGLE_DIARY_SUCCESS = 'LOAD_SINGLE_DIARY_SUCCESS' as const;
export const LOAD_SINGLE_DIARY_FAILURE = 'LOAD_SINGLE_DIARY_FAILURE' as const;

export interface LoadSingleDiaryRequest {
  type: typeof LOAD_SINGLE_DIARY_REQUEST;
  data: string | number;
}

export interface LoadSingleDiarySuccess {
  type: typeof LOAD_SINGLE_DIARY_SUCCESS;
  data: Diary;
}

export interface LoadSingleDiaryFailure {
  type: typeof LOAD_SINGLE_DIARY_FAILURE;
  error: string;
}

export const loadSingleDiaryRequest = (data: string | number): LoadSingleDiaryRequest => ({
  type: LOAD_SINGLE_DIARY_REQUEST,
  data,
});

export const loadSingleDiarySuccess = (data: Diary): LoadSingleDiarySuccess => ({
  type: LOAD_SINGLE_DIARY_SUCCESS,
  data,
});

export const loadSingleDiaryFailure = (error: string): LoadSingleDiaryFailure => ({
  type: LOAD_SINGLE_DIARY_FAILURE,
  error,
});

export type LoadSingleDiary = LoadSingleDiaryRequest | LoadSingleDiarySuccess | LoadSingleDiaryFailure;
