import styled from "styled-components";

export const RelatedForm = styled.div`
  background-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
  border-color: ${({ theme }) => theme.color.MIDDLE_GRAY};
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #545353;
  padding: 5px 10px;
  color: white;
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
