import styled from "styled-components";
import { List } from "antd";

export const PostCardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PostCardBorder = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PostAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const CommentList = styled(List)`
  padding: 0px 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
  background-color: #2d2d2e;
  border-radius: 10px;
`;

export const CommentAuthor = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  background-color: #1a1b1b;

  &:hover {
    color: white;
  }
`;
