import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import Conditional from "../../hocs/Conditional";
import { Global } from "./styles";
import Header from "../Header";
import MyProfileForm from "../MyProfileForm";
import RandomUserForm from "../RandomUserForm";

const ProfileLayout = ({ children }) => {
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
            <MyProfileForm />
            <RandomUserForm />
          </Conditional>
        </Col>
      </Row>
    </div>
  );
};

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileLayout;
