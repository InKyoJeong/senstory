import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import Router from 'next/router';

import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import wrapper from '../../../store/configureStore';

import Layout from '../../../components/common/Layout';
import DiaryBlock from '../../../components/diary/DiaryBlock';
import DiaryBlockContainer from '../../../components/diary/DiaryBlockContainer';
import Loader from '../../../components/common/Loader';
import FeelSelectForm from '../../../components/diary/FeelSelectForm';
import DiaryEmpty from '../../../components/diary/DiaryEmpty';

import { loadFeelDiarysRequest } from '../../../reducers/diary/loadFeelDiarys';
import { loadMeRequest, LOAD_ME_REQUEST } from '../../../reducers/user/loadMe';
import Conditional from '../../../hocs/Conditional';

const Feel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, feel } = router.query;
  const userId = parseInt(id, 10);
  const { mainDiarys, hasMoreDiarys, loadFeelDiarysLoading } = useSelector((state) => state.diary);
  const { me } = useSelector((state) => state.user);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (!me?.id || userId !== me?.id) {
      Router.push('/');
    }
  }, [userId, me?.id]);

  useEffect(() => {
    if (inView && hasMoreDiarys && !loadFeelDiarysLoading) {
      const lastId = mainDiarys[mainDiarys.length - 1]?.id;
      // dispatch({
      //   type: LOAD_FEEL_DIARYS_REQUEST,
      //   lastId,
      //   data1: userId,
      //   data2: feel,
      // });
      dispatch(loadFeelDiarysRequest(userId, feel, lastId));
    }
  }, [inView, hasMoreDiarys, loadFeelDiarysLoading, mainDiarys, feel]);

  if (!me?.id || userId !== me?.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  return (
    <Layout diary>
      <FeelSelectForm hide />

      <Conditional condition={mainDiarys.length === 0}>
        <DiaryEmpty />
      </Conditional>

      <DiaryBlockContainer>
        {mainDiarys.map((diary) => (
          <DiaryBlock key={diary.id} diary={diary} ref={hasMoreDiarys && !loadFeelDiarysLoading ? ref : undefined} />
        ))}
      </DiaryBlockContainer>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  // store.dispatch({
  //   type: LOAD_FEEL_DIARYS_REQUEST,
  //   data1: params.id,
  //   data2: params.feel,
  // });
  store.dispatch(loadFeelDiarysRequest(params.id, params.feel));
  // store.dispatch({
  //   type: LOAD_ME_REQUEST,
  // });
  store.dispatch(loadMeRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Feel;
