import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import { END } from 'redux-saga';
import { LOAD_ME_REQUEST } from '../../../actions/user';
import { BACK_TO_DIARY } from '../../../actions/diary';

import Layout from '../../../components/common/Layout';
import Loader from '../../../components/common/Loader';
import DiaryDetail from '../../../components/diary/DiaryDetail';
import { loadSingleDiaryRequest, LOAD_SINGLE_DIARY_REQUEST } from '../../../reducers/diary/loadSingleDiary';

const DiaryDetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { diaryId, userId } = router.query;
  const parseUserId = parseInt(userId, 10);
  const { singleDiary, removeDiaryLoading, removeDiaryFinish, backTodiary } = useSelector((state) => state.diary);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me?.id || parseUserId !== me?.id || !singleDiary?.id) {
      Router.replace('/');
    }
  }, [parseUserId, me?.id]);

  if (!me?.id || parseUserId !== me?.id || !singleDiary?.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  useEffect(() => {
    if (removeDiaryFinish) {
      router.back();
    }
  }, [removeDiaryFinish]);

  const onBack = useCallback(() => {
    dispatch({
      type: BACK_TO_DIARY,
    });
  }, []);

  if (backTodiary) {
    router.back();
    // return <Loader text="로딩중..." />;
  }

  if (removeDiaryLoading || removeDiaryFinish) {
    return <Loader text="삭제중..." />;
  }

  return (
    <Layout>
      <Head>
        <title> Diary | SenStory</title>
      </Head>

      <DiaryDetail diary={singleDiary} onBack={onBack} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_ME_REQUEST,
  });
  // store.dispatch({
  //   type: LOAD_SINGLE_DIARY_REQUEST,
  //   data: params.diaryId,
  // });
  store.dispatch(loadSingleDiaryRequest(params.diaryId));
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default DiaryDetailPage;
