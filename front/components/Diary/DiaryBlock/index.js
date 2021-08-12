import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_DIARY_REQUEST } from "../../../actions/diary";
import { today } from "../../../utils";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import DiaryDropdown from "./DiaryDropdown";
import {
  BlockFeelText,
  BlockDateText,
  DiaryBlockWrapper,
  WhiteLabel,
} from "./styles";

const DiaryBlock = forwardRef(({ diary }, ref) => {
  const dispatch = useDispatch();
  const { removeDiaryLoading } = useSelector((state) => state.diary);

  const onRemoveDiary = useCallback(() => {
    return dispatch({
      type: REMOVE_DIARY_REQUEST,
      data: diary.id,
    });
  }, []);

  return (
    <DiaryBlockWrapper feel={diary.feel}>
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
        <span>
          <DiaryDropdown
            onRemoveDiary={onRemoveDiary}
            removeDiaryLoading={removeDiaryLoading}
          />
        </span>
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
