export interface DiaryUser {
  id: number;
  nickname: string;
  avatar: string;
}

export interface DiaryPhoto {
  id: number;
  DiaryId: number;
  createdAt: Date;
  src: string;
  updatedAt: Date;
}

export interface Diary {
  id: number;
  Photos: DiaryPhoto[];
  User: DiaryUser;
  UserId: number;
  content: string;
  createdAt: Date;
  feel: string;
  maxtemp: number;
  mintemp: number;
  title: string;
  updatedAt: Date;
}

export interface DiaryInitialState {
  mainDiarys: Diary[];
  photoPaths: string[];
  singleDiary: Diary | null;
  hasMoreDiarys: boolean;
  loadUserDiarysLoading: boolean;
  loadUserDiarysFinish: boolean;
  loadUserDiarysError: string | null;
  loadSingleDiaryLoading: boolean;
  loadSingleDiaryFinish: boolean;
  loadSingleDiaryError: string | null;
  loadFeelDiarysLoading: boolean;
  loadFeelDiarysFinish: boolean;
  loadFeelDiarysError: string | null;
  addDiaryLoading: boolean;
  addDiaryFinish: boolean;
  addDiaryError: string | null;
  removeDiaryLoading: boolean;
  removeDiaryFinish: boolean;
  removeDiaryError: string | null;
  uploadPhotosLoading: boolean;
  uploadPhotosFinish: boolean;
  uploadPhotosError: string | null;
  backTodiary: boolean;
}
