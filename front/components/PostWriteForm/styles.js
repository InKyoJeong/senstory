import styled from "styled-components";
import { Form, Button } from "antd";

export const FormWrapper = styled(Form)`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const PostWriteButton = styled(Button)`
  border-radius: 10px;
  margin-left: 8px;
  float: right;
`;

export const ImageButton = styled(Button)`
  border-radius: 10px;
  color: #9c4343;
  background-color: #f5c1c1;
  border-color: #f5d0d0;

  &:hover,
  &:focus {
    background-color: #e89b9b;
    color: #823030;
    border-color: #f5b0b0;
  }
`;
