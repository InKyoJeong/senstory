import React from 'react';
import { ButtonWrapper, FormBtn } from './styles';

interface FormBtnProps {
  loading: boolean;
  buttonText: string;
}

const FormButton = ({ loading, buttonText }: FormBtnProps) => {
  return (
    <ButtonWrapper>
      <FormBtn type="primary" htmlType="submit" loading={loading}>
        {buttonText}
      </FormBtn>
    </ButtonWrapper>
  );
};

export default FormButton;
