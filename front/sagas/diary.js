import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
} from "../actions/diary";

function loadUserDiarysAPI(data, lastId) {
  return axios.get(`/diarys/${data}?lastId=${lastId || 0}`);
}

function* loadUserDiarys(action) {
  try {
    const result = yield call(loadUserDiarysAPI, action.data, action.lastId);
    yield put({
      type: LOAD_USER_DIARYS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_DIARYS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUserDiarys() {
  yield throttle(5000, LOAD_USER_DIARYS_REQUEST, loadUserDiarys);
}

export default function* diarySaga() {
  yield all([fork(watchLoadUserDiarys)]);
}
