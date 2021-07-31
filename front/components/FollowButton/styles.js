import styled, { css } from "styled-components";
import { Button } from "antd";

const Unfollow = css`
  background-color: ${(props) => props.theme.BLACK};
  border-color: ${(props) => props.unfollow && "#d43578"};
  color: ${(props) => props.unfollow && "#d43578"};
`;

export const FollowButtonContainer = styled(Button)`
  background-color: ${(props) => props.theme.BLACK};
  color: white;
  border-radius: 20px;
  border-color: gray;

  &:hover {
    ${Unfollow}
  }
  &:focus {
    ${Unfollow}
  }
`;
