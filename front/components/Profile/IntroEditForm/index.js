import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Conditional from '../../../hocs/Conditional';
import useInput from '../../../hooks/useInput';
import useToggle from '../../../hooks/useToggle';
import Modal from '../../common/Modal';
import { IntroFormWrapper, IntroButton, IntroInputWrapper } from './styles';
import { changeIntroRequest, CHANGE_INTRO_REQUEST } from '../../../reducers/user/changeIntro';

const IntroEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeIntroLoading, changeIntroFinish } = useSelector((state) => state.user);
  const [intro, onChangeIntro, setIntro] = useInput(me?.intro || '');
  const [modalOpen, onToggleModal] = useToggle(false);

  useEffect(() => {
    if (changeIntroFinish) {
      onToggleModal();
    }
  }, [changeIntroFinish]);

  if (intro.length > 100) {
    setIntro(intro.slice(0, 100));
    return alert('100자 이내로 입력해주세요.');
  }

  const onSubmit = useCallback(() => {
    // dispatch({
    //   type: CHANGE_INTRO_REQUEST,
    //   data: intro,
    // });
    dispatch(changeIntroRequest(intro));
  }, [intro]);

  const introStyle = useMemo(
    () => ({
      marginBottom: 8,
      backgroundColor: '#404042',
      borderColor: 'gray',
      color: 'white',
      borderRadius: 10,
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
