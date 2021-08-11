import React from "react";
import PropTypes from "prop-types";
import { PageTitleWrapper, TextBack, TextFront } from "./styles";

const MiniTitle = ({ title1, title2 }) => {
  return (
    <>
      <PageTitleWrapper>
        <TextFront>{title1}</TextFront>
        <TextBack>{title2}</TextBack>
      </PageTitleWrapper>
    </>
  );
};

MiniTitle.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};

export default MiniTitle;
