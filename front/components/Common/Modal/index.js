import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";
import { ModalForm, ModalOverlay } from "./styles";

// interface ModalProps {
//   modalOpen: boolean;
//   onToggleModal: () => void;
//   title: string;
// }

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

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  onToggleModal: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
