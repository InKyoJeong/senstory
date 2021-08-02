import React from "react";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { LoaderFull, LoaderWrapper, LoaderContent } from "./styles";

const Loader = ({ text }) => {
  return (
    <LoaderWrapper>
      <LoaderFull>
        <LoaderContent>
          <div>{text}</div>
          <LoadingOutlined />
        </LoaderContent>
      </LoaderFull>
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loader;
