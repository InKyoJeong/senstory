import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

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
  border-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  margin-top: 30px;

  & label {
    color: white;
  }
`;

export const TestButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.INVALID};
  color: white;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 10px;
  height: 40px;

  &:hover {
    background-color: #779bbf;
    color: white;
  }
`;
