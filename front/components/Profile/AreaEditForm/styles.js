import styled from "styled-components";
import { Form, Input } from "antd";

export const AreaFormWrapper = styled(Form)`
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

export const AreaInput = styled(Input)`
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
  border-color: gray;
  color: white;
  border-radius: 10px;
  overflow: hidden;
`;
