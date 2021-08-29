import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../../../hooks/useInput';
import { WriteWrapper, WriteButton, WriteInput } from './styles';
import { addCommentRequest, ADD_COMMENT_REQUEST } from '../../../reducers/post/addComment';

const CommentWriteForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentFinish, addCommentLoading } = useSelector((state) => state.post);

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentFinish) {
      setCommentText('');
    }
  }, [addCommentFinish]);

  const onSubmitComment = useCallback(() => {
    if (!id) {
      setCommentText('');
      return alert('로그인이 필요합니다.');
    }
    if (!commentText || !commentText.trim()) {
      return alert('내용을 입력해주세요.');
    }
    // dispatch({
    //   type: ADD_COMMENT_REQUEST,
    //   data: { content: commentText, postId: post.id, userId: id },
    // });
    dispatch(addCommentRequest({ content: commentText, postId: post.id, userId: id }));
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <WriteWrapper>
          <WriteInput value={commentText} onChange={onChangeCommentText} placeholder="댓글을 입력하세요." />
          <WriteButton type="primary" htmlType="submit" loading={addCommentLoading}>
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
