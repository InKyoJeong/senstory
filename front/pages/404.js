import React from "react";
import CustomError from "../components/CustomError";

const Custom404 = () => {
  return (
    <CustomError
      errorTitle="Page Not Found (404)"
      errorContent="페이지를 찾을 수 없습니다."
    />
  );
};

export default Custom404;
