import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";
// import Router from "next/router";
// import { useSelector } from "react-redux";

const Signup = () => {
  // const { me } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (me && me.id) {
  //     Router.replace("/");
  //   }
  // }, [me && me.id]);

  return (
    <Layout>
      <Head>
        <title>회원가입 | SceneryBook</title>
      </Head>

      <SignUpForm />
    </Layout>
  );
};

export default Signup;
