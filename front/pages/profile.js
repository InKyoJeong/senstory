import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';
import MyProfileForm from '../components/common/MyProfileForm';
import CustomError from '../components/common/CustomError';
import NickEditForm from '../components/profile/NickEditForm';
import MbtiEditForm from '../components/profile/MbtiEditForm';
import FollowList from '../components/profile/FollowList';
import AreaEditForm from '../components/profile/AreaEditForm';
import IntroEditForm from '../components/profile/IntroEditForm';

import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { loadMeRequest, LOAD_ME_REQUEST } from '../reducers/user/loadMe';
import { randomUserRequest, RANDOM_USER_REQUEST } from '../reducers/user/randomUser';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  const [followerLimit, setFollowerLimit] = useState(3);
  const [followingLimit, setFollowingLimit] = useState(3);

  const {
    data: followerData,
    error: followerError,
    mutate: mutateFollower,
  } = useSWR(`http://localhost:3065/user/followers?limit=${followerLimit}`, fetcher);

  const {
    data: followingData,
    error: followingError,
    mutate: mutateFollowing,
  } = useSWR(`http://localhost:3065/user/followings?limit=${followingLimit}`, fetcher);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/login');
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowerLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return <Loader text="로그인 페이지로 이동중..." />;
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <CustomError errorTitle="에러 발생!" errorContent="잠시 후 다시 시도해주세요." />;
  }

  return (
    <>
      <Head>
        <title>Profile | SenStory</title>
      </Head>

      <Layout profile>
        <MyProfileForm hide />
        <NickEditForm />
        <MbtiEditForm />
        <AreaEditForm />
        <IntroEditForm />
        <FollowList
          header="팔로잉"
          data={followingData}
          onClickMore={loadMoreFollowings}
          loading={!followingData && !followingError}
          mutate={mutateFollowing}
        />
        <FollowList
          header="팔로워"
          data={followerData}
          onClickMore={loadMoreFollowers}
          loading={!followerData && followerError}
          mutate={mutateFollower}
        />
      </Layout>
    </>
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
  //   type: RANDOM_USER_REQUEST,
  // });
  store.dispatch(randomUserRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Profile;
