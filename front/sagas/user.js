import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginErrorFinish,
  loginFailure,
  loginSuccess,
  LOG_IN_ERROR_FINISH,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../reducers/user/login';
import {
  logoutFailure,
  logoutSuccess,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from '../reducers/user/logout';
import {
  signupFailure,
  signupSuccess,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user/signup';
import {
  changeNickFailure,
  changeNickSuccess,
  CHANGE_NICK_FAILURE,
  CHANGE_NICK_REQUEST,
  CHANGE_NICK_SUCCESS,
} from '../reducers/user/changeNick';
import {
  changeIntroFailure,
  changeIntroSuccess,
  CHANGE_INTRO_FAILURE,
  CHANGE_INTRO_REQUEST,
  CHANGE_INTRO_SUCCESS,
} from '../reducers/user/changeIntro';
import {
  changeAreaFailure,
  changeAreaSuccess,
  CHANGE_AREA_FAILURE,
  CHANGE_AREA_REQUEST,
  CHANGE_AREA_SUCCESS,
} from '../reducers/user/changeArea';
import {
  uploadAvatarFailure,
  uploadAvatarSuccess,
  UPLOAD_AVATAR_FAILURE,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
} from '../reducers/user/uploadAvatar';
import {
  changeMbtiFailure,
  changeMbtiSuccess,
  CHANGE_MBTI_FAILURE,
  CHANGE_MBTI_REQUEST,
  CHANGE_MBTI_SUCCESS,
} from '../reducers/user/changeMbti';
import {
  saveAvatarFailure,
  saveAvatarRequest,
  saveAvatarSuccess,
  SAVE_AVATAR_FAILURE,
  SAVE_AVATAR_REQUEST,
  SAVE_AVATAR_SUCCESS,
} from '../reducers/user/saveAvatar';
import { followSuccess, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS } from '../reducers/user/follow';
import {
  unfollowFailure,
  unfollowSuccess,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from '../reducers/user/unfollow';
import {
  loadMeFailure,
  loadMeSuccess,
  LOAD_ME_FAILURE,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
} from '../reducers/user/loadMe';
import {
  removeFollowerFailure,
  removeFollowerSuccess,
  REMOVE_FOLLOWER_FAILURE,
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
} from '../reducers/user/removeFollower';
import {
  randomUserFailure,
  randomUserSuccess,
  RANDOM_USER_FAILURE,
  RANDOM_USER_REQUEST,
  RANDOM_USER_SUCCESS,
} from '../reducers/user/randomUser';
import {
  loadUserFailure,
  loadUserSuccess,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
} from '../reducers/user/loadUser';

function loadMeAPI() {
  return axios.get('/user');
}

function* loadMe() {
  try {
    const result = yield call(loadMeAPI);
    // yield put({
    //   type: LOAD_ME_SUCCESS,
    //   data: result.data,
    // });
    yield put(loadMeSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: LOAD_ME_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loadMeFailure(err.response.data));
  }
}

function loadUserAPI(data) {
  return axios.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    // yield put({
    //   type: LOAD_USER_SUCCESS,
    //   data: result.data,
    // });
    yield put(loadUserSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: LOAD_USER_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loadUserFailure(err.response.data));
  }
}

function loginAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    // yield put({
    //   type: LOG_IN_SUCCESS,
    //   data: result.data,
    // });
    yield put(loginSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: LOG_IN_FAILURE,
    //   error: err.response.data,
    // });
    yield put(loginFailure(err.response.data));
  } finally {
    // yield put({
    //   type: LOG_IN_ERROR_FINISH,
    // });
    yield put(loginErrorFinish());
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    // yield put({
    //   type: LOG_OUT_SUCCESS,
    // });
    yield put(logoutSuccess());
  } catch (err) {
    // yield put({
    //   type: LOG_OUT_FAILURE,
    //   error: err.response.data,
    // });
    yield put(logoutFailure(err.response.data));
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    // console.log(result);
    // yield put({
    //   type: SIGN_UP_SUCCESS,
    //   //   data: result.data,
    // });
    yield put(signupSuccess());
  } catch (err) {
    // yield put({
    //   type: SIGN_UP_FAILURE,
    //   error: err.response.data,
    // });
    yield put(signupFailure(err.response.data));
  }
}

function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    // yield put({
    //   type: CHANGE_NICK_SUCCESS,
    //   data: result.data,
    // });
    yield put(changeNickSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: CHANGE_NICK_FAILURE,
    //   error: err.response.data,
    // });
    yield put(changeNickFailure(err.response.data));
  }
}

function changeMbtiAPI(data) {
  return axios.patch('/user/mbti', { mbti: data });
}

