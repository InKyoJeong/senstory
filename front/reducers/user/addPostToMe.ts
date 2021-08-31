export const ADD_POST_TO_ME = 'ADD_POST_TO_ME' as const;

export interface AddPostToMeRequest {
  type: typeof ADD_POST_TO_ME;
  data: number;
}

export const addPostToMeRequest = (data: number): AddPostToMeRequest => ({
  type: ADD_POST_TO_ME,
  data,
});

export type AddPostToMe = AddPostToMeRequest;
