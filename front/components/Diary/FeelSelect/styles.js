import styled from "styled-components";

export const FeelSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: gray;

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
    background-color: white;
  }
`;
