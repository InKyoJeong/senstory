import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { DiaryBlockWrapper } from "./styles";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  return (
    <DiaryBlockWrapper>
      <div>{diary.title}</div>
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
