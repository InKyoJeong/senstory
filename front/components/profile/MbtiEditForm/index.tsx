import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Conditional from '../../../hocs/Conditional';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { changeMbtiRequest } from '../../../reducers/user/changeMbti';
import Modal from '../../common/Modal';
import ChangeButton from '../ChangeButton';
import { MbtiFormWrapper } from './styles';

const MbtiEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeMbtiFinish, changeMbtiLoading } = useSelector((state: RootState) => state.user);
  const [mbti, onChangeMbti] = useInput(me?.mbti || '');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (changeMbtiFinish) {
      onToggleModal();
    }
  }, [changeMbtiFinish]);

  const onSubmit = useCallback(() => {
    dispatch(changeMbtiRequest(mbti));
  }, [mbti]);

  return (
    <MbtiFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-mbti">MBTI</label>
      <br />
      <div>
        <select value={mbti} name="mbtis" id="mbti-select" onChange={onChangeMbti}>
          <option value="x">---- MBTI 선택 ----</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="INFJ">INFJ</option>
          <option value="INFP">INFP</option>
          <option value="ESTJ">ESTJ</option>
          <option value="ESTP">ESTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESFP">ESFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ENFJ">ENFJ</option>
          <option value="ENFP">ENFP</option>
        </select>

        <ChangeButton loading={changeMbtiLoading} />
      </div>

      <Conditional condition={modalOpen}>
        <Modal title="MBTI 변경 완료" onToggleModal={onToggleModal} />
      </Conditional>
    </MbtiFormWrapper>
  );
};

export default MbtiEditForm;
