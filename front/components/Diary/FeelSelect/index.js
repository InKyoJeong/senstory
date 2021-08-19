import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Router from "next/router";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { FeelSelectWrapper } from "./styles";
import HideWrapper from "../../common/HideWrapper";

const FeelSelect = ({ hide }) => {
  const { me } = useSelector((state) => state.user);

  const onSelect = useCallback((e) => {
    Router.push(`/feel/${me.id}/${e.target.innerText}`);
  }, []);

  return (
    <HideWrapper hide={hide}>
      <FeelSelectWrapper
        onClick={onSelect}
        style={{
          color: "white",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button>Special</Button>
        <Button>Good</Button>
        <Button>Soso</Button>
        <Button>Bad</Button>
      </FeelSelectWrapper>
    </HideWrapper>
  );
};

FeelSelect.propTypes = {
  hide: PropTypes.bool,
};

export default FeelSelect;
