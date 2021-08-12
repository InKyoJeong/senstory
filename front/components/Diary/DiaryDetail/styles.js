import styled, { css } from "styled-components";
import { Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const alignCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiaryDetailOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 5555;
`;

export const DiaryDetailForm = styled.div`
  ${alignCenter}
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  border-radius: 10px;
  animation: fadeIn 0.4s;

  /* & Form {
    width: 100%;
  } */

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
