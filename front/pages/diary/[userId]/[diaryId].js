import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/common/Layout";
import { Button } from "antd";
import { useSelector } from "react-redux";

import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_ME_REQUEST } from "../../../actions/user";
import { LOAD_SINGLE_DIARY_REQUEST } from "../../../actions/diary";

const DiaryDetail = () => {
  const router = useRouter();
  const { diaryId, userId } = router.query;
  console.log("diaryId:", diaryId);
  console.log("유저아이디 : ", userId);
  // const parseId = parseInt(diaryId, 10);
  const { singleDiary } = useSelector((state) => state.diary);
  console.log(singleDiary);

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
