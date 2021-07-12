import React, { useMemo } from "react";
import { Input } from "antd";

import { NickFormWrapper } from "./styles";

const NickEditForm = () => {
  const searchStyle = useMemo(
    () => ({
      backgroundColor: "gray",
      borderRadius: 10,
      overflow: "hidden",
    }),
    []
  );

  return (
    <NickFormWrapper>
      <Input.Search
        addonBefore="닉네임"
        enterButton="수정"
        style={searchStyle}
        bordered={false}
      />
    </NickFormWrapper>
  );
};

export default NickEditForm;
