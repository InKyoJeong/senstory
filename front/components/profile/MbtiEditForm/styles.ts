import styled from "styled-components";
import { Form } from "antd";

export const MbtiFormWrapper = styled(Form)`
  margin-bottom: 20px;
  margin-top: 20px;

  & label {
    color: white;
  }

  & div {
    display: flex;
    margin-top: 5px;
  }
  & select {
    flex: 1;
    background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
    border-radius: 10px;
    color: white;

    &:focus {
      outline: none;
    }
  }
`;
