import { produce } from "immer";
import {
  ADD_DIARY_FAILURE,
  ADD_DIARY_REQUEST,
  ADD_DIARY_SUCCESS,
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
  REMOVE_DIARY_FAILURE,
  REMOVE_DIARY_PHOTO,
  REMOVE_DIARY_REQUEST,
  REMOVE_DIARY_SUCCESS,
  UPLOAD_PHOTOS_FAILURE,
  UPLOAD_PHOTOS_REQUEST,
  UPLOAD_PHOTOS_SUCCESS,
} from "../actions/diary";

export const initialState = {
  mainDiarys: [],
  photoPaths: [],
  hasMoreDiarys: true,
  loadUserDiarysLoading: false,
  loadUserDiarysFinish: false,
  loadUserDiarysError: null,
  addDiaryLoading: false,
  addDiaryFinish: false,
  addDiaryError: null,
  removeDiaryLoading: false,
  removeDiaryFinish: false,
  removeDiaryError: null,
  uploadPhotosLoading: false,
  uploadPhotosFinish: false,
  uploadPhotosError: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
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
      case REMOVE_DIARY_REQUEST:
        draft.removeDiaryLoading = true;
        draft.removeDiaryFinish = false;
        draft.removeDiaryError = null;
        break;
      case REMOVE_DIARY_SUCCESS:
        draft.removeDiaryFinish = true;
        draft.removeDiaryLoading = false;
        draft.mainDiarys = draft.mainDiarys.filter(
          (v) => v.id !== action.data.DiaryId
        );
        break;
      case REMOVE_DIARY_FAILURE:
        draft.removeDiaryLoading = false;
        draft.removeDiaryError = action.error;
        break;
      case UPLOAD_PHOTOS_REQUEST:
        draft.uploadPhotosLoading = true;
        draft.uploadPhotosFinish = false;
        draft.uploadPhotosError = null;
        break;
      case UPLOAD_PHOTOS_SUCCESS: {
        draft.photoPaths = action.data;
        draft.uploadPhotosLoading = false;
        draft.uploadPhotosFinish = true;
        break;
      }
      case UPLOAD_PHOTOS_FAILURE: {
        draft.uploadPhotostLoading = false;
        draft.uploadPhotosError = action.error;
        break;
      }
      case REMOVE_DIARY_PHOTO:
        draft.photoPaths = draft.photoPaths.filter((v, i) => i !== action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;
