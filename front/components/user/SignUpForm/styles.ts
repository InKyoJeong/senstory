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
  border-radius: 10px;
  margin-top: 5px;
  color: white;
  border-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
`;

export const ButtonWrapper = styled.div<{ isValid: boolean }>`
  margin-top: 20px;

  & Button {
    border-radius: 10px;
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.isValid || props.theme.color.INVALID};
    border-color: ${(props) => props.isValid || props.theme.color.INVALID};
  }
`;
