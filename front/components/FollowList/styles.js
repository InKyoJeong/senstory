import styled from "styled-components";
import { List } from "antd";

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0px;

  & Button {
    border-radius: 10px;
  }
`;

export const ListWrapper = styled(List)`
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #404042;
  border-color: gray;

  & div {
    color: white;
  }
`;

export const ListItem = styled(List.Item)`
  margin-top: 10px;
`;
