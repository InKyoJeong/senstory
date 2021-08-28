import { produce } from 'immer';
import { UserInitialState } from '../../interfaces/diary';

import { AddDiary, ADD_DIARY_ERROR_FINISH, ADD_DIARY_FAILURE, ADD_DIARY_REQUEST, ADD_DIARY_SUCCESS } from './addDiary';
import { BackToDiary, BACK_TO_DIARY, BACK_TO_DIARY_FINISH } from './backToDiary';
import {
  LoadFeelDiarys,
  LOAD_FEEL_DIARYS_FAILURE,
  LOAD_FEEL_DIARYS_REQUEST,
  LOAD_FEEL_DIARYS_SUCCESS,
} from './loadFeelDiarys';
import {
  LoadSingleDiary,
  LOAD_SINGLE_DIARY_FAILURE,
  LOAD_SINGLE_DIARY_REQUEST,
  LOAD_SINGLE_DIARY_SUCCESS,
} from './loadSingleDiary';
import {
  LoadUserDiarys,
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
} from './loadUserDiarys';
import { RemoveDiary, REMOVE_DIARY_FAILURE, REMOVE_DIARY_REQUEST, REMOVE_DIARY_SUCCESS } from './removeDiary';
import { RemoveDiaryPhoto, REMOVE_DIARY_PHOTO } from './removeDiaryPhoto';
import { UploadPhoto, UPLOAD_PHOTO_FAILURE, UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS } from './uploadPhoto';

export const initialState: UserInitialState = {
  mainDiarys: [],
  photoPaths: [],
  singleDiary: null,
  hasMoreDiarys: true,
  loadUserDiarysLoading: false,
  loadUserDiarysFinish: false,
  loadUserDiarysError: null,
  loadSingleDiaryLoading: false,
  loadSingleDiaryFinish: false,
  loadSingleDiaryError: null,
  loadFeelDiarysLoading: false,
  loadFeelDiarysFinish: false,
  loadFeelDiarysError: null,
  addDiaryLoading: false,
  addDiaryFinish: false,
  addDiaryError: null,
  removeDiaryLoading: false,
  removeDiaryFinish: false,
  removeDiaryError: null,
  uploadPhotosLoading: false,
  uploadPhotosFinish: false,
  uploadPhotosError: null,
  backTodiary: false,
};

type ReducerAction =
  | AddDiary
  | BackToDiary
  | LoadFeelDiarys
  | LoadSingleDiary
  | LoadUserDiarys
  | RemoveDiary
  | RemoveDiaryPhoto
  | UploadPhoto;

const reducer = (state: UserInitialState = initialState, action: ReducerAction) => {
  return produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      case LOAD_USER_DIARYS_REQUEST:
        draft.loadUserDiarysLoading = true;
        draft.loadUserDiarysFinish = false;
        draft.loadUserDiarysError = null;
        break;
      case LOAD_USER_DIARYS_SUCCESS:
        draft.mainDiarys = draft.mainDiarys.concat(action.data);
        draft.loadUserDiarysFinish = true;
        draft.loadUserDiarysLoading = false;
        draft.hasMoreDiarys = action.data.length === 30;
        break;
      case LOAD_USER_DIARYS_FAILURE:
        draft.loadUserDiarysLoading = false;
        draft.loadUserDiarysError = action.error;
        break;
      case LOAD_SINGLE_DIARY_REQUEST:
        draft.loadSingleDiaryLoading = true;
        draft.loadSingleDiaryFinish = false;
        draft.loadSingleDiaryError = null;
        break;
      case LOAD_SINGLE_DIARY_SUCCESS:
        draft.loadSingleDiaryFinish = true;
        draft.loadSingleDiaryLoading = false;
        draft.singleDiary = action.data;
        break;
      case LOAD_SINGLE_DIARY_FAILURE:
        draft.loadSingleDiaryLoading = false;
        draft.loadSingleDiaryError = action.error;
        break;
      case LOAD_FEEL_DIARYS_REQUEST:
        draft.loadFeelDiarysLoading = true;
        draft.loadFeelDiarysFinish = false;
        draft.loadFeelDiarysError = null;
        break;
      case LOAD_FEEL_DIARYS_SUCCESS:
        draft.loadFeelDiarysFinish = true;
        draft.loadFeelDiarysLoading = false;
        draft.mainDiarys = draft.mainDiarys.concat(action.data);
        draft.hasMoreDiarys = action.data.length === 30;
        break;
      case LOAD_FEEL_DIARYS_FAILURE:
        draft.loadFeelDiarysLoading = false;
        draft.loadFeelDiarysError = action.error;
        break;
      case ADD_DIARY_REQUEST:
        draft.addDiaryLoading = true;
        draft.addDiaryFinish = false;
        draft.addDiaryError = null;
        break;
      case ADD_DIARY_SUCCESS:
        draft.mainDiarys.unshift(action.data);
        draft.addDiaryFinish = true;
        draft.addDiaryLoading = false;
        draft.photoPaths = [];
        break;
      case ADD_DIARY_FAILURE:
        draft.addDiaryLoading = false;
        draft.addDiaryError = action.error;
        break;
      case ADD_DIARY_ERROR_FINISH:
        draft.addDiaryError = null;
        break;
      case REMOVE_DIARY_REQUEST:
        draft.removeDiaryLoading = true;
        draft.removeDiaryFinish = false;
        draft.removeDiaryError = null;
        break;
      case REMOVE_DIARY_SUCCESS:
        draft.removeDiaryFinish = true;
        draft.removeDiaryLoading = false;
        draft.mainDiarys = draft.mainDiarys.filter((v) => v.id !== action.data.DiaryId);
        break;
      case REMOVE_DIARY_FAILURE:
        draft.removeDiaryLoading = false;
        draft.removeDiaryError = action.error;
        break;
      case UPLOAD_PHOTO_REQUEST:
        draft.uploadPhotosLoading = true;
        draft.uploadPhotosFinish = false;
        draft.uploadPhotosError = null;
        break;
      case UPLOAD_PHOTO_SUCCESS: {
        draft.photoPaths = action.data;
        draft.uploadPhotosLoading = false;
        draft.uploadPhotosFinish = true;
        break;
      }
      case UPLOAD_PHOTO_FAILURE: {
        draft.uploadPhotosLoading = false;
        draft.uploadPhotosError = action.error;
        break;
      }
      case REMOVE_DIARY_PHOTO:
        draft.photoPaths = draft.photoPaths.filter((v, i) => i !== action.data);
        break;
      case BACK_TO_DIARY:
        draft.backTodiary = true;
        break;
      case BACK_TO_DIARY_FINISH:
        draft.backTodiary = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
