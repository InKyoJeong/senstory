import styled from "styled-components";
import { Form, Button } from "antd";

export const IntroFormWrapper = styled(Form)`
  margin: 20px 0px;

  & label {
    color: white;
  }
`;

export const IntroInputWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const IntroButton = styled.div`
  display: flex;
  justify-content: flex-end;

  & Button {
    border-radius: 10px;
  }
`;
