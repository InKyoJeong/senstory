import React from "react";
import { useSelector } from "react-redux";
import { RandomUserWrapper } from "./styles";

const RandomUserForm = () => {
  const { randomUsers } = useSelector((state) => state.user);

  console.log("random Users: ", randomUsers);

  return (
    <RandomUserWrapper>
      {randomUsers.map((user) => (
        <div key={user.id}>{user.nickname}</div>
      ))}
    </RandomUserWrapper>
  );
};

export default RandomUserForm;
