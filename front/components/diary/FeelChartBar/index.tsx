import React from 'react';
import { GuageWrapper } from './styles';

interface FeelChartBarProps {
  feelLength: number;
  totalLength: number;
}

const FeelChartBar = ({ feelLength, totalLength }: FeelChartBarProps) => {
  let percent = Math.round((feelLength / totalLength) * 100) + '%';
  if (totalLength === 0) {
    percent = '0%';
  }

  return (
    <GuageWrapper percent={percent}>
      <div></div>
      <span>
        {feelLength} ({percent})
      </span>
    </GuageWrapper>
  );
};

export default FeelChartBar;
