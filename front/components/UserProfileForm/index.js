import React from "react";
import PropTypes from "prop-types";

import { Avatar, Card } from "antd";
import {
  UserProfileWrapper,
  UserInfoWrapper,
  UserIntroWrapper,
  UserIntroTitle,
} from "./styles";

const UserProfileForm = ({ userInfo }) => {
  return (
    <UserProfileWrapper>
      <Card.Meta
        avatar={
          userInfo.avatar ? (
            <Avatar src={`http://localhost:3065/${userInfo.avatar}`} />
          ) : (
            <Avatar>{userInfo.nickname[0]}</Avatar>
          )
        }
        title={<div style={{ color: "white" }}>{userInfo.nickname}</div>}
      />

      <UserIntroWrapper>
        <UserIntroTitle>활동 지역</UserIntroTitle>
        {/* <div>{userInfo.area}</div> */}
        <div>서울</div>
        <UserIntroTitle>소개</UserIntroTitle>
        <div>{userInfo.intro}</div>
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
