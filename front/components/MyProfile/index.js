import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

import { useDispatch } from "react-redux";
import { logoutAction } from "../../reducers/user";

import { CardWrapper } from "./styles";

const MyProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
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
      <Card.Meta avatar={<Avatar>KYO</Avatar>} title="INKYO" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </CardWrapper>
  );
};

export default MyProfile;
