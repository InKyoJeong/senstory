import styled from "styled-components";
import { Card, Button } from "antd";

export const CardWrapper = styled(Card)`
  margin: 20px 5% 20px 5%;
  border-radius: 10px;
  border-color: #404042;
  overflow: hidden;
  background-color: #404042;

  & div {
    color: #e3e3e6;
  }
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 30px;
  background-color: #2a2a2b;
  padding: 15px 0px;
  border-radius: 8px;

  & div {
    display: flex;
    justify-content: center;
  }
`;

export const LogoutButton = styled(Button)`
  border-radius: 8px;
  background-color: #2a2a2b;
  border-color: black;
  color: white;

  &:hover {
    background-color: #693c42;
    color: white;
    border-color: black;
  }
  &:focus {
    background-color: #4f2d32;
    color: white;
    border-color: black;
  }
`;
