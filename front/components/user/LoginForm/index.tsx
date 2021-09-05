import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../reducers';
import { loginRequest } from '../../../reducers/user/login';
import MiniTitle from '../../common/MiniTitle';
import { FormWrapper, LoginInput, InputWrapper, TestButton } from './styles';
import FormButton from '../FormButton';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onClickTest = useCallback(() => {
    setEmail('testy@test.com');
    setPassword('testemailpassword');
  }, []);

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequest({ email, password }));
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
          <LoginInput name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
      </InputWrapper>

      <FormButton buttonText="로그인" loading={logInLoading} />

      <TestButton onClick={onClickTest} type="default" htmlType="submit">
        테스트 계정으로 로그인
      </TestButton>
    </FormWrapper>
  );
};

export default LoginForm;
