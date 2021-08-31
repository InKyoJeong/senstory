import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';
import SignUpForm from '../components/user/SignUpForm';
import SignUpFinish from '../components/user/SignUpFinish';
import { loadMeRequest, LOAD_ME_REQUEST } from '../reducers/user/loadMe';

const Signup = () => {
  const { signUpLoading, signUpFinish } = useSelector((state) => state.user);

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

export default Signup;
