import React, { useEffect } from "react";
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
  LOAD_ALL_POST_REQUEST,
  LOAD_USER_ALL_POST_REQUEST,
} from "../../actions/post";
import { LOAD_ME_REQUEST, LOAD_USER_REQUEST } from "../../actions/user";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadUserAllPostLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo, me } = useSelector((state) => state.user);

  const [ref, inView] = useInView();

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

  console.log(userInfo);

  return (
    <Layout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
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
      {/* {userInfo && userInfo.id !== me?.id ? ( */}
      <Card style={{ marginBottom: 20 }}>
        <Card.Meta
          avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
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
      {/* ) : null} */}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
      <div ref={hasMorePosts && !loadUserAllPostLoading ? ref : undefined} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_USER_ALL_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_ME_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default User;
