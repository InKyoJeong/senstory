export const CHANGE_INTRO_REQUEST = 'CHANGE_INTRO_REQUEST' as const;
export const CHANGE_INTRO_SUCCESS = 'CHANGE_INTRO_SUCCESS' as const;
export const CHANGE_INTRO_FAILURE = 'CHANGE_INTRO_FAILURE' as const;

export interface ChangeIntroRequest {
  type: typeof CHANGE_INTRO_REQUEST;
  data: string;
}

export interface ChangeIntroSuccess {
  type: typeof CHANGE_INTRO_SUCCESS;
  data: { intro: string };
}

export interface ChangeIntroFailure {
  type: typeof CHANGE_INTRO_FAILURE;
  error: string;
}

export const changeIntroRequest = (data: string): ChangeIntroRequest => ({
  type: CHANGE_INTRO_REQUEST,
  data,
});

export const changeIntroSuccess = (data: { intro: string }): ChangeIntroSuccess => ({
  type: CHANGE_INTRO_SUCCESS,
  data,
});

export const changeIntroFailure = (error: string): ChangeIntroFailure => ({
  type: CHANGE_INTRO_FAILURE,
  error,
});

export type ChangeIntro = ChangeIntroRequest | ChangeIntroSuccess | ChangeIntroFailure;
