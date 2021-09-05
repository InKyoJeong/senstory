import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export const FormBtn = styled(Button)<{ isValid: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: ${(props) => props.isValid || props.theme.color.INVALID};
  border-color: ${(props) => props.isValid || props.theme.color.INVALID};
`;
