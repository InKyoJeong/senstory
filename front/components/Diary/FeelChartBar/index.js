import React from "react";
import PropTypes from "prop-types";

import { GuageWrapper } from "./styles";

const FeelChartBar = ({ feelLength, totalLength }) => {
  let percent = Math.round((feelLength / totalLength) * 100) + "%";
  if (totalLength === 0) {
    percent = "0%";
  }

  return (
    <GuageWrapper percent={percent}>
      <div></div>
      <span>
        {feelLength} ({percent})
      </span>
    </GuageWrapper>
  );
};

FeelChartBar.propTypes = {
  feelLength: PropTypes.number,
  totalLength: PropTypes.number,
};

export default FeelChartBar;