function* changeMbti(action) {
  try {
    const result = yield call(changeMbtiAPI, action.data);
    // yield put({
    //   type: CHANGE_MBTI_SUCCESS,
    //   data: result.data,
    // });
    yield put(changeMbtiSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: CHANGE_MBTI_FAILURE,
    //   error: err.response.data,
    // });
    yield put(changeMbtiFailure(err.response.data));
  }
}

function changeIntroAPI(data) {
  return axios.patch('/user/intro', { intro: data });
}

function* changeIntro(action) {
  try {
    const result = yield call(changeIntroAPI, action.data);
    // yield put({
    //   type: CHANGE_INTRO_SUCCESS,
    //   data: result.data,
    // });
    yield put(changeIntroSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: CHANGE_INTRO_FAILURE,
    //   error: err.response.data,
    // });
    yield put(changeIntroFailure(err.response.data));
  }
}

function changeAreaAPI(data) {
  return axios.patch('/user/area', { area: data });
}

function* changeArea(action) {
  try {
    const result = yield call(changeAreaAPI, action.data);
    // yield put({
    //   type: CHANGE_AREA_SUCCESS,
    //   data: result.data,
    // });
    yield put(changeAreaSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: CHANGE_AREA_FAILURE,
    //   error: err.response.data,
    // });
    yield put(changeAreaFailure(err.response.data));
  }
}

function followAPI(data) {
  return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield call(followAPI, action.data);
    // yield put({
    //   type: FOLLOW_SUCCESS,
    //   data: result.data,
    // });
    yield put(followSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: FOLLOW_FAILURE,
    //   error: err.response.data,
    // });
    yield put(err.response.data);
  }
}

function unfollowAPI(data) {
  return axios.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield call(unfollowAPI, action.data);
    // yield put({
    //   type: UNFOLLOW_SUCCESS,
    //   data: result.data,
    // });
    yield put(unfollowSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: UNFOLLOW_FAILURE,
    //   error: err.response.data,
    // });
    yield put(unfollowFailure(err.response.data));
  }
}

function removeFollowerAPI(data) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    // yield put({
    //   type: REMOVE_FOLLOWER_SUCCESS,
    //   data: result.data,
    // });
    yield put(removeFollowerSuccess(result.data));
  } catch (err) {
    // yield put({
    //   type: REMOVE_FOLLOWER_FAILURE,
    //   error: err.response.data,
    // });
    yield put(removeFollowerFailure(err.response.data));
  }
}

function uploadAvatarAPI(data) {
  return axios.post('/user/images', data);
}

function* uploadAvatar(action) {
  try {
    const result = yield call(uploadAvatarAPI, action.data);
    // yield put({
    //   type: UPLOAD_AVATAR_SUCCESS,
    //   data: result.data,
    // });
    yield put(uploadAvatarSuccess(result.data));
    // yield put({
    //   type: SAVE_AVATAR_REQUEST,
    //   data: result.data[0],
    // });
    yield put(saveAvatarRequest(result.data[0])); // "파일명"
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: UPLOAD_AVATAR_FAILURE,
    //   error: err.response.data,
    // });
    yield put(uploadAvatarFailure(err.response.data));
  }
}

function saveAvatarAPI(data) {
  return axios.patch('/user/avatar', { avatar: data }); // avatar: "파일명"
}

function* saveAvatar(action) {
  try {
    const result = yield call(saveAvatarAPI, action.data);
    // yield put({
    //   type: SAVE_AVATAR_SUCCESS,
    //   data: result.data,
    // });
    yield put(saveAvatarSuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: SAVE_AVATAR_FAILURE,
    //   error: err.response.data,
    // });
    yield put(saveAvatarFailure(err.response.data));
  }
}

function randomUsersAPI() {
  return axios.get(`/users`);
}

function* randomUsers() {
  try {
    const result = yield call(randomUsersAPI);
    // yield put({
    //   type: RANDOM_USER_SUCCESS,
    //   data: result.data,
    // });
    yield put(randomUserSuccess(result.data));
  } catch (err) {
    console.error(err);
    // yield put({
    //   type: RANDOM_USER_FAILURE,
    //   error: err.response.data,
    // });
    yield put(randomUserFailure(err.response.data));
  }
}

function* watchLoadMe() {
  yield takeLatest(LOAD_ME_REQUEST, loadMe);
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICK_REQUEST, changeNickname);
}

function* watchChangeMbti() {
  yield takeLatest(CHANGE_MBTI_REQUEST, changeMbti);
}

function* watchChangeIntro() {
  yield takeLatest(CHANGE_INTRO_REQUEST, changeIntro);
}

function* watchChangeArea() {
  yield takeLatest(CHANGE_AREA_REQUEST, changeArea);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchRemoveFollower() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchUploadAvatar() {
  yield takeLatest(UPLOAD_AVATAR_REQUEST, uploadAvatar);
}

function* watchSaveAvatar() {
  yield takeLatest(SAVE_AVATAR_REQUEST, saveAvatar);
}

function* watchRandomUsers() {
  yield takeLatest(RANDOM_USER_REQUEST, randomUsers);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadMe),
    fork(watchLoadUser),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeNickname),
    fork(watchChangeMbti),
    fork(watchChangeIntro),
    fork(watchChangeArea),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchRemoveFollower),
    fork(watchUploadAvatar),
    fork(watchSaveAvatar),
    fork(watchRandomUsers),
  ]);
}
