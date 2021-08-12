import React from "react";
import PropTypes from "prop-types";
import { DiaryBanner } from "./styles";

const DiaryWriteButton = ({ children, onClick }) => {
  return <DiaryBanner onClick={onClick}>{children}</DiaryBanner>;
};

DiaryWriteButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default DiaryWriteButton;
