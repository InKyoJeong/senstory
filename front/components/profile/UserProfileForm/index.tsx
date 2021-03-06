import React from 'react';
import { Avatar, Card } from 'antd';
import {
  UserProfileWrapper,
  UserInfoWrapper,
  UserIntroWrapper,
  UserIntroTitle,
  UserHeader,
  UserHalfTitle,
  UserIntroTop,
  UserInfoNick,
} from './styles';
import Conditional from '../../../hocs/Conditional';
import { User, UserInfo } from '../../../interfaces/user';

interface UserProfileProps {
  userInfo: UserInfo | User;
}

const UserProfileForm = ({ userInfo }: UserProfileProps) => {
  console.log(userInfo);
  return (
    <>
      <UserHeader>{userInfo.nickname}님의 프로필</UserHeader>

      <UserProfileWrapper>
        <Card.Meta
          avatar={userInfo.avatar ? <Avatar src={`${userInfo.avatar}`} /> : <Avatar>{userInfo.nickname[0]}</Avatar>}
          title={<UserInfoNick>{userInfo.nickname}</UserInfoNick>}
        />

        <UserIntroWrapper>
          <UserIntroTop>
            <div>
              <UserHalfTitle>활동 지역</UserHalfTitle>
              <div>{userInfo.area}</div>
              <Conditional condition={userInfo.area === '' || userInfo.area === null}>
                <span>등록중</span>
              </Conditional>
            </div>

            <div>
              <UserHalfTitle>MBTI</UserHalfTitle>
              <Conditional condition={userInfo.mbti !== 'x'}>
                <div>{userInfo.mbti}</div>
              </Conditional>
              <Conditional condition={userInfo.mbti === '' || userInfo.mbti === null}>
                <span>등록중</span>
              </Conditional>
            </div>
          </UserIntroTop>

          <div>
            <UserIntroTitle>소개</UserIntroTitle>
            <div>{userInfo.intro}</div>
            <Conditional condition={userInfo.intro === '' || userInfo.intro === null}>
              <span>등록된 소개가 없습니다.</span>
            </Conditional>
          </div>
        </UserIntroWrapper>

        <UserInfoWrapper>
          <div>
            <div>게시물</div>
            <div>{userInfo.Posts}</div>
          </div>
          <div>
            <div>팔로워</div>
            <div>{userInfo.Followers}</div>
          </div>
          <div>
            <div>팔로잉</div>
            <div>{userInfo.Followings}</div>
          </div>
        </UserInfoWrapper>
      </UserProfileWrapper>
    </>
  );
};

export default UserProfileForm;
