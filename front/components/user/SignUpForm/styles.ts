import styled from 'styled-components';
import { Input, Form } from 'antd';

export const SignUpFormWrapper = styled(Form)`
  margin: 0px 20px;
`;

export const ErrorMessage = styled.div`
  color: #d43578;
`;

export const InputWrapper = styled.div`
  margin-top: 30px;

  & label {
    color: white;
  }
`;

export const SignUpInput = styled(Input)<any>`
  font-size: 16px;
  border-radius: 10px;
  margin-top: 5px;
  color: white;
  border-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
`;
