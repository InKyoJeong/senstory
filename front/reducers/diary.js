import { produce } from "immer";
import {
  ADD_DIARY_FAILURE,
  ADD_DIARY_REQUEST,
  ADD_DIARY_SUCCESS,
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
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
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_DIARYS_REQUEST:
        draft.loadUserDiarysLoading = true;
        draft.loadUserDiarysFinish = false;
        draft.loadUserDiarysError = null;
      case LOAD_USER_DIARYS_SUCCESS:
        draft.mainDiarys = draft.mainDiarys.concat(action.data);
        draft.loadUserDiarysLoading = false;
        draft.loadUserDiarysFinish = true;
      case LOAD_USER_DIARYS_FAILURE:
        draft.loadUserDiarysLoading = false;
        draft.loadUserDiarysError = action.error;
      case ADD_DIARY_REQUEST:
        draft.addDiaryLoading = true;
        draft.addDiaryFinish = false;
        draft.addDiaryError = null;
      case ADD_DIARY_SUCCESS:
        draft.mainDiarys.unshift(action.data);
        draft.addDiaryFinish = true;
        draft.addDiaryLoading = false;
      // draft.photoPaths = [];
      case ADD_DIARY_FAILURE:
        draft.addDiaryLoading = false;
        draft.addDiaryError = action.error;
      default:
        break;
    }
  });
};

export default reducer;
