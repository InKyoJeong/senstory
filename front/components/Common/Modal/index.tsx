import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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

export default Modal;
