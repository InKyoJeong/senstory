import produce from "immer";

import {
  ADD_POST_TO_ME,
  CHANGE_NICK_FAILURE,
  CHANGE_NICK_REQUEST,
  CHANGE_NICK_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_POST_OF_ME,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
} from "../actions/user";

export const initialState = {
  loadUserLoading: false, // 유저 정보 가져오기
  loadUserFinish: false,
  loadUserError: null,
  logInLoading: false, // 로그인
  logInFinish: false,
  logInError: null,
  logOutLoading: false, // 로그아웃
  logOutFinish: false,
  logOutError: null,
  signUpLoading: false, // 회원가입
  signUpFinish: false,
  signUpError: null,
  changeNickLoading: false, // 닉네임
  changeNickFinish: false,
  changeNickError: null,
  followLoading: false, // 팔로우
  followFinish: false,
  followError: null,
  unfollowLoading: false, // 언팔
  unfollowFinish: false,
  unfollowError: null,
  loadFollowersLoading: false, // 팔로워 가져오기
  loadFollowersFinish: false,
  loadFollowersError: null,
  loadFollowingsLoading: false, // 팔로잉 가져오기
  loadFollowingsFinish: false,
  loadFollowingsError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

// const dummyUser = (data) => ({
//   ...data,
//   nickname: "KKYYOO",
//   id: 1,
//   Posts: [{ id: 1 }],
//   Followings: [{ nickname: "zllzl" }, { nickname: "hhh" }],
//   Followers: [{ nickname: "zllzl" }, { nickname: "hhh" }],
// });

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserFinish = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserFinish = true;
        draft.me = action.data;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInFinish = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInFinish = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutFinish = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logInLoading = false;
        draft.logInFinish = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpFinish = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpFinish = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICK_REQUEST:
        draft.changeNickLoading = true;
        draft.changeNickFinish = false;
        draft.changeNickError = null;
        break;
      case CHANGE_NICK_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNickLoading = false;
        draft.changeNickFinish = true;
        break;
      case CHANGE_NICK_FAILURE:
        draft.changeNickLoading = false;
        draft.changeNickError = action.error;
        break;
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followFinish = false;
        draft.followError = null;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followFinish = true;
        draft.me.Followings.push({ id: action.data.UserId });
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowFinish = false;
        draft.unfollowError = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowFinish = true;
        draft.me.Followings = draft.me.Followings.filter(
          (v) => v.id !== action.data.UserId
        );
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersFinish = false;
        draft.loadFollowersError = null;
        break;
      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersFinish = true;
        break;
      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsFinish = false;
        draft.loadFollowingsError = null;
        break;
      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsFinish = true;
        break;
      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;
