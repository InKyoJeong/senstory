import styled from "styled-components";

export const FeelSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.DARK_GRAY};
  border: 2px solid gray;
  color: white;

  @media screen and (min-width: 992px) {
    margin: 20px 5% 20px 5%;
  }
`;

export const SelectBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & Button {
    height: 25%;
    margin: 3px;
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 0.75rem;

    &:hover,
    &:active,
    &:focus {
      opacity: 0.7;
      color: black;
    }
  }

  & Button:first-child {
    background: linear-gradient(to right, #76bae8, #e8bdf0);
  }
  & Button:nth-child(2) {
    background: linear-gradient(to right, #adde9b, #8acf71);
  }
  & Button:nth-child(3) {
    background: linear-gradient(to right, #ffe689, #f7d75e);
  }
  & Button:nth-child(4) {
    background: linear-gradient(to right, #ff8d95, #ff757f);
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & div {
    height: 25%;
    margin: 3px;
    display: flex;
    align-items: center;
  }
`;

export const TotalDiary = styled.div`
  color: "white";
  opacity: 0.7;
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
`;
