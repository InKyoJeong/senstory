import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';

import Layout from '../../components/common/Layout';
import PostCard from '../../components/post/PostCard';
import { loadSinglePostRequest } from '../../reducers/post/loadSinglePost';
import { loadMeRequest } from '../../reducers/user/loadMe';
import { RootState } from '../../reducers';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost, repostError } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  return (
    <Layout>
      <Head>
        <title>{singlePost?.User.nickname}님의 게시글 | SenStory</title>
        <meta name="description" content={singlePost?.content} />
        <meta property="og:title" content={`${singlePost?.User.nickname}님의 게시글`} />
        <meta property="og:description" content={singlePost?.content} />
        <meta
          property="og:image"
          content={singlePost?.Images[0] ? singlePost?.Images[0].src : 'http://localhost:3060/favicon.ico'}
        />
        <meta property="og:url" content={`http://localhost:3060/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req, params }: any) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  store.dispatch(loadMeRequest());
  store.dispatch(loadSinglePostRequest(params.id));
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Post;
