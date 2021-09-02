import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import { loadMeRequest } from '../reducers/user/loadMe';
import { RootState } from '../reducers';
import { GetServerSideProps } from 'next';

import LoginForm from '../components/user/LoginForm';
import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';

const Login = () => {
  const { me, logInFinish, logInLoading, logInError } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({ req }: any) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }

      store.dispatch(loadMeRequest());
      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default Login;
