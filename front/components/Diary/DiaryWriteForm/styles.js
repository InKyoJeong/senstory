import styled, { css } from "styled-components";
import { Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const footerButton = css`
  width: 50%;
  height: 40px;
`;

const alignCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const photoStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const widePhotoStyle = css`
  width: 200px;
  height: 200px;
`;

export const DiaryWriteOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const DiaryModalForm = styled.div`
  ${alignCenter}
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  border-radius: 10px;
  animation: fadeIn 0.4s;

  & Form {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
    top: 40%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DiaryWriteInner = styled.div`
  padding: 10px;
`;

export const DiaryTitleInput = styled(Input)`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.DARK_GRAY};
  border-radius: 10px;
  border-color: #4e4e4f;
  color: white;
`;

export const DiaryContentInput = styled(Input.TextArea)`
  margin-top: 10px;
  background-color: ${(props) => props.theme.DARK_GRAY};
  border-color: #4e4e4f;
  color: white;
  border-radius: 10px;
`;

export const TempWriteWrapper = styled.div`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.DARK_GRAY};
  color: #c2c2c2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    margin-right: 10px;
  }
`;

export const TempMin = styled.span`
  color: rgb(151, 205, 252);
`;
export const TempMax = styled.span`
  color: rgb(247, 161, 231);
`;

export const FeelButtonWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  // icon margin
  & span {
    margin-right: 3px;
  }

  & div {
    border-radius: 5px;
  }

  & div:first-child {
    /* background-color: ${(props) => props.feel === "Special" && "#96CBEF"}; */
    background: -webkit-linear-gradient(
      to right,
      ${(props) => props.feel === "Special" && "#76bae8"},
      ${(props) => props.feel === "Special" && "#96cbef"}
    );
    background: linear-gradient(
      to right,
      ${(props) => props.feel === "Special" && "#76bae8"},
      ${(props) => props.feel === "Special" && "#96cbef"}
    );
  }
  & div:nth-child(2) {
    background-color: ${(props) => props.feel === "Good" && "#8ACF71"};
  }
  & div:nth-child(3) {
    background-color: ${(props) => props.feel === "Soso" && "#FFE689"};
  }
  & div:last-child {
    background-color: ${(props) => props.feel === "Bad" && "#FF8D95"};
  }
`;

export const FeelButton = styled.div`
  ${alignCenter}
  border: none;
  color: black;
  background-color: #c2c2c2;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  padding: 5px 0px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #adadad;
    color: black;
  }
  &:focus {
    color: black;
  }
  &:active {
    background-color: #adadad;
  }
`;

export const PhotoDisplay = styled.div`
  ${alignCenter}
  margin-top: 20px;
  /* margin-bottom: 10px; */

  & div {
    position: relative;
  }
  & img {
    ${photoStyle}
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 768px) {
      ${widePhotoStyle}
    }
  }
`;

export const PhotoDeleteBtn = styled(CloseCircleOutlined)`
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 20px;
  border-radius: 10px;
  background-color: black;
  color: #d66565;

  &:hover {
    color: #e03d3d;
  }
`;

export const PhotoEnrollWrapper = styled.div`
  ${alignCenter}
  flex-direction: column;
`;

export const PhotoBorder = styled.div`
  ${photoStyle}
  ${alignCenter}
  margin-bottom: 10px;
  flex-direction: column;
  border: 2px dashed ${(props) => props.theme.DARK_GRAY};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    ${widePhotoStyle}
  }

  & div {
    color: ${(props) => props.theme.DARK_GRAY};
  }
`;

export const DiaryWriteFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  & Button:first-child {
    ${footerButton}
    border-bottom-left-radius: 10px;
  }

  & Button:last-child {
    ${footerButton};
    border-bottom-right-radius: 10px;
    background-color: #e0cccc;
    border: none;
  }
`;
