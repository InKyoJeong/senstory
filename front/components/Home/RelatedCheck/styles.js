import styled from "styled-components";

export const RelatedForm = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 5px;
  overflow: hidden;
  /* margin-top: 20px; */
  border: 1px solid #545353;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  & span {
    margin-right: 5px;
  }

  & a {
    color: white;
  }

  &:hover {
    background-color: #59595c;
  }

  @media screen and (min-width: 992px) {
    margin: 20px 5% 10px 5%;
  }
`;
