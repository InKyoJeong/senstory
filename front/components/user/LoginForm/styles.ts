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
