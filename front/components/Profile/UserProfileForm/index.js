import React from "react";
import PropTypes from "prop-types";

import { Avatar, Card } from "antd";
import {
  UserProfileWrapper,
  UserInfoWrapper,
  UserIntroWrapper,
  UserIntroTitle,
  UserHeader,
  UserHalfTitle,
  UserIntroTop,
  UserInfoNick,
} from "./styles";
import Conditional from "../../../hocs/Conditional";

const UserProfileForm = ({ userInfo }) => {
  return (
    <>
      <UserHeader>{userInfo.nickname}님의 프로필</UserHeader>

      <UserProfileWrapper>
        <Card.Meta
          avatar={
            userInfo.avatar ? (
              <Avatar src={`http://localhost:3065/${userInfo.avatar}`} />
            ) : (
              <Avatar>{userInfo.nickname[0]}</Avatar>
            )
          }
          title={<UserInfoNick>{userInfo.nickname}</UserInfoNick>}
        />

        <UserIntroWrapper>
          <UserIntroTop>
            <div>
              <UserHalfTitle>활동 지역</UserHalfTitle>
              <div>{userInfo.area}</div>
              <Conditional condition={userInfo.area === ""}>
                <span>등록중</span>
              </Conditional>
            </div>

            <div>
              <UserHalfTitle>MBTI</UserHalfTitle>
              <div>{userInfo.mbti}</div>
              <Conditional condition={userInfo.mbti === ""}>
                <span>등록중</span>
              </Conditional>
            </div>
          </UserIntroTop>

          <div>
            <UserIntroTitle>소개</UserIntroTitle>
            <div>{userInfo.intro}</div>
            <Conditional condition={userInfo.intro === ""}>
              <span>등록중</span>
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

UserProfileForm.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    Followings: PropTypes.number,
    Followers: PropTypes.number,
    Posts: PropTypes.number,
    avatar: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    intro: PropTypes.string,
    nickname: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};

export default UserProfileForm;
