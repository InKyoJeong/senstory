import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LOAD_ME_REQUEST } from "../actions/user";
import Head from "next/head";
import Router from "next/router";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";
import Loader from "../components/Loader";

const Signup = () => {
  const { signUpLoading, signUpFinish } = useSelector((state) => state.user);

  useEffect(() => {
    if (signUpFinish) {
      Router.replace("/login");
    }
  }, [signUpFinish]);

  if (signUpLoading) {
    return <Loader text="회원가입 중..." />;
  }

  if (signUpFinish) {
    return (
      <Loader text="회원가입이 완료되었습니다. 로그인 페이지로 이동 중..." />
    );
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      console.log("signup 페이지 getServerSideProps 시작");
      console.log(req.headers);
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch(END);
      console.log("signup 페이지 getServerSideProps 끝");
      await store.sagaTask.toPromise();
    }
);

export default Signup;
