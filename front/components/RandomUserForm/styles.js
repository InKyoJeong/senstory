import styled from "styled-components";

export const RandomUserWrapper = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;
