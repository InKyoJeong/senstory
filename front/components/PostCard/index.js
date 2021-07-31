import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Comment } from "antd";
import Link from "next/link";

import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  MessageFilled,
  RetweetOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import {
  LIKE_POST_REQUEST,
  REMOVE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  REPOST_REQUEST,
} from "../../actions/post";

import useToggle from "../../hooks/useToggle";
import Conditional from "../../hocs/Conditional";
import PostImages from "../PostImages";
import CommentWriteForm from "../CommentWriteForm";
import PostTag from "../PostTag";
import FollowButton from "../FollowButton";
import PostDropdown from "./PostDropdown";

import {
  PostCardWrapper,
  CommentList,
  CommentAuthor,
  PostAuthor,
  RepostHeader,
  RepostTitleWrapper,
  RepostTitle,
  RepostInnerCard,
  CommonCard,
} from "./styles";

const PostCard = ({ post }) => {
  // console.log(post);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { removePostLoading } = useSelector((state) => state.post);
  const liked = post.Likers.find((v) => v.id === id);
  const [commentOpen, onToggleComment] = useToggle(false);

  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onRepost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REPOST_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <PostCardWrapper>
      {post.RepostId && post.Repost && (
        <RepostHeader>
          <RepostTitleWrapper>
            <div>
              {/* todo: 프사 크기 <Avatar style={{ width: 25, height: 25 }}> */}
              <Link href={`/user/${post.User.id}`}>
                <a>
                  <Avatar>{post.User.nickname[0]}</Avatar>
                </a>
              </Link>
              <RepostTitle>{post.User.nickname}님이 공유했습니다.</RepostTitle>
            </div>

            <Conditional condition={id && post.User.id === id}>
              <PostDropdown
                onRemovePost={onRemovePost}
                removePostLoading={removePostLoading}
              />
            </Conditional>
          </RepostTitleWrapper>
        </RepostHeader>
      )}

      <CommonCard
        repost={post.RepostId && post.Repost && "true"}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked ? (
            // <div>
            <HeartFilled
              style={{ color: "red" }}
              key="like"
              onClick={onUnlike}
            />
          ) : (
            //   <span> {post.Likers.length}</span>
            // </div>
            // <div>
            <HeartOutlined key="like" onClick={onLike} />
            //   <span> {post.Likers.length}</span>
            // </div>
          ),
          commentOpen ? (
            <MessageFilled
              style={{ color: "#1890ff" }}
              key="comment"
              onClick={onToggleComment}
            />
          ) : (
            <MessageOutlined key="comment" onClick={onToggleComment} />
          ),
          <RetweetOutlined
            key="re"
            onClick={onRepost}
            style={{ color: post.User.id === id && post.RepostId && "#1890FF" }}
          />,
          <ShareAltOutlined key="share" />,
        ]}
      >
        {post.RepostId && post.Repost ? (
          <RepostInnerCard
            cover={
              post.Repost.Images[0] && (
                <PostImages images={post.Repost.Images} />
              )
            }
          >
            <Card.Meta
              avatar={
                <Link href={`/user/${post.Repost.User.id}`}>
                  <a>
                    <Avatar>{post.Repost.User.nickname[0]}</Avatar>
                  </a>
                </Link>
              }
              title={<PostAuthor>{post.Repost.User.nickname}</PostAuthor>}
              description={<PostTag postData={post.Repost.content} />}
            />
          </RepostInnerCard>
        ) : (
          <Card.Meta
            avatar={
              <Link href={`/user/${post.User.id}`}>
                <a>
                  <Avatar>{post.User.nickname[0]}</Avatar>
                </a>
              </Link>
            }
            title={
              <PostAuthor>
                {post.User.nickname}
                <Conditional condition={id && post.User.id === id}>
                  <PostDropdown
                    onRemovePost={onRemovePost}
                    removePostLoading={removePostLoading}
                    isRepost={!post.RepostId}
                  />
                </Conditional>
                <Conditional condition={id}>
                  <FollowButton post={post} />
                </Conditional>
              </PostAuthor>
            }
            description={<PostTag postData={post.content} />}
          />
        )}
      </CommonCard>

      <Conditional condition={commentOpen}>
        <div>
          <CommentWriteForm post={post} />
          <CommentList
            // header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={<CommentAuthor>{item.User.nickname}</CommentAuthor>}
                  avatar={
                    <Link href={`/user/${item.User.id}`}>
                      <a>
                        <Avatar>{item.User.nickname[0]}</Avatar>
                      </a>
                    </Link>
                  }
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      </Conditional>
    </PostCardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RepostId: PropTypes.number,
    Repost: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
