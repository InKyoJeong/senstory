import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import {
  ArrowLeftOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { todayOnlyNum } from "../../../utils";
import { REMOVE_DIARY_REQUEST } from "../../../actions/diary";
import Conditional from "../../../hocs/Conditional";
import DiaryDropdown from "../DiaryDropdown";

import {
  DiaryHeaderWrapper,
  DiaryHeaderDay,
  DiaryHeaderMenu,
  DiaryBackBtn,
  DiaryContentsWrapper,
  DiaryContentsTop,
  DiaryContents,
  DiaryTitleText,
  DiaryImgWrapper,
  DiaryImgClip,
  DiaryImgFrame,
  DiaryContentText,
  DiaryTempWrapper,
} from "./styles";

const DiaryDetail = ({ diary, onBack }) => {
  const dispatch = useDispatch();

  const onRemoveDiary = useCallback(() => {
    dispatch({
      type: REMOVE_DIARY_REQUEST,
      data: diary.id,
    });
  }, []);

  return (
    <>
      <DiaryHeaderWrapper>
        <DiaryBackBtn>
          <ArrowLeftOutlined onClick={onBack} />
        </DiaryBackBtn>
        <DiaryHeaderDay>{todayOnlyNum(diary.createdAt)}</DiaryHeaderDay>
        <DiaryHeaderMenu>
          <DiaryDropdown onRemoveDiary={onRemoveDiary} />
        </DiaryHeaderMenu>
      </DiaryHeaderWrapper>

      <DiaryContentsWrapper feel={diary.feel}>
        <DiaryContentsTop>
          <div>
            {diary.feel === "Special" && <StarOutlined />}
            {diary.feel === "Good" && <SmileOutlined />}
            {diary.feel === "Soso" && <MehOutlined />}
            {diary.feel === "Bad" && <FrownOutlined />}
          </div>
          <div>
            <Conditional condition={diary.mintemp && diary.maxtemp}>
              <DiaryTempWrapper>
                <span>{diary.mintemp}°</span>
                <span>/</span>
                <span>{diary.maxtemp}°</span>
              </DiaryTempWrapper>
            </Conditional>
          </div>
        </DiaryContentsTop>

        <DiaryContents>
          <DiaryTitleText>{diary.title}</DiaryTitleText>

          {diary.Photos[0] && (
            <DiaryImgWrapper>
              <DiaryImgClip>
                <Image src="/clip.png" alt="clip" width="80" height="100" />
              </DiaryImgClip>
              <DiaryImgFrame>
                <img src={`http://localhost:3065/${diary.Photos[0].src}`} />
              </DiaryImgFrame>
            </DiaryImgWrapper>
          )}

          <DiaryContentText>{diary.content}</DiaryContentText>
        </DiaryContents>
      </DiaryContentsWrapper>
    </>
  );
};

export default DiaryDetail;
