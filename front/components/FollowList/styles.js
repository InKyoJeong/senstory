import styled, { css } from "styled-components";
import { List, Card } from "antd";

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

export const ListItem = styled(List.Item)`
  /* margin-top: 10px; */
`;

export const FollowCard = styled(Card)`
  /* background-color: #607882; */
  background: linear-gradient(0deg, #607882, gray);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

  & div {
    color: white;
  }
`;
