import styled from "styled-components";
import { Input } from "antd";

export const ErrorMessage = styled.div`
  color: red;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  & Button {
    border-radius: 10px;
  }
`;

export const InputWrapper = styled.div`
  margin: 30px 20px 0px 20px;

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
