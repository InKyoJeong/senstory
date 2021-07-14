import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_POST_REQUEST } from "../actions/post";
import { LOAD_USER_REQUEST } from "../actions/user";
import { useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostWriteForm from "../components/PostWriteForm";
import Conditional from "../hocs/Conditional";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);

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

export default Home;
