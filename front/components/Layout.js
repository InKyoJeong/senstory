import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>SceneryBook</a>
      </Link>
      <Link href="/profile">
        <a>프로필</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
