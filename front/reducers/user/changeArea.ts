export const CHANGE_AREA_REQUEST = 'CHANGE_AREA_REQUEST' as const;
export const CHANGE_AREA_SUCCESS = 'CHANGE_AREA_SUCCESS' as const;
export const CHANGE_AREA_FAILURE = 'CHANGE_AREA_FAILURE' as const;

export interface ChangeAreaRequest {
  type: typeof CHANGE_AREA_REQUEST;
  data: string;
}

export interface ChangeAreaSuccess {
  type: typeof CHANGE_AREA_SUCCESS;
  data: { area: string };
}

export interface ChangeAreaFailure {
  type: typeof CHANGE_AREA_FAILURE;
  error: string;
}

export const changeAreaRequest = (data: string): ChangeAreaRequest => ({
  type: CHANGE_AREA_REQUEST,
  data,
});

export const changeAreaSuccess = (data: { area: string }): ChangeAreaSuccess => ({
  type: CHANGE_AREA_SUCCESS,
  data,
});

export const changeAreaFailure = (error: string): ChangeAreaFailure => ({
  type: CHANGE_AREA_FAILURE,
  error,
});

export type ChangeArea = ChangeAreaRequest | ChangeAreaSuccess | ChangeAreaFailure;
