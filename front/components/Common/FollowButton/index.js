import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { FollowButtonContainer, FollowText } from './styles';
import { FOLLOW_REQUEST } from '../../../reducers/user/follow';
import { UNFOLLOW_REQUEST } from '../../../reducers/user/unfollow';

const FollowButton = ({ user }) => {
  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isFollowing = me?.Followings.find((v) => v.id === user.id);

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: user.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: user.id,
      });
    }
  }, [isFollowing]);

  if (user.id === me.id) {
    return null;
  }

  return (
    <FollowButtonContainer unfollow={isFollowing} loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? (
        <>
          <UserDeleteOutlined />
          <FollowText>Unfollow</FollowText>
        </>
      ) : (
        <>
          <UserAddOutlined />
          <FollowText>Follow</FollowText>
        </>
      )}
    </FollowButtonContainer>
  );
};

FollowButton.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    intro: PropTypes.string,
    nickname: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};

export default FollowButton;
