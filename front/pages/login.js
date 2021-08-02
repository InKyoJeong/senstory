import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import wrapper from "../store/configureStore";
import { LOAD_ME_REQUEST } from "../actions/user";
import axios from "axios";
import { END } from "redux-saga";

const Login = () => {
  const { me, logInFinish, logInLoading } = useSelector((state) => state.user);
  console.log(me);
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
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.8)",
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 40px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", fontSize: 15 }}
          >
            <div style={{ paddingBottom: 10 }}>로그인 중...</div>
            <LoadingOutlined />
          </div>
        </div>
      </div>
    );
  }

  if (me && me.id) {
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.8)",
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 40px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", fontSize: 15 }}
          >
            <div style={{ paddingBottom: 10 }}>
              로그인 되었습니다. 홈으로 이동합니다.
            </div>
            <LoadingOutlined />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>로그인 | SceneryBook</title>
      </Head>
      <Layout>
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
