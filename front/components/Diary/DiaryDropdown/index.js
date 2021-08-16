import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Space } from "antd";
import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";
import { DiaryDropdownButton } from "./styles";

// interface DiaryDropdownProps ={
//   onRemoveDiary: () => void;
//  removeDiaryLoading: boolean;
// }

const DiaryDropdown = ({ onRemoveDiary, removeDiaryLoading }) => {
  const menu = (
    <>
      <DiaryDropdownButton onClick={onRemoveDiary} loading={removeDiaryLoading}>
        <DeleteOutlined />
      </DiaryDropdownButton>
    </>
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

DiaryDropdown.propTypes = {
  onRemoveDiary: PropTypes.func,
  removeDiaryLoading: PropTypes.bool,
};

export default DiaryDropdown;
