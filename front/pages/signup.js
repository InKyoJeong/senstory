import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input, Button } from "antd";
import Layout from "../components/Layout";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import Conditional from "../hocs/Conditional";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../actions/user";

const ErrorMessage = styled.div`
  color: red;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

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
    <Layout>
      <Head>
        <title>회원가입 | SceneryBook</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type={password}
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input
            name="user-password"
            type={password}
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          <Conditional condition={passwordError}>
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          </Conditional>
        </div>

        <ButtonWrapper>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </ButtonWrapper>
      </Form>
    </Layout>
  );
};

export default Signup;
