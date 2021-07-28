import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import wrapper from "../../store/configureStore";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../actions/post";
import { LOAD_ME_REQUEST } from "../../actions/user";
import PostCard from "../../components/PostCard";
import Layout from "../../components/Layout";

const Hashtag = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadHashtagPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo, me } = useSelector((state) => state.user);

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

  console.log(userInfo);

  return (
    <Layout>
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
      <div ref={hasMorePosts && !loadHashtagPostsLoading ? ref : undefined} />
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
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    context.store.dispatch({
      type: LOAD_ME_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Hashtag;
