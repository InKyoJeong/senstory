import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";

import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../actions/user";

import { FormWrapper, ButtonWrapper, LoginButton } from "./styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div style={{ marginTop: 10 }}>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <ButtonWrapper>
        <LoginButton type="primary" htmlType="submit" loading={isLoggingIn}>
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
