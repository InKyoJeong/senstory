import React, { ReactNode } from 'react';
import { DiaryBanner } from './styles';

interface DiaryWriteBtnProps {
  children: ReactNode;
  onClick: () => void;
}

const DiaryWriteButton = ({ children, onClick }: DiaryWriteBtnProps) => {
  return <DiaryBanner onClick={onClick}>{children}</DiaryBanner>;
};

export default DiaryWriteButton;
