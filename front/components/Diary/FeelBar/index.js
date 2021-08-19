import React from "react";
import PropTypes from "prop-types";

import { GuageWrapper } from "./styles";

const FeelBar = ({ feelLength, totalLength }) => {
  const percent = Math.round((feelLength / totalLength) * 100) + "%";

  return (
    <GuageWrapper percent={percent}>
      <div></div>
      {percent}
    </GuageWrapper>
  );
};

FeelBar.propTypes = {
  feelLength: PropTypes.number,
  totalLength: PropTypes.number,
};

export default FeelBar;
