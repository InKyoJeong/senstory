import styled from "styled-components";

export const DiaryBanner = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  background-color: #49a2f5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid black;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color.MAIN};
    transition: 0.3s;
  }
`;
