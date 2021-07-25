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
    if (!nickname || !nickname.trim()) {
      return alert("닉네임을 입력해주세요.");
    }
    if (nickname.includes(" ")) {
      return alert("닉네임에 빈칸을 포함할 수 없어요.");
    }
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
