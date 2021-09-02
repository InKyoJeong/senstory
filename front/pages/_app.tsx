import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import wrapper from "../store/configureStore";

const Senstory = ({ Component }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>SenStory</title>
        </Head>
        <Component />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(Senstory);
