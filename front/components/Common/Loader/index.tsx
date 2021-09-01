import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { LoaderFull, LoaderWrapper, LoaderContent } from './styles';

interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <LoaderWrapper>
      <LoaderFull>
        <LoaderContent>
          <div>{text}</div>
          <LoadingOutlined />
        </LoaderContent>
      </LoaderFull>
    </LoaderWrapper>
  );
};

export default Loader;
