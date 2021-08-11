import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${(props) => props.theme.DARK_GRAY};
`;

export const LoaderFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 40px);
  color: white;
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;

  & div {
    padding-bottom: 15px;
  }
`;
