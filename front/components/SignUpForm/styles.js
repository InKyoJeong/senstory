import styled, { css } from "styled-components";
import { Input, Form } from "antd";

const signupText = css`
  font-weight: bolder;
  font-size: 18px;
`;

export const SignUpFormWrapper = styled(Form)`
  margin: 0px 20px;
`;

export const SignUpTitile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextSign = styled.i`
  ${signupText}
  color: ${(props) => props.theme.MAIN};
  margin: 0px 3px;
`;

export const TextUp = styled.i`
  ${signupText}
  color: ${(props) => props.theme.LIGHT_GRAY};
`;

export const ErrorMessage = styled.div`
  color: #d43578;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  & Button {
    border-radius: 10px;
    width: 30%;
    background-color: ${(props) => props.isValid || props.theme.INVALID};
    border-color: ${(props) => props.isValid || props.theme.INVALID};
  }
`;

export const InputWrapper = styled.div`
  margin-top: 30px;

  & label {
    color: white;
  }
`;

export const SignUpInput = styled(Input)`
  border-radius: 10px;
  margin-top: 5px;
  color: white;
  border-color: ${(props) => props.theme.LIGHT_GRAY};
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
`;
