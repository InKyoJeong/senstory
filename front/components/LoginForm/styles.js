import styled from "styled-components";
import { Form, Button, Input } from "antd";

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  margin-top: 5px;
`;

export const FormWrapper = styled(Form)`
  padding: 10px;
  margin-right: 10px; // gutter

  & label {
    color: white;
  }
`;

export const LoginInput = styled(Input)`
  background-color: gray;
  border-radius: 10px;
  color: white;
  border-color: #6f6f70;
  margin-top: 5px;
`;
