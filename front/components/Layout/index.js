import React, { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { Menu, Input, Row, Col } from "antd";

import ProfileForm from "../ProfileForm";
import LoginForm from "../LoginForm";
import Conditional from "../../hocs/Conditional";
import { Global, TagSearchInput } from "./styles";
import useInput from "../../hooks/useInput";

const Layout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [tagSearch, onChangeTagSearch] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${tagSearch}`);
  }, [tagSearch]);

  const menuStyle = useMemo(
    () => ({
      backgroundColor: "#2d2d2e",
    }),
    []
  );

  const logoWrapperStyle = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      backgroundColor: "#2d2d2e",
    }),
    []
  );

  const logoStyle = useMemo(
    () => ({
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
    }),
    []
  );

  const logoTitleLeft = useMemo(
    () => ({
      color: "#1890FF",
      fontWeight: "bolder",
    }),
    []
  );

  const logoTitleRight = useMemo(
    () => ({
      fontWeight: "bolder",
    }),
    []
  );

  const HeaderRightMargin = useMemo(() => ({ marginRight: "auto" }), []);

  return (
    <div>
      <Global />
      <Menu
        mode="horizontal"
        theme="dark"
        style={menuStyle}
        triggerSubMenuAction="click"
      >
        <Menu.Item
          key="home"
          icon={
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/logo.png" alt="mainLogo" width="40" height="40" />
              </div>
              <Link href="/">
                <a>
                  <i style={logoTitleLeft}>cenery</i>
                </a>
              </Link>
            </>
          }
          style={logoWrapperStyle}
        >
          <Link href="/">
            <a>
              <i style={logoTitleRight}>Book</i>
            </a>
          </Link>
        </Menu.Item>

        {/* <Menu.Item key="search">
          <Input.Search style={searchStyle} />
        </Menu.Item> */}

        {me && me.id && (
          <Menu.Item key="profile">
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
        )}

        <Menu.Item key="signup" style={HeaderRightMargin}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>

        {/* <Menu.Item key="login" style={{ display: "none" }}>
          <Link href="/">
            <a>로그인</a>
          </Link>
        </Menu.Item> */}
      </Menu>

      <Row gutter={10}>
        <Col xs={0} sm={2} md={6} lg={8} xxl={9}></Col>
        <Col xs={24} sm={20} md={12} lg={9} xxl={7}>
          {children}
        </Col>
        <Col xs={0} sm={0} md={0} lg={7} xxl={6}>
          <Conditional condition={me && me.id}>
            <ProfileForm />
            <div style={{ padding: 20 }}>
              <label style={{ color: "white" }}>해시태그 검색</label>
              <TagSearchInput
                size="small"
                bordered={false}
                value={tagSearch}
                onChange={onChangeTagSearch}
                onSearch={onSearch}
              />
            </div>
          </Conditional>

          <Conditional condition={!(me && me.id)}>
            <LoginForm />
            <div style={{ padding: 20 }}>
              <label style={{ color: "white" }}>해시태그 검색</label>
              <TagSearchInput
                size="small"
                bordered={false}
                // enterButton
                value={tagSearch}
                onChange={onChangeTagSearch}
                onSearch={onSearch}
              />
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
