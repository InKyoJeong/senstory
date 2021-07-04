import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import MyProfile from "./MyProfile";
import LoginForm from "./LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>SceneryBook</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput />
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={0} md={6}>
          왼쪽 (여백)
        </Col>
        <Col xs={18} md={12}>
          {children}
        </Col>
        <Col xs={6} md={6}>
          {isLoggedIn ? <MyProfile /> : <LoginForm />}
        </Col>
      </Row>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
