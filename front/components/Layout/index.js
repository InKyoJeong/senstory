import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

import ProfileForm from "../ProfileForm";
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

        {/* <Conditional condition={me && me.id}> */}
        {me && me.id && (
          <Menu.Item key="profile">
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
        )}
        {/* </Conditional> */}

        {/* <Conditional condition={!(me && me.id)}> */}
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        {/* </Conditional> */}
      </Menu>

      <Row gutter={10}>
        <Col xs={0} sm={2} md={6} lg={8}></Col>
        <Col xs={24} sm={20} md={12} lg={9}>
          {children}
        </Col>
        <Col xs={0} sm={0} md={0} lg={7}>
          <Conditional condition={me && me.id}>
            <ProfileForm />
            <div style={{ padding: 20 }}>
              <label style={{ color: "white" }}>해시태그 검색</label>
              <Input.Search style={searchStyle} size="small" bordered={false} />
            </div>
          </Conditional>

          <Conditional condition={!(me && me.id)}>
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
