import { Diary } from '../../interfaces/diary';

export const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST' as const;
export const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS' as const;
export const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE' as const;
export const ADD_DIARY_ERROR_FINISH = 'ADD_DIARY_ERROR_FINISH' as const;

export interface DiaryContent {
  photo: string;
  title: string;
  content: string;
  feel: string;
  maxtemp: string | number | null;
  mintemp: string | number | null;
}

export interface AddDiaryRequest {
  type: typeof ADD_DIARY_REQUEST;
  data: DiaryContent | FormData;
}

export interface AddDiarySuccess {
  type: typeof ADD_DIARY_SUCCESS;
  data: Diary;
}

export interface AddDiaryFailure {
  type: typeof ADD_DIARY_FAILURE;
  error: string;
}

export interface AddDiaryErrorFinish {
  type: typeof ADD_DIARY_ERROR_FINISH;
}

export const addDiaryRequest = (data: DiaryContent | FormData): AddDiaryRequest => ({
  type: ADD_DIARY_REQUEST,
  data,
});

export const addDiarySuccess = (data: Diary): AddDiarySuccess => ({
  type: ADD_DIARY_SUCCESS,
  data,
});

export const addDiaryFailure = (error: string): AddDiaryFailure => ({
  type: ADD_DIARY_FAILURE,
  error,
});

export const addDiaryErrorFinish = (): AddDiaryErrorFinish => ({
  type: ADD_DIARY_ERROR_FINISH,
});

export type AddDiary = AddDiaryRequest | AddDiarySuccess | AddDiaryFailure | AddDiaryErrorFinish;
