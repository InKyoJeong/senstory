import styled from "styled-components";
import { Form, Button, Input } from "antd";

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
