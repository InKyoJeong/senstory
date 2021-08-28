import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../../../actions/user";

import useInput from "../../../hooks/useInput";
import MiniTitle from "../../common/MiniTitle";
import {
  FormWrapper,
  ButtonWrapper,
  LoginButton,
  LoginInput,
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
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <MiniTitle title1="Log" title2="In" />

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
      </InputWrapper>
      <InputWrapper>
        <div>
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
