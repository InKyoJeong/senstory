export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME' as const;

export interface RemovePostOfMeRequest {
  type: typeof REMOVE_POST_OF_ME;
  data: number;
}

export const removePostOfMeRequest = (data: number): RemovePostOfMeRequest => ({
  type: REMOVE_POST_OF_ME,
  data,
});

export type RemovePostOfMe = RemovePostOfMeRequest;
