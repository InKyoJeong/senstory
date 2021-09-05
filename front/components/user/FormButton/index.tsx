import React from 'react';
import { ButtonWrapper, FormBtn } from './styles';

interface FormBtnProps {
  loading: boolean;
  isValid: boolean;
  buttonText: string;
}

const FormButton = ({ loading, isValid, buttonText }: FormBtnProps) => {
  return (
    <ButtonWrapper>
      <FormBtn type="primary" htmlType="submit" loading={loading} isValid={isValid}>
        {buttonText}
      </FormBtn>
    </ButtonWrapper>
  );
};

export default FormButton;
