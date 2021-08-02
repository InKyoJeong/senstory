import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_ALL_POST_REQUEST } from "../actions/post";
import { LOAD_ME_REQUEST, RANDOM_USER_REQUEST } from "../actions/user";
// import { useInView } from "react-intersection-observer";

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
  const { mainPosts, hasMorePosts, loadAllPostLoading, repostError } =
    useSelector((state) => state.post);
  // const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  // useEffect(() => {
  //   if (inView && hasMorePosts && !loadAllPostLoading) {
  //     const lastId = mainPosts[mainPosts.length - 1]?.id;
  //     dispatch({
  //       type: LOAD_ALL_POST_REQUEST,
  //       lastId,
  //     });
  //   }
  // }, [inView, hasMorePosts, loadAllPostLoading, mainPosts]);

  useEffect(() => {
    dispatch({
      type: LOAD_ALL_POST_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadAllPostLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_ALL_POST_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadAllPostLoading, mainPosts]);

  return (
    <Layout>
      <Conditional condition={me}>
        <PostWriteForm />
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* <div ref={hasMorePosts && !loadAllPostLoading ? ref : undefined} /> */}
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
        type: LOAD_ALL_POST_REQUEST,
      });
      store.dispatch({
        type: RANDOM_USER_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Home;
