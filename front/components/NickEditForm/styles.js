import styled from "styled-components";
import { Form, Input, Button } from "antd";

export const NickFormWrapper = styled(Form)`
  margin-bottom: 20px;
  margin-top: 20px;

  & label {
    color: white;
  }

  & div {
    display: flex;
    margin-top: 5px;
  }
`;

export const NickInput = styled(Input)`
  background-color: #404042;
  border-color: gray;
  color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const NickEditButton = styled(Button)`
  border-radius: 10px;
  margin-left: 5px;
`;
