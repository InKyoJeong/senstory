import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import axios from "axios";

import {
  CHANGE_INTRO_FAILURE,
  CHANGE_INTRO_REQUEST,
  CHANGE_INTRO_SUCCESS,
  CHANGE_NICK_FAILURE,
  CHANGE_NICK_REQUEST,
  CHANGE_NICK_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_ME_FAILURE,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_ERROR_FINISH,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  RANDOM_USER_FAILURE,
  RANDOM_USER_REQUEST,
  RANDOM_USER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
  SAVE_AVATAR_FAILURE,
  SAVE_AVATAR_REQUEST,
  SAVE_AVATAR_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
} from "../actions/user";

function loadMeAPI() {
  return axios.get("/user");
}

function* loadMe() {
  try {
    const result = yield call(loadMeAPI);
    yield put({
      type: LOAD_ME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ME_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserAPI(data) {
  return axios.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function loginAPI(data) {
  return axios.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  } finally {
    yield put({
      type: LOG_IN_ERROR_FINISH,
      // error: null,
    });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    // console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.patch("/user/nickname", { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NICK_FAILURE,
      error: err.response.data,
    });
  }
}

function changeIntroAPI(data) {
  return axios.patch("/user/intro", { intro: data });
}

function* changeIntro(action) {
  try {
    const result = yield call(changeIntroAPI, action.data);
    yield put({
      type: CHANGE_INTRO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_INTRO_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI(data) {
  return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield call(followAPI, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI(data) {
  return axios.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield call(unfollowAPI, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowersAPI(data) {
  return axios.get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data);
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowingsAPI(data) {
  return axios.get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: err.response.data,
    });
  }
}

function removeFollowerAPI(data) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadAvatarAPI(data) {
  return axios.post("/user/images", data);
}

function* uploadAvatar(action) {
  try {
    const result = yield call(uploadAvatarAPI, action.data);
    console.log("result.data", result.data); // data:["파일명"]
    yield put({
      type: UPLOAD_AVATAR_SUCCESS,
      data: result.data,
    });
    yield put({
      type: SAVE_AVATAR_REQUEST,
      data: result.data[0], // "파일명"
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_AVATAR_FAILURE,
      error: err.response.data,
    });
  }
}

function saveAvatarAPI(data) {
  return axios.patch("/user/avatar", { avatar: data }); // avatar: "파일명"
}

function* saveAvatar(action) {
  try {
    const result = yield call(saveAvatarAPI, action.data);
    yield put({
      type: SAVE_AVATAR_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SAVE_AVATAR_FAILURE,
      error: err.response.data,
    });
  }
}

function randomUsersAPI() {
  return axios.get(`/users`);
}

function* randomUsers() {
  try {
    const result = yield call(randomUsersAPI);
    console.log("randomSaga: ", result.data);
    yield put({
      type: RANDOM_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RANDOM_USER_FAILURE,
      error: err.response.data,
    });
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

function* watchChangeIntro() {
  yield takeLatest(CHANGE_INTRO_REQUEST, changeIntro);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
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
    fork(watchLoadFollowers),
    fork(watchLoadFollowings),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeNickname),
    fork(watchChangeIntro),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchRemoveFollower),
    fork(watchUploadAvatar),
    fork(watchSaveAvatar),
    fork(watchRandomUsers),
  ]);
}
