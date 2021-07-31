import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { DropdownButton, DropdownWrapper } from "./styles";

// interface PostDropdownProps ={
//   onRemovePost: () => void;
//  removePostLading: boolean;
// }

const PostDropdown = ({ onRemovePost, removePostLoading, isRepost }) => {
  const menu = (
    <DropdownWrapper>
      {isRepost && (
        <DropdownButton
          edit="true"
          type="primary"
          onClick={() => {
            console.log("edit");
          }}
        >
          수정
        </DropdownButton>
      )}

      <DropdownButton onClick={onRemovePost} loading={removePostLoading}>
        삭제
      </DropdownButton>
    </DropdownWrapper>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown trigger="click" overlay={menu} placement="bottomCenter">
          <EllipsisOutlined />
        </Dropdown>
      </Space>
    </Space>
  );
};

PostDropdown.propTypes = {
  onRemovePost: PropTypes.func,
  removePostLoading: PropTypes.bool,
  isRepost: PropTypes.bool,
};

export default PostDropdown;
