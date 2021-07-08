import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";

import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../actions/user";

import { FormWrapper, ButtonWrapper, LoginButton, LoginInput } from "./styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <LoginInput
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <LoginInput
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <ButtonWrapper>
        <LoginButton type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </LoginButton>
        {/* <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link> */}
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
