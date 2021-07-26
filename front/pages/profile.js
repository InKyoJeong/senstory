import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_ME_REQUEST,
  LOAD_USER_REQUEST,
} from "../actions/user";

import Layout from "../components/Layout";
import NickEditForm from "../components/NickEditForm";
import FollowList from "../components/FollowList";
import ProfileForm from "../components/ProfileForm";
import IntroEditForm from "../components/IntroEditForm";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>프로필 | SceneryBook</title>
      </Head>
      <Layout>
        <ProfileForm hide />
        <NickEditForm />
        <IntroEditForm />
        {/* 자기소개 Form */}
        <FollowList header="팔로잉" data={me?.Followings} />
        <FollowList header="팔로워" data={me?.Followers} />
      </Layout>
    </>
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
      type: LOAD_ME_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
