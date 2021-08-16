import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import Image from "next/image";
import { Button } from "antd";
import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_ME_REQUEST } from "../../../actions/user";
import {
  LOAD_SINGLE_DIARY_REQUEST,
  REMOVE_DIARY_REQUEST,
} from "../../../actions/diary";
import { todayOnlyNum } from "../../../utils";

import Layout from "../../../components/common/Layout";
import Loader from "../../../components/common/Loader";
import {
  ArrowLeftOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import DiaryDropdown from "../../../components/diary/DiaryDropdown";
import Conditional from "../../../hocs/Conditional";

const DiaryDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { diaryId, userId } = router.query;
  const parseUserId = parseInt(userId, 10);
  const { singleDiary, removeDiaryLoading, removeDiaryFinish } = useSelector(
    (state) => state.diary
  );

  const { me } = useSelector((state) => state.user);

  // test
  console.log(singleDiary);

  useEffect(() => {
    if (!me?.id || parseUserId !== me?.id || !singleDiary?.id) {
      Router.replace("/");
    }
  }, [parseUserId, me?.id]);

  if (!me?.id || parseUserId !== me?.id || !singleDiary?.id) {
    return <Loader text="잘못된 접근입니다. 홈으로 이동합니다." />;
  }

  useEffect(() => {
    if (removeDiaryFinish) {
      router.back();
    }
  }, [removeDiaryFinish]);

  const onRemoveDiary = useCallback(() => {
    dispatch({
      type: REMOVE_DIARY_REQUEST,
      data: singleDiary.id,
    });
  }, []);

  if (removeDiaryLoading || removeDiaryFinish) {
    return <Loader text="삭제중..." />;
  }

  return (
    <Layout>
      {/* <DiaryDetail diary={singleDiary}/> */}

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          background: "gray",
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 20,
        }}
      >
        <div>
          <div
            onClick={() => router.back()}
            style={{ fontSize: 30, paddingLeft: 10 }}
          >
            <ArrowLeftOutlined
              style={{
                color: "white",
                borderRadius: 50,
              }}
            />
          </div>
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "bolder",
            textShadow: "1px 1px 2px rgba(0,0,0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {todayOnlyNum(singleDiary.createdAt)}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <DiaryDropdown
            onRemoveDiary={onRemoveDiary}
            removeDiaryLoading={removeDiaryLoading}
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #ffe78f, #f2bf05)",
          borderRadius: 20,
          padding: "10px 20px 20px 20px",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div>
            {singleDiary.feel === "Special" && <StarOutlined />}
            {singleDiary.feel === "Good" && <SmileOutlined />}
            {singleDiary.feel === "Soso" && <MehOutlined />}
            {singleDiary.feel === "Bad" && <FrownOutlined />}
          </div>
          <div>
            <Conditional condition={singleDiary.mintemp && singleDiary.maxtemp}>
              {singleDiary.mintemp}° / {singleDiary.maxtemp}°
            </Conditional>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "black",
              textShadow: "1px 1px 1px rgba(255,255,255, 0.5)",
              marginBottom: 40,
              fontWeight: "bolder",
            }}
          >
            {singleDiary.title}
          </div>

          {singleDiary.Photos[0] && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: -50 }}>
                <Image src="/clip.png" alt="clip" width="80" height="100" />
              </div>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "15px 15px 30px 15px",
                  width: "75%",
                  height: "75%",
                  boxShadow:
                    "0 10px 10px -4px rgba(0,0,0,0.2),0 5px 5px -5px rgba(0,0,0,0.04)",
                }}
              >
                <img
                  src={`http://localhost:3065/${singleDiary.Photos[0].src}`}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}

          <div
            style={{
              color: "black",
              textShadow: "1px 1px 1px rgba(255,255,255, 0.5)",
              whiteSpace: "pre-wrap",
              marginTop: 30,
            }}
          >
            {singleDiary.content}
          </div>
        </div>
      </div>
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
