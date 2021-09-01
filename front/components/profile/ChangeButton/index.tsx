import React from 'react';
import { ChangeEditBtn } from './styles';

interface ChangeBtnProps {
  loading: boolean;
}

const ChangeButton = ({ loading }: ChangeBtnProps) => {
  return (
    <ChangeEditBtn type="primary" htmlType="submit" loading={loading}>
      변경
    </ChangeEditBtn>
  );
};

export default ChangeButton;
