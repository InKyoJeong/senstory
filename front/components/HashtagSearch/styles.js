import styled from "styled-components";
import { Input } from "antd";

export const SearchWrapper = styled.div`
  & label {
    color: white;
    margin-left: 3px;
  }

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;

export const TagSearchTitle = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  background-color: #5a748f;
  padding: 5px 20px;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const TagSearchForm = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  padding: 15px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const TagSearchInput = styled(Input.Search)`
  vertical-align: middle;
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  color: white;
  border-radius: 5px;
  padding: 5px 0px;
`;
