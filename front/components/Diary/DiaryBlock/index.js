import React, { forwardRef, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_DIARY_REQUEST } from "../../../actions/diary";
import { today } from "../../../utils";
import Link from "next/link";
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
import Router, { useRouter } from "next/router";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  const router = useRouter();
  const { userId } = router.query;

  const test = useCallback((id) => {
    console.log(id);
    Router.push(`/diary/${userId}/${id}`);
  }, []);

  return (
    <DiaryBlockWrapper feel={diary.feel} onClick={() => test(diary.id)}>
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
      <BlockDateText>{today(diary.createdAt)}</BlockDateText>

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
