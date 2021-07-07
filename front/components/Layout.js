import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { createGlobalStyle } from "styled-components";

import MyProfile from "./MyProfile";
import LoginForm from "./LoginForm";
import Conditional from "../hocs/Conditional";

const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-child{
    padding-left: 0 !important;
  }
  .ant-col:last-child{
    padding-right: 0 !important;
  }
`;

const Layout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  const searchStyle = useMemo(
    () => ({
      verticalAlign: "middle",
    }),
    []
  );

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>SceneryBook</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search style={searchStyle} />
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={0} sm={2} md={6}></Col>
        <Col xs={24} sm={20} md={12}>
          {children}
        </Col>
        <Col xs={0} sm={0} md={6}>
          <Conditional condition={me}>
            <MyProfile />
          </Conditional>
          <Conditional condition={!me}>
            <LoginForm />
          </Conditional>
        </Col>
      </Row>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
