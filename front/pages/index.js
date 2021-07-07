import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostWriteForm from "../components/PostWriteForm";
import Conditional from "../hocs/Conditional";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const mainPosts = useSelector((state) => state.post.mainPosts);

  return (
    <Layout>
      <Conditional condition={isLoggedIn}>
        <PostWriteForm />
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
