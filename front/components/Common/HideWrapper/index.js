import React from "react";
import PropTypes from "prop-types";

import { HideForm } from "./styles";

const HideWrapper = ({ hide, children }) => {
  return <HideForm hide={hide}>{children}</HideForm>;
};

HideWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
};

export default HideWrapper;
