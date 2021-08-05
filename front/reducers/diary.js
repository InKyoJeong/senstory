import { produce } from "immer";
import {
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
} from "../actions/diary";

export const initialState = {
  mainDiarys: [],
  hasMoreDiarys: true,
  loadUserDiarysLoading: false,
  loadUserDiarysFinish: false,
  loadUserDiarysError: null,
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
      default:
        breaks;
    }
  });
};

export default reducer;
