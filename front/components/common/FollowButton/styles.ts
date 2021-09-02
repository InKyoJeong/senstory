import styled, { css } from 'styled-components';
import { Button } from 'antd';

const Unfollow = css<{ unfollow: boolean }>`
  background-color: ${({ theme }) => theme.color.BLACK};
  border-color: ${(props) => props.unfollow && '#d43578'};
  color: ${(props) => props.unfollow && '#d43578'};
`;

export const FollowButtonContainer = styled(Button)<{ unfollow: boolean }>`
  background-color: ${({ theme }) => theme.color.BLACK};
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

export const FollowText = styled.span`
  font-size: 12px;
  padding-left: 3px;
`;
