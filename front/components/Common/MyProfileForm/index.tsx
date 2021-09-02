import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Card, Avatar, Form } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { CardWrapper, LogoutButton, MyInfoWrapper, AvatarWrapper } from './styles';
import HideComponentWrapper from '../HideComponentWrapper';
import { logoutRequest } from '../../../reducers/user/logout';
import { uploadAvatarRequest } from '../../../reducers/user/uploadAvatar';
import { RootState } from '../../../reducers';

interface MyProfileFormProps {
  hide?: boolean;
}

const MyProfileForm = ({ hide }: MyProfileFormProps) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state: RootState) => state.user);

  const avatarInput = useRef<HTMLInputElement>(null);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequest());
  }, []);

  const onClickAvatarUpload = useCallback(() => {
    if (!avatarInput.current) {
      return;
    }
    avatarInput.current.click();
  }, [avatarInput.current]);

  const onChangeAvatar = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    dispatch(uploadAvatarRequest(imageFormData));
  }, []);

  return (
    <HideComponentWrapper hide={hide}>
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
    </HideComponentWrapper>
  );
};

export default MyProfileForm;
