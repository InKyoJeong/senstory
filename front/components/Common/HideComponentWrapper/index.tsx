import React, { ReactNode } from 'react';
import { HideForm } from './styles';

interface HideWrapperProps {
  children: ReactNode;
  hide?: boolean;
}

const HideComponentWrapper = ({ hide, children }: HideWrapperProps) => {
  return <HideForm hide={hide}>{children}</HideForm>;
};

export default HideComponentWrapper;
