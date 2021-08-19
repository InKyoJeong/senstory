import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Router from "next/router";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { ChartWrapper, FeelSelectWrapper, SelectBtnWrapper } from "./styles";
import HideWrapper from "../../common/HideWrapper";

const FeelSelect = ({ hide }) => {
  const { me } = useSelector((state) => state.user);

  const onSelect = useCallback((e) => {
    Router.push(`/feel/${me.id}/${e.target.innerText}`);
  }, []);
  console.log(me);
  return (
    <HideWrapper hide={hide}>
      <FeelSelectWrapper>
        <SelectBtnWrapper onClick={onSelect}>
          <Button>Special</Button>
          <Button>Good</Button>
          <Button>Soso</Button>
          <Button>Bad</Button>
        </SelectBtnWrapper>

        <ChartWrapper>
          {/* <div>{me.Diarys.length}</div> */}

          <div>22222</div>
          <div>3333</div>
          <div>44444</div>
        </ChartWrapper>
      </FeelSelectWrapper>
    </HideWrapper>
  );
};

FeelSelect.propTypes = {
  hide: PropTypes.bool,
};

export default FeelSelect;
