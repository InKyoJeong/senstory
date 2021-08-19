import React, { forwardRef, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { todayDot } from "../../../utils";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";

import {
  BlockFeelText,
  BlockDateText,
  BlockTitleText,
  DiaryBlockWrapper,
  WhiteLabel,
} from "./styles";
import Router from "next/router";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  const { me } = useSelector((state) => state.user);

  const handleClickDiary = useCallback((id) => {
    Router.push(`/diary/${me.id}/${id}`);
  }, []);

  return (
    <DiaryBlockWrapper
      feel={diary.feel}
      onClick={() => handleClickDiary(diary.id)}
    >
      <WhiteLabel>
        <div></div>
      </WhiteLabel>

      <BlockFeelText>
        <div>
          {diary.feel === "Special" && <StarOutlined />}
          {diary.feel === "Good" && <SmileOutlined />}
          {diary.feel === "Soso" && <MehOutlined />}
          {diary.feel === "Bad" && <FrownOutlined />}
        </div>
        <BlockTitleText>
          <div>{diary.title}</div>
        </BlockTitleText>
      </BlockFeelText>
      <BlockDateText>{todayDot(diary.createdAt)}</BlockDateText>

      <div ref={ref} />
    </DiaryBlockWrapper>
  );
});

DiaryBlock.propTypes = {
  diary: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    feel: PropTypes.string,
    Photos: PropTypes.arrayOf(PropTypes.object),
    maxtemp: PropTypes.number,
    mintemp: PropTypes.number,
  }).isRequired,
};
export default DiaryBlock;
