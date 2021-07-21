import styled from "styled-components";
import { Form, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

export const FormWrapper = styled(Form)`
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #2d2d2e;
  padding: 10px;
  border-radius: 10px;
`;

export const WriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostWriteButton = styled(Button)`
  border-radius: 10px;
  margin-left: 8px;
  float: right;
`;

export const ImageEnrollBtn = styled(Button)`
  border-radius: 10px;
  color: #9c4343;
  background-color: #f5c1c1;
  border-color: #f5d0d0;

  &:hover,
  &:focus {
    background-color: #e89b9b;
    color: #823030;
    border-color: #f5b0b0;
  }
`;

export const ImagesWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  overflow: auto;

  & div:not(:last-child) {
    margin-right: 20px;
  }

  & div {
    position: relative;
    display: inline-block;
    margin-top: 8px;
    & img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    @media screen and (max-width: 567px) {
      & img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

export const ImageDeleteBtn = styled(CloseCircleOutlined)`
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
