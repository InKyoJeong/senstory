export const SAVE_AVATAR_REQUEST = 'SAVE_AVATAR_REQUEST' as const;
export const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS' as const;
export const SAVE_AVATAR_FAILURE = 'SAVE_AVATAR_FAILURE' as const;

export interface SaveAvatarRequest {
  type: typeof SAVE_AVATAR_REQUEST;
  data: string;
}

export interface SaveAvatarSuccess {
  type: typeof SAVE_AVATAR_SUCCESS;
  data: { avatar: string };
}

export interface SaveAvatarFailure {
  type: typeof SAVE_AVATAR_FAILURE;
  error: string;
}

export const saveAvatarRequest = (data: string): SaveAvatarRequest => ({
  type: SAVE_AVATAR_REQUEST,
  data,
});

export const saveAvatarSuccess = (data: { avatar: string }): SaveAvatarSuccess => ({
  type: SAVE_AVATAR_SUCCESS,
  data,
});

export const saveAvatarFailure = (error: string): SaveAvatarFailure => ({
  type: SAVE_AVATAR_FAILURE,
  error,
});

export type SaveAvatar = SaveAvatarRequest | SaveAvatarSuccess | SaveAvatarFailure;
