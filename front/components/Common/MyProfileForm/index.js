import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { Card, Avatar, Form } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { CardWrapper, LogoutButton, MyInfoWrapper, AvatarWrapper } from './styles';
import HideWrapper from '../HideWrapper';
import { LOG_OUT_REQUEST } from '../../../reducers/user/logout';
import { UPLOAD_AVATAR_REQUEST } from '../../../reducers/user/uploadAvatar';

const MyProfileForm = ({ hide }) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const avatarInput = useRef();

  const onLogOut = useCallback(() => {
    dispatch({ type: LOG_OUT_REQUEST });
  }, []);

  const onClickAvatarUpload = useCallback(() => {
    avatarInput.current.click();
  }, [avatarInput.current]);

  const onChangeAvatar = useCallback((e) => {
    // console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    dispatch({
      type: UPLOAD_AVATAR_REQUEST,
      data: imageFormData,
    });
  }, []);

  return (
    <HideWrapper hide={hide}>
      <CardWrapper>
        <Card.Meta
          avatar={
            <AvatarWrapper>
              <Link href={`/user/${me.id}`}>
                <a>
                  {me.avatar ? (
                    <Avatar src={`http://localhost:3065/${me.avatar}`} />
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )}
                </a>
              </Link>
              <Form encType="multipart/form-data">
                <input type="file" name="image" hidden ref={avatarInput} onChange={onChangeAvatar} />
                <div onClick={onClickAvatarUpload}>사진 변경</div>
              </Form>
            </AvatarWrapper>
          }
          title={me.nickname}
        />
        <LogoutButton onClick={onLogOut} loading={logOutLoading}>
          <LogoutOutlined />
          로그아웃
        </LogoutButton>

        <MyInfoWrapper>
          <div>
            <Link href={`/user/${me.id}`}>
              <a>
                <div>게시물</div>
                <div>{me.Posts.length}</div>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/profile">
              <a>
                <div>팔로워</div>
                <div>{me.Followers.length}</div>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/profile">
              <a>
                <div>팔로잉</div>
                <div>{me.Followings.length}</div>
              </a>
            </Link>
          </div>
        </MyInfoWrapper>
      </CardWrapper>
    </HideWrapper>
  );
};

MyProfileForm.propTypes = {
  hide: PropTypes.bool,
};

export default MyProfileForm;
