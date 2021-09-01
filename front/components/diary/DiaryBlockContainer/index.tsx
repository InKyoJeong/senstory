import React, { ReactNode } from 'react';
import Conditional from '../../../hocs/Conditional';
import { DiaryContainerWrapper } from './styles';

interface DiaryContainerProps {
  children: ReactNode;
}

const DiaryBlockContainer = ({ children }: DiaryContainerProps) => {
  return (
    <>
      <DiaryContainerWrapper>{children}</DiaryContainerWrapper>
    </>
  );
};

export default DiaryBlockContainer;
