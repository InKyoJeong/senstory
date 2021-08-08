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
  UserItemWrapper,
} from "./styles";
import FollowButton from "../FollowButton";

const RandomUserForm = () => {
  const { randomUsers } = useSelector((state) => state.user);

  console.log("랜덤유저: ", randomUsers);

  return (
    <RandomUserWrapper>
      <RandomTitle>
        <TeamOutlined />
        사용자 추천
      </RandomTitle>

      <RandomUsers>
        {randomUsers.map((user) => (
          <UserItemWrapper>
            <UserItem key={user.id}>
              <div>
                <Link href={`/user/${user.id}`}>
                  <a>
                    {user.avatar ? (
                      <Avatar src={`http://localhost:3065/${user.avatar}`} />
                    ) : (
                      <Avatar>{user.nickname[0]}</Avatar>
                    )}
                  </a>
                </Link>
              </div>
              <div>{user.nickname}</div>
            </UserItem>
            <FollowButton user={user} />
          </UserItemWrapper>
        ))}
      </RandomUsers>
    </RandomUserWrapper>
  );
};

export default RandomUserForm;
