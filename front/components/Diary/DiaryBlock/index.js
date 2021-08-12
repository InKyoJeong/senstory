import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { today } from "../../../utils";
import { BlockFeelText, BlockDateText, DiaryBlockWrapper } from "./styles";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  return (
    <DiaryBlockWrapper feel={diary.feel}>
      <div>
        <div></div>
      </div>
      <BlockFeelText>
        {diary.feel === "Special" && <StarOutlined />}
        {diary.feel === "Good" && <SmileOutlined />}
        {diary.feel === "Soso" && <MehOutlined />}
        {diary.feel === "Bad" && <FrownOutlined />}
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
    // maxtemp: PropTypes.number,
    // mintemp: PropTypes.number,
  }).isRequired,
};
export default DiaryBlock;
