import React, { forwardRef, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Card, Avatar } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  MessageFilled,
  RetweetOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { fromNow } from '../../../utils';
import Conditional from '../../../hocs/Conditional';
import Modal from '../../common/Modal';
import FollowButton from '../../common/FollowButton';
import PostImages from '../PostImages';
import CommentWriteForm from '../CommentWriteForm';
import PostContents from '../PostContents';
import PostDropdown from './PostDropdown';
import CommentItem from '../CommentItem';
import { removePostRequest } from '../../../reducers/post/removePost';
import { updatePostRequest } from '../../../reducers/post/updatePost';
import { likePostRequest } from '../../../reducers/post/likePost';
import { unlikePostRequest } from '../../../reducers/post/unlikePost';
import { repostRequest } from '../../../reducers/post/repost';
import {
  PostCardWrapper,
  CommentList,
  PostAuthor,
  RepostHeader,
  RepostTitleWrapper,
  RepostTitle,
  RepostInnerCard,
  CommonCard,
  PostDate,
  LikeActive,
  CommentActive,
  InActive,
  IconCount,
} from './styles';
import { RootState } from '../../../reducers';
import { Post } from '../../../interfaces/post';
import { frontUrl } from '../../../config/config';

interface PostCardProps {
  post: Post;
}

const PostCard = forwardRef(({ post }: PostCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.user.me?.id);
  const { removePostLoading } = useSelector((state: RootState) => state.post);
  const liked = post.Likers.find((v) => v.id === id);

  const [editMode, setEditMode] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);

  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch(likePostRequest(post.id));
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch(unlikePostRequest(post.id));
  }, [id]);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch(removePostRequest(post.id));
  }, [id]);

  const onRepost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch(repostRequest(post.id));
  }, [id]);

  const onClickUpdate = useCallback(() => {
    setEditMode(true);
  }, []);

  const onCancelChange = useCallback(() => {
    setEditMode(false);
  }, []);

  const onChangePost = useCallback(
    (textEdit) => () => {
      dispatch(
        updatePostRequest({
          PostId: post.id,
          content: textEdit,
        }),
      );
    },
    [post],
  );

  return (
    <PostCardWrapper>
      {post.RepostId && post.Repost && (
        <RepostHeader>
          <RepostTitleWrapper>
            <div>
              <Link href={`/user/${post.User.id}`}>
                <a>
                  {post.User.avatar ? <Avatar src={`${post.User.avatar}`} /> : <Avatar>{post.User.nickname[0]}</Avatar>}
                </a>
              </Link>
              <RepostTitle>{post.User.nickname}님이 공유했습니다.</RepostTitle>
            </div>

            <Conditional condition={id && post.User.id === id}>
              <PostDropdown onRemovePost={onRemovePost} removePostLoading={removePostLoading} />
            </Conditional>
          </RepostTitleWrapper>
        </RepostHeader>
      )}

      <CommonCard
        radius={post.RepostId !== null ? '0px' : '10px'}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked ? (
            <LikeActive onClick={onUnlike}>
              <HeartFilled key="like" />
              <IconCount> {post.Likers.length}</IconCount>
            </LikeActive>
          ) : (
            <InActive onClick={onLike}>
              <HeartOutlined key="like" />
              <IconCount> {post.Likers.length}</IconCount>
            </InActive>
          ),
          commentOpen ? (
            <CommentActive onClick={onToggleComment}>
              <MessageFilled key="comment" />
              <IconCount> {post.Comments.length}</IconCount>
            </CommentActive>
          ) : (
            <InActive onClick={onToggleComment}>
              <MessageOutlined key="comment" />
              <IconCount> {post.Comments.length}</IconCount>
            </InActive>
          ),
          <RetweetOutlined key="re" onClick={onRepost} />,
          <CopyToClipboard text={`${frontUrl}/post/${post.id}`}>
            <ExportOutlined key="share" onClick={onToggleModal} />
          </CopyToClipboard>,
        ]}
      >
        {post.RepostId && post.Repost ? (
          <>
            <RepostInnerCard cover={post.Repost.Images[0] && <PostImages images={post.Repost.Images} />}>
              <Card.Meta
                avatar={
                  <Link href={`/user/${post.Repost.User.id}`}>
                    <a>
                      {post.Repost.User.avatar ? (
                        <Avatar src={`${post.Repost.User.avatar}`} />
                      ) : (
                        <Avatar>{post.User.nickname[0]}</Avatar>
                      )}
                    </a>
                  </Link>
                }
                title={<PostAuthor>{post.Repost.User.nickname}</PostAuthor>}
                description={
                  <PostContents
                    postData={post.Repost.content}
                    onChangePost={onChangePost}
                    onCancelChange={onCancelChange}
                  />
                }
              />
            </RepostInnerCard>
            <PostDate>{fromNow(post.createdAt)}</PostDate>
          </>
        ) : (
          <Card.Meta
            avatar={
              <Link href={`/user/${post.User.id}`}>
                <a>
                  {post.User.avatar ? <Avatar src={`${post.User.avatar}`} /> : <Avatar>{post.User.nickname[0]}</Avatar>}
                </a>
              </Link>
            }
            title={
              <PostAuthor>
                {post.User.nickname}
                <Conditional condition={id && post.User.id === id}>
                  <PostDropdown
                    onRemovePost={onRemovePost}
                    removePostLoading={removePostLoading}
                    isRepost={!post.RepostId}
                    onClickUpdate={onClickUpdate}
                  />
                </Conditional>
                <Conditional condition={id}>
                  <FollowButton user={post.User} />
                </Conditional>
              </PostAuthor>
            }
            description={
              <>
                <PostContents
                  postData={post.content}
                  editMode={editMode}
                  onChangePost={onChangePost}
                  onCancelChange={onCancelChange}
                />
                <PostDate>{fromNow(post.createdAt)}</PostDate>
              </>
            }
          />
        )}
      </CommonCard>

      <Conditional condition={commentOpen}>
        <>
          <CommentWriteForm post={post} />
          <CommentList
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item: any) => <CommentItem {...{ item }} />}
          />
        </>
      </Conditional>

      <Conditional condition={modalOpen}>
        <Modal title="게시글 링크가 복사되었습니다!" onToggleModal={onToggleModal} />
      </Conditional>

      <div ref={ref} />
    </PostCardWrapper>
  );
});

export default PostCard;
