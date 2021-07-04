import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const MyProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
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
    </Card>
  );
};

export default MyProfile;
