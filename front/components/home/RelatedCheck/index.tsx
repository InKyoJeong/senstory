import React from 'react';
import Link from 'next/link';
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons';
import Conditional from '../../../hocs/Conditional';
import { RelatedForm } from './styles';

interface RelatedProps {
  check: boolean;
}

const RelatedCheck = ({ check }: RelatedProps) => {
  return (
    <>
      <Conditional condition={check}>
        <Link href="/">
          <a>
            <RelatedForm>
              <CheckSquareOutlined />
              친구의 소식만 보기
            </RelatedForm>
          </a>
        </Link>
      </Conditional>

      <Conditional condition={!check}>
        <Link href="/related">
          <a>
            <RelatedForm>
              <BorderOutlined />
              친구의 소식만 보기
            </RelatedForm>
          </a>
        </Link>
      </Conditional>
    </>
  );
};

export default RelatedCheck;
