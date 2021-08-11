import styled, { css } from "styled-components";

const subTitle = css`
  font-weight: bolder;
  font-size: 18px;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextFront = styled.i`
  ${subTitle}
  color: ${(props) => props.theme.MAIN};
  margin: 0px 3px;
`;

export const TextBack = styled.i`
  ${subTitle}
  color: ${(props) => props.theme.LIGHT_GRAY};
`;
