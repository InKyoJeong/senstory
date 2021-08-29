import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Avatar, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';

import { ListWrapper, MoreButtonWrapper, FollowListWrapper, FollowInfoSection, FollowDelSection } from './styles';
import { UNFOLLOW_REQUEST } from '../../../reducers/user/unfollow';
import { REMOVE_FOLLOWER_REQUEST } from '../../../reducers/user/removeFollower';

const FollowList = ({ header, data, onClickMore, loading, mutate }) => {
  const dispatch = useDispatch();
  const onCancel = useCallback(
    (id) => () => {
      if (header === '팔로잉') {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: id,
        });
        mutate((prev) => prev.filter((data) => data.id !== id));
      }

      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
      mutate((prev) => prev.filter((data) => data.id !== id));
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
      renderItem={(item) => (
        <List.Item>
          <FollowListWrapper>
            <FollowInfoSection>
              <div>
                <Link href={`/user/${item.id}`}>
                  <a>
                    {item.avatar ? (
                      <Avatar src={`http://localhost:3065/${item.avatar}`} />
                    ) : (
                      <Avatar>{item.nickname[0]}</Avatar>
                    )}
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

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  // data: PropTypes.any.isRequired,
  onClickMore: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
};

export default FollowList;
