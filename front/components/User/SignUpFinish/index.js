import React, { useCallback } from "react";
import { Button } from "antd";
import Router from "next/router";
import { FinishWrapper } from "./styles";

const SignUpFinish = () => {
  const handleLoginPage = useCallback(() => {
    Router.replace("/login");
  }, []);

  return (
    <FinishWrapper>
      <div>회원가입이 완료되었습니다.</div>
      <Button onClick={handleLoginPage}>로그인하기</Button>
    </FinishWrapper>
  );
};

export default SignUpFinish;
