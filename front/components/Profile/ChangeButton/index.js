import React from "react";
import PropTypes from "prop-types";
import { ChangeEditBtn } from "./styles";

const ChangeButton = ({ loading }) => {
  return (
    <ChangeEditBtn type="primary" htmlType="submit" loading={loading}>
      변경
    </ChangeEditBtn>
  );
};

ChangeButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default ChangeButton;
