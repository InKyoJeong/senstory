import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_RELATED_POSTS_REQUEST } from "../actions/post";
import { LOAD_ME_REQUEST, RANDOM_USER_REQUEST } from "../actions/user";
import { useInView } from "react-intersection-observer";
import Router from "next/router";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

const Related = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadRelatedPostsLoading, repostError } =
    useSelector((state) => state.post);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  useEffect(() => {
    if (inView && hasMorePosts && !loadRelatedPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_RELATED_POSTS_REQUEST,
        lastId,
      });
    }
  }, [inView, hasMorePosts, loadRelatedPostsLoading, mainPosts]);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/login");
    }
  }, [me && me.id]);

  if (!me) {
    return <Loader text="로그인 페이지로 이동중..." />;
  }

  return (
    <Layout related>
      {mainPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          ref={hasMorePosts && !loadRelatedPostsLoading ? ref : undefined}
        />
      ))}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch({
        type: LOAD_RELATED_POSTS_REQUEST,
      });
      store.dispatch({
        type: RANDOM_USER_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Related;
