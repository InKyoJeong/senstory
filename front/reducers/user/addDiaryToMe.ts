export const ADD_DIARY_TO_ME = 'ADD_DIARY_TO_ME' as const;

export interface AddDiaryToMeRequest {
  type: typeof ADD_DIARY_TO_ME;
  data: { id: number; feel: string };
}

export const addDiaryToMeRequest = (data: { id: number; feel: string }): AddDiaryToMeRequest => ({
  type: ADD_DIARY_TO_ME,
  data,
});

export type AddDiaryToMe = AddDiaryToMeRequest;
