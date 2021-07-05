import styled, { createGlobalStyle } from "styled-components";
import { Button, Input } from "antd";

export const Global = createGlobalStyle`
  .ant-form-item{
      margin-bottom: 0px;
  }
`;

export const WriteWrapper = styled.div`
  display: flex;
`;

export const WriteInput = styled(Input)`
  width: 100%;
  height: 40px;
`;

export const WriteButton = styled(Button)`
  height: 40px;
`;
