import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { CHANGE_NICK_REQUEST } from "../../actions/user";

import { NickFormWrapper, NickInput, NickEditButton } from "./styles";

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
      <div>
        <NickInput
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
          type="text"
          // bordered={false}
        />
        <NickEditButton
          type="primary"
          htmlType="submit"
          loading={changeNickLoading}
        >
          변경
        </NickEditButton>
      </div>
    </NickFormWrapper>
  );
};

export default NickEditForm;
