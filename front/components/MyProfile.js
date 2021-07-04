import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const CardWrapper = styled(Card)`
  margin-right: 10px;
  margin-top: 10px;
`;

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
