import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "antd";

const Header = () => {
  const { me } = useSelector((state) => state.user);

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
            <Image src="/logo.png" alt="mainLogo" width="40" height="40" />
            <Link href="/">
              <a>
                <i style={logoTitleLeft}>en</i>
              </a>
            </Link>
          </>
        }
        style={logoWrapperStyle}
      >
        <Link href="/">
          <a>
            <i style={logoTitleRight}>Story</i>
          </a>
        </Link>
      </Menu.Item>

      {me && me.id && (
        <>
          <Menu.Item key="profile">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={`/diary/${me.id}`} style={HeaderRightMargin}>
            <Link href={`/diary/${me.id}`}>
              <a>Diary</a>
            </Link>
          </Menu.Item>
        </>
      )}

      {!(me && me.id) && (
        <>
          <Menu.Item key="login">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="signup" style={HeaderRightMargin}>
            <Link href="/signup">
              <a>SignUp</a>
            </Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Header;
