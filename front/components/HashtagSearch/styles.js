import styled from "styled-components";
import { Input } from "antd";

export const SearchWrapper = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 10px;
  padding: 10px;

  & label {
    color: white;
    margin-left: 3px;
  }

  & div {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 500;
    margin-left: 5px;
  }

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;

export const TagSearchInput = styled(Input.Search)`
  vertical-align: middle;
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  color: white;
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px 0px;
`;
