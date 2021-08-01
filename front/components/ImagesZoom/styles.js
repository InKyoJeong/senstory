import styled, { createGlobalStyle } from "styled-components";
import { CloseCircleOutlined, CloseOutlined } from "@ant-design/icons";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: linear-gradient(0deg, #607882, gray);
  position: relative;
  padding: 0;
  text-align: center;

  /* & h1 {
    margin: 0;
    font-size: 15px;
    color: black;
    line-height: 44px;
  } */
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  font-size: 20px;
  right: 10px;
  top: 10px;
  padding: 10px;
  line-height: 14px;
  cursor: pointer;
  z-index: 999;
  background-color: #e89b9b;
  color: black;
  border-radius: 100px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;

export const SlickWrapper = styled.div`
  /* height: calc(100% - 44px); */
  height: 100%;
  background: #090909;
`;

export const ImageWrapper = styled.div`
  /* padding-top: 20px; */
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  display: flex;
  text-align: center;
  /* margin-top: 15px; */
  position: absolute;
  top: 15px;
  left: 15px;

  z-index: 999;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.MIDDLE_GRAY};
    /* background: #313131; */
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);

    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const Global = createGlobalStyle`
  .slick-slide {
      display: inline-block;
  }
  .ant-card-cover{
      transform: none !important;
  }
`;
