import React from 'react';
import { PageTitleWrapper, TextBack, TextFront } from './styles';

interface MiniTitleProps {
  title1: string;
  title2: string;
}

const MiniTitle = ({ title1, title2 }: MiniTitleProps) => {
  return (
    <>
      <PageTitleWrapper>
        <TextFront>{title1}</TextFront>
        <TextBack>{title2}</TextBack>
      </PageTitleWrapper>
    </>
  );
};

export default MiniTitle;
