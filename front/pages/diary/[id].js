import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import Router from "next/router";
import Head from "next/head";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { EditFilled } from "@ant-design/icons";

import axios from "axios";
import wrapper from "../../store/configureStore";
import { LOAD_ME_REQUEST, LOAD_USER_REQUEST } from "../../actions/user";
import { LOAD_USER_DIARYS_REQUEST } from "../../actions/diary";

import Conditional from "../../hocs/Conditional";
import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";
import MainBanner from "../../components/common/MainBanner";
import DiaryWriteForm from "../../components/diary/DiaryWriteForm";
import DiaryBlock from "../../components/diary/DiaryBlock";
import DiaryBlockContainer from "../../components/diary/DiaryBlockContainer";

const Diary = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const parseId = parseInt(id, 10);
  const { mainDiarys, hasMoreDiarys, loadUserDiarysLoading } = useSelector(
    (state) => state.diary
  );
  const { me, userInfo } = useSelector((state) => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [ref, inView] = useInView();
  // console.log(mainDiarys);

  useEffect(() => {
    // 내 다이어리가 아닐때
    if (me?.id && parseId !== me?.id) {
      Router.push("/");
    }
  }, [parseId, me.id]);

  useEffect(() => {
    if (inView && hasMoreDiarys && !loadUserDiarysLoading) {
      const lastId = mainDiarys[mainDiarys.length - 1]?.id;
      dispatch({
        type: LOAD_USER_DIARYS_REQUEST,
        lastId,
        data: id,
      });
    }
  }, [inView, hasMoreDiarys, loadUserDiarysLoading, mainDiarys, id]);

  if (!me) {
    return <Loader text="잘못된 접근입니다." />;
  }
  if (parseId !== me?.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <Layout>
      <Head>
        <title> Diary | SenStory</title>
      </Head>

      <MainBanner onClick={openModal}>
        <EditFilled />
        <div style={{ marginLeft: 5 }}>오늘의 감정 기록하기</div>
      </MainBanner>

      <Conditional condition={modalVisible}>
        <DiaryWriteForm closeModal={closeModal} />
      </Conditional>

      <DiaryBlockContainer>
        {mainDiarys.map((diary) => (
          <DiaryBlock
            key={diary.id}
            diary={diary}
            ref={hasMoreDiarys && !loadUserDiarysLoading ? ref : undefined}
          />
        ))}
      </DiaryBlockContainer>
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
        type: LOAD_USER_REQUEST,
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
