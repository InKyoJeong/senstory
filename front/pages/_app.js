import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

import { ThemeProvider } from "styled-components";
import theme from "../theme";

const Senstory = ({ Component }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>SenStory</title>
          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        </Head>
        <Component />
      </ThemeProvider>
    </>
  );
};

Senstory.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Senstory);
