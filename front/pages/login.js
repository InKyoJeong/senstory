import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useSelector } from "react-redux";
import { LOAD_ME_REQUEST } from "../actions/user";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "redux-saga";

import LoginForm from "../components/user/LoginForm";
import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";

const Login = () => {
  const { me, logInFinish, logInLoading } = useSelector((state) => state.user);
  //   console.log(me);
  useEffect(() => {
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me && me.id]);

  useEffect(() => {
    if (logInFinish) {
      Router.replace("/");
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      console.log("login 페이지 getServerSideProps 시작");
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
      console.log("login 페이지 getServerSideProps 끝");
      await store.sagaTask.toPromise();
    }
);

export default Login;
