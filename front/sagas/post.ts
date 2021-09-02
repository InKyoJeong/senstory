import { all, fork, takeLatest, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  loadAllPostFailure,
  LoadAllPostRequest,
  loadAllPostSuccess,
  LOAD_ALL_POST_REQUEST,
} from '../reducers/post/loadAllPost';
import {
  loadSinglePostFailure,
  LoadSinglePostRequest,
  loadSinglePostSuccess,
  LOAD_SINGLE_POST_REQUEST,
} from '../reducers/post/loadSinglePost';
import {
  loadUserAllPostFailure,
  LoadUserAllPostRequest,
  loadUserAllPostSuccess,
  LOAD_USER_ALL_POST_REQUEST,
} from '../reducers/post/loadUserAllPost';
import {
  loadRelatedPostFailure,
  LoadRelatedPostRequest,
  loadRelatedPostSuccess,
  LOAD_RELATED_POSTS_REQUEST,
} from '../reducers/post/loadRelatedPost';
import {
  loadHashtagPostsFailure,
  LoadHashtagPostsRequest,
  loadHashtagPostsSuccess,
  LOAD_HASHTAG_POSTS_REQUEST,
} from '../reducers/post/loadHashtagPosts';
import {
  addPostErrorFinish,
  addPostFailure,
  AddPostRequest,
  addPostSuccess,
  ADD_POST_REQUEST,
  PostContent,
} from '../reducers/post/addPost';
import {
  removePostFailure,
  RemovePostRequest,
  removePostSuccess,
  REMOVE_POST_REQUEST,
} from '../reducers/post/removePost';
import {
  PostUpdateContent,
  updatePostFailure,
  UpdatePostRequest,
  updatePostSuccess,
  UPDATE_POST_REQUEST,
} from '../reducers/post/updatePost';
import { likePostFailure, LikePostRequest, likePostSuccess, LIKE_POST_REQUEST } from '../reducers/post/likePost';
import {
  unlikePostFailure,
  UnlikePostRequest,
  unlikePostSuccess,
  UNLIKE_POST_REQUEST,
} from '../reducers/post/unlikePost';
import {
  addCommentFailure,
  AddCommentRequest,
  addCommentSuccess,
  ADD_COMMENT_REQUEST,
  CommentContent,
} from '../reducers/post/addComment';
import {
  Image,
  uploadImagesFailure,
  UploadImagesRequest,
  uploadImagesSuccess,
  UPLOAD_IMAGES_REQUEST,
} from '../reducers/post/uploadImages';
import {
  repostErrorFinish,
  repostFailure,
  RepostRequest,
  repostSuccess,
  REPOST_REQUEST,
} from '../reducers/post/repost';
import { SagaIterator } from 'redux-saga';
import { addPostToMeRequest } from '../reducers/user/addPostToMe';
import { removePostOfMeRequest } from '../reducers/user/removePostOfMe';

function likePostAPI(data: number) {
  return axios.patch(`/post/${data}/like`);
}

function* likePost(action: LikePostRequest): SagaIterator {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put(likePostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(likePostFailure(err.response.data));
  }
}

function unlikePostAPI(data: number) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action: UnlikePostRequest): SagaIterator {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put(unlikePostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(unlikePostFailure(err.response.data));
  }
}

function repostAPI(data: number) {
  return axios.post(`/post/${data}/repost`);
}

function* repost(action: RepostRequest): SagaIterator {
  try {
    const result = yield call(repostAPI, action.data);
    yield put(repostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(repostFailure(err.response.data));
  } finally {
    yield put(repostErrorFinish());
  }
}

function loadPostsAPI(lastId?: number) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action: LoadAllPostRequest): SagaIterator {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    yield put(loadAllPostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(loadAllPostFailure(err.response.data));
  }
}

function loadRelatedPostsAPI(lastId?: number) {
  return axios.get(`/posts/related?lastId=${lastId || 0}`);
}

function* loadRelatedPosts(action: LoadRelatedPostRequest): SagaIterator {
  try {
    const result = yield call(loadRelatedPostsAPI, action.lastId);
    yield put(loadRelatedPostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(loadRelatedPostFailure(err.response.data));
  }
}

function loadPostAPI(data: number) {
  return axios.get(`/post/${data}`);
}

function* loadPost(action: LoadSinglePostRequest): SagaIterator {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put(loadSinglePostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(loadSinglePostFailure(err.response.data));
  }
}

function loadUserPostsAPI(data: string | number, lastId?: number) {
  return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action: LoadUserAllPostRequest): SagaIterator {
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId);
    yield put(loadUserAllPostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(loadUserAllPostFailure(err.response.data));
  }
}

function loadHashtagPostsAPI(data: string, lastId?: number) {
  return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action: LoadHashtagPostsRequest): SagaIterator {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
    yield put(loadHashtagPostsSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(loadHashtagPostsFailure(err.response.data));
  }
}

function addPostAPI(data: PostContent | FormData) {
  return axios.post('/post', data);
}

function* addPost(action: AddPostRequest): SagaIterator {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put(addPostSuccess(result.data));
    yield put(addPostToMeRequest(result.data.id));
  } catch (err: any) {
    console.error(err);
    yield put(addPostFailure(err.response.data));
  } finally {
    yield put(addPostErrorFinish());
  }
}

function removePostAPI(data: number) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action: RemovePostRequest): SagaIterator {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put(removePostSuccess(result.data));
    yield put(removePostOfMeRequest(action.data));
  } catch (err: any) {
    console.error(err);
    yield put(removePostFailure(err.response.data));
  }
}

function updatePostAPI(data: PostUpdateContent) {
  return axios.patch(`/post/${data.PostId}`, data);
}

function* updatePost(action: UpdatePostRequest): SagaIterator {
  try {
    const result = yield call(updatePostAPI, action.data);
    yield put(updatePostSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(updatePostFailure(err.response.data));
  }
}

function addCommentAPI(data: CommentContent) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action: AddCommentRequest): SagaIterator {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put(addCommentSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(addCommentFailure(err.response.data));
  }
}

function uploadImagesAPI(data: Image | FormData) {
  return axios.post('/post/images', data);
}

function* uploadImages(action: UploadImagesRequest): SagaIterator {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put(uploadImagesSuccess(result.data));
  } catch (err: any) {
    console.error(err);
    yield put(uploadImagesFailure(err.response.data));
  }
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_ALL_POST_REQUEST, loadPosts);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_SINGLE_POST_REQUEST, loadPost);
}

function* watchLoadUserPosts() {
  yield throttle(5000, LOAD_USER_ALL_POST_REQUEST, loadUserPosts);
}

function* watchLoadRelatedPosts() {
  yield throttle(5000, LOAD_RELATED_POSTS_REQUEST, loadRelatedPosts);
}

function* watchLoadHashtagPosts() {
  yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchRepost() {
  yield takeLatest(REPOST_REQUEST, repost);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* postSaga() {
  yield all([
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchLoadUserPosts),
    fork(watchLoadHashtagPosts),
    fork(watchLoadRelatedPosts),
    fork(watchAddPost),
    fork(watchUpdatePost),
    fork(watchRepost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchUploadImages),
  ]);
}
