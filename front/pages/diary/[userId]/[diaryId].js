import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { Button } from "antd";

import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_ME_REQUEST } from "../../../actions/user";
import { LOAD_SINGLE_DIARY_REQUEST } from "../../../actions/diary";
import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";

const DiaryDetail = () => {
  const router = useRouter();
  const { diaryId, userId } = router.query;
  const parseUserId = parseInt(userId, 10);
  const { singleDiary } = useSelector((state) => state.diary);
  const { me } = useSelector((state) => state.user);

  // test
  console.log(singleDiary);

  useEffect(() => {
    if (!me?.id || parseUserId !== me?.id) {
      Router.replace("/");
    }
  }, [parseUserId, me?.id]);

  if (!me?.id || parseUserId !== me?.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  return (
    <Layout>
      <div style={{ color: "white" }}>userId: {userId}</div>
      <div style={{ color: "white" }}>diaryId: {diaryId}</div>
      <div style={{ color: "white" }}>{singleDiary.title}</div>
      <Button onClick={() => router.back()}>뒤로</Button>
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
        type: LOAD_ME_REQUEST,
      });
      store.dispatch({
        type: LOAD_SINGLE_DIARY_REQUEST,
        data: params.diaryId,
      });
      store.dispatch(END);

      await store.sagaTask.toPromise();
    }
);

export default DiaryDetail;
