import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import Conditional from '../hocs/Conditional';
import Layout from '../components/common/Layout';
import PostCard from '../components/post/PostCard';
import PostWriteForm from '../components/post/PostWriteForm';

import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { loadAllPostRequest, LOAD_ALL_POST_REQUEST } from '../reducers/post/loadAllPost';
import { loadMeRequest, LOAD_ME_REQUEST } from '../reducers/user/loadMe';
import { randomUserRequest, RANDOM_USER_REQUEST } from '../reducers/user/randomUser';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadAllPostLoading, repostError, loadAllPostError } = useSelector(
    (state) => state.post,
  );

  // console.log(mainPosts);
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
      // dispatch({
      //   type: LOAD_ALL_POST_REQUEST,
      //   lastId,
      // });
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
      {/* <div ref={hasMorePosts && !loadAllPostLoading ? ref : undefined} /> */}
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
  //   type: LOAD_ALL_POST_REQUEST,
  // });
  store.dispatch(loadAllPostRequest());
  // store.dispatch({
  //   type: RANDOM_USER_REQUEST,
  // });
  store.dispatch(randomUserRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
