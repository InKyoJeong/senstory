import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Conditional from '../../../hocs/Conditional';
import useInput from '../../../hooks/useInput';
import Modal from '../../common/Modal';
import { AreaFormWrapper, AreaInput } from './styles';
import ChangeButton from '../ChangeButton';
import { changeAreaRequest } from '../../../reducers/user/changeArea';
import { RootState } from '../../../reducers';

const AreaEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeAreaLoading, changeAreaFinish } = useSelector((state: RootState) => state.user);
  const [area, onChangeArea, setArea] = useInput(me?.area || '');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (changeAreaFinish) {
      onToggleModal();
    }
  }, [changeAreaFinish]);

  if (area.length > 10) {
    setArea(area.slice(0, 10));
    alert('최대 10자로 입력해주세요.');
    // return;
  }

  const onSubmit = useCallback(() => {
    dispatch(changeAreaRequest(area));
  }, [area]);

  return (
    <AreaFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-area">활동 지역</label>
      <br />
      <div>
        <AreaInput name="area" value={area} onChange={onChangeArea} type="text" placeholder={'활동지역 (최대 10자)'} />
        <ChangeButton loading={changeAreaLoading} />
      </div>

      <Conditional condition={modalOpen}>
        <Modal title="활동지역 변경 완료" onToggleModal={onToggleModal} />
      </Conditional>
    </AreaFormWrapper>
  );
};

export default AreaEditForm;
