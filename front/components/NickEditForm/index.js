import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICK_REQUEST } from "../../actions/user";

import { NickFormWrapper, NickInput, NickEditButton } from "./styles";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal";

const NickEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeNickLoading, changeNickFinish } = useSelector(
    (state) => state.user
  );
  const [nickname, onChangeNickname, setNickname] = useInput(
    me?.nickname || ""
  );
  const [modalOpen, onToggleModal] = useToggle(false);

  useEffect(() => {
    if (changeNickFinish) {
      onToggleModal();
    }
  }, [changeNickFinish]);

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

  if (nickname.length > 20) {
    setNickname(nickname.slice(0, 20));
    return alert("닉네임은 최대 20자 입니다.");
  }

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

      <Modal
        title="닉네임 변경 완료"
        modalOpen={modalOpen}
        onToggleModal={onToggleModal}
      />
    </NickFormWrapper>
  );
};

export default NickEditForm;
