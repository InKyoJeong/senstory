import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Space } from 'antd';
import { DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { DiaryDropdownButton } from './styles';

interface DiaryDropdownProps {
  onRemoveDiary: () => void;
}

const DiaryDropdown = ({ onRemoveDiary }: DiaryDropdownProps) => {
  const menu = (
    <>
      <DiaryDropdownButton onClick={onRemoveDiary}>
        <DeleteOutlined />
      </DiaryDropdownButton>
    </>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown trigger={['click']} overlay={menu} placement="bottomCenter">
          <EllipsisOutlined />
        </Dropdown>
      </Space>
    </Space>
  );
};

export default DiaryDropdown;
