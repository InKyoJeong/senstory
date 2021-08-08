import styled from "styled-components";
import { Button, Input } from "antd";

export const DiaryWriteOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const DiaryModalForm = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: 50%;
  width: 90%;
  /* padding: 10px; */
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
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
  border: none;
  color: black;
  background-color: #c2c2c2;
  display: flex;
  justify-content: center;
  align-items: center;
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
