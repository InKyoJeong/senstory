import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../reducers';
import { loginRequest } from '../../../reducers/user/login';
import useInput from '../../../hooks/useInput';
import MiniTitle from '../../common/MiniTitle';
import { FormWrapper, LoginInput, InputWrapper } from './styles';
import FormButton from '../FormButton';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state: RootState) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  useEffect(() => {
    setIsValid(email.length != 0 && password.length != 0);
  }, [email, password]);

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

      <FormButton buttonText="로그인" loading={logInLoading} isValid={isValid} />
    </FormWrapper>
  );
};

export default LoginForm;
