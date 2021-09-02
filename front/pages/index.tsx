import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { loadAllPostRequest } from '../reducers/post/loadAllPost';
import { loadMeRequest } from '../reducers/user/loadMe';
import { randomUserRequest } from '../reducers/user/randomUser';
import { RootState } from '../reducers';
import { GetServerSideProps } from 'next';

import Conditional from '../hocs/Conditional';
import Layout from '../components/common/Layout';
import PostCard from '../components/post/PostCard';
import PostWriteForm from '../components/post/PostWriteForm';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const { mainPosts, hasMorePosts, loadAllPostLoading, repostError, loadAllPostError } = useSelector(
    (state: RootState) => state.post,
  );

  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  useEffect(() => {
    if (loadAllPostError) {
      alert(loadAllPostError);
    }
  }, [loadAllPostError]);

  useEffect(() => {
    if (inView && hasMorePosts && !loadAllPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch(loadAllPostRequest(lastId));
    }
  }, [inView, hasMorePosts, loadAllPostLoading, mainPosts]);

  return (
    <Layout main>
      <Conditional condition={me}>
        <PostWriteForm />
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} ref={hasMorePosts && !loadAllPostLoading ? ref : undefined} />
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
      store.dispatch(loadAllPostRequest());
      store.dispatch(randomUserRequest());
      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default Home;
