import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const SceneryBook = ({ Component }) => {
  return (
    <>
      {/* <Global /> */}
      <Head>
        <meta charSet="utf-8" />
        <title>SceneryBook</title>
      </Head>
      <Component />
    </>
  );
};

SceneryBook.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(SceneryBook);
