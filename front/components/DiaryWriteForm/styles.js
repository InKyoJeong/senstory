import styled from "styled-components";
import { Button, Input } from "antd";

export const FeelButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  /* grid 또는 flex 1 */
  /* justify-content: space-between; */

  & Button:first-child {
    background-color: ${(props) => props.feel === "good" && "green"};
  }
  & Button:nth-child(2) {
    background-color: ${(props) => props.feel === "soso" && "blue"};
  }
  & Button:last-child {
    background-color: ${(props) => props.feel === "bad" && "red"};
  }
`;

export const FeelButton = styled(Button)`
  /* text-transform: uppercase; */
  border: none;
  color: black;
  background-color: #c2c2c2;
  /* flex: 1; */

  &:hover {
    background-color: gray;
    color: black;
  }
  &:focus {
    color: black;
  }
  &:active {
    background-color: gray;
  }
`;
