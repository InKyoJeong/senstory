import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RandomUserWrapper, RandomTitle, UserItem } from "./styles";

const RandomUserForm = () => {
  const { randomUsers } = useSelector((state) => state.user);

  console.log("랜덤유저: ", randomUsers);

  return (
    <RandomUserWrapper>
      <RandomTitle>팔로우 추천</RandomTitle>

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
    </RandomUserWrapper>
  );
};

export default RandomUserForm;
