import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import Router from "next/router";
import Head from "next/head";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

import axios from "axios";
import wrapper from "../../store/configureStore";
import { LOAD_ME_REQUEST } from "../../actions/user";
import { LOAD_USER_DIARYS_REQUEST } from "../../actions/diary";
import useToggle from "../../hooks/useToggle";

import Layout from "../../components/Common/Layout";
import Loader from "../../components/Common/Loader";
import MainBanner from "../../components/Common/MainBanner";
import DiaryWriteForm from "../../components/Diary/DiaryWriteForm";

import { EditFilled } from "@ant-design/icons";

const Diary = () => {
  const router = useRouter();
  const { id } = router.query;
  const parseId = parseInt(id, 10);
  const { mainDiarys, addDiaryFinish } = useSelector((state) => state.diary);
  const { me } = useSelector((state) => state.user);
  const [modalOpen, onToggleModal] = useToggle(false);

  if (!me) {
    return <div>잘못된 접근입니다. (로그인하지 않음)</div>;
  }

  useEffect(() => {
    if (addDiaryFinish) {
      onToggleModal();
    }
  }, [addDiaryFinish]);

  useEffect(() => {
    if (me?.id && parseId !== me.id) {
      console.log("내 일기장이 아니라서 볼수없음. 홈으로 이동함 (잘못된 접근)");
      Router.push("/");
    }
  }, [parseId, me.id]);

  if (me?.id && parseId !== me.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  return (
    <Layout>
      <Head>
        <title> Diary | SenStory</title>
      </Head>

      <MainBanner onClick={onToggleModal}>
        <EditFilled />
        <div style={{ marginLeft: 5 }}>오늘의 감정 기록하기</div>
      </MainBanner>

      <DiaryWriteForm modalOpen={modalOpen} onToggleModal={onToggleModal} />
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
      // store.dispatch({
      //   type: LOAD_USER_DIARYS_REQUEST,
      //   data: params.id,
      // });
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Diary;
