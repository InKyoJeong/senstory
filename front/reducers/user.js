import {
  CHANGE_NICK_FAILURE,
  CHANGE_NICK_REQUEST,
  CHANGE_NICK_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../actions/user";

export const initialState = {
  logInLoading: false, // 로그인 시도중
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
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: "KKYYOO",
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInFinish: false,
        logInError: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInFinish: true,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutFinish: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutFinish: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpFinish: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpFinish: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_NICK_REQUEST:
      return {
        ...state,
        changeNickLoading: true,
        changeNickFinish: false,
        changeNickError: null,
      };
    case CHANGE_NICK_SUCCESS:
      return {
        ...state,
        changeNickLoading: false,
        changeNickFinish: true,
      };
    case CHANGE_NICK_FAILURE:
      return {
        ...state,
        changeNickLoading: false,
        changeNickError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
