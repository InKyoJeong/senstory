import React, { useCallback, useEffect } from "react";
// import Link from "next/link";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../actions/user";

import {
  FormWrapper,
  ButtonWrapper,
  LoginButton,
  LoginInput,
  LogInTitle,
  TextLog,
  TextIn,
  InputWrapper,
} from "./styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <LogInTitle>
        <TextLog>Log</TextLog>
        <TextIn>In</TextIn>
      </LogInTitle>

      <InputWrapper>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <LoginInput
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
            autoComplete="off"
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
      </InputWrapper>

      <ButtonWrapper>
        <LoginButton type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </LoginButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
