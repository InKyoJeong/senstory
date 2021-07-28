import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { PostContent, TagWrapper } from "./styles";

const PostTag = ({ postData }) => {
  return (
    <TagWrapper>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/g)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a>{v}</a>
            </Link>
          );
        }
        return <PostContent key={i}>{v}</PostContent>;
      })}
    </TagWrapper>
  );
};

PostTag.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostTag;
