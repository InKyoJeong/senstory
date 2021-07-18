import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { PostContent } from "./styles";

const PostTag = ({ postData }) => {
  return (
    <div>
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
    </div>
  );
};

PostTag.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostTag;
