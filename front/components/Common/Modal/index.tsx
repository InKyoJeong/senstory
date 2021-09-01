import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { ModalForm, ModalOverlay } from './styles';

interface ModalProps {
  onToggleModal: () => void;
  title: string;
}

const Modal = ({ onToggleModal, title }: ModalProps) => {
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
  onToggleModal: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
