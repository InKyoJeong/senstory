import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { loadMeRequest } from '../reducers/user/loadMe';
import { RootState } from '../reducers';
import { GetServerSideProps } from 'next';

import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';
import SignUpForm from '../components/user/SignUpForm';
import SignUpFinish from '../components/user/SignUpFinish';

const Signup = () => {
  const { signUpLoading, signUpFinish } = useSelector((state: RootState) => state.user);

  if (signUpFinish) {
    return <SignUpFinish />;
  }

  if (signUpLoading) {
    return <Loader text="회원가입 중..." />;
  }

  return (
    <Layout>
      <Head>
        <title>회원가입 | SenStory</title>
      </Head>

      <SignUpForm />
    </Layout>
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

export default Signup;
