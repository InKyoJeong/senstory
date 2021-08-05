import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import Router from "next/router";
import Head from "next/head";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

import axios from "axios";
import Layout from "../../components/Layout";
import wrapper from "../../store/configureStore";
import { LOAD_ME_REQUEST } from "../../actions/user";
import { LOAD_USER_DIARYS_REQUEST } from "../../actions/diary";

const Diary = () => {
  const router = useRouter();
  const { id } = router.query;
  const { mainDiarys } = useSelector((state) => state.diary);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (id !== me.id) {
      Router.push("/");
    }
  }, [id, me.id]);

  return (
    <Layout>
      <Head>
        <title>diary | SceneryBook</title>
      </Head>
      <div>test</div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch({
        type: LOAD_USER_DIARYS_REQUEST,
        data: params.id,
      });
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Diary;
