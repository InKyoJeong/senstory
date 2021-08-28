import { Diary } from '../../interfaces/diary';

export const LOAD_FEEL_DIARYS_REQUEST = 'LOAD_FEEL_DIARYS_REQUEST' as const;
export const LOAD_FEEL_DIARYS_SUCCESS = 'LOAD_FEEL_DIARYS_SUCCESS' as const;
export const LOAD_FEEL_DIARYS_FAILURE = 'LOAD_FEEL_DIARYS_FAILURE' as const;

export interface LoadFeelDiarysRequest {
  type: typeof LOAD_FEEL_DIARYS_REQUEST;
  id: number;
  feel: string;
  lastId: number;
}

export interface LoadFeelDiarysSuccess {
  type: typeof LOAD_FEEL_DIARYS_SUCCESS;
  data: Diary[];
}

export interface LoadFeelDiarysFailure {
  type: typeof LOAD_FEEL_DIARYS_FAILURE;
  error: string;
}

export const loadFeelDiarysRequest = (id: number, feel: string, lastId: number) => ({
  type: LOAD_FEEL_DIARYS_REQUEST,
  id,
  feel,
  lastId,
});

export const loadFeelDiarysSuccess = (data: Diary[]) => ({
  type: LOAD_FEEL_DIARYS_SUCCESS,
  data,
});

export const loadFeelDiarysFailure = (error: string) => ({
  type: LOAD_FEEL_DIARYS_FAILURE,
  error,
});

export type LoadFeelDiarys = LoadFeelDiarysRequest | LoadFeelDiarysSuccess | LoadFeelDiarysFailure;
