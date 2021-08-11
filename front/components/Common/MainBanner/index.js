import React from "react";
import PropTypes from "prop-types";
import { Banner } from "./styles";

const MainBanner = ({ children, onClick }) => {
  return <Banner onClick={onClick}>{children}</Banner>;
};

MainBanner.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default MainBanner;
