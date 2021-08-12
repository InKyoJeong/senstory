import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Button } from "antd";

import Conditional from "../../../hocs/Conditional";
import {
  EditBtnWrapper,
  PostContent,
  PostEditInput,
  TagWrapper,
} from "./styles";

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
        <div style={{ display: "flex" }}>
          <PostEditInput value={textEdit} onChange={onChangeText} />
          <EditBtnWrapper>
            <Button
              loading={updatePostLoading}
              onClick={onChangePost(textEdit)}
            >
              완료
            </Button>
            <div />
            <Button onClick={onCancelChange}>취소</Button>
          </EditBtnWrapper>
        </div>
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
