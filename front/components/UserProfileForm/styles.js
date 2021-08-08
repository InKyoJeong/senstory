import styled from "styled-components";
import { Card } from "antd";

export const UserHeader = styled.div`
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.MAIN};
  border: 1px solid ${(props) => props.theme.DARK_GRAY};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: bolder;
`;

export const UserProfileWrapper = styled(Card)`
  margin: 20px 0;
  background-color: ${(props) => props.theme.DARK_GRAY};
  color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border: 1px solid #5e5d5d;
  padding: 15px 0px;
  border-radius: 8px;

  & div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
  }
`;

export const UserIntroWrapper = styled.div`
  color: white;
  margin-top: 20px;
`;

export const UserIntroTitle = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.DARK_MAIN};
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 0px 5px 0px;
`;
