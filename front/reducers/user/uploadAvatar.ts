export const UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST' as const;
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS' as const;
export const UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE' as const;

export interface AvatarImage {
  image: string;
}
export interface UploadAvatarRequest {
  type: typeof UPLOAD_AVATAR_REQUEST;
  data: AvatarImage;
}

export interface UploadAvatarSuccess {
  type: typeof UPLOAD_AVATAR_SUCCESS;
  data: string[];
}

export interface UploadAvatarFailure {
  type: typeof UPLOAD_AVATAR_FAILURE;
  error: string;
}

export const uploadAvatarRequest = (data: AvatarImage): UploadAvatarRequest => ({
  type: UPLOAD_AVATAR_REQUEST,
  data,
});

export const uploadAvatarSuccess = (data: string[]): UploadAvatarSuccess => ({
  type: UPLOAD_AVATAR_SUCCESS,
  data,
});

export const uploadAvatarFailure = (error: string): UploadAvatarFailure => ({
  type: UPLOAD_AVATAR_FAILURE,
  error,
});

export type UploadAvatar = UploadAvatarRequest | UploadAvatarSuccess | UploadAvatarFailure;
