import React from 'react';
import { Dropdown, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { DropdownButton, DropdownWrapper } from './styles';

interface PostDropdownProps {
  onRemovePost: () => void;
  removePostLoading: boolean;
  isRepost?: boolean;
  onClickUpdate?: () => void;
}

const PostDropdown = ({ onRemovePost, removePostLoading, isRepost, onClickUpdate }: PostDropdownProps) => {
  const menu = (
    <DropdownWrapper>
      {isRepost && (
        <DropdownButton edit={true} type="primary" onClick={onClickUpdate}>
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
        <Dropdown trigger={['click']} overlay={menu} placement="bottomCenter">
          <EllipsisOutlined />
        </Dropdown>
      </Space>
    </Space>
  );
};

export default PostDropdown;
