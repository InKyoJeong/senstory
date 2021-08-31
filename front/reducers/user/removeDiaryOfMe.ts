export const REMOVE_DIARY_OF_ME = 'REMOVE_DIARY_OF_ME' as const;

export interface RemoveDiaryOfMeRequest {
  type: typeof REMOVE_DIARY_OF_ME;
  data: number;
}

export const removeDiaryOfMeRequest = (data: number): RemoveDiaryOfMeRequest => ({
  type: REMOVE_DIARY_OF_ME,
  data,
});

export type RemoveDiary = RemoveDiaryOfMeRequest;
