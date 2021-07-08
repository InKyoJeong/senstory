import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Avatar, Popover, List, Comment } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  MessageFilled,
  RetweetOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import useToggle from "../../hooks/useToggle";
import Conditional from "../../hocs/Conditional";

import PostImages from "../PostImages";
import CommentForm from "../CommentForm";
import PostTag from "../PostTag";
import FollowButton from "../FollowButton";

import { PostCardWrapper, PostCardBorder } from "./styles";
import { REMOVE_POST_REQUEST } from "../../actions/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { removePostLoading } = useSelector((state) => state.post);

  const [liked, setLiked] = useState(false);
  const [commentOpen, onToggleComment] = useToggle(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  return (
    <PostCardWrapper>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // bodyStyle={{ background: "skyblue" }}
        actions={[
          liked ? (
            <HeartFilled
              style={{ color: "red" }}
              key="like"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="like" onClick={onToggleLike} />
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
          <RetweetOutlined key="re" />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button
                      type="danger"
                      onClick={onRemovePost}
                      loading={removePostLoading}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>공유</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostTag postData={post.content} />}
        />
      </Card>

      <Conditional condition={commentOpen}>
        <PostCardBorder>
          <CommentForm post={post} />
          <List
            style={{ padding: "0px 10px" }}
            // header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </PostCardBorder>
      </Conditional>
    </PostCardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
