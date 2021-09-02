export const REMOVE_IMAGE = 'REMOVE_IMAGE' as const;

export interface RemoveImageRequest {
  type: typeof REMOVE_IMAGE;
  data: number;
}

export const removeImageRequest = (data: number): RemoveImageRequest => ({
  type: REMOVE_IMAGE,
  data,
});

export type RemoveImage = RemoveImageRequest;
