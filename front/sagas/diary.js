import { all, fork, takeLatest, put, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_DIARY_TO_ME, REMOVE_DIARY_OF_ME } from '../actions/user';
import {
  loadUserDiarysFailure,
  loadUserDiarysSuccess,
  LOAD_USER_DIARYS_FAILURE,
  LOAD_USER_DIARYS_REQUEST,
  LOAD_USER_DIARYS_SUCCESS,
} from '../reducers/diary/loadUserDiarys';
import {
  loadSingleDiaryFailure,
  loadSingleDiaryRequest,
  loadSingleDiarySuccess,
  LOAD_SINGLE_DIARY_REQUEST,
} from '../reducers/diary/loadSingleDiary';
import {
  loadFeelDiarysFailure,
  loadFeelDiarysSuccess,
  LOAD_FEEL_DIARYS_REQUEST,
} from '../reducers/diary/loadFeelDiarys';
import {
  addDiaryErrorFinish,
  addDiaryFailure,
  addDiarySuccess,
  ADD_DIARY_ERROR_FINISH,
  ADD_DIARY_FAILURE,
  ADD_DIARY_REQUEST,
  ADD_DIARY_SUCCESS,
} from '../reducers/diary/addDiary';
import {
  removeDiaryFailure,
  removeDiarySuccess,
  REMOVE_DIARY_FAILURE,
  REMOVE_DIARY_REQUEST,
  REMOVE_DIARY_SUCCESS,
} from '../reducers/diary/removeDiary';
import { uploadPhotoFailure, uploadPhotoSuccess, UPLOAD_PHOTO_REQUEST } from '../reducers/diary/uploadPhoto';

function loadUserDiarysAPI(data, lastId) {
  return axios.get(`/diarys/${data}?lastId=${lastId || 0}`);
}

function* loadUserDiarys(action) {
  try {
    const result = yield call(loadUserDiarysAPI, action.data, action.lastId);
    // yield put({
    //   type: LOAD_USER_DIARYS_SUCCESS,
    //   data: result.data,
    // });
    yield put(loadUserDiarysSuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: LOAD_USER_DIARYS_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loadUserDiarysFailure(err));
  }
}

function loadDiaryAPI(data) {
  return axios.get(`/diary/${data}`);
}

function* loadDiary(action) {
  try {
    const result = yield call(loadDiaryAPI, action.data);
    // yield put({
    //   type: LOAD_SINGLE_DIARY_SUCCESS,
    //   data: result.data,
    // });
    yield put(loadSingleDiarySuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: LOAD_SINGLE_DIARY_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loadSingleDiaryFailure(err));
  }
}

function loadFeelDiarysAPI(id, feel, lastId) {
  return axios.get(`/feel/${id}/${feel}?lastId=${lastId || 0}`);
}

function* loadFeelDiarys(action) {
  try {
    const result = yield call(loadFeelDiarysAPI, action.id, action.feel, action.lastId);
    // yield put({
    //   type: LOAD_FEEL_DIARYS_SUCCESS,
    //   data: result.data,
    // });
    yield put(loadFeelDiarysSuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: LOAD_FEEL_DIARYS_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loadFeelDiarysFailure(err));
  }
}

function addDiaryAPI(data) {
  return axios.post('/diary', data);
}

function* addDiary(action) {
  try {
    const result = yield call(addDiaryAPI, action.data);
    // yield put({
    //   type: ADD_DIARY_SUCCESS,
    //   data: result.data,
    // });
    yield put(addDiarySuccess(result.data));
    yield put({
      type: ADD_DIARY_TO_ME,
      data: result.data,
    });
  } catch (err) {
    // yield put({
    //   type: ADD_DIARY_FAILURE,
    //   error: err.response.data,
    // });
    yield put(addDiaryFailure(err));
  } finally {
    // yield put({
    //   type: ADD_DIARY_ERROR_FINISH,
    // });
    yield put(addDiaryErrorFinish());
  }
}

function removeDiaryAPI(data) {
  return axios.delete(`/diary/${data}`);
}

function* removeDiary(action) {
  try {
    const result = yield call(removeDiaryAPI, action.data);
    // yield put({
    //   type: REMOVE_DIARY_SUCCESS,
    //   data: result.data,
    // });
    yield put(removeDiarySuccess(result.data));
    yield put({
      type: REMOVE_DIARY_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: REMOVE_DIARY_FAILURE,
    //   error: err.response.data,
    // });
    yield put(removeDiaryFailure(err));
  }
}

function uploadPhotosAPI(data) {
  return axios.post('/diary/photos', data);
}

function* uploadPhotos(action) {
  try {
    const result = yield call(uploadPhotosAPI, action.data);
    // yield put({
    //   type: UPLOAD_PHOTO_SUCCESS,
    //   data: result.data,
    // });
    yield put(uploadPhotoSuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: UPLOAD_PHOTO_FAILURE,
    //   error: err.response.data,
    // });
    yield put(uploadPhotoFailure(err));
  }
}

function* watchLoadUserDiarys() {
  yield throttle(5000, LOAD_USER_DIARYS_REQUEST, loadUserDiarys);
}

function* watchLoadFeelDiarys() {
  yield throttle(5000, LOAD_FEEL_DIARYS_REQUEST, loadFeelDiarys);
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
  yield takeLatest(UPLOAD_PHOTO_REQUEST, uploadPhotos);
}

export default function* diarySaga() {
  yield all([
    fork(watchLoadUserDiarys),
    fork(watchLoadFeelDiarys),
    fork(watchLoadDiary),
    fork(watchAddDiary),
    fork(watchRemoveDiary),
    fork(watchUploadPhotos),
  ]);
}
