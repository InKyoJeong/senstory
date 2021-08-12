import React from "react";
import { DiaryDetailForm, DiaryDetailOverlay } from "./styles";

import { Button } from "antd";

const DiaryDetail = ({ diary, closeDetail }) => {
  console.log("디테일");
  console.log(diary);
  return (
    <DiaryDetailOverlay>
      <DiaryDetailForm>
        <div>
          <div style={{ color: "white" }}>{diary.title}</div>
          <Button
            style={{ width: 100, height: 100, color: "white" }}
            onClick={closeDetail}
          >
            닫기
          </Button>
        </div>
      </DiaryDetailForm>
    </DiaryDetailOverlay>
  );
};

export default DiaryDetail;
