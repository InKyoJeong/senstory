import React from "react";
import CustomError from "../components/CustomError";

const Custom500 = () => {
  return (
    <CustomError
      errorTitle="서버 에러 발생!"
      errorContent="잠시 후 다시 시도해주세요."
    />
  );
};

export default Custom500;
