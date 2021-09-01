import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Button } from 'antd';
import Conditional from '../../../hocs/Conditional';
import { RootState } from '../../../reducers';
import { EditBtnWrapper, PostContent, PostEditWrapper, PostEditInput, TagWrapper } from './styles';

interface PostContentsProps {
  postData: string;
  editMode?: boolean;
  onChangePost: (textEdit: string) => () => void;
  onCancelChange: () => void;
}

const PostContents = ({ postData, editMode = false, onChangePost, onCancelChange }: PostContentsProps) => {
  const { updatePostLoading, updatePostFinish } = useSelector((state: RootState) => state.post);
  const [textEdit, setTextEdit] = useState(postData);

  const onChangeText = useCallback((e) => {
    setTextEdit(e.target.value);
  }, []);

  useEffect(() => {
    if (updatePostFinish) {
      onCancelChange();
    }
  }, [updatePostFinish]);

  return (
    <TagWrapper>
      <Conditional condition={editMode}>
        <PostEditWrapper>
          <PostEditInput value={textEdit} onChange={onChangeText} />
          <EditBtnWrapper>
            <Button loading={updatePostLoading} onClick={onChangePost(textEdit)}>
              완료
            </Button>
            <div />
            <Button onClick={onCancelChange}>취소</Button>
          </EditBtnWrapper>
        </PostEditWrapper>
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

export default PostContents;
