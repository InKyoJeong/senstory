import { Avatar } from "antd";
import React from "react";
import Link from "next/link";
import { TeamOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import {
  RandomUserWrapper,
  RandomTitle,
  UserItem,
  RandomUsers,
} from "./styles";

const RandomUserForm = () => {
  const { randomUsers } = useSelector((state) => state.user);

  // console.log("랜덤유저: ", randomUsers);

  return (
    <RandomUserWrapper>
      <RandomTitle>
        <TeamOutlined />
        사용자 추천
      </RandomTitle>

      <RandomUsers>
        {randomUsers.map((user) => (
          <UserItem key={user.id}>
            <Link href={`/user/${user.id}`}>
              <a>
                {user.avatar ? (
                  <Avatar src={`http://localhost:3065/${user.avatar}`} />
                ) : (
                  <Avatar>{user.nickname[0]}</Avatar>
                )}
              </a>
            </Link>
            <div>{user.nickname}</div>
          </UserItem>
        ))}
      </RandomUsers>
    </RandomUserWrapper>
  );
};

export default RandomUserForm;
