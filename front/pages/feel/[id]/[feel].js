import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import wrapper from "../../../store/configureStore";
import { LOAD_FEEL_DIARYS_REQUEST } from "../../../actions/diary";
import { LOAD_ME_REQUEST } from "../../../actions/user";

import Layout from "../../../components/common/Layout";
import DiaryBlock from "../../../components/diary/DiaryBlock";
import DiaryBlockContainer from "../../../components/diary/DiaryBlockContainer";

const Feel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, feel } = router.query;
  const userId = parseInt(id, 10);
  console.log(userId);
  const { mainDiarys, hasMoreDiarys, loadFeelDiarysLoading } = useSelector(
    (state) => state.diary
  );

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasMoreDiarys && !loadFeelDiarysLoading) {
      const lastId = mainDiarys[mainDiarys.length - 1]?.id;
      dispatch({
        type: LOAD_FEEL_DIARYS_REQUEST,
        lastId,
        data1: userId,
        data2: feel,
      });
    }
  }, [inView, hasMoreDiarys, loadFeelDiarysLoading, mainDiarys, feel]);

  return (
    <Layout diary>
      <DiaryBlockContainer>
        {mainDiarys.map((diary) => (
          <DiaryBlock
            key={diary.id}
            diary={diary}
            ref={hasMoreDiarys && !loadFeelDiarysLoading ? ref : undefined}
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
        type: LOAD_FEEL_DIARYS_REQUEST,
        data1: params.id,
        data2: params.feel,
      });
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });

      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Feel;
