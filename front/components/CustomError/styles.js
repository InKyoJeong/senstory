import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.DARK_GRAY};
  display: flex;
  justify-content: center;
  align-items: center;

  & h1,
  & div {
    color: white;
  }
`;
