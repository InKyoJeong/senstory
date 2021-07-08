import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostWriteForm from "../components/PostWriteForm";
import Conditional from "../hocs/Conditional";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <Layout>
      <Conditional condition={me}>
        <PostWriteForm />
      </Conditional>

      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
