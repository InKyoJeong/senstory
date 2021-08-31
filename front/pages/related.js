import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import Router from 'next/router';

import Layout from '../components/common/Layout';
import PostCard from '../components/post/PostCard';

import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import Loader from '../components/common/Loader';
import { loadRelatedPostRequest } from '../reducers/post/loadRelatedPost';
import Conditional from '../hocs/Conditional';
import { loadMeRequest, LOAD_ME_REQUEST } from '../reducers/user/loadMe';
import { randomUserRequest, RANDOM_USER_REQUEST } from '../reducers/user/randomUser';

const Related = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadRelatedPostsLoading, repostError } = useSelector((state) => state.post);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  useEffect(() => {
    if (inView && hasMorePosts && !loadRelatedPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      // dispatch({
      //   type: LOAD_RELATED_POSTS_REQUEST,
      //   lastId,
      // });
      dispatch(loadRelatedPostRequest(lastId));
    }
  }, [inView, hasMorePosts, loadRelatedPostsLoading, mainPosts]);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/login');
    }
  }, [me && me.id]);

  if (!me) {
    return <Loader text="로그인 페이지로 이동중..." />;
  }

  const emptyStyle = useMemo(
    () => ({
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50%',
    }),
    [],
  );

  return (
    <Layout related>
      <Conditional condition={mainPosts.length === 0}>
        <div style={emptyStyle}>표시할 게시물이 없습니다.</div>
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} ref={hasMorePosts && !loadRelatedPostsLoading ? ref : undefined} />
      ))}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  // store.dispatch({
  //   type: LOAD_ME_REQUEST,
  // });
  store.dispatch(loadMeRequest());
  // store.dispatch({
  //   type: LOAD_RELATED_POSTS_REQUEST,
  // });
  store.dispatch(loadRelatedPostRequest());

  // store.dispatch({
  //   type: RANDOM_USER_REQUEST,
  // });
  store.dispatch(randomUserRequest());

  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Related;
