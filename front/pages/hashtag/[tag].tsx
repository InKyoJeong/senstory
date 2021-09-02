import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import wrapper from '../../store/configureStore';

import PostCard from '../../components/post/PostCard';
import Layout from '../../components/common/Layout';
import { loadHashtagPostsRequest } from '../../reducers/post/loadHashtagPosts';
import { loadMeRequest } from '../../reducers/user/loadMe';
import { randomUserRequest } from '../../reducers/user/randomUser';
import { RootState } from '../../reducers';

const Hashtag = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadHashtagPostsLoading } = useSelector((state: RootState) => state.post);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasMorePosts && !loadHashtagPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;

      dispatch(loadHashtagPostsRequest(tag as string, lastId));
    }
  }, [inView, hasMorePosts, loadHashtagPostsLoading, mainPosts, tag]);

  return (
    <Layout>
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} ref={hasMorePosts && !loadHashtagPostsLoading ? ref : undefined} />
      ))}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req, params }: any) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  store.dispatch(loadHashtagPostsRequest(params.tag));
  store.dispatch(loadMeRequest());
  store.dispatch(randomUserRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Hashtag;
