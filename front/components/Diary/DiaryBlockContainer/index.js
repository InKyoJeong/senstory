import React from "react";
import PropTypes from "prop-types";
import Conditional from "../../../hocs/Conditional";
import { DiaryContainerWrapper, DiaryEmpty } from "./styles";

const DiaryBlockContainer = ({ children, selectFeel }) => {
  // console.log(children);
  return (
    <>
      <Conditional condition={children.length === 0}>
        <DiaryEmpty>"{selectFeel}"에 해당하는 게시물이 없습니다.</DiaryEmpty>
      </Conditional>

      <DiaryContainerWrapper>{children}</DiaryContainerWrapper>
    </>
  );
};

DiaryBlockContainer.propTypes = {
  children: PropTypes.node.isRequired,
  selectFeel: PropTypes.string,
};

export default DiaryBlockContainer;
