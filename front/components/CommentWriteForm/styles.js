import styled, { createGlobalStyle } from "styled-components";
import { Button, Input } from "antd";

export const Global = createGlobalStyle`
  .ant-form-item{
      margin-bottom: 0px;
      margin-top: 10px;
  }
`;

export const WriteWrapper = styled.div`
  display: flex;
`;

export const WriteInput = styled(Input)`
  width: 100%;
  height: 40px;
  background-color: gray;
  border-radius: 10px;
  border-color: #4e4e4f;
  color: white;
`;

export const WriteButton = styled(Button)`
  height: 40px;
  border-radius: 10px;
  margin-left: 5px;
  /* color: black; */
`;
