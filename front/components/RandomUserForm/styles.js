import styled from "styled-components";

export const RandomUserWrapper = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 10px;
  overflow: hidden;
  padding: 8px;

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;

export const RandomTitle = styled.div`
  /* border-radius: 5px; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #428bcf;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  /* margin-bottom: 10px; */

  & > span {
    margin-right: 3px;
  }
`;

export const RandomUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.theme.DARK_GRAY};
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
  border-radius: 10px;

  & div {
    margin-left: 8px;

    color: white;
  }

  &:hover {
    background-color: #363638;
    cursor: pointer;
    transition: 1s;
  }
`;
