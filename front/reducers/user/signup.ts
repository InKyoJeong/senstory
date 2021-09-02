export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;

export interface SignupRequest {
  type: typeof SIGN_UP_REQUEST;
  data: {
    email: string;
    password: string;
    nickname: string;
  };
}

export interface SignupSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

export interface SignupFailure {
  type: typeof SIGN_UP_FAILURE;
  error: string;
}

export const signupRequest = (data: { email: string; password: string; nickname: string }): SignupRequest => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const signupSuccess = (): SignupSuccess => ({
  type: SIGN_UP_SUCCESS,
});

export const signupFailure = (error: string): SignupFailure => ({
  type: SIGN_UP_FAILURE,
  error,
});

export type Signup = SignupRequest | SignupSuccess | SignupFailure;
