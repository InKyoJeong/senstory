import styled, { css } from "styled-components";

const imgStyle = css`
  width: 100%;
  height: 100%;
`;

const hoverOpacity = css`
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  max-height: 500px;
`;

export const SigleImg = styled.img`
  cursor: pointer;
  ${hoverOpacity}
`;

export const LeftImg = styled.div`
  border-right: 1px solid ${(props) => props.theme.DARK_GRAY};
  ${hoverOpacity}
  width:50%;

  & img {
    ${imgStyle}
  }
`;

export const RightImg = styled.div`
  border-left: 1px solid ${(props) => props.theme.DARK_GRAY};
  ${hoverOpacity}
  width:50%;

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
