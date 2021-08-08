import styled, { css } from "styled-components";
import { List, Button, Card } from "antd";

export const CommentAuthor = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.theme.DARK_GRAY};

  &:hover {
    color: white;
  }
`;

export const CommentDate = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.LIGHT_GRAY};
`;
