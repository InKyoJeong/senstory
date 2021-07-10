import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import { EditFilled } from "@ant-design/icons";
import useInput from "../../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";

import { Global, WriteWrapper, WriteButton, WriteInput } from "./styles";
import { ADD_COMMENT_REQUEST } from "../../actions/post";

const CommentWriteForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentFinish, addCommentLoading } = useSelector(
    (state) => state.post
  );

  const [commentText, onChangeCommentText, setCommentText] = useInput("");

  useEffect(() => {
    if (addCommentFinish) {
      setCommentText("");
    }
  }, [addCommentFinish]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Global />
      <Form.Item>
        <WriteWrapper>
          <WriteInput
            value={commentText}
            onChange={onChangeCommentText}
            // style={{ width: "100%", height: 50 }}
            placeholder="댓글을 입력하세요."
          />
          <WriteButton
            type="primary"
            htmlType="submit"
            loading={addCommentLoading}
          >
            <EditFilled />
          </WriteButton>
        </WriteWrapper>
      </Form.Item>
    </Form>
  );
};

CommentWriteForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentWriteForm;
