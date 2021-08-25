import React from "react";
import { ErrorIcon, ErrorPageWrapper } from "./styles";

const CustomError = ({ errorTitle, errorContent }) => {
  return (
    <ErrorPageWrapper>
      <div>
        <ErrorIcon />
        <h2>{errorTitle}</h2>
        <span>{errorContent}</span>
      </div>
    </ErrorPageWrapper>
  );
};

export default CustomError;
