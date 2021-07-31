import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";
import { useDispatch } from "react-redux";
// import { LOAD_USER_REQUEST } from "../actions/user";
// import Router from "next/router";
// import { useSelector } from "react-redux";

import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { LOAD_ME_REQUEST } from "../actions/user";

const Signup = () => {
  // const { me } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (me && me.id) {
  //     Router.replace("/");
  //   }
  // }, [me && me.id]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_USER_REQUEST,
  //   });
  // }, []);

  return (
    <Layout>
      <Head>
        <title>회원가입 | SceneryBook</title>
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
