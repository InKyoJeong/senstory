import React, { useCallback, useState, useEffect } from "react";
import { Form, Button } from "antd";
import Router from "next/router";

import useInput from "../../hooks/useInput";
import Conditional from "../../hocs/Conditional";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../actions/user";

import {
  ErrorMessage,
  ButtonWrapper,
  SignUpInput,
  InputWrapper,
} from "./styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpFinish, signUpError } = useSelector(
    (state) => state.user
  );

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (signUpFinish) {
      Router.replace("/");
    }
  }, [signUpFinish]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck]);

  return (
    <Form onFinish={onSubmit}>
      <InputWrapper>
        <label htmlFor="user-email">이메일</label>
        <br />
        <SignUpInput
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
          autoComplete="off"
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="user-nick">닉네임</label>
        <br />
        <SignUpInput
          name="user-nick"
          value={nickname}
          onChange={onChangeNickname}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <SignUpInput
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <br />
        <SignUpInput
          name="user-password"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        <Conditional condition={passwordError}>
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        </Conditional>
      </InputWrapper>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={signUpLoading}>
          가입하기
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default SignUpForm;
