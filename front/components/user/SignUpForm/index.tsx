import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import Conditional from '../../../hocs/Conditional';
import MiniTitle from '../../common/MiniTitle';
import { signupRequest } from '../../../reducers/user/signup';
import { RootState } from '../../../reducers';
import { ErrorMessage, SignUpInput, InputWrapper, SignUpFormWrapper } from './styles';
import FormButton from '../FormButton';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpError } = useSelector((state: RootState) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  useEffect(() => {
    setIsValid(
      email.length != 0 && password.length != 0 && passwordCheck.length != 0 && nickname.length != 0 && !passwordError,
    );
  }, [email, password, passwordCheck, nickname]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(() => {
    if (!isValid) return;
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    dispatch(signupRequest({ email, password, nickname }));
  }, [email, password, passwordCheck, isValid]);

  return (
    <SignUpFormWrapper onFinish={onSubmit}>
      <MiniTitle title1="Sign" title2="Up" />

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
        <SignUpInput name="user-nick" value={nickname} onChange={onChangeNickname} required autoComplete="off" />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <SignUpInput name="user-password" type="password" value={password} onChange={onChangePassword} required />
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

      <FormButton buttonText="가입하기" loading={signUpLoading} />
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
