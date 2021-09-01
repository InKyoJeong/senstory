import React from 'react';
import { ErrorIcon, ErrorPageWrapper } from './styles';

interface CustomErrorProps {
  errorTitle: string;
  errorContent: string;
}

const CustomError = ({ errorTitle, errorContent }: CustomErrorProps) => {
  return (
    <ErrorPageWrapper>
      <div>
        <ErrorIcon />
        <h2>{errorTitle}</h2>
        <span>{errorContent}</span>
      </div>
    </ErrorPageWrapper>
  );
};

export default CustomError;
