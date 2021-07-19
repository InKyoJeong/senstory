import styled, { css } from "styled-components";
import { Button } from "antd";

const Unfollow = css`
  border-color: ${(props) => props.unfollow && "#d43578"};
  color: ${(props) => props.unfollow && "#d43578"};
`;

export const FollowButtonContainer = styled(Button)`
  background-color: black;
  color: white;
  border-radius: 20px;
  border-color: gray;

  &:hover {
    background-color: black;
    ${Unfollow}
  }
  &:focus {
    background-color: black;
    ${Unfollow}
  }
`;
