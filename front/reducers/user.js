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
} from "../actions/user";

export const initialState = {
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
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: "KKYYOO",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: "zllzl" }, { nickname: "hhh" }],
  Followers: [{ nickname: "zllzl" }, { nickname: "hhh" }],
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
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
        draft.me.Followings.push({ id: action.data });
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
          (v) => v.id !== action.data
        );
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
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
