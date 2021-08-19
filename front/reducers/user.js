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
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
  LOG_IN_ERROR_FINISH,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOAD_ME_FAILURE,
  CHANGE_INTRO_REQUEST,
  CHANGE_INTRO_SUCCESS,
  CHANGE_INTRO_FAILURE,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  SAVE_AVATAR_REQUEST,
  SAVE_AVATAR_SUCCESS,
  SAVE_AVATAR_FAILURE,
  RANDOM_USER_SUCCESS,
  RANDOM_USER_FAILURE,
  RANDOM_USER_REQUEST,
  CHANGE_AREA_SUCCESS,
  CHANGE_AREA_REQUEST,
  CHANGE_AREA_FAILURE,
  ADD_DIARY_TO_ME,
  REMOVE_DIARY_OF_ME,
} from "../actions/user";

export const initialState = {
  loadMeLoading: false, // 내 정보 가져오기
  loadMeFinish: false,
  loadMeError: null,
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
  changeIntroLoading: false, // 소개
  changeIntroFinish: false,
  changeIntroError: null,
  changeAreaLoading: false, // 활동지역
  changeAreaFinish: false,
  changeAreaError: null,
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
  removeFollowerLoading: false, // 팔로워 차단
  removeFollowerFinish: false,
  removeFollowerError: null,
  uploadAvatarLoading: false, // 업로드 프사
  uploadAvatarFinish: false,
  uploadAvatarError: null,
  saveAvatarLoading: false, // 프사 저장
  saveAvatarFinish: false,
  saveAvatarError: null,
  randomUsersLoading: false, // 유저 추천
  randomUsersFinish: false,
  randomUsersError: null,
  me: null,
  userInfo: null,
  avatarPaths: [],
  randomUsers: [],
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UPLOAD_AVATAR_REQUEST:
        draft.uploadAvatarLoading = true;
        draft.uploadAvatarFinish = false;
        draft.uploadAvatarError = null;
        break;
      case UPLOAD_AVATAR_SUCCESS:
        draft.uploadAvatarLoading = false;
        draft.uploadAvatarFinish = true;
        draft.avatarPaths = action.data;
        break;
      case UPLOAD_AVATAR_FAILURE:
        draft.uploadAvatarLoading = false;
        draft.uploadAvatarError = action.error;
        break;
      case SAVE_AVATAR_REQUEST:
        draft.saveAvatarLoading = true;
        draft.saveAvatarFinish = false;
        draft.saveAvatarError = null;
        break;
      case SAVE_AVATAR_SUCCESS:
        draft.saveAvatarLoading = false;
        draft.saveAvatarFinish = true;
        draft.me.avatar = action.data.avatar;
        break;
      case SAVE_AVATAR_FAILURE:
        draft.saveAvatarLoading = false;
        draft.saveAvatarError = action.error;
        break;
      case LOAD_ME_REQUEST:
        draft.loadMeLoading = true;
        draft.loadMeFinish = false;
        draft.loadMeError = null;
        break;
      case LOAD_ME_SUCCESS:
        draft.loadMeLoading = false;
        draft.loadMeFinish = true;
        draft.me = action.data;
        break;
      case LOAD_ME_FAILURE:
        draft.loadMeLoading = false;
        draft.loadMeError = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserFinish = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserFinish = true;
        draft.userInfo = action.data;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case RANDOM_USER_REQUEST:
        draft.randomUsersLoading = true;
        draft.randomUsersFinish = false;
        draft.randomUsersError = null;
        break;
      case RANDOM_USER_SUCCESS:
        draft.randomUsersLoading = false;
        draft.randomUsersFinish = true;
        draft.randomUsers = draft.randomUsers.concat(action.data);
        break;
      case RANDOM_USER_FAILURE:
        draft.randomUsersLoading = false;
        draft.randomUsersError = action.error;
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
      case LOG_IN_ERROR_FINISH:
        draft.logInError = null;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutFinish = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutFinish = true;
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
      case CHANGE_INTRO_REQUEST:
        draft.changeIntroLoading = true;
        draft.changeIntroFinish = false;
        draft.changeIntroError = null;
        break;
      case CHANGE_INTRO_SUCCESS:
        draft.me.intro = action.data.intro;
        draft.changeIntroLoading = false;
        draft.changeIntroFinish = true;
        break;
      case CHANGE_INTRO_FAILURE:
        draft.changeIntroLoading = false;
        draft.changeIntroError = action.error;
        break;
      case CHANGE_AREA_REQUEST:
        draft.changeAreaLoading = true;
        draft.changeAreaFinish = false;
        draft.changeAreaError = null;
        break;
      case CHANGE_AREA_SUCCESS:
        draft.me.area = action.data.area;
        draft.changeAreaLoading = false;
        draft.changeAreaFinish = true;
        break;
      case CHANGE_AREA_FAILURE:
        draft.changeAreaLoading = false;
        draft.changeAreaError = action.error;
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
      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        draft.loadFollowingsDone = false;
        break;
      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;
      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        draft.loadFollowersDone = false;
        break;
      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;
      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerFinish = false;
        draft.removeFollowerError = null;
        break;
      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(
          (v) => v.id !== action.data.UserId
        );
        draft.removeFollowerFinish = true;
        break;
      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      case ADD_DIARY_TO_ME:
        draft.me.Diaries.unshift({
          id: action.data.id,
          feel: action.data.feel,
        });
        break;
      case REMOVE_DIARY_OF_ME:
        draft.me.Diaries = draft.me.Diaries.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;
