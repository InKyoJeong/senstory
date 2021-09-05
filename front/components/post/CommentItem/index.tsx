import React from 'react';
import { Avatar, Comment } from 'antd';
import Link from 'next/link';
import { fromNow } from '../../../utils';
import { CommentAuthor, CommentDate } from './styles';
import { PostComment } from '../../../interfaces/post';

interface CommentItemProps {
  item: PostComment;
}

const CommentItem = ({ item }: CommentItemProps) => {
  return (
    <li>
      <Comment
        author={<CommentAuthor>{item.User.nickname}</CommentAuthor>}
        avatar={
          <Link href={`/user/${item.User.id}`}>
            <a>
              {item.User.avatar ? <Avatar src={`${item.User.avatar}`} /> : <Avatar>{item.User.nickname[0]}</Avatar>}
            </a>
          </Link>
        }
        content={
          <>
            {item.content}
            <CommentDate>{fromNow(item.createdAt)}</CommentDate>
          </>
        }
      />
    </li>
  );
};

export default CommentItem;
