export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST' as const;
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS' as const;
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE ' as const;

export interface Image {
  image: string;
}

export interface UploadImagesRequest {
  type: typeof UPLOAD_IMAGES_REQUEST;
  data: Image;
}

export interface UploadImagesSuccess {
  type: typeof UPLOAD_IMAGES_SUCCESS;
  data: string[];
}

export interface UploadImagesFailure {
  type: typeof UPLOAD_IMAGES_FAILURE;
  error: string;
}

export const uploadImagesRequest = (data: Image): UploadImagesRequest => ({
  type: UPLOAD_IMAGES_REQUEST,
  data,
});

export const uploadImagesSuccess = (data: string[]): UploadImagesSuccess => ({
  type: UPLOAD_IMAGES_SUCCESS,
  data,
});

export const uploadImagesFailure = (error: string): UploadImagesFailure => ({
  type: UPLOAD_IMAGES_FAILURE,
  error,
});

export type UploadImages = UploadImagesRequest | UploadImagesSuccess | UploadImagesFailure;
