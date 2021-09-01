import styled, { css } from "styled-components";
import { Card } from "antd";

const userTitle = css`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 0px 5px 0px;
  border: 2px solid ${({ theme }) => theme.color.DARK_MAIN};
`;

export const UserHeader = styled.div`
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.MAIN};
  border: 1px solid ${({ theme }) => theme.color.DARK_GRAY};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: bolder;
`;

export const UserInfoNick = styled.div`
  color: white;
`;

export const UserProfileWrapper = styled(Card)`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.color.DARK_GRAY};
  color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
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

export const UserIntroTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex-direction: column;
  justify-content: center;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const UserIntroWrapper = styled.div`
  color: white;
  margin-top: 20px;

  & span {
    color: gray;
  }
`;

export const UserIntroTitle = styled.div`
  width: calc(50% - 10px); // gap
  ${userTitle}
`;

export const UserHalfTitle = styled.div`
  width: 100%;
  ${userTitle}
`;
