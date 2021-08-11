import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { DiaryBlockWrapper } from "./styles";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  // console.log(diary);
  return (
    <DiaryBlockWrapper>
      <div>{diary.title}</div>
      <div>{diary.createdAt}</div>
      <div>{diary.UserId}</div>
      <div>{diary.feel}</div>
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
