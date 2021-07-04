import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import { EditFilled } from "@ant-design/icons";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);

  const [commentText, onChangeCommentText] = useInput("");

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item
        style={{
          position: "relative",
          margin: 0,
          // margin: 10,
        }}
      >
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={2}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: "absolute", bottom: -40, right: 0 }}
        >
          <EditFilled />
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CommentForm;
