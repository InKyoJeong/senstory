import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

import MyProfile from "../MyProfile";
import LoginForm from "../LoginForm";
import Conditional from "../../hocs/Conditional";
import { Global } from "./styles";

const Layout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  const searchStyle = useMemo(
    () => ({
      verticalAlign: "middle",
      backgroundColor: "gray",
      marginTop: 5,
      borderRadius: 10,
      padding: "5px 0px",
      color: "white",
    }),
    []
  );

  return (
    <div>
      <Global />
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ backgroundColor: "#2d2d2e" }}
      >
        <Menu.Item key="home">
          <Link href="/">
            <a>SceneryBook</a>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="search">
          <Input.Search style={searchStyle} />
        </Menu.Item> */}
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
            <div style={{ padding: 20 }}>
              <label style={{ color: "white" }}>해시태그 검색</label>
              <Input.Search style={searchStyle} size="small" bordered={false} />
            </div>
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
