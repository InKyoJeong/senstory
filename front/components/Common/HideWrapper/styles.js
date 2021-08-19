import styled from "styled-components";

// Hide >= 992px
export const HideForm = styled.div`
  @media screen and (min-width: 992px) {
    margin-top: 20px;
    display: ${(props) => props.hide && "none"};
  }
`;
