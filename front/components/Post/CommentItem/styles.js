import styled from "styled-components";

export const CommentAuthor = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  background-color: ${({ theme }) => theme.color.DARK_GRAY};

  &:hover {
    color: white;
  }
`;

export const CommentDate = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;
