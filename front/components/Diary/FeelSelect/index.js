import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Router from "next/router";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { ChartWrapper, FeelSelectWrapper, SelectBtnWrapper } from "./styles";
import HideWrapper from "../../common/HideWrapper";
import FeelBar from "../FeelBar";

const FeelSelect = ({ hide }) => {
  const { me } = useSelector((state) => state.user);

  const onSelect = useCallback((e) => {
    Router.push(`/feel/${me.id}/${e.target.innerText}`);
  }, []);

  const totalLength = me.Diaries.length;
  const specialLength = me.Diaries.filter(
    (diary) => diary.feel === "Special"
  ).length;
  const sosoLength = me.Diaries.filter((diary) => diary.feel === "Soso").length;
  const goodLength = me.Diaries.filter((diary) => diary.feel === "Good").length;
  const badLength = me.Diaries.filter((diary) => diary.feel === "Bad").length;

  return (
    <HideWrapper hide={hide}>
      <FeelSelectWrapper>
        <SelectBtnWrapper onClick={onSelect}>
          <Button>Special</Button>
          <Button>Good</Button>
          <Button>Soso</Button>
          <Button>Bad</Button>
        </SelectBtnWrapper>

        {/* <div>{me.Diaries.length}</div> */}
        <ChartWrapper>
          <FeelBar feelLength={specialLength} totalLength={totalLength} />
          <FeelBar feelLength={sosoLength} totalLength={totalLength} />
          <FeelBar feelLength={goodLength} totalLength={totalLength} />
          <FeelBar feelLength={badLength} totalLength={totalLength} />
        </ChartWrapper>
      </FeelSelectWrapper>
    </HideWrapper>
  );
};

FeelSelect.propTypes = {
  hide: PropTypes.bool,
};

export default FeelSelect;
