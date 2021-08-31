import { all, fork, takeLatest, put, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
  loadUserDiarysFailure,
  LoadUserDiarysRequest,
  loadUserDiarysSuccess,
  LOAD_USER_DIARYS_REQUEST,
} from '../reducers/diary/loadUserDiarys';
import {
  loadSingleDiaryFailure,
  LoadSingleDiaryRequest,
  loadSingleDiarySuccess,
  LOAD_SINGLE_DIARY_REQUEST,
} from '../reducers/diary/loadSingleDiary';
import {
  loadFeelDiarysFailure,
  LoadFeelDiarysRequest,
  loadFeelDiarysSuccess,
  LOAD_FEEL_DIARYS_REQUEST,
} from '../reducers/diary/loadFeelDiarys';
import {
  addDiaryErrorFinish,
  addDiaryFailure,
  AddDiaryRequest,
  addDiarySuccess,
  ADD_DIARY_REQUEST,
  DiaryContent,
} from '../reducers/diary/addDiary';
import {
  removeDiaryFailure,
  RemoveDiaryRequest,
  removeDiarySuccess,
  REMOVE_DIARY_REQUEST,
} from '../reducers/diary/removeDiary';
import {
  Photo,
  uploadPhotoFailure,
  UploadPhotoRequest,
  uploadPhotoSuccess,
  UPLOAD_PHOTO_REQUEST,
} from '../reducers/diary/uploadPhoto';
import { SagaIterator } from 'redux-saga';
import { ADD_DIARY_TO_ME } from '../reducers/user/addDiaryToMe';
import { REMOVE_DIARY_OF_ME } from '../reducers/user/removeDiaryOfMe';

function loadUserDiarysAPI(data: number | string, lastId?: number) {
  return axios.get(`/diarys/${data}?lastId=${lastId || 0}`);
}

function* loadUserDiarys(action: LoadUserDiarysRequest): SagaIterator {
  try {
    const result = yield call(loadUserDiarysAPI, action.data, action.lastId);
    yield put(loadUserDiarysSuccess(result.data));
  } catch (err) {
    console.error(err);
    yield put(loadUserDiarysFailure(err.response.data));
  }
}

function loadDiaryAPI(data: number | string) {
  return axios.get(`/diary/${data}`);
}

function* loadDiary(action: LoadSingleDiaryRequest): SagaIterator {
  try {
    const result = yield call(loadDiaryAPI, action.data);
    yield put(loadSingleDiarySuccess(result.data));
  } catch (err) {
    console.error(err);
    yield put(loadSingleDiaryFailure(err.response.data));
  }
}

function loadFeelDiarysAPI(id: number, feel: string, lastId?: number) {
  return axios.get(`/feel/${id}/${feel}?lastId=${lastId || 0}`);
}

function* loadFeelDiarys(action: LoadFeelDiarysRequest): SagaIterator {
  try {
    const result = yield call(loadFeelDiarysAPI, action.id, action.feel, action.lastId);
    yield put(loadFeelDiarysSuccess(result.data));
  } catch (err) {
    console.error(err);
    yield put(loadFeelDiarysFailure(err.response.data));
  }
}

function addDiaryAPI(data: DiaryContent) {
  return axios.post('/diary', data);
}

function* addDiary(action: AddDiaryRequest): SagaIterator {
  try {
    const result = yield call(addDiaryAPI, action.data);
    yield put(addDiarySuccess(result.data));
    // yield put({
    //   type: ADD_DIARY_TO_ME,
    //   data: result.data,
    // });
    // yield put(addDiaryRequest(result.data));
  } catch (err) {
    yield put(addDiaryFailure(err.response.data));
  } finally {
    yield put(addDiaryErrorFinish());
  }
}

function removeDiaryAPI(data: number) {
  return axios.delete(`/diary/${data}`);
}

function* removeDiary(action: RemoveDiaryRequest): SagaIterator {
  try {
    const result = yield call(removeDiaryAPI, action.data);
    yield put(removeDiarySuccess(result.data));
    yield put({
      type: REMOVE_DIARY_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put(removeDiaryFailure(err.response.data));
  }
}

function uploadPhotosAPI(data: Photo) {
  return axios.post('/diary/photos', data);
}

function* uploadPhotos(action: UploadPhotoRequest): SagaIterator {
  try {
    const result = yield call(uploadPhotosAPI, action.data);
    yield put(uploadPhotoSuccess(result.data));
  } catch (err) {
    console.error(err);
    yield put(uploadPhotoFailure(err.response.data));
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
