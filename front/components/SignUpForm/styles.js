import styled from "styled-components";
import { Input, Form } from "antd";

export const SignUpFormWrapper = styled(Form)`
  margin: 0px 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  & Button {
    border-radius: 10px;
    width: 30%;
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
  background-color: gray;
  border-color: #6f6f70;
`;
