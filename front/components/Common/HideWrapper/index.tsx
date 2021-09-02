import React, { ReactNode } from 'react';
import { HideForm } from './styles';

interface HideWrapperProps {
  children: ReactNode;
  hide?: boolean;
}

const HideWrapper = ({ hide, children }: HideWrapperProps) => {
  return <HideForm hide={hide}>{children}</HideForm>;
};

export default HideWrapper;
