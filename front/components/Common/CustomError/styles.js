import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.color.DARK_GRAY};
  display: flex;
  justify-content: center;
  align-items: center;

  & h1,
  & div {
    color: white;
  }
`;
