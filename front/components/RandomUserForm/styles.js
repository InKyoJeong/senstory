import styled from "styled-components";

export const RandomUserWrapper = styled.div`
  overflow: hidden;

  @media screen and (min-width: 992px) {
    margin: 30px 5% 30px 5%;
  }
`;

export const RandomTitle = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #6f8385;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;

  & > span {
    margin-right: 3px;
  }
`;

export const RandomUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  padding: 5px;
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
