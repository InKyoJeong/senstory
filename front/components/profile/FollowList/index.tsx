import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button, Avatar, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { unfollowRequest } from '../../../reducers/user/unfollow';
import { removeFollowerRequest } from '../../../reducers/user/removeFollower';
import { UserFollowList } from '../../../interfaces/user';
import { ListWrapper, MoreButtonWrapper, FollowListWrapper, FollowInfoSection, FollowDelSection } from './styles';
import { backUrl } from '../../../config/config';

interface FollowListProps {
  header: string;
  data: UserFollowList[];
  loading: boolean;
  mutate: (prev: any) => void;
  onClickMore: () => void;
}

const FollowList = ({ header, data, onClickMore, loading, mutate }: FollowListProps) => {
  const dispatch = useDispatch();
  const onCancel = useCallback(
    (id) => () => {
      if (header === '팔로잉') {
        dispatch(unfollowRequest(id));
        mutate((prev: UserFollowList[]) => prev.filter((data) => data.id !== id));
      }

      dispatch(removeFollowerRequest(id));
      mutate((prev: UserFollowList[]) => prev.filter((data) => data.id !== id));
    },
    [],
  );

  return (
    <ListWrapper
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <MoreButtonWrapper>
          <Button onClick={onClickMore} loading={loading}>
            More
          </Button>
        </MoreButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <FollowListWrapper>
            <FollowInfoSection>
              <div>
                <Link href={`/user/${item.id}`}>
                  <a>
                    {item.avatar ? <Avatar src={`${backUrl}/${item.avatar}`} /> : <Avatar>{item.nickname[0]}</Avatar>}
                  </a>
                </Link>
              </div>
              <div>{item.nickname}</div>
            </FollowInfoSection>

            <FollowDelSection>
              <StopOutlined key="stop" onClick={onCancel(item.id)} />
            </FollowDelSection>
          </FollowListWrapper>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
