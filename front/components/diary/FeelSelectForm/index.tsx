import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { Button } from 'antd';
import HideWrapper from '../../common/HideWrapper';
import FeelChartBar from '../FeelChartBar';
import { ChartWrapper, FeelSelectWrapper, SelectBtnWrapper, TotalDiary } from './styles';
import { RootState } from '../../../reducers';
import { Diary } from '../../../interfaces/diary';

interface FeelSelectProps {
  hide?: boolean;
}

const FeelSelectForm = ({ hide }: FeelSelectProps) => {
  const { me } = useSelector((state: RootState) => state.user);

  const onSelect = useCallback((e) => {
    Router.push(`/feel/${me.id}/${e.target.innerText}`);
  }, []);

  const totalLength = me.Diaries.length;
  const specialLength = me.Diaries.filter((diary: Diary) => diary.feel === 'Special').length;
  const sosoLength = me.Diaries.filter((diary: Diary) => diary.feel === 'Soso').length;
  const goodLength = me.Diaries.filter((diary: Diary) => diary.feel === 'Good').length;
  const badLength = me.Diaries.filter((diary: Diary) => diary.feel === 'Bad').length;

  return (
    <HideWrapper hide={hide}>
      <FeelSelectWrapper>
        <SelectBtnWrapper onClick={onSelect}>
          <Button>Special</Button>
          <Button>Good</Button>
          <Button>Soso</Button>
          <Button>Bad</Button>
        </SelectBtnWrapper>

        <ChartWrapper>
          <FeelChartBar feelLength={specialLength} totalLength={totalLength} />
          <FeelChartBar feelLength={goodLength} totalLength={totalLength} />
          <FeelChartBar feelLength={sosoLength} totalLength={totalLength} />
          <FeelChartBar feelLength={badLength} totalLength={totalLength} />
        </ChartWrapper>
        <div></div>
        <TotalDiary>총 {me.Diaries.length}개</TotalDiary>
      </FeelSelectWrapper>
    </HideWrapper>
  );
};

export default FeelSelectForm;
