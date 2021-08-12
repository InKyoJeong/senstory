import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import wrapper from "../../store/configureStore";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../actions/post";
import { LOAD_ME_REQUEST, RANDOM_USER_REQUEST } from "../../actions/user";

import PostCard from "../../components/post/PostCard";
import Layout from "../../components/common/Layout";

const Hashtag = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadHashtagPostsLoading } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasMorePosts && !loadHashtagPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        lastId,
        data: tag,
      });
    }
  }, [inView, hasMorePosts, loadHashtagPostsLoading, mainPosts, tag]);

  return (
    <Layout>
      {mainPosts.map((c) => (
        <PostCard
          key={c.id}
          post={c}
          ref={hasMorePosts && !loadHashtagPostsLoading ? ref : undefined}
        />
      ))}
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
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: params.tag,
      });
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch({
        type: RANDOM_USER_REQUEST,
      });
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
);

export default Hashtag;
