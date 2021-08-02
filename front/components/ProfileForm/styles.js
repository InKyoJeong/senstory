import styled from "styled-components";
import { Card, Button } from "antd";

// Hide >= 992px
export const HideWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: ${(props) => props.hide && "none"};
  }
`;

export const CardWrapper = styled(Card)`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;

  & div {
    color: #e3e3e6;
  }

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
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
    flex-direction: column;
    align-items: center;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    font-size: 12px;
    font-weight: bolder;
    color: #428bcf;
    margin-top: 4px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.MAIN};
    }
  }
`;

export const LogoutButton = styled(Button)`
  border-radius: 8px;
  background-color: #2a2a2b;
  border-color: #2a2a2b;
  color: white;

  &:hover {
    background-color: #4f2d32;
    color: white;
    border-color: #2a2a2b;
  }
  &:focus {
    background-color: #4f2d32;
    color: white;
    border-color: black;
  }
`;
