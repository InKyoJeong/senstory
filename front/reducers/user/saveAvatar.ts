export const SAVE_AVATAR_REQUEST = 'SAVE_AVATAR_REQUEST' as const;
export const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS' as const;
export const SAVE_AVATAR_FAILURE = 'SAVE_AVATAR_FAILURE' as const;

export interface saveAvatarRequest {
  type: typeof SAVE_AVATAR_REQUEST;
  data: string;
}

export interface saveAvatarSuccess {
  type: typeof SAVE_AVATAR_SUCCESS;
  data: string;
}

export interface saveAvatarFailure {
  type: typeof SAVE_AVATAR_FAILURE;
  error: string;
}

export const saveAvatarRequest = (data: string): saveAvatarRequest => ({
  type: SAVE_AVATAR_REQUEST,
  data,
});

export const saveAvatarSuccess = (data: string): saveAvatarSuccess => ({
  type: SAVE_AVATAR_SUCCESS,
  data,
});

export const saveAvatarFailure = (error: string): saveAvatarFailure => ({
  type: SAVE_AVATAR_FAILURE,
  error,
});

export type saveAvatar = saveAvatarRequest | saveAvatarSuccess | saveAvatarFailure;
