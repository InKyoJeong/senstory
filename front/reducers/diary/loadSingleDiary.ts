import { Diary } from '../../interfaces/diary';

export const LOAD_SINGLE_DIARY_REQUEST = 'LOAD_SINGLE_DIARY_REQUEST' as const;
export const LOAD_SINGLE_DIARY_SUCCESS = 'LOAD_SINGLE_DIARY_SUCCESS' as const;
export const LOAD_SINGLE_DIARY_FAILURE = 'LOAD_SINGLE_DIARY_FAILURE' as const;

export const loadSingleDiaryRequest = (data: string) => ({
  type: LOAD_SINGLE_DIARY_REQUEST,
  data,
});

export const loadSingleDiarySuccess = (data: Diary) => ({
  type: LOAD_SINGLE_DIARY_SUCCESS,
  data,
});

export const loadSingleDiaryFailure = (error: string) => ({
  type: LOAD_SINGLE_DIARY_FAILURE,
  error,
});
