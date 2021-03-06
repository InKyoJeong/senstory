import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import wrapper from '../../store/configureStore';

import Conditional from '../../hocs/Conditional';
import Layout from '../../components/common/Layout';
import PostCard from '../../components/post/PostCard';
import UserProfileForm from '../../components/profile/UserProfileForm';
import { loadUserAllPostRequest } from '../../reducers/post/loadUserAllPost';
import { loadMeRequest } from '../../reducers/user/loadMe';
import { loadUserRequest } from '../../reducers/user/loadUser';
import { RootState } from '../../reducers';
import { frontUrl } from '../../config/config';

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { repostError, mainPosts, hasMorePosts, loadUserAllPostLoading } = useSelector(
    (state: RootState) => state.post,
  );
  const { userInfo } = useSelector((state: RootState) => state.user);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  });

  useEffect(() => {
    if (inView && hasMorePosts && !loadUserAllPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch(loadUserAllPostRequest(id as string, lastId));
    }
  }, [inView, hasMorePosts, loadUserAllPostLoading, mainPosts, id]);

  const noUserStyle = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginTop: '40vh',
      fontSize: 15,
    }),
    [],
  );

  if (!userInfo) {
    return (
      <Layout>
        <div style={noUserStyle}>
          <div>존재하지 않는 사용자입니다.</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Conditional condition={!!userInfo}>
        <Head>
          <title>{userInfo.nickname}님 | SenStory</title>
          <meta name="description" content={`${userInfo.nickname}님`} />
          <meta property="og:title" content={`${userInfo.nickname}님`} />
          <meta property="og:description" content={`${userInfo.nickname}님`} />
          <meta property="og:image" content={`${frontUrl}/favicon.ico`} />
          <meta property="og:url" content={`${frontUrl}/user/${id}`} />
        </Head>

        <UserProfileForm userInfo={userInfo} />
      </Conditional>

      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} ref={hasMorePosts && !loadUserAllPostLoading ? ref : undefined} />
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

  store.dispatch(loadUserAllPostRequest(params.id));
  store.dispatch(loadMeRequest());
  store.dispatch(loadUserRequest(params.id));
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default User;
