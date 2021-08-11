import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import { Global } from "./styles";
import Header from "../Header";

const DiaryLayout = ({ children }) => {
  return (
    <div>
      <Global />
      <Header />

      <Row gutter={10}>
        <Col xs={0} sm={2} md={6} lg={8}>
          {/*  */}
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          {children}
        </Col>
        <Col xs={0} sm={0} md={6} lg={8}>
          {/*  */}
        </Col>
      </Row>
    </div>
  );
};

DiaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DiaryLayout;
