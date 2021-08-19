import styled from "styled-components";

export const GuageWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    width: ${(props) => props.percent};
    padding: 10px 0px;
    background-color: ${(props) => props.theme.MAIN};
    background: linear-gradient(to right, #1890ff, #336a9c);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;
