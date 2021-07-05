import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import { EditFilled } from "@ant-design/icons";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";

import { Global, WriteWrapper, WriteButton, WriteInput } from "./styles";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);

  const [commentText, onChangeCommentText] = useInput("");

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

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
          <WriteButton type="primary" htmlType="submit">
            <EditFilled />
          </WriteButton>
        </WriteWrapper>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
