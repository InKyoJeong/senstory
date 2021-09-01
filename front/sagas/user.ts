import axios from 'axios';
import { all, fork, takeLatest, put, call } from 'redux-saga/effects';

import { loginErrorFinish, loginFailure, LoginRequest, loginSuccess, LOG_IN_REQUEST } from '../reducers/user/login';
import { logoutFailure, logoutSuccess, LOG_OUT_REQUEST } from '../reducers/user/logout';
import { signupFailure, SignupRequest, signupSuccess, SIGN_UP_REQUEST } from '../reducers/user/signup';
import { unfollowFailure, UnfollowRequest, unfollowSuccess, UNFOLLOW_REQUEST } from '../reducers/user/unfollow';
import { loadMeFailure, loadMeSuccess, LOAD_ME_REQUEST } from '../reducers/user/loadMe';
import { randomUserFailure, randomUserSuccess, RANDOM_USER_REQUEST } from '../reducers/user/randomUser';
import { loadUserFailure, LoadUserRequest, loadUserSuccess, LOAD_USER_REQUEST } from '../reducers/user/loadUser';
import { FollowRequest, followSuccess, FOLLOW_REQUEST } from '../reducers/user/follow';
import {
  changeNickFailure,
  ChangeNickRequest,
  changeNickSuccess,
  CHANGE_NICK_REQUEST,
} from '../reducers/user/changeNick';
import {
  changeIntroFailure,
  ChangeIntroRequest,
  changeIntroSuccess,
  CHANGE_INTRO_REQUEST,
} from '../reducers/user/changeIntro';
import {
  changeAreaFailure,
  ChangeAreaRequest,
  changeAreaSuccess,
  CHANGE_AREA_REQUEST,
} from '../reducers/user/changeArea';
import {
  AvatarImage,
  uploadAvatarFailure,
  UploadAvatarRequest,
  uploadAvatarSuccess,
  UPLOAD_AVATAR_REQUEST,
} from '../reducers/user/uploadAvatar';
import {
  changeMbtiFailure,
  ChangeMbtiRequest,
  changeMbtiSuccess,
  CHANGE_MBTI_REQUEST,
} from '../reducers/user/changeMbti';
import {
  removeFollowerFailure,
  RemoveFollowerRequest,
  removeFollowerSuccess,
  REMOVE_FOLLOWER_REQUEST,
} from '../reducers/user/removeFollower';
import {
  saveAvatarFailure,
  SaveAvatarRequest,
  saveAvatarRequest,
  saveAvatarSuccess,
  SAVE_AVATAR_REQUEST,
} from '../reducers/user/saveAvatar';
import { SagaIterator } from 'redux-saga';

function loadMeAPI() {
  return axios.get('/user');
}

function* loadMe(): SagaIterator {
  try {
    const result = yield call(loadMeAPI);
    yield put(loadMeSuccess(result.data));
  } catch (err) {
    yield put(loadMeFailure(err.response.data));
  }
}

function loadUserAPI(data: number | string) {
  return axios.get(`/user/${data}`);
}

function* loadUser(action: LoadUserRequest): SagaIterator {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put(loadUserSuccess(result.data));
  } catch (err) {
    yield put(loadUserFailure(err.response.data));
  }
}

function loginAPI(data: { email: string; password: string }) {
  return axios.post('/user/login', data);
}

function* logIn(action: LoginRequest): SagaIterator {
  try {
    const result = yield call(loginAPI, action.data);
    yield put(loginSuccess(result.data));
  } catch (err) {
    yield put(loginFailure(err.response.data));
  } finally {
    yield put(loginErrorFinish());
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut(): SagaIterator {
  try {
    yield call(logOutAPI);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err.response.data));
  }
}

function signUpAPI(data: { email: string; password: string; nickname: string }) {
  return axios.post('/user', data);
}

function* signUp(action: SignupRequest): SagaIterator {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put(signupSuccess());
  } catch (err) {
    yield put(signupFailure(err.response.data));
  }
}

function changeNicknameAPI(data: string) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action: ChangeNickRequest): SagaIterator {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put(changeNickSuccess(result.data));
  } catch (err) {
    yield put(changeNickFailure(err.response.data));
  }
}

function changeMbtiAPI(data: string) {
  return axios.patch('/user/mbti', { mbti: data });
}

function* changeMbti(action: ChangeMbtiRequest): SagaIterator {
  try {
    const result = yield call(changeMbtiAPI, action.data);
    yield put(changeMbtiSuccess(result.data));
  } catch (err) {
    yield put(changeMbtiFailure(err.response.data));
  }
}

function changeIntroAPI(data: string) {
  return axios.patch('/user/intro', { intro: data });
}

function* changeIntro(action: ChangeIntroRequest): SagaIterator {
  try {
    const result = yield call(changeIntroAPI, action.data);
    yield put(changeIntroSuccess(result.data));
  } catch (err) {
    yield put(changeIntroFailure(err.response.data));
  }
}

function changeAreaAPI(data: string) {
  return axios.patch('/user/area', { area: data });
}

function* changeArea(action: ChangeAreaRequest): SagaIterator {
  try {
    const result = yield call(changeAreaAPI, action.data);
    yield put(changeAreaSuccess(result.data));
  } catch (err) {
    yield put(changeAreaFailure(err.response.data));
  }
}

function followAPI(data: number) {
  return axios.patch(`/user/${data}/follow`);
}

function* follow(action: FollowRequest): SagaIterator {
  try {
    const result = yield call(followAPI, action.data);
    yield put(followSuccess(result.data));
  } catch (err) {
    yield put(err.response.data);
  }
}

function unfollowAPI(data: number) {
  return axios.delete(`/user/${data}/follow`);
}

function* unfollow(action: UnfollowRequest): SagaIterator {
  try {
    const result = yield call(unfollowAPI, action.data);
    yield put(unfollowSuccess(result.data));
  } catch (err) {
    yield put(unfollowFailure(err.response.data));
  }
}

function removeFollowerAPI(data: number) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action: RemoveFollowerRequest): SagaIterator {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put(removeFollowerSuccess(result.data));
  } catch (err) {
    yield put(removeFollowerFailure(err.response.data));
  }
}

function uploadAvatarAPI(data: AvatarImage | FormData) {
  return axios.post('/user/images', data);
}

function* uploadAvatar(action: UploadAvatarRequest): SagaIterator {
  try {
    const result = yield call(uploadAvatarAPI, action.data);
    yield put(uploadAvatarSuccess(result.data));
    yield put(saveAvatarRequest(result.data[0])); // "파일명"
  } catch (err) {
    console.error(err);
    yield put(uploadAvatarFailure(err.response.data));
  }
}

function saveAvatarAPI(data: string) {
  return axios.patch('/user/avatar', { avatar: data }); // avatar: "파일명"
}

function* saveAvatar(action: SaveAvatarRequest): SagaIterator {
  try {
    const result = yield call(saveAvatarAPI, action.data);
    yield put(saveAvatarSuccess(result.data));
  } catch (err) {
    console.error(err);
    yield put(saveAvatarFailure(err.response.data));
  }
}

function randomUsersAPI() {
  return axios.get(`/users`);
}

function* randomUsers(): SagaIterator {
  try {
    const result = yield call(randomUsersAPI);
    yield put(randomUserSuccess(result.data));
  } catch (err) {
    console.error(err);
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
