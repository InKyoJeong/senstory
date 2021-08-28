export const BACK_TO_DIARY = 'BACK_TO_DIARY' as const;
export const BACK_TO_DIARY_FINISH = 'BACK_TO_DIARY_FINISH' as const;

export interface BackToDiaryRequest {
  type: typeof BACK_TO_DIARY;
}

export interface BackToDiaryFinish {
  type: typeof BACK_TO_DIARY_FINISH;
}

export const backToDiaryRequest = (): BackToDiaryRequest => ({
  type: BACK_TO_DIARY,
});

export const backToDiaryFinish = (): BackToDiaryFinish => ({
  type: BACK_TO_DIARY_FINISH,
});

export type BackToDiary = BackToDiaryRequest | BackToDiaryFinish;
