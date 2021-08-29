import produce from 'immer';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_ERROR_FINISH,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  REMOVE_IMAGE,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REPOST_ERROR_FINISH,
  REPOST_FAILURE,
  REPOST_REQUEST,
  REPOST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from '../../actions/post';

import { PostinitialState } from '../../interfaces/post';

import { LOAD_ALL_POST_FAILURE, LOAD_ALL_POST_REQUEST, LOAD_ALL_POST_SUCCESS } from './loadAllPost';
import { LOAD_RELATED_POSTS_FAILURE, LOAD_RELATED_POSTS_REQUEST, LOAD_RELATED_POSTS_SUCCESS } from './loadRelatedPost';
import { LOAD_SINGLE_POST_FAILURE, LOAD_SINGLE_POST_REQUEST, LOAD_SINGLE_POST_SUCCESS } from './loadSinglePost';
import { LOAD_USER_ALL_POST_FAILURE, LOAD_USER_ALL_POST_REQUEST, LOAD_USER_ALL_POST_SUCCESS } from './loadUserAllPost';

export const initialState: PostinitialState = {
  mainPosts: [],
  hasMorePosts: true,
  singlePost: null,
  imagePaths: [],
  loadAllPostLoading: false,
  loadAllPostFinish: false,
  loadAllPostError: null,
  loadUserAllPostLoading: false,
  loadUserAllPostFinish: false,
  loadUserAllPostError: null,
  loadSinglePostLoading: false,
  loadSinglePostFinish: false,
  loadSinglePostError: null,
  loadHashtagPostsLoading: false,
  loadHashtagPostsFinish: false,
  loadHashtagPostsError: null,
  loadRelatedPostsLoading: false,
  loadRelatedPostsFinish: false,
  loadRelatedPostsError: null,
  addPostLoading: false,
  addPostFinish: false,
  addPostError: null,
  removePostLoading: false,
  removePostFinish: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostFinish: false,
  updatePostError: null,
  likePostLoading: false,
  likePostFinish: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostFinish: false,
  unlikePostError: null,
  addCommentLoading: false,
  addCommentFinish: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesFinish: false,
  uploadImagesError: null,
  repostLoading: false,
  repostFinish: false,
  repostError: null,
};

const reducer = (state: PostinitialState = initialState, action) => {
  return produce(state, (draft: PostinitialState) => {
    switch (action.type) {
      case LOAD_ALL_POST_REQUEST:
        draft.loadAllPostLoading = true;
        draft.loadAllPostFinish = false;
        draft.loadAllPostError = null;
        break;
      case LOAD_ALL_POST_SUCCESS:
        draft.loadAllPostLoading = false;
        draft.loadAllPostFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_ALL_POST_FAILURE:
        draft.loadAllPostLoading = false;
        draft.loadAllPostError = action.error;
        break;
      case LOAD_USER_ALL_POST_REQUEST:
        draft.loadUserAllPostLoading = true;
        draft.loadUserAllPostFinish = false;
        draft.loadUserAllPostError = null;
        break;
      case LOAD_USER_ALL_POST_SUCCESS:
        draft.loadUserAllPostLoading = false;
        draft.loadUserAllPostFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_USER_ALL_POST_FAILURE:
        draft.loadUserAllPostLoading = false;
        draft.loadUserAllPostError = action.error;
        break;
      case LOAD_RELATED_POSTS_REQUEST:
        draft.loadRelatedPostsLoading = true;
        draft.loadRelatedPostsFinish = false;
        draft.loadRelatedPostsError = null;
        break;
      case LOAD_RELATED_POSTS_SUCCESS:
        draft.loadRelatedPostsLoading = false;
        draft.loadRelatedPostsFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_RELATED_POSTS_FAILURE:
        draft.loadRelatedPostsLoading = false;
        draft.loadRelatedPostsError = action.error;
        break;
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadHashtagPostsLoading = true;
        draft.loadHashtagPostsFinish = false;
        draft.loadHashtagPostsError = null;
        break;
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsError = action.error;
        break;
      case LOAD_SINGLE_POST_REQUEST:
        draft.loadSinglePostLoading = true;
        draft.loadSinglePostFinish = false;
        draft.loadSinglePostError = null;
        break;
      case LOAD_SINGLE_POST_SUCCESS:
        draft.loadSinglePostLoading = false;
        draft.loadSinglePostFinish = true;
        draft.singlePost = action.data;
        break;
      case LOAD_SINGLE_POST_FAILURE:
        draft.loadSinglePostLoading = false;
        draft.loadSinglePostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostFinish = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostFinish = true;
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_POST_ERROR_FINISH:
        draft.addPostError = null;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostFinish = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostFinish = true;
        draft.mainPosts.find((v) => v.id === action.data.PostId).content = action.data.content;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case REPOST_REQUEST:
        draft.repostLoading = true;
        draft.repostFinish = false;
        draft.repostError = null;
        break;
      case REPOST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.repostLoading = false;
        draft.repostFinish = true;
        break;
      case REPOST_FAILURE:
        draft.repostLoading = false;
        draft.repostError = action.error;
        break;
      case REPOST_ERROR_FINISH:
        draft.repostError = null;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostFinish = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostFinish = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostFinish = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        if (post) {
          post.Likers.push({ id: action.data.UserId });
        }
        if (draft.singlePost?.Likers) {
          draft.singlePost.Likers.push({ id: action.data.UserId });
        }
        draft.likePostLoading = false;
        draft.likePostFinish = true;
        break;
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostFinish = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        if (post) {
          post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
        }
        if (draft.singlePost?.Likers) {
          const index = draft.singlePost.Likers.find((v) => v.id === action.data.UserId);
          draft.singlePost.Likers.splice(index, 1);
        }
        draft.unlikePostLoading = false;
        draft.unlikePostFinish = true;
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentFinish = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        if (post) {
          post.Comments.unshift(action.data);
        }
        if (draft.singlePost?.Comments) {
          draft.singlePost.Comments.unshift(action.data);
        }
        draft.addCommentLoading = false;
        draft.addCommentFinish = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesFinish = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = draft.imagePaths.concat(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesFinish = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
