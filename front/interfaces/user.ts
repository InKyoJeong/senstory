export interface UserFollowers {
  id: number;
  Follow: UserFollow;
}

export interface UserFollow {
  FollowerId: number;
  FollowingId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDiarys {
  id: number;
  feel: string;
}

export interface UserPosts {
  id: number;
}

export interface RandomUsers {
  id: number;
  email: string;
  nickname: string;
  mbti: string | null;
  intro: string | null;
  area: string | null;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends RandomUsers {
  Posts: UserPosts[];
  Diaries: UserDiarys[];
  Followers: UserFollowers[];
  Followings: UserFollowers[];
}

export interface UserInitialState {
  loadMeLoading: boolean; // 내 정보 가져오기
  loadMeFinish: boolean;
  loadMeError: string | null;
  loadUserLoading: boolean; // 유저 정보 가져오기
  loadUserFinish: boolean;
  loadUserError: string | null;
  logInLoading: boolean; // 로그인
  logInFinish: boolean;
  logInError: string | null;
  logOutLoading: boolean; // 로그아웃
  logOutFinish: boolean;
  logOutError: string | null;
  signUpLoading: boolean; // 회원가입
  signUpFinish: boolean;
  signUpError: string | null;
  changeNickLoading: boolean; // 닉네임
  changeNickFinish: boolean;
  changeNickError: string | null;
  changeMbtiLoading: boolean; // MBTI
  changeMbtiFinish: boolean;
  changeMbtiError: string | null;
  changeIntroLoading: boolean; // 소개
  changeIntroFinish: boolean;
  changeIntroError: string | null;
  changeAreaLoading: boolean; // 활동지역
  changeAreaFinish: boolean;
  changeAreaError: string | null;
  followLoading: boolean; // 팔로우
  followFinish: boolean;
  followError: string | null;
  unfollowLoading: boolean; // 언팔
  unfollowFinish: boolean;
  unfollowError: string | null;
  loadFollowersLoading: boolean; // 팔로워 가져오기
  loadFollowersFinish: boolean;
  loadFollowersError: string | null;
  loadFollowingsLoading: boolean; // 팔로잉 가져오기
  loadFollowingsFinish: boolean;
  loadFollowingsError: string | null;
  removeFollowerLoading: boolean; // 팔로워 차단
  removeFollowerFinish: boolean;
  removeFollowerError: string | null;
  uploadAvatarLoading: boolean; // 업로드 프사
  uploadAvatarFinish: boolean;
  uploadAvatarError: string | null;
  saveAvatarLoading: boolean; // 프사 저장
  saveAvatarFinish: boolean;
  saveAvatarError: string | null;
  randomUsersLoading: boolean; // 유저 추천
  randomUsersFinish: boolean;
  randomUsersError: string | null;
  me: User | null | any;
  userInfo: User | null;
  avatarPaths: string[];
  randomUsers: RandomUser[];
}
