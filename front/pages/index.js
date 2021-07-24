import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_POST_REQUEST } from "../actions/post";
import { LOAD_ME_REQUEST } from "../actions/user";
import { useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostWriteForm from "../components/PostWriteForm";
import Conditional from "../hocs/Conditional";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading, repostError } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_ME_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (inView && hasMorePosts && !loadPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, [inView, hasMorePosts, loadPostLoading, mainPosts]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //   });
  // }, []);

  // useEffect(() => {
  //   function onScroll() {
  //     if (
  //       window.scrollY + document.documentElement.clientHeight >
  //       document.documentElement.scrollHeight - 300
  //     ) {
  //       if (hasMorePosts && !loadPostLoading) {
  //         dispatch({
  //           type: LOAD_POST_REQUEST,
  //         });
  //       }
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [hasMorePosts, loadPostLoading]);

  return (
    <Layout>
      <Conditional condition={me}>
        <PostWriteForm />
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div ref={hasMorePosts && !loadPostLoading ? ref : undefined} />
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
      type: LOAD_ME_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
