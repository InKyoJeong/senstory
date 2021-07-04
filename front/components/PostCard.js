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
import { useSelector } from "react-redux";

import useToggle from "../hooks/useToggle";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import Conditional from "../hocs/Conditional";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);

  const [liked, setLiked] = useState(false);
  const [commentOpen, onToggleComment] = useToggle(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20, marginTop: 10 }}>
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
                    <Button type="danger">삭제</Button>
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
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>

      <Conditional condition={commentOpen}>
        <div
          style={{
            border: "1px solid rgba(0,0,0, 0.1)",
          }}
        >
          <CommentForm post={post} />
          <List
            style={{ padding: "0px 10px" }}
            header={`${post.Comments.length}개의 댓글`}
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
        </div>
      </Conditional>
    </div>
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
