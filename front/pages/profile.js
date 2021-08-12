import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_ME_REQUEST,
  LOAD_USER_REQUEST,
  RANDOM_USER_REQUEST,
} from "../actions/user";
import useSWR from "swr";

import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";
import MyProfileForm from "../components/common/MyProfileForm";
import NickEditForm from "../components/profile/NickEditForm";
import FollowList from "../components/profile/FollowList";
import AreaEditForm from "../components/profile/AreaEditForm";
import IntroEditForm from "../components/profile/IntroEditForm";

import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [followerLimit, setFollowerLimit] = useState(3);
  const [followingLimit, setFollowingLimit] = useState(3);

  const {
    data: followerData,
    error: followerError,
    mutate: mutateFollower,
  } = useSWR(
    `http://localhost:3065/user/followers?limit=${followerLimit}`,
    fetcher
    // { refreshInterval: 1000 }
  );

  const {
    data: followingData,
    error: followingError,
    mutate: mutateFollowing,
  } = useSWR(
    `http://localhost:3065/user/followings?limit=${followingLimit}`,
    fetcher
    // { refreshInterval: 1000 }
  );

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/login");
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
    return <div>다시 시도하세요.</div>;
  }

  return (
    <>
      <Head>
        <title>프로필 | SenStory</title>
      </Head>
      <Layout profile>
        <MyProfileForm hide />
        <NickEditForm />
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      console.log("profile 페이지 getServerSideProps 시작");
      console.log(req.headers);
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch({
        type: LOAD_ME_REQUEST,
      });
      store.dispatch({
        type: RANDOM_USER_REQUEST,
      });
      store.dispatch(END);
      console.log("profile 페이지 getServerSideProps 끝");
      await store.sagaTask.toPromise();
    }
);

export default Profile;
