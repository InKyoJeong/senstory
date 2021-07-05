import React from "react";
import { Input } from "antd";

import { NickFormWrapper } from "./styles";

const NickEditForm = () => {
  return (
    <NickFormWrapper>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </NickFormWrapper>
  );
};

export default NickEditForm;
