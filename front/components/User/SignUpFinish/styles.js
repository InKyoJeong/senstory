import styled from "styled-components";

export const FinishWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.DARK_GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    font-size: 15px;
    color: white;
    margin-bottom: 10px;
  }

  & Button {
    background-color: ${(props) => props.theme.MAIN};
    border-radius: 10px;
    border: none;
  }
`;
