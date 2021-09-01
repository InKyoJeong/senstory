import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditFilled } from '@ant-design/icons';
import { Form } from 'antd';
import useInput from '../../../hooks/useInput';
import { addCommentRequest } from '../../../reducers/post/addComment';
import { RootState } from '../../../reducers';
import { Post } from '../../../interfaces/post';
import { WriteWrapper, WriteButton, WriteInput } from './styles';

interface CommentWriteProps {
  post: Post;
}

const CommentWriteForm = ({ post }: CommentWriteProps) => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.user.me?.id);
  const { addCommentFinish, addCommentLoading } = useSelector((state: RootState) => state.post);
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

export default CommentWriteForm;
