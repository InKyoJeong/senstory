import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { ModalForm, ModalOverlay } from "./styles";

const Modal = ({ modalOpen, onToggleModal, title }) => {
  if (!modalOpen) return null;

  return (
    <ModalOverlay>
      <ModalForm>
        <div>{title}</div>
        <Button type="primary" onClick={onToggleModal}>
          <CheckOutlined />
        </Button>
      </ModalForm>
    </ModalOverlay>
  );
};

export default Modal;
