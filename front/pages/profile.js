import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import NickEditForm from "../components/NickEditForm";
import FollowList from "../components/FollowList";
import MyProfile from "../components/MyProfile";

const Profile = () => {
  const followingList = [
    { nickname: "aaa" },
    { nickname: "bbb" },
    { nickname: "ccc" },
  ];
  const followerList = [
    { nickname: "aaa" },
    { nickname: "bbb" },
    { nickname: "ccc" },
  ];

  return (
    <>
      <Head>
        <title>프로필 | SceneryBook</title>
      </Head>
      <Layout>
        {/* <MyProfile /> */}
        <NickEditForm />
        {/* 자기소개 Form */}
        <FollowList header="팔로잉" data={followingList} />
        <FollowList header="팔로워" data={followerList} />
      </Layout>
    </>
  );
};

export default Profile;
