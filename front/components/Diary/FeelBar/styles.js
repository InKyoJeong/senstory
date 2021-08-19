import styled from "styled-components";

export const GuageWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    width: ${(props) => props.percent};
    background-color: red;
  }
`;
