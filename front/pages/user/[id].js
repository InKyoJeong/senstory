import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import { END } from "redux-saga";
import Head from "next/head";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

import axios from "axios";
import PostCard from "../../components/PostCard";
import Layout from "../../components/Layout";
import wrapper from "../../store/configureStore";
import {
  // LOAD_ALL_POST_REQUEST,
  LOAD_USER_ALL_POST_REQUEST,
} from "../../actions/post";
import { LOAD_ME_REQUEST, LOAD_USER_REQUEST } from "../../actions/user";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { repostError, mainPosts, hasMorePosts, loadUserAllPostLoading } =
    useSelector((state) => state.post);
  const { userInfo, me } = useSelector((state) => state.user);

  const [ref, inView] = useInView();

  console.log(userInfo);

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  });

  useEffect(() => {
    if (inView && hasMorePosts && !loadUserAllPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_USER_ALL_POST_REQUEST,
        lastId,
        data: id,
      });
    }
  }, [inView, hasMorePosts, loadUserAllPostLoading, mainPosts, id]);

  const noUserStyle = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      marginTop: "40vh",
      fontSize: 15,
    }),
    []
  );

  if (!userInfo) {
    return (
      <Layout>
        <div style={noUserStyle}>
          <div>존재하지 않는 사용자입니다.</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {userInfo && (
        <Head>
          <title>{userInfo.nickname}님의 게시글 | SenStory</title>
          <meta
            name="description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:title"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:image"
            content="http://localhost:3060/favicon.ico"
          />
          <meta
            property="og:url"
            content={`http://localhost:3060/user/${id}`}
          />
        </Head>
      )}

      {/* userInfo && 부분이없으면 null에러 : 
      NEXT_REDUX_WRAPPER_HYDRATE가 실행되기 전 잠깐 동안 redux state가 비어있음
      userInfo가 존재할 때만 렌더링해야함 */}

      {/* 내 게시물일때는 정보표시x */}
      {/* {userInfo && userInfo.id !== me?.id ? ( */}

      {/* 내 게시물일때도 표시 */}
      {userInfo && (
        <Card style={{ marginBottom: 20 }}>
          <Card.Meta
            avatar={
              userInfo.avatar ? (
                <Avatar src={`http://localhost:3065/${userInfo.avatar}`} />
              ) : (
                <Avatar>{userInfo.nickname[0]}</Avatar>
              )
            }
            title={userInfo.nickname}
          />
          <div>
            <div>게시물</div>
            <div>팔로워</div>
            <div>팔로잉</div>
            <div>{userInfo.Posts}</div>
            <div>{userInfo.Followers}</div>
            <div>{userInfo.Followings}</div>
          </div>
          <div>{userInfo.intro}</div>
        </Card>
        // ) : null}
      )}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
      <div ref={hasMorePosts && !loadUserAllPostLoading ? ref : undefined} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      console.log("user/id 페이지 getServerSideProps 시작");

      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch({
        type: LOAD_USER_ALL_POST_REQUEST,
        data: params.id,
      });
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch({
        type: LOAD_USER_REQUEST,
        data: params.id,
      });
      store.dispatch(END);

      console.log("user/id 페이지 getServerSideProps 끝");

      await store.sagaTask.toPromise();
    }
);

export default User;
