import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Button } from "antd";

import { PostContent, TagWrapper } from "./styles";
import Conditional from "../../hocs/Conditional";
import { useSelector } from "react-redux";

const PostTag = ({
  postData,
  editMode = false,
  onChangePost,
  onCancelChange,
}) => {
  const { updatePostLoading, updatePostFinish } = useSelector(
    (state) => state.post
  );
  const [textEdit, setTextEdit] = useState(postData);

  const onChangeText = useCallback((e) => {
    setTextEdit(e.target.value);
  });

  useEffect(() => {
    if (updatePostFinish) {
      onCancelChange();
    }
  }, [updatePostFinish]);

  return (
    <TagWrapper>
      <Conditional condition={editMode}>
        <>
          <textarea value={textEdit} onChange={onChangeText} />
          <Button loading={updatePostLoading} onClick={onChangePost(textEdit)}>
            완료
          </Button>
          <Button onClick={onCancelChange}>취소</Button>
        </>
      </Conditional>

      <Conditional condition={!editMode}>
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
      </Conditional>
    </TagWrapper>
  );
};

PostTag.propTypes = {
  postData: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onCancelChange: PropTypes.func.isRequired,
};

export default PostTag;
