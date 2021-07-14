import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Avatar, Popover, Comment } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  MessageFilled,
  RetweetOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { REMOVE_POST_REQUEST } from "../../actions/post";

import useToggle from "../../hooks/useToggle";
import Conditional from "../../hocs/Conditional";
import PostImages from "../PostImages";
import CommentWriteForm from "../CommentWriteForm";
import PostTag from "../PostTag";
import FollowButton from "../FollowButton";

import {
  PostCardWrapper,
  PostCardBorder,
  CommentList,
  CommentAuthor,
  PostAuthor,
} from "./styles";

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

  const cardStyle = useMemo(
    () => ({ borderRadius: 10, overflow: "hidden" }),
    []
  );
  const cardBodyStyle = useMemo(() => ({ background: "#2d2d2e" }), []);

  return (
    <PostCardWrapper>
      <Card
        style={cardStyle}
        bodyStyle={cardBodyStyle}
        bordered={false}
        cover={post.Images[0] && <PostImages images={post.Images} />}
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
        // extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={
            <PostAuthor>
              {post.User.nickname}
              {id && <FollowButton post={post} />}
            </PostAuthor>
          }
          description={<PostTag postData={post.content} />}
        />
      </Card>

      <Conditional condition={commentOpen}>
        <PostCardBorder>
          <CommentWriteForm post={post} />
          <CommentList
            // header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={<CommentAuthor>{item.User.nickname}</CommentAuthor>}
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
