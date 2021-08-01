import styled from "styled-components";

export const RandomUserWrapper = styled.div`
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  padding: 8px;

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;

export const RandomTitle = styled.div`
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  background-color: #428bcf;

  & > span {
    margin-right: 3px;
  }
`;

export const RandomUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 10px;
  border-radius: 10px;

  & div {
    margin-left: 8px;

    color: white;
  }
`;
