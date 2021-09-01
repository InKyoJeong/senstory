import styled from 'styled-components';

export const GuageWrapper = styled.div<{ percent: string }>`
  display: flex;
  justify-content: space-between;

  & div {
    width: ${(props) => props.percent};
    padding: 10px 0px;
    background-color: ${({ theme }) => theme.color.MAIN};
    background: linear-gradient(to right, #1890ff, #336a9c);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }

  & span {
    padding-left: 5px;
    font-size: 0.7rem;
  }
`;
