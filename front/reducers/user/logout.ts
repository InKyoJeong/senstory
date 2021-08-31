export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE' as const;

export interface LogoutRequest {
  type: typeof LOG_OUT_REQUEST;
}

export interface LogoutSuccess {
  type: typeof LOG_OUT_SUCCESS;
}

export interface LogoutFailure {
  type: typeof LOG_OUT_FAILURE;
  error: string;
}

export const logoutRequest = (): LogoutRequest => ({
  type: LOG_OUT_REQUEST,
});

export const logoutSuccess = (): LogoutSuccess => ({
  type: LOG_OUT_SUCCESS,
});

export const logoutFailure = (error: string): LogoutFailure => ({
  type: LOG_OUT_FAILURE,
  error,
});

export type Logout = LogoutRequest | LogoutSuccess | LogoutFailure;
