import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../actions/user";

import { CardWrapper } from "./styles";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <CardWrapper
      actions={[
        <div key="post">
          등록
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={isLoggingOut}>
        로그아웃
      </Button>
    </CardWrapper>
  );
};

export default MyProfile;
