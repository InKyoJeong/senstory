import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../reducers';
import { changeNickRequest } from '../../../reducers/user/changeNick';
import useInput from '../../../hooks/useInput';
import Conditional from '../../../hocs/Conditional';
import Modal from '../../common/Modal';
import ChangeButton from '../ChangeButton';
import { NickFormWrapper, NickInput } from './styles';

const NickEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeNickLoading, changeNickFinish, changeNickError } = useSelector((state: RootState) => state.user);
  const [nickname, onChangeNickname, setNickname] = useInput(me?.nickname || '');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (changeNickFinish) {
      onToggleModal();
    }
  }, [changeNickFinish]);

  useEffect(() => {
    if (changeNickError) {
      alert(changeNickError);
    }
  }, [changeNickError]);

  if (nickname.length > 20) {
    setNickname(nickname.slice(0, 20));
    return alert('닉네임은 최대 20자 입니다.');
  }

  const onSubmit = useCallback(() => {
    if (!nickname || !nickname.trim()) {
      return alert('닉네임을 입력해주세요.');
    }
    if (nickname.includes(' ')) {
      return alert('닉네임에 빈칸을 포함할 수 없어요.');
    }
    dispatch(changeNickRequest(nickname));
  }, [nickname]);

  return (
    <NickFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-nickname">닉네임</label>
      <br />
      <div>
        <NickInput name="nickname" value={nickname} onChange={onChangeNickname} type="text" />
        <ChangeButton loading={changeNickLoading} />
      </div>

      <Conditional condition={modalOpen}>
        <Modal title="닉네임 변경 완료" onToggleModal={onToggleModal} />
      </Conditional>
    </NickFormWrapper>
  );
};

export default NickEditForm;
