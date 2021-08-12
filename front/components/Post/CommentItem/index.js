import React from "react";
import { Avatar, Comment } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import { fromNow } from "../../../utils";
import { CommentAuthor, CommentDate } from "./styles";

const CommentItem = ({ item }) => {
  return (
    <li>
      <Comment
        author={<CommentAuthor>{item.User.nickname}</CommentAuthor>}
        avatar={
          <Link href={`/user/${item.User.id}`}>
            <a>
              {item.User.avatar ? (
                <Avatar src={`http://localhost:3065/${item.User.avatar}`} />
              ) : (
                <Avatar>{item.User.nickname[0]}</Avatar>
              )}
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

CommentItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default CommentItem;
