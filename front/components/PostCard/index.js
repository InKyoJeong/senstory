import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Button, Avatar, Popover, Comment } from "antd";
import {
  EllipsisOutlined,
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
  const [commentOpen, onToggleComment] = useToggle(false);
  const liked = post.Likers.find((v) => v.id === id);

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

  const cardStyle = useMemo(
    () => ({
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#2d2d2e",
    }),
    []
  );

  const repostInnerStyle = useMemo(
    () => ({
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#2d2d2e",
      borderColor: "#404042",
      borderWidth: 4,
    }),
    []
  );

  const repostCardStyle = useMemo(
    () => ({
      // borderRadius: 10,
      overflow: "hidden",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: "#2d2d2e",
    }),
    []
  );

  // const cardBodyStyle = useMemo(() => ({ background: "#2d2d2e" }), []);

  return (
    <PostCardWrapper>
      {post.RepostId && post.Repost && (
        <div
          style={{
            backgroundColor: "#39393b",
            color: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 10,
            }}
          >
            <div>
              <span style={{ marginRight: 5 }}>
                {/* todo: 프사 크기 <Avatar style={{ width: 25, height: 25 }}> */}
                <Avatar>{post.User.nickname[0]}</Avatar>
              </span>
              <span style={{ color: "#c5c5c7" }}>
                {post.User.nickname}님이 공유했습니다.
              </span>
            </div>

            <Conditional condition={id && post.User.id === id}>
              <Popover
                key="more"
                trigger="click"
                content={
                  <Button.Group>
                    <>
                      <Button type="primary">수정</Button>
                      <Button
                        type="danger"
                        onClick={onRemovePost}
                        loading={removePostLoading}
                      >
                        삭제
                      </Button>
                    </>
                  </Button.Group>
                }
              >
                <EllipsisOutlined />
              </Popover>
            </Conditional>
          </div>
        </div>
      )}

      <Card
        style={post.RepostId && post.Repost ? repostCardStyle : cardStyle}
        bordered={false}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked ? (
            <HeartFilled
              style={{ color: "red" }}
              key="like"
              onClick={onUnlike}
            />
          ) : (
            <HeartOutlined key="like" onClick={onLike} />
            // <div>{post.Likers.length}</div>  // 좋아요 카운트
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
          <RetweetOutlined key="re" onClick={onRepost} />,
          <ShareAltOutlined key="share" />,
        ]}
      >
        {post.RepostId && post.Repost ? (
          <Card
            style={repostInnerStyle}
            cover={
              post.Repost.Images[0] && (
                <PostImages images={post.Repost.Images} />
              )
            }
          >
            <Card.Meta
              avatar={<Avatar>{post.Repost.User.nickname[0]}</Avatar>}
              title={<PostAuthor>{post.Repost.User.nickname}</PostAuthor>}
              description={<PostTag postData={post.Repost.content} />}
            />
          </Card>
        ) : (
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={
              <PostAuthor>
                {post.User.nickname}
                <Conditional condition={id && post.User.id === id}>
                  <Popover
                    key="more"
                    trigger="click"
                    content={
                      <Button.Group>
                        <>
                          <Button type="primary">수정</Button>
                          <Button
                            type="danger"
                            onClick={onRemovePost}
                            loading={removePostLoading}
                          >
                            삭제
                          </Button>
                        </>
                      </Button.Group>
                    }
                  >
                    <EllipsisOutlined />
                  </Popover>
                </Conditional>

                <Conditional condition={id}>
                  <FollowButton post={post} />
                </Conditional>
              </PostAuthor>
            }
            description={<PostTag postData={post.content} />}
          />
        )}
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
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RepostId: PropTypes.number,
    Repost: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
