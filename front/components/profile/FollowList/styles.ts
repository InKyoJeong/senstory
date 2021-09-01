import styled, { css } from "styled-components";
import { List } from "antd";

const BtnGradient = css`
  background: linear-gradient(0deg, #607882, gray);
`;

export const MoreButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0px;

  & Button {
    ${BtnGradient}
    border-radius: 40px;
    border-color: gray;
    color: white;
    :hover {
      ${BtnGradient}
    }
    :focus {
      ${BtnGradient}
    }
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

export const FollowListWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const FollowInfoSection = styled.div`
  display: flex;
  align-items: center;

  & div:first-child {
    margin-right: 5px;
  }
`;

export const FollowDelSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
