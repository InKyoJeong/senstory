import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

const SceneryBook = ({ Component }) => {
  return (
    <>
      <div>메뉴</div>
      <Component />
    </>
  );
};

SceneryBook.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default SceneryBook;
