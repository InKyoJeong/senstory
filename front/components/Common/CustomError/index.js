import React from "react";
import { ErrorPageWrapper } from "./styles";

const CustomError = ({ errorTitle, errorContent }) => {
  return (
    <ErrorPageWrapper>
      <div>
        <h1>{errorTitle}</h1>
        <div>{errorContent}</div>
      </div>
    </ErrorPageWrapper>
  );
};

export default CustomError;
