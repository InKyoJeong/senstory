import styled, { css } from "styled-components";
import { Form, Button, Input } from "antd";

const loginText = css`
  font-weight: bolder;
  font-size: 18px;
`;

export const LogInTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextLog = styled.i`
  ${loginText}
  color: ${(props) => props.theme.MAIN};
  margin: 0px 3px;
`;

export const TextIn = styled.i`
  ${loginText}
  color: ${(props) => props.theme.LIGHT_GRAY};
`;

export const FormWrapper = styled(Form)`
  margin: 0px 20px;

  & label {
    color: white;
  }
`;

export const LoginInput = styled(Input)`
  border-radius: 10px;
  margin-top: 5px;
  color: white;
  border-color: ${(props) => props.theme.LIGHT_GRAY};
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
`;

export const InputWrapper = styled.div`
  margin-top: 30px;

  & label {
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  margin-top: 5px;
`;
