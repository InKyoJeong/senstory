import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Conditional from '../../../hocs/Conditional';
import useInput from '../../../hooks/useInput';
import Modal from '../../common/Modal';
import { IntroFormWrapper, IntroButton, IntroInputWrapper } from './styles';
import { changeIntroRequest } from '../../../reducers/user/changeIntro';
import { RootState } from '../../../reducers';

const IntroEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeIntroLoading, changeIntroFinish } = useSelector((state: RootState) => state.user);
  const [intro, onChangeIntro, setIntro] = useInput(me?.intro || '');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (changeIntroFinish) {
      onToggleModal();
    }
  }, [changeIntroFinish]);

  if (intro.length > 100) {
    setIntro(intro.slice(0, 100));
    alert('100자 이내로 입력해주세요.');
  }

  const onSubmit = useCallback(() => {
    dispatch(changeIntroRequest(intro));
  }, [intro]);

  const introStyle = useMemo(
    () => ({
      marginBottom: 8,
      backgroundColor: '#404042',
      borderColor: 'gray',
      color: 'white',
      borderRadius: 10,
      fontSize: 16,
    }),
    [],
  );

  return (
    <IntroFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-intro">내 소개</label>
      <br />
      <IntroInputWrapper>
        <Input.TextArea
          style={introStyle}
          value={intro}
          onChange={onChangeIntro}
          maxLength={100}
          placeholder="소개를 입력해주세요. (최대 100자)"
        />
      </IntroInputWrapper>
      <IntroButton>
        <Button type="primary" htmlType="submit" loading={changeIntroLoading}>
          등록
        </Button>
      </IntroButton>

      <Conditional condition={modalOpen}>
        <Modal title="내 소개 등록 완료" onToggleModal={onToggleModal} />
      </Conditional>
    </IntroFormWrapper>
  );
};

export default IntroEditForm;
