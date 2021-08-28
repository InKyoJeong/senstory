export const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST' as const;
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS' as const;
export const UPLOAD_PHOTO_FAILURE = 'UPLOAD_PHOTO_FAILURE' as const;

export interface Photo {
  photo: string;
}

export interface UploadPhotoRequest {
  type: typeof UPLOAD_PHOTO_REQUEST;
  data: Photo;
}

export interface UploadPhotoSuccess {
  type: typeof UPLOAD_PHOTO_SUCCESS;
  data: string[];
}

export interface UploadPhotoFailure {
  type: typeof UPLOAD_PHOTO_FAILURE;
  error: string;
}

export const uploadPhotoRequest = (data: Photo): UploadPhotoRequest => ({
  type: UPLOAD_PHOTO_REQUEST,
  data,
});

export const uploadPhotoSuccess = (data: string[]): UploadPhotoSuccess => ({
  type: UPLOAD_PHOTO_SUCCESS,
  data,
});

export const uploadPhotoFailure = (error: string): UploadPhotoFailure => ({
  type: UPLOAD_PHOTO_FAILURE,
  error,
});

export type UploadPhoto = UploadPhotoRequest | UploadPhotoSuccess | UploadPhotoFailure;
