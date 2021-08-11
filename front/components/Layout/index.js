import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import { Global } from "./styles";
import Conditional from "../../hocs/Conditional";
import Header from "../Header";
import RandomUserForm from "../RandomUserForm";
import HashtagSearch from "../HashtagSearch";
import MyProfileForm from "../MyProfileForm";
import RelatedCheck from "../RelatedCheck";

const Layout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
      <Header />

      <Row gutter={10}>
        <Col xs={0} sm={2} md={6} lg={8} xxl={9}>
          {/*  */}
        </Col>

        <Col xs={24} sm={20} md={12} lg={9} xxl={7}>
          {children}
        </Col>

        <Col xs={0} sm={0} md={0} lg={7} xxl={6}>
          <Conditional condition={me && me.id}>
            <RelatedCheck />
            <MyProfileForm />
            <RandomUserForm />
            <HashtagSearch />
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
