import { all, fork, takeLatest, put, call, throttle } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_DIARY_FAILURE,
  ADD_DIARY_REQUEST,
  ADD_DIARY_SUCCESS,
  LOAD_SINGLE_DIARY_FAILURE,
  LOAD_SINGLE_DIARY_REQUEST,
  LOAD_SINGLE_DIARY_SUCCESS,
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
  REMOVE_DIARY_FAILURE,
  REMOVE_DIARY_REQUEST,
  REMOVE_DIARY_SUCCESS,
  UPLOAD_PHOTOS_FAILURE,
  UPLOAD_PHOTOS_REQUEST,
  UPLOAD_PHOTOS_SUCCESS,
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

function loadDiaryAPI(data) {
  return axios.get(`/diary/${data}`);
}

function* loadDiary(action) {
  try {
    const result = yield call(loadDiaryAPI, action.data);
    yield put({
      type: LOAD_SINGLE_DIARY_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SINGLE_DIARY_FAILURE,
      error: err.response.data,
    });
  }
}

function addDiaryAPI(data) {
  return axios.post("/diary", data);
}

function* addDiary(action) {
  try {
    console.log(action.data);
    const result = yield call(addDiaryAPI, action.data);
    console.log("addDiary saga result", result);
    yield put({
      type: ADD_DIARY_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_DIARY_FAILURE,
      error: err.response.data,
    });
  }
}

function removeDiaryAPI(data) {
  return axios.delete(`/diary/${data}`);
}

function* removeDiary(action) {
  try {
    const result = yield call(removeDiaryAPI, action.data);
    yield put({
      type: REMOVE_DIARY_SUCCESS,
      data: result.data,
    });
    // yield put({
    //   type: REMOVE_DIARY_OF_ME,
    //   data: action.data,
    // });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_DIARY_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadPhotosAPI(data) {
  return axios.post("/diary/photos", data);
}

function* uploadPhotos(action) {
  try {
    const result = yield call(uploadPhotosAPI, action.data);
    console.log(result);
    yield put({
      type: UPLOAD_PHOTOS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_PHOTOS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUserDiarys() {
  yield throttle(5000, LOAD_USER_DIARYS_REQUEST, loadUserDiarys);
}

function* watchLoadDiary() {
  yield takeLatest(LOAD_SINGLE_DIARY_REQUEST, loadDiary);
}

function* watchAddDiary() {
  yield takeLatest(ADD_DIARY_REQUEST, addDiary);
}

function* watchRemoveDiary() {
  yield takeLatest(REMOVE_DIARY_REQUEST, removeDiary);
}

function* watchUploadPhotos() {
  yield takeLatest(UPLOAD_PHOTOS_REQUEST, uploadPhotos);
}

export default function* diarySaga() {
  yield all([
    fork(watchLoadUserDiarys),
    fork(watchLoadDiary),
    fork(watchAddDiary),
    fork(watchRemoveDiary),
    fork(watchUploadPhotos),
  ]);
}
