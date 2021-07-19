import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import Layout from "../components/Layout";
import NickEditForm from "../components/NickEditForm";
import FollowList from "../components/FollowList";
// import ProfileForm from "../components/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
} from "../actions/user";

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
        {/* <ProfileForm /> */}
        <NickEditForm />
        {/* 자기소개 Form */}
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </Layout>
    </>
  );
};

export default Profile;
