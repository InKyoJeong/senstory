import styled from "styled-components";

export const RandomUserWrapper = styled.div`
  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
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
  padding: 10px 5px;
  border: 1px solid #545353;
`;

export const UserItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserItem = styled.div`
  flex-direction: column;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 10px;

  & div {
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70px;
  }

  &:hover {
    background-color: #363638;
    cursor: pointer;
    transition: 1s;
  }
`;
