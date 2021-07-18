import React, { useCallback, useMemo } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { CHANGE_NICK_REQUEST } from "../../actions/user";

import { NickFormWrapper, NickInput } from "./styles";

const NickEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeNickLoading } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || "");

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICK_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <NickFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-nickname">닉네임</label>
      <br />
      <div style={{ display: "flex" }}>
        <NickInput
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
          type="text"
          // bordered={false}
        />
        <Button type="primary" htmlType="submit" loading={changeNickLoading}>
          수정
        </Button>
      </div>
    </NickFormWrapper>
  );
};

export default NickEditForm;
