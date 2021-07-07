import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import NickEditForm from "../components/NickEditForm";
import FollowList from "../components/FollowList";
import MyProfile from "../components/MyProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>프로필 | SceneryBook</title>
      </Head>
      <Layout>
        {/* <MyProfile /> */}
        <NickEditForm />
        {/* 자기소개 Form */}
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </Layout>
    </>
  );
};

export default Profile;
