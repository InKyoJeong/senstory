import React from "react";
import PropTypes from "prop-types";
import { DiaryContainerWrapper } from "./styles";

const DiaryBlockContainer = ({ children }) => {
  return <DiaryContainerWrapper>{children}</DiaryContainerWrapper>;
};

DiaryBlockContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DiaryBlockContainer;
