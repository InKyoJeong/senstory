import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { DiaryBlockWrapper } from "./styles";
import { today } from "../../../utils";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  return (
    <DiaryBlockWrapper feel={diary.feel}>
      <div style={{ fontWeight: 600, opacity: 0.8 }}>{diary.feel}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          opacity: 0.7,
          fontStyle: "italic",
          fontSize: 12,
        }}
      >
        {today(diary.createdAt)}
      </div>
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
