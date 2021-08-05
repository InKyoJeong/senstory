import styled from "styled-components";
import { Button, Input } from "antd";

export const FeelButton = styled(Button)`
  //
`;

export const FeelButtonWrapper = styled.div`
  & Button:first-child {
    background-color: ${(props) => props.feel === "good" && "red"};
  }
  & Button:nth-child(2) {
    background-color: ${(props) => props.feel === "soso" && "blue"};
  }
  & Button:last-child {
    background-color: ${(props) => props.feel === "bad" && "yellow"};
  }
`;
