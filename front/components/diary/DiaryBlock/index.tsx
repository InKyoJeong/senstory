import React, { forwardRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { todayDot } from '../../../utils';
import { FrownOutlined, MehOutlined, SmileOutlined, StarOutlined } from '@ant-design/icons';

import { BlockFeelText, BlockDateText, BlockTitleText, DiaryBlockWrapper, WhiteLabel } from './styles';
import Router from 'next/router';
import { Diary } from '../../../interfaces/diary';
import { RootState } from '../../../reducers';

interface DiaryBlockProps {
  diary: Diary;
}

const DiaryBlock = forwardRef(({ diary }: DiaryBlockProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { me } = useSelector((state: RootState) => state.user);

  const handleClickDiary = useCallback((id) => {
    Router.push(`/diary/${me.id}/${id}`);
  }, []);

  return (
    <DiaryBlockWrapper feel={diary.feel} onClick={() => handleClickDiary(diary.id)}>
      <WhiteLabel>
        <div></div>
      </WhiteLabel>

      <BlockFeelText>
        <div>
          {diary.feel === 'Special' && <StarOutlined />}
          {diary.feel === 'Good' && <SmileOutlined />}
          {diary.feel === 'Soso' && <MehOutlined />}
          {diary.feel === 'Bad' && <FrownOutlined />}
        </div>
        <BlockTitleText>
          <div>{diary.title}</div>
        </BlockTitleText>
      </BlockFeelText>
      <BlockDateText>{todayDot(diary.createdAt)}</BlockDateText>

      <div ref={ref} />
    </DiaryBlockWrapper>
  );
});

export default DiaryBlock;
