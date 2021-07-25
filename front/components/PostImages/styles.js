import styled, { css } from "styled-components";

const imgStyle = css`
  width: 100%;
  height: 300px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LeftImg = styled.div`
  border-right: 1px solid ${(props) => props.theme.DARK_GRAY};

  & img {
    ${imgStyle}
  }
`;

export const RightImg = styled.div`
  border-left: 1px solid ${(props) => props.theme.DARK_GRAY};

  & img {
    ${imgStyle}
  }
`;

export const MoreImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    opacity: 0.5;
  }
`;

export const MoreTextWrapper = styled.div`
  position: absolute;

  // icon and span
  & span {
    color: white;
  }
`;

export const MoreText = styled.span`
  font-size: 20px;
`;
