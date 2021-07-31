import React, { useCallback, useRef } from "react";
import { Card, Avatar, Form } from "antd";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction, UPLOAD_AVATAR_REQUEST } from "../../actions/user";

import {
  HideWrapper,
  CardWrapper,
  LogoutButton,
  UserInfoWrapper,
  AvatarWrapper,
} from "./styles";
import { UserOutlined } from "@ant-design/icons";

const ProfileForm = (props) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const avatarInput = useRef();

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const onClickAvatarUpload = useCallback(() => {
    avatarInput.current.click();
  }, [avatarInput.current]);

  const onChangeAvatar = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });

    dispatch({
      type: UPLOAD_AVATAR_REQUEST,
      data: imageFormData,
    });
  }, []);

  return (
    <HideWrapper hide={props.hide}>
      <CardWrapper
      // actions={[]}
      >
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
                <input
                  type="file"
                  name="image"
                  hidden
                  ref={avatarInput}
                  onChange={onChangeAvatar}
                />
                <div onClick={onClickAvatarUpload}>사진 변경</div>
              </Form>
            </AvatarWrapper>
          }
          title={me.nickname}
        />
        <LogoutButton onClick={onLogOut} loading={logOutLoading}>
          로그아웃
        </LogoutButton>

        <UserInfoWrapper>
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
        </UserInfoWrapper>
      </CardWrapper>
    </HideWrapper>
  );
};

export default ProfileForm;
