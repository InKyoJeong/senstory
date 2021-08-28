export const REMOVE_DIARY_PHOTO = 'REMOVE_DIARY_PHOTO' as const;

export interface RemoveDiaryPhotoRequest {
  type: typeof REMOVE_DIARY_PHOTO;
  data: number;
}

export const removeDiaryPhotoRequest = (data: number): RemoveDiaryPhotoRequest => ({
  type: REMOVE_DIARY_PHOTO,
  data,
});

export type RemoveDiaryPhoto = RemoveDiaryPhotoRequest;
