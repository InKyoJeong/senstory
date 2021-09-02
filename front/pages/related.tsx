import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import Router from 'next/router';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import { loadMeRequest } from '../reducers/user/loadMe';
import { randomUserRequest } from '../reducers/user/randomUser';
import { loadRelatedPostRequest } from '../reducers/post/loadRelatedPost';
import { RootState } from '../reducers';
import { GetServerSideProps } from 'next';

import Layout from '../components/common/Layout';
import PostCard from '../components/post/PostCard';
import Loader from '../components/common/Loader';
import Conditional from '../hocs/Conditional';

const Related = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const { mainPosts, hasMorePosts, loadRelatedPostsLoading, repostError } = useSelector(
    (state: RootState) => state.post,
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  useEffect(() => {
    if (inView && hasMorePosts && !loadRelatedPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async ({ req }: any) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }

      store.dispatch(loadMeRequest());
      store.dispatch(loadRelatedPostRequest());
      store.dispatch(randomUserRequest());
      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default Related;
