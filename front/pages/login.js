import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

import LoginForm from '../components/user/LoginForm';
import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';
import { loadMeRequest, LOAD_ME_REQUEST } from '../reducers/user/loadMe';

const Login = () => {
  const { me, logInFinish, logInLoading, loginError } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);

  useEffect(() => {
    if (logInFinish) {
      Router.replace('/');
    }
  }, [logInFinish]);

  if (logInLoading) {
    return <Loader text="로그인 중..." />;
  }

  if (me && me.id) {
    return <Loader text="로그인 되었습니다. 홈으로 이동 중..." />;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>로그인 | SenStory</title>
        </Head>

        <LoginForm />
      </Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  // store.dispatch({
  //   type: LOAD_ME_REQUEST,
  // });
  store.dispatch(loadMeRequest());

  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Login;
