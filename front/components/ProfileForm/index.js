import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../actions/user";

import {
  HideWrapper,
  CardWrapper,
  LogoutButton,
  UserInfoWrapper,
} from "./styles";

const ProfileForm = (props) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <HideWrapper hide={props.hide}>
      <CardWrapper
      // actions={[]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <LogoutButton onClick={onLogOut} loading={logOutLoading}>
          로그아웃
        </LogoutButton>

        <UserInfoWrapper>
          <div>게시물</div>
          <div>팔로워</div>
          <div>팔로잉</div>
          <div>{me.Posts.length}</div>
          <div>{me.Followers.length}</div>
          <div>{me.Followings.length}</div>
        </UserInfoWrapper>
      </CardWrapper>
    </HideWrapper>
  );
};

export default ProfileForm;
