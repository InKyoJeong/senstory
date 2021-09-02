import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { FollowButtonContainer, FollowText } from './styles';
import { followRequest } from '../../../reducers/user/follow';
import { unfollowRequest } from '../../../reducers/user/unfollow';
import { RandomUsers, User, UserFollowers } from '../../../interfaces/user';
import { RootState } from '../../../reducers';
import { PostUser } from '../../../interfaces/post';

interface FollowButtonProps {
  user: RandomUsers | User | PostUser;
}

const FollowButton = ({ user }: FollowButtonProps) => {
  const { me, followLoading, unfollowLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const isFollowing = me?.Followings.find((v: UserFollowers) => v.id === user.id);

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch(unfollowRequest(user.id));
    } else {
      dispatch(followRequest(user.id));
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

export default FollowButton;
