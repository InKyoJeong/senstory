import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";

// const Global = createGlobalStyle`
//   body{
//     background-color: #191A1A;
//   }
// `;

const SceneryBook = ({ Component }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Global /> */}
        <Head>
          <meta charSet="utf-8" />
          <title>SceneryBook</title>
          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        </Head>
        <Component />
      </ThemeProvider>
    </>
  );
};

SceneryBook.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(SceneryBook);
