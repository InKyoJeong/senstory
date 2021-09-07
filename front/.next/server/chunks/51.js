"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 4299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ backUrl),
/* harmony export */   "Y": () => (/* binding */ frontUrl)
/* harmony export */ });
// 배포용
const backUrl = 'https://api.senstory.kr';
const frontUrl = 'https://senstory.kr'; // 개발용
// export const backUrl = 'http://localhost:3065';
// export const frontUrl = 'http://localhost:3060';

/***/ }),

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Om": () => (/* binding */ ADD_DIARY_REQUEST),
/* harmony export */   "H": () => (/* binding */ ADD_DIARY_SUCCESS),
/* harmony export */   "e$": () => (/* binding */ ADD_DIARY_FAILURE),
/* harmony export */   "r8": () => (/* binding */ ADD_DIARY_ERROR_FINISH),
/* harmony export */   "mv": () => (/* binding */ addDiaryRequest),
/* harmony export */   "Sh": () => (/* binding */ addDiarySuccess),
/* harmony export */   "n_": () => (/* binding */ addDiaryFailure),
/* harmony export */   "d0": () => (/* binding */ addDiaryErrorFinish)
/* harmony export */ });
const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST';
const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS';
const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE';
const ADD_DIARY_ERROR_FINISH = 'ADD_DIARY_ERROR_FINISH';
const addDiaryRequest = data => ({
  type: ADD_DIARY_REQUEST,
  data
});
const addDiarySuccess = data => ({
  type: ADD_DIARY_SUCCESS,
  data
});
const addDiaryFailure = error => ({
  type: ADD_DIARY_FAILURE,
  error
});
const addDiaryErrorFinish = () => ({
  type: ADD_DIARY_ERROR_FINISH
});

/***/ }),

/***/ 1018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ BACK_TO_DIARY),
/* harmony export */   "$z": () => (/* binding */ BACK_TO_DIARY_FINISH),
/* harmony export */   "Fh": () => (/* binding */ backToDiaryRequest)
/* harmony export */ });
/* unused harmony export backToDiaryFinish */
const BACK_TO_DIARY = 'BACK_TO_DIARY';
const BACK_TO_DIARY_FINISH = 'BACK_TO_DIARY_FINISH';
const backToDiaryRequest = () => ({
  type: BACK_TO_DIARY
});
const backToDiaryFinish = () => ({
  type: BACK_TO_DIARY_FINISH
});

/***/ }),

/***/ 9928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q0": () => (/* binding */ LOAD_FEEL_DIARYS_REQUEST),
/* harmony export */   "hn": () => (/* binding */ LOAD_FEEL_DIARYS_SUCCESS),
/* harmony export */   "jm": () => (/* binding */ LOAD_FEEL_DIARYS_FAILURE),
/* harmony export */   "Sv": () => (/* binding */ loadFeelDiarysRequest),
/* harmony export */   "AQ": () => (/* binding */ loadFeelDiarysSuccess),
/* harmony export */   "np": () => (/* binding */ loadFeelDiarysFailure)
/* harmony export */ });
const LOAD_FEEL_DIARYS_REQUEST = 'LOAD_FEEL_DIARYS_REQUEST';
const LOAD_FEEL_DIARYS_SUCCESS = 'LOAD_FEEL_DIARYS_SUCCESS';
const LOAD_FEEL_DIARYS_FAILURE = 'LOAD_FEEL_DIARYS_FAILURE';
const loadFeelDiarysRequest = (id, feel, lastId) => ({
  type: LOAD_FEEL_DIARYS_REQUEST,
  id,
  feel,
  lastId
});
const loadFeelDiarysSuccess = data => ({
  type: LOAD_FEEL_DIARYS_SUCCESS,
  data
});
const loadFeelDiarysFailure = error => ({
  type: LOAD_FEEL_DIARYS_FAILURE,
  error
});

/***/ }),

/***/ 1592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cs": () => (/* binding */ LOAD_SINGLE_DIARY_REQUEST),
/* harmony export */   "Oj": () => (/* binding */ LOAD_SINGLE_DIARY_SUCCESS),
/* harmony export */   "sg": () => (/* binding */ LOAD_SINGLE_DIARY_FAILURE),
/* harmony export */   "VQ": () => (/* binding */ loadSingleDiaryRequest),
/* harmony export */   "n6": () => (/* binding */ loadSingleDiarySuccess),
/* harmony export */   "D9": () => (/* binding */ loadSingleDiaryFailure)
/* harmony export */ });
const LOAD_SINGLE_DIARY_REQUEST = 'LOAD_SINGLE_DIARY_REQUEST';
const LOAD_SINGLE_DIARY_SUCCESS = 'LOAD_SINGLE_DIARY_SUCCESS';
const LOAD_SINGLE_DIARY_FAILURE = 'LOAD_SINGLE_DIARY_FAILURE';
const loadSingleDiaryRequest = data => ({
  type: LOAD_SINGLE_DIARY_REQUEST,
  data
});
const loadSingleDiarySuccess = data => ({
  type: LOAD_SINGLE_DIARY_SUCCESS,
  data
});
const loadSingleDiaryFailure = error => ({
  type: LOAD_SINGLE_DIARY_FAILURE,
  error
});

/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nn": () => (/* binding */ LOAD_USER_DIARYS_REQUEST),
/* harmony export */   "Um": () => (/* binding */ LOAD_USER_DIARYS_SUCCESS),
/* harmony export */   "Z9": () => (/* binding */ LOAD_USER_DIARYS_FAILURE),
/* harmony export */   "oR": () => (/* binding */ loadUserDiarysRequest),
/* harmony export */   "aU": () => (/* binding */ loadUserDiarysSuccess),
/* harmony export */   "oC": () => (/* binding */ loadUserDiarysFailure)
/* harmony export */ });
const LOAD_USER_DIARYS_REQUEST = 'LOAD_USER_DIARYS_REQUEST';
const LOAD_USER_DIARYS_SUCCESS = 'LOAD_USER_DIARYS_SUCCESS';
const LOAD_USER_DIARYS_FAILURE = 'LOAD_USER_DIARYS_FAILURE';
const loadUserDiarysRequest = (data, lastId) => ({
  type: LOAD_USER_DIARYS_REQUEST,
  data,
  lastId
});
const loadUserDiarysSuccess = data => ({
  type: LOAD_USER_DIARYS_SUCCESS,
  data
});
const loadUserDiarysFailure = error => ({
  type: LOAD_USER_DIARYS_FAILURE,
  error
});

/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p7": () => (/* binding */ REMOVE_DIARY_REQUEST),
/* harmony export */   "Rv": () => (/* binding */ REMOVE_DIARY_SUCCESS),
/* harmony export */   "KL": () => (/* binding */ REMOVE_DIARY_FAILURE),
/* harmony export */   "nJ": () => (/* binding */ removeDiaryRequest),
/* harmony export */   "pZ": () => (/* binding */ removeDiarySuccess),
/* harmony export */   "yy": () => (/* binding */ removeDiaryFailure)
/* harmony export */ });
const REMOVE_DIARY_REQUEST = 'REMOVE_DIARY_REQUEST';
const REMOVE_DIARY_SUCCESS = 'REMOVE_DIARY_SUCCESS';
const REMOVE_DIARY_FAILURE = 'REMOVE_DIARY_FAILURE';
const removeDiaryRequest = data => ({
  type: REMOVE_DIARY_REQUEST,
  data
});
const removeDiarySuccess = data => ({
  type: REMOVE_DIARY_SUCCESS,
  data
});
const removeDiaryFailure = error => ({
  type: REMOVE_DIARY_FAILURE,
  error
});

/***/ }),

/***/ 1043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ REMOVE_DIARY_PHOTO),
/* harmony export */   "r": () => (/* binding */ removeDiaryPhotoRequest)
/* harmony export */ });
const REMOVE_DIARY_PHOTO = 'REMOVE_DIARY_PHOTO';
const removeDiaryPhotoRequest = data => ({
  type: REMOVE_DIARY_PHOTO,
  data
});

/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sC": () => (/* binding */ UPLOAD_PHOTO_REQUEST),
/* harmony export */   "IO": () => (/* binding */ UPLOAD_PHOTO_SUCCESS),
/* harmony export */   "nD": () => (/* binding */ UPLOAD_PHOTO_FAILURE),
/* harmony export */   "Az": () => (/* binding */ uploadPhotoRequest),
/* harmony export */   "W": () => (/* binding */ uploadPhotoSuccess),
/* harmony export */   "$l": () => (/* binding */ uploadPhotoFailure)
/* harmony export */ });
const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';
const UPLOAD_PHOTO_FAILURE = 'UPLOAD_PHOTO_FAILURE';
const uploadPhotoRequest = data => ({
  type: UPLOAD_PHOTO_REQUEST,
  data
});
const uploadPhotoSuccess = data => ({
  type: UPLOAD_PHOTO_SUCCESS,
  data
});
const uploadPhotoFailure = error => ({
  type: UPLOAD_PHOTO_FAILURE,
  error
});

/***/ }),

/***/ 4123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ot": () => (/* binding */ ADD_COMMENT_REQUEST),
/* harmony export */   "nv": () => (/* binding */ ADD_COMMENT_SUCCESS),
/* harmony export */   "rX": () => (/* binding */ ADD_COMMENT_FAILURE),
/* harmony export */   "Pc": () => (/* binding */ addCommentRequest),
/* harmony export */   "sm": () => (/* binding */ addCommentSuccess),
/* harmony export */   "eV": () => (/* binding */ addCommentFailure)
/* harmony export */ });
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const addCommentRequest = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const addCommentSuccess = data => ({
  type: ADD_COMMENT_SUCCESS,
  data
});
const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  error
});

/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z9": () => (/* binding */ ADD_POST_REQUEST),
/* harmony export */   "_s": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "tP": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "mH": () => (/* binding */ ADD_POST_ERROR_FINISH),
/* harmony export */   "BZ": () => (/* binding */ addPostRequest),
/* harmony export */   "Uv": () => (/* binding */ addPostSuccess),
/* harmony export */   "FE": () => (/* binding */ addPostFailure),
/* harmony export */   "qV": () => (/* binding */ addPostErrorFinish)
/* harmony export */ });
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_POST_ERROR_FINISH = 'ADD_POST_ERROR_FINISH';
const addPostRequest = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addPostSuccess = data => ({
  type: ADD_POST_SUCCESS,
  data
});
const addPostFailure = error => ({
  type: ADD_POST_FAILURE,
  error
});
const addPostErrorFinish = () => ({
  type: ADD_POST_ERROR_FINISH
});

/***/ }),

/***/ 4487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xD": () => (/* binding */ LIKE_POST_REQUEST),
/* harmony export */   "Gz": () => (/* binding */ LIKE_POST_SUCCESS),
/* harmony export */   "cT": () => (/* binding */ LIKE_POST_FAILURE),
/* harmony export */   "vR": () => (/* binding */ likePostRequest),
/* harmony export */   "xP": () => (/* binding */ likePostSuccess),
/* harmony export */   "DA": () => (/* binding */ likePostFailure)
/* harmony export */ });
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const likePostRequest = data => ({
  type: LIKE_POST_REQUEST,
  data
});
const likePostSuccess = data => ({
  type: LIKE_POST_SUCCESS,
  data
});
const likePostFailure = error => ({
  type: LIKE_POST_FAILURE,
  error
});

/***/ }),

/***/ 4724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tU": () => (/* binding */ LOAD_ALL_POST_REQUEST),
/* harmony export */   "NC": () => (/* binding */ LOAD_ALL_POST_SUCCESS),
/* harmony export */   "Me": () => (/* binding */ LOAD_ALL_POST_FAILURE),
/* harmony export */   "sE": () => (/* binding */ loadAllPostRequest),
/* harmony export */   "K3": () => (/* binding */ loadAllPostSuccess),
/* harmony export */   "u4": () => (/* binding */ loadAllPostFailure)
/* harmony export */ });
const LOAD_ALL_POST_REQUEST = 'LOAD_ALL_POST_REQUEST';
const LOAD_ALL_POST_SUCCESS = 'LOAD_ALL_POST_SUCCESS';
const LOAD_ALL_POST_FAILURE = 'LOAD_ALL_POST_FAILURE';
const loadAllPostRequest = lastId => ({
  type: LOAD_ALL_POST_REQUEST,
  lastId
});
const loadAllPostSuccess = data => ({
  type: LOAD_ALL_POST_SUCCESS,
  data
});
const loadAllPostFailure = error => ({
  type: LOAD_ALL_POST_FAILURE,
  error
});

/***/ }),

/***/ 5780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "az": () => (/* binding */ LOAD_HASHTAG_POSTS_REQUEST),
/* harmony export */   "LF": () => (/* binding */ LOAD_HASHTAG_POSTS_SUCCESS),
/* harmony export */   "uk": () => (/* binding */ LOAD_HASHTAG_POSTS_FAILURE),
/* harmony export */   "Pm": () => (/* binding */ loadHashtagPostsRequest),
/* harmony export */   "Iy": () => (/* binding */ loadHashtagPostsSuccess),
/* harmony export */   "_m": () => (/* binding */ loadHashtagPostsFailure)
/* harmony export */ });
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const loadHashtagPostsRequest = (data, lastId) => ({
  type: LOAD_HASHTAG_POSTS_REQUEST,
  data,
  lastId
});
const loadHashtagPostsSuccess = data => ({
  type: LOAD_HASHTAG_POSTS_SUCCESS,
  data
});
const loadHashtagPostsFailure = error => ({
  type: LOAD_HASHTAG_POSTS_FAILURE,
  error
});

/***/ }),

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aW": () => (/* binding */ LOAD_RELATED_POSTS_REQUEST),
/* harmony export */   "Rp": () => (/* binding */ LOAD_RELATED_POSTS_SUCCESS),
/* harmony export */   "pd": () => (/* binding */ LOAD_RELATED_POSTS_FAILURE),
/* harmony export */   "PJ": () => (/* binding */ loadRelatedPostRequest),
/* harmony export */   "iJ": () => (/* binding */ loadRelatedPostSuccess),
/* harmony export */   "Wd": () => (/* binding */ loadRelatedPostFailure)
/* harmony export */ });
const LOAD_RELATED_POSTS_REQUEST = 'LOAD_RELATED_POSTS_REQUEST';
const LOAD_RELATED_POSTS_SUCCESS = 'LOAD_RELATED_POSTS_SUCCESS';
const LOAD_RELATED_POSTS_FAILURE = 'LOAD_RELATED_POSTS_FAILURE';
const loadRelatedPostRequest = lastId => ({
  type: LOAD_RELATED_POSTS_REQUEST,
  lastId
});
const loadRelatedPostSuccess = data => ({
  type: LOAD_RELATED_POSTS_SUCCESS,
  data
});
const loadRelatedPostFailure = error => ({
  type: LOAD_RELATED_POSTS_FAILURE,
  error
});

/***/ }),

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ LOAD_SINGLE_POST_REQUEST),
/* harmony export */   "U6": () => (/* binding */ LOAD_SINGLE_POST_SUCCESS),
/* harmony export */   "IM": () => (/* binding */ LOAD_SINGLE_POST_FAILURE),
/* harmony export */   "zJ": () => (/* binding */ loadSinglePostRequest),
/* harmony export */   "VQ": () => (/* binding */ loadSinglePostSuccess),
/* harmony export */   "wg": () => (/* binding */ loadSinglePostFailure)
/* harmony export */ });
const LOAD_SINGLE_POST_REQUEST = 'LOAD_SINGLE_POST_REQUEST';
const LOAD_SINGLE_POST_SUCCESS = 'LOAD_SINGLE_POST_SUCCESS';
const LOAD_SINGLE_POST_FAILURE = 'LOAD_SINGLE_POST_FAILURE';
const loadSinglePostRequest = data => ({
  type: LOAD_SINGLE_POST_REQUEST,
  data
});
const loadSinglePostSuccess = data => ({
  type: LOAD_SINGLE_POST_SUCCESS,
  data
});
const loadSinglePostFailure = error => ({
  type: LOAD_SINGLE_POST_FAILURE,
  error
});

/***/ }),

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cK": () => (/* binding */ LOAD_USER_ALL_POST_REQUEST),
/* harmony export */   "Em": () => (/* binding */ LOAD_USER_ALL_POST_SUCCESS),
/* harmony export */   "JZ": () => (/* binding */ LOAD_USER_ALL_POST_FAILURE),
/* harmony export */   "LL": () => (/* binding */ loadUserAllPostRequest),
/* harmony export */   "$G": () => (/* binding */ loadUserAllPostSuccess),
/* harmony export */   "kX": () => (/* binding */ loadUserAllPostFailure)
/* harmony export */ });
const LOAD_USER_ALL_POST_REQUEST = 'LOAD_USER_ALL_POST_REQUEST';
const LOAD_USER_ALL_POST_SUCCESS = 'LOAD_USER_ALL_POST_SUCCESS';
const LOAD_USER_ALL_POST_FAILURE = 'LOAD_USER_ALL_POST_FAILURE';
const loadUserAllPostRequest = (data, lastId) => ({
  type: LOAD_USER_ALL_POST_REQUEST,
  data,
  lastId
});
const loadUserAllPostSuccess = data => ({
  type: LOAD_USER_ALL_POST_SUCCESS,
  data
});
const loadUserAllPostFailure = error => ({
  type: LOAD_USER_ALL_POST_FAILURE,
  error
});

/***/ }),

/***/ 8444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ REMOVE_IMAGE),
/* harmony export */   "q": () => (/* binding */ removeImageRequest)
/* harmony export */ });
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const removeImageRequest = data => ({
  type: REMOVE_IMAGE,
  data
});

/***/ }),

/***/ 6692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HU": () => (/* binding */ REMOVE_POST_REQUEST),
/* harmony export */   "rK": () => (/* binding */ REMOVE_POST_SUCCESS),
/* harmony export */   "Ws": () => (/* binding */ REMOVE_POST_FAILURE),
/* harmony export */   "VE": () => (/* binding */ removePostRequest),
/* harmony export */   "NY": () => (/* binding */ removePostSuccess),
/* harmony export */   "H9": () => (/* binding */ removePostFailure)
/* harmony export */ });
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const removePostRequest = data => ({
  type: REMOVE_POST_REQUEST,
  data
});
const removePostSuccess = data => ({
  type: REMOVE_POST_SUCCESS,
  data
});
const removePostFailure = error => ({
  type: REMOVE_POST_FAILURE,
  error
});

/***/ }),

/***/ 2493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p8": () => (/* binding */ REPOST_REQUEST),
/* harmony export */   "UZ": () => (/* binding */ REPOST_SUCCESS),
/* harmony export */   "j5": () => (/* binding */ REPOST_FAILURE),
/* harmony export */   "OE": () => (/* binding */ REPOST_ERROR_FINISH),
/* harmony export */   "wh": () => (/* binding */ repostRequest),
/* harmony export */   "I0": () => (/* binding */ repostSuccess),
/* harmony export */   "Wp": () => (/* binding */ repostFailure),
/* harmony export */   "t": () => (/* binding */ repostErrorFinish)
/* harmony export */ });
const REPOST_REQUEST = 'REPOST_REQUEST';
const REPOST_SUCCESS = 'REPOST_SUCCESS';
const REPOST_FAILURE = 'REPOST_FAILURE ';
const REPOST_ERROR_FINISH = 'REPOST_ERROR_FINISH';
const repostRequest = data => ({
  type: REPOST_REQUEST,
  data
});
const repostSuccess = data => ({
  type: REPOST_SUCCESS,
  data
});
const repostFailure = error => ({
  type: REPOST_FAILURE,
  error
});
const repostErrorFinish = () => ({
  type: REPOST_ERROR_FINISH
});

/***/ }),

/***/ 8576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VT": () => (/* binding */ UNLIKE_POST_REQUEST),
/* harmony export */   "XD": () => (/* binding */ UNLIKE_POST_SUCCESS),
/* harmony export */   "gq": () => (/* binding */ UNLIKE_POST_FAILURE),
/* harmony export */   "ao": () => (/* binding */ unlikePostRequest),
/* harmony export */   "NI": () => (/* binding */ unlikePostSuccess),
/* harmony export */   "YV": () => (/* binding */ unlikePostFailure)
/* harmony export */ });
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const unlikePostRequest = data => ({
  type: UNLIKE_POST_REQUEST,
  data
});
const unlikePostSuccess = data => ({
  type: UNLIKE_POST_SUCCESS,
  data
});
const unlikePostFailure = error => ({
  type: UNLIKE_POST_FAILURE,
  error
});

/***/ }),

/***/ 8949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wC": () => (/* binding */ UPDATE_POST_REQUEST),
/* harmony export */   "js": () => (/* binding */ UPDATE_POST_SUCCESS),
/* harmony export */   "WC": () => (/* binding */ UPDATE_POST_FAILURE),
/* harmony export */   "P": () => (/* binding */ updatePostRequest),
/* harmony export */   "oX": () => (/* binding */ updatePostSuccess),
/* harmony export */   "mP": () => (/* binding */ updatePostFailure)
/* harmony export */ });
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
const updatePostRequest = data => ({
  type: UPDATE_POST_REQUEST,
  data
});
const updatePostSuccess = data => ({
  type: UPDATE_POST_SUCCESS,
  data
});
const updatePostFailure = error => ({
  type: UPDATE_POST_FAILURE,
  error
});

/***/ }),

/***/ 4813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QA": () => (/* binding */ UPLOAD_IMAGES_REQUEST),
/* harmony export */   "kv": () => (/* binding */ UPLOAD_IMAGES_SUCCESS),
/* harmony export */   "hX": () => (/* binding */ UPLOAD_IMAGES_FAILURE),
/* harmony export */   "Pf": () => (/* binding */ uploadImagesRequest),
/* harmony export */   "mt": () => (/* binding */ uploadImagesSuccess),
/* harmony export */   "vp": () => (/* binding */ uploadImagesFailure)
/* harmony export */ });
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE ';
const uploadImagesRequest = data => ({
  type: UPLOAD_IMAGES_REQUEST,
  data
});
const uploadImagesSuccess = data => ({
  type: UPLOAD_IMAGES_SUCCESS,
  data
});
const uploadImagesFailure = error => ({
  type: UPLOAD_IMAGES_FAILURE,
  error
});

/***/ }),

/***/ 4313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BK": () => (/* binding */ CHANGE_AREA_REQUEST),
/* harmony export */   "NV": () => (/* binding */ CHANGE_AREA_SUCCESS),
/* harmony export */   "y2": () => (/* binding */ CHANGE_AREA_FAILURE),
/* harmony export */   "wG": () => (/* binding */ changeAreaRequest),
/* harmony export */   "HK": () => (/* binding */ changeAreaSuccess),
/* harmony export */   "HV": () => (/* binding */ changeAreaFailure)
/* harmony export */ });
const CHANGE_AREA_REQUEST = 'CHANGE_AREA_REQUEST';
const CHANGE_AREA_SUCCESS = 'CHANGE_AREA_SUCCESS';
const CHANGE_AREA_FAILURE = 'CHANGE_AREA_FAILURE';
const changeAreaRequest = data => ({
  type: CHANGE_AREA_REQUEST,
  data
});
const changeAreaSuccess = data => ({
  type: CHANGE_AREA_SUCCESS,
  data
});
const changeAreaFailure = error => ({
  type: CHANGE_AREA_FAILURE,
  error
});

/***/ }),

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wn": () => (/* binding */ CHANGE_INTRO_REQUEST),
/* harmony export */   "nI": () => (/* binding */ CHANGE_INTRO_SUCCESS),
/* harmony export */   "Zd": () => (/* binding */ CHANGE_INTRO_FAILURE),
/* harmony export */   "Pl": () => (/* binding */ changeIntroRequest),
/* harmony export */   "Sl": () => (/* binding */ changeIntroSuccess),
/* harmony export */   "gX": () => (/* binding */ changeIntroFailure)
/* harmony export */ });
const CHANGE_INTRO_REQUEST = 'CHANGE_INTRO_REQUEST';
const CHANGE_INTRO_SUCCESS = 'CHANGE_INTRO_SUCCESS';
const CHANGE_INTRO_FAILURE = 'CHANGE_INTRO_FAILURE';
const changeIntroRequest = data => ({
  type: CHANGE_INTRO_REQUEST,
  data
});
const changeIntroSuccess = data => ({
  type: CHANGE_INTRO_SUCCESS,
  data
});
const changeIntroFailure = error => ({
  type: CHANGE_INTRO_FAILURE,
  error
});

/***/ }),

/***/ 3010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uO": () => (/* binding */ CHANGE_MBTI_REQUEST),
/* harmony export */   "_v": () => (/* binding */ CHANGE_MBTI_SUCCESS),
/* harmony export */   "Tj": () => (/* binding */ CHANGE_MBTI_FAILURE),
/* harmony export */   "Vm": () => (/* binding */ changeMbtiRequest),
/* harmony export */   "bq": () => (/* binding */ changeMbtiSuccess),
/* harmony export */   "d8": () => (/* binding */ changeMbtiFailure)
/* harmony export */ });
const CHANGE_MBTI_REQUEST = 'CHANGE_MBTI_REQUEST';
const CHANGE_MBTI_SUCCESS = 'CHANGE_MBTI_SUCCESS';
const CHANGE_MBTI_FAILURE = 'CHANGE_MBTI_FAILURE';
const changeMbtiRequest = data => ({
  type: CHANGE_MBTI_REQUEST,
  data
});
const changeMbtiSuccess = data => ({
  type: CHANGE_MBTI_SUCCESS,
  data
});
const changeMbtiFailure = error => ({
  type: CHANGE_MBTI_FAILURE,
  error
});

/***/ }),

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS": () => (/* binding */ CHANGE_NICK_REQUEST),
/* harmony export */   "s$": () => (/* binding */ CHANGE_NICK_SUCCESS),
/* harmony export */   "QS": () => (/* binding */ CHANGE_NICK_FAILURE),
/* harmony export */   "uS": () => (/* binding */ changeNickRequest),
/* harmony export */   "nL": () => (/* binding */ changeNickSuccess),
/* harmony export */   "Lg": () => (/* binding */ changeNickFailure)
/* harmony export */ });
const CHANGE_NICK_REQUEST = 'CHANGE_NICK_REQUEST';
const CHANGE_NICK_SUCCESS = 'CHANGE_NICK_SUCCESS';
const CHANGE_NICK_FAILURE = 'CHANGE_NICK_FAILURE';
const changeNickRequest = data => ({
  type: CHANGE_NICK_REQUEST,
  data
});
const changeNickSuccess = data => ({
  type: CHANGE_NICK_SUCCESS,
  data
});
const changeNickFailure = error => ({
  type: CHANGE_NICK_FAILURE,
  error
});

/***/ }),

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U_": () => (/* binding */ FOLLOW_REQUEST),
/* harmony export */   "mv": () => (/* binding */ FOLLOW_SUCCESS),
/* harmony export */   "DG": () => (/* binding */ FOLLOW_FAILURE),
/* harmony export */   "aj": () => (/* binding */ followRequest),
/* harmony export */   "GF": () => (/* binding */ followSuccess)
/* harmony export */ });
/* unused harmony export followFailure */
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const followRequest = data => ({
  type: FOLLOW_REQUEST,
  data
});
const followSuccess = data => ({
  type: FOLLOW_SUCCESS,
  data
});
const followFailure = error => ({
  type: FOLLOW_FAILURE,
  error
});

/***/ }),

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JQ": () => (/* binding */ LOAD_ME_REQUEST),
/* harmony export */   "WZ": () => (/* binding */ LOAD_ME_SUCCESS),
/* harmony export */   "LY": () => (/* binding */ LOAD_ME_FAILURE),
/* harmony export */   "a4": () => (/* binding */ loadMeRequest),
/* harmony export */   "lL": () => (/* binding */ loadMeSuccess),
/* harmony export */   "hE": () => (/* binding */ loadMeFailure)
/* harmony export */ });
const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST';
const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS';
const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE';
const loadMeRequest = () => ({
  type: LOAD_ME_REQUEST
});
const loadMeSuccess = data => ({
  type: LOAD_ME_SUCCESS,
  data
});
const loadMeFailure = error => ({
  type: LOAD_ME_FAILURE,
  error
});

/***/ }),

/***/ 3438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dQ": () => (/* binding */ LOAD_USER_REQUEST),
/* harmony export */   "DU": () => (/* binding */ LOAD_USER_SUCCESS),
/* harmony export */   "Ls": () => (/* binding */ LOAD_USER_FAILURE),
/* harmony export */   "LE": () => (/* binding */ loadUserRequest),
/* harmony export */   "oN": () => (/* binding */ loadUserSuccess),
/* harmony export */   "yt": () => (/* binding */ loadUserFailure)
/* harmony export */ });
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const loadUserRequest = data => ({
  type: LOAD_USER_REQUEST,
  data
});
const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  data
});
const loadUserFailure = error => ({
  type: LOAD_USER_FAILURE,
  error
});

/***/ }),

/***/ 9924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE),
/* harmony export */   "Nf": () => (/* binding */ LOG_IN_ERROR_FINISH),
/* harmony export */   "Qb": () => (/* binding */ loginRequest),
/* harmony export */   "he": () => (/* binding */ loginSuccess),
/* harmony export */   "UR": () => (/* binding */ loginFailure),
/* harmony export */   "$O": () => (/* binding */ loginErrorFinish)
/* harmony export */ });
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_IN_ERROR_FINISH = 'LOG_IN_ERROR_FINISH';
const loginRequest = data => ({
  type: LOG_IN_REQUEST,
  data
});
const loginSuccess = data => ({
  type: LOG_IN_SUCCESS,
  data
});
const loginFailure = error => ({
  type: LOG_IN_FAILURE,
  error
});
const loginErrorFinish = () => ({
  type: LOG_IN_ERROR_FINISH
});

/***/ }),

/***/ 3714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xd": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "Tz": () => (/* binding */ logoutRequest),
/* harmony export */   "ls": () => (/* binding */ logoutSuccess),
/* harmony export */   "EF": () => (/* binding */ logoutFailure)
/* harmony export */ });
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const logoutRequest = () => ({
  type: LOG_OUT_REQUEST
});
const logoutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});
const logoutFailure = error => ({
  type: LOG_OUT_FAILURE,
  error
});

/***/ }),

/***/ 8947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jy": () => (/* binding */ RANDOM_USER_REQUEST),
/* harmony export */   "jw": () => (/* binding */ RANDOM_USER_SUCCESS),
/* harmony export */   "sK": () => (/* binding */ RANDOM_USER_FAILURE),
/* harmony export */   "hL": () => (/* binding */ randomUserRequest),
/* harmony export */   "ek": () => (/* binding */ randomUserSuccess),
/* harmony export */   "h1": () => (/* binding */ randomUserFailure)
/* harmony export */ });
const RANDOM_USER_REQUEST = 'RANDOM_USER_REQUEST';
const RANDOM_USER_SUCCESS = 'RANDOM_USER_SUCCESS';
const RANDOM_USER_FAILURE = 'RANDOM_USER_FAILURE';
const randomUserRequest = () => ({
  type: RANDOM_USER_REQUEST
});
const randomUserSuccess = data => ({
  type: RANDOM_USER_SUCCESS,
  data
});
const randomUserFailure = error => ({
  type: RANDOM_USER_FAILURE,
  error
});

/***/ }),

/***/ 3797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IB": () => (/* binding */ REMOVE_FOLLOWER_REQUEST),
/* harmony export */   "pe": () => (/* binding */ REMOVE_FOLLOWER_SUCCESS),
/* harmony export */   "IK": () => (/* binding */ REMOVE_FOLLOWER_FAILURE),
/* harmony export */   "qG": () => (/* binding */ removeFollowerRequest),
/* harmony export */   "e8": () => (/* binding */ removeFollowerSuccess),
/* harmony export */   "VF": () => (/* binding */ removeFollowerFailure)
/* harmony export */ });
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const removeFollowerRequest = data => ({
  type: REMOVE_FOLLOWER_REQUEST,
  data
});
const removeFollowerSuccess = data => ({
  type: REMOVE_FOLLOWER_SUCCESS,
  data
});
const removeFollowerFailure = error => ({
  type: REMOVE_FOLLOWER_FAILURE,
  error
});

/***/ }),

/***/ 9664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pK": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "I": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "bP": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "wB": () => (/* binding */ signupRequest),
/* harmony export */   "$R": () => (/* binding */ signupSuccess),
/* harmony export */   "dQ": () => (/* binding */ signupFailure)
/* harmony export */ });
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const signupRequest = data => ({
  type: SIGN_UP_REQUEST,
  data
});
const signupSuccess = () => ({
  type: SIGN_UP_SUCCESS
});
const signupFailure = error => ({
  type: SIGN_UP_FAILURE,
  error
});

/***/ }),

/***/ 5393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ UNFOLLOW_REQUEST),
/* harmony export */   "D7": () => (/* binding */ UNFOLLOW_SUCCESS),
/* harmony export */   "OR": () => (/* binding */ UNFOLLOW_FAILURE),
/* harmony export */   "Sp": () => (/* binding */ unfollowRequest),
/* harmony export */   "VQ": () => (/* binding */ unfollowSuccess),
/* harmony export */   "fJ": () => (/* binding */ unfollowFailure)
/* harmony export */ });
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const unfollowRequest = data => ({
  type: UNFOLLOW_REQUEST,
  data
});
const unfollowSuccess = data => ({
  type: UNFOLLOW_SUCCESS,
  data
});
const unfollowFailure = error => ({
  type: UNFOLLOW_FAILURE,
  error
});

/***/ }),

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j7": () => (/* binding */ UPLOAD_AVATAR_REQUEST),
/* harmony export */   "L4": () => (/* binding */ UPLOAD_AVATAR_SUCCESS),
/* harmony export */   "$M": () => (/* binding */ UPLOAD_AVATAR_FAILURE),
/* harmony export */   "au": () => (/* binding */ uploadAvatarRequest),
/* harmony export */   "cM": () => (/* binding */ uploadAvatarSuccess),
/* harmony export */   "AG": () => (/* binding */ uploadAvatarFailure)
/* harmony export */ });
const UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST';
const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS';
const UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE';
const uploadAvatarRequest = data => ({
  type: UPLOAD_AVATAR_REQUEST,
  data
});
const uploadAvatarSuccess = data => ({
  type: UPLOAD_AVATAR_SUCCESS,
  data
});
const uploadAvatarFailure = error => ({
  type: UPLOAD_AVATAR_FAILURE,
  error
});

/***/ }),

/***/ 6051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_configureStore)
});

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(5176);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./reducers/user/addPostToMe.ts
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const addPostToMeRequest = data => ({
  type: ADD_POST_TO_ME,
  data
});
;// CONCATENATED MODULE: ./reducers/user/removePostOfMe.ts
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const removePostOfMeRequest = data => ({
  type: REMOVE_POST_OF_ME,
  data
});
;// CONCATENATED MODULE: ./reducers/user/addDiaryToMe.ts
const ADD_DIARY_TO_ME = 'ADD_DIARY_TO_ME';
const addDiaryToMeRequest = data => ({
  type: ADD_DIARY_TO_ME,
  data
});
;// CONCATENATED MODULE: ./reducers/user/removeDiaryOfMe.ts
const REMOVE_DIARY_OF_ME = 'REMOVE_DIARY_OF_ME';
const removeDiaryOfMeRequest = data => ({
  type: REMOVE_DIARY_OF_ME,
  data
});
// EXTERNAL MODULE: ./reducers/user/changeArea.ts
var changeArea = __webpack_require__(4313);
// EXTERNAL MODULE: ./reducers/user/changeIntro.ts
var changeIntro = __webpack_require__(5371);
// EXTERNAL MODULE: ./reducers/user/changeMbti.ts
var changeMbti = __webpack_require__(3010);
// EXTERNAL MODULE: ./reducers/user/changeNick.ts
var changeNick = __webpack_require__(7004);
// EXTERNAL MODULE: ./reducers/user/follow.ts
var follow = __webpack_require__(8514);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./reducers/user/loadUser.ts
var loadUser = __webpack_require__(3438);
// EXTERNAL MODULE: ./reducers/user/login.ts
var login = __webpack_require__(9924);
// EXTERNAL MODULE: ./reducers/user/logout.ts
var logout = __webpack_require__(3714);
// EXTERNAL MODULE: ./reducers/user/randomUser.ts
var randomUser = __webpack_require__(8947);
;// CONCATENATED MODULE: ./reducers/user/saveAvatar.ts
const SAVE_AVATAR_REQUEST = 'SAVE_AVATAR_REQUEST';
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS';
const SAVE_AVATAR_FAILURE = 'SAVE_AVATAR_FAILURE';
const saveAvatarRequest = data => ({
  type: SAVE_AVATAR_REQUEST,
  data
});
const saveAvatarSuccess = data => ({
  type: SAVE_AVATAR_SUCCESS,
  data
});
const saveAvatarFailure = error => ({
  type: SAVE_AVATAR_FAILURE,
  error
});
// EXTERNAL MODULE: ./reducers/user/signup.ts
var signup = __webpack_require__(9664);
// EXTERNAL MODULE: ./reducers/user/unfollow.ts
var unfollow = __webpack_require__(5393);
// EXTERNAL MODULE: ./reducers/user/uploadAvatar.ts
var uploadAvatar = __webpack_require__(1066);
// EXTERNAL MODULE: ./reducers/user/removeFollower.ts
var removeFollower = __webpack_require__(3797);
;// CONCATENATED MODULE: ./reducers/user/index.ts




















const initialState = {
  loadMeLoading: false,
  // 내 정보 가져오기
  loadMeFinish: false,
  loadMeError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기
  loadUserFinish: false,
  loadUserError: null,
  logInLoading: false,
  // 로그인
  logInFinish: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃
  logOutFinish: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입
  signUpFinish: false,
  signUpError: null,
  changeNickLoading: false,
  // 닉네임
  changeNickFinish: false,
  changeNickError: null,
  changeMbtiLoading: false,
  // MBTI
  changeMbtiFinish: false,
  changeMbtiError: null,
  changeIntroLoading: false,
  // 소개
  changeIntroFinish: false,
  changeIntroError: null,
  changeAreaLoading: false,
  // 활동지역
  changeAreaFinish: false,
  changeAreaError: null,
  followLoading: false,
  // 팔로우
  followFinish: false,
  followError: null,
  unfollowLoading: false,
  // 언팔
  unfollowFinish: false,
  unfollowError: null,
  loadFollowersLoading: false,
  // 팔로워 가져오기
  loadFollowersFinish: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 가져오기
  loadFollowingsFinish: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  // 팔로워 차단
  removeFollowerFinish: false,
  removeFollowerError: null,
  uploadAvatarLoading: false,
  // 업로드 프사
  uploadAvatarFinish: false,
  uploadAvatarError: null,
  saveAvatarLoading: false,
  // 프사 저장
  saveAvatarFinish: false,
  saveAvatarError: null,
  randomUsersLoading: false,
  // 유저 추천
  randomUsersFinish: false,
  randomUsersError: null,
  me: null,
  userInfo: null,
  avatarPaths: [],
  randomUsers: []
};

const reducer = (state = initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case uploadAvatar/* UPLOAD_AVATAR_REQUEST */.j7:
        draft.uploadAvatarLoading = true;
        draft.uploadAvatarFinish = false;
        draft.uploadAvatarError = null;
        break;

      case uploadAvatar/* UPLOAD_AVATAR_SUCCESS */.L4:
        draft.uploadAvatarLoading = false;
        draft.uploadAvatarFinish = true;
        draft.avatarPaths = action.data;
        break;

      case uploadAvatar/* UPLOAD_AVATAR_FAILURE */.$M:
        draft.uploadAvatarLoading = false;
        draft.uploadAvatarError = action.error;
        break;

      case SAVE_AVATAR_REQUEST:
        draft.saveAvatarLoading = true;
        draft.saveAvatarFinish = false;
        draft.saveAvatarError = null;
        break;

      case SAVE_AVATAR_SUCCESS:
        draft.saveAvatarLoading = false;
        draft.saveAvatarFinish = true;
        draft.me.avatar = action.data.avatar;
        break;

      case SAVE_AVATAR_FAILURE:
        draft.saveAvatarLoading = false;
        draft.saveAvatarError = action.error;
        break;

      case loadMe/* LOAD_ME_REQUEST */.JQ:
        draft.loadMeLoading = true;
        draft.loadMeFinish = false;
        draft.loadMeError = null;
        break;

      case loadMe/* LOAD_ME_SUCCESS */.WZ:
        draft.loadMeLoading = false;
        draft.loadMeFinish = true;
        draft.me = action.data;
        break;

      case loadMe/* LOAD_ME_FAILURE */.LY:
        draft.loadMeLoading = false;
        draft.loadMeError = action.error;
        break;

      case loadUser/* LOAD_USER_REQUEST */.dQ:
        draft.loadUserLoading = true;
        draft.loadUserFinish = false;
        draft.loadUserError = null;
        break;

      case loadUser/* LOAD_USER_SUCCESS */.DU:
        draft.loadUserLoading = false;
        draft.loadUserFinish = true;
        draft.userInfo = action.data;
        break;

      case loadUser/* LOAD_USER_FAILURE */.Ls:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case randomUser/* RANDOM_USER_REQUEST */.Jy:
        draft.randomUsersLoading = true;
        draft.randomUsersFinish = false;
        draft.randomUsersError = null;
        break;

      case randomUser/* RANDOM_USER_SUCCESS */.jw:
        draft.randomUsersLoading = false;
        draft.randomUsersFinish = true;
        draft.randomUsers = draft.randomUsers.concat(action.data);
        break;

      case randomUser/* RANDOM_USER_FAILURE */.sK:
        draft.randomUsersLoading = false;
        draft.randomUsersError = action.error;
        break;

      case login/* LOG_IN_REQUEST */.uF:
        draft.logInLoading = true;
        draft.logInFinish = false;
        draft.logInError = null;
        break;

      case login/* LOG_IN_SUCCESS */.RZ:
        draft.logInLoading = false;
        draft.logInFinish = true;
        draft.me = action.data;
        break;

      case login/* LOG_IN_FAILURE */.yK:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case login/* LOG_IN_ERROR_FINISH */.Nf:
        draft.logInError = null;
        break;

      case logout/* LOG_OUT_REQUEST */.Xd:
        draft.logOutLoading = true;
        draft.logOutFinish = false;
        draft.logOutError = null;
        break;

      case logout/* LOG_OUT_SUCCESS */.kV:
        draft.logOutLoading = false;
        draft.logOutFinish = true;
        draft.me = null;
        break;

      case logout/* LOG_OUT_FAILURE */.mD:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case signup/* SIGN_UP_REQUEST */.pK:
        draft.signUpLoading = true;
        draft.signUpFinish = false;
        draft.signUpError = null;
        break;

      case signup/* SIGN_UP_SUCCESS */.I:
        draft.signUpLoading = false;
        draft.signUpFinish = true;
        break;

      case signup/* SIGN_UP_FAILURE */.bP:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case changeNick/* CHANGE_NICK_REQUEST */.IS:
        draft.changeNickLoading = true;
        draft.changeNickFinish = false;
        draft.changeNickError = null;
        break;

      case changeNick/* CHANGE_NICK_SUCCESS */.s$:
        draft.me.nickname = action.data.nickname;
        draft.changeNickLoading = false;
        draft.changeNickFinish = true;
        break;

      case changeNick/* CHANGE_NICK_FAILURE */.QS:
        draft.changeNickLoading = false;
        draft.changeNickError = action.error;
        break;

      case changeMbti/* CHANGE_MBTI_REQUEST */.uO:
        draft.changeMbtiLoading = true;
        draft.changeMbtiFinish = false;
        draft.changeMbtiError = null;
        break;

      case changeMbti/* CHANGE_MBTI_SUCCESS */._v:
        draft.me.mbti = action.data.mbti;
        draft.changeMbtiLoading = false;
        draft.changeMbtiFinish = true;
        break;

      case changeMbti/* CHANGE_MBTI_FAILURE */.Tj:
        draft.changeMbtiLoading = false;
        draft.changeMbtiError = action.error;
        break;

      case changeIntro/* CHANGE_INTRO_REQUEST */.wn:
        draft.changeIntroLoading = true;
        draft.changeIntroFinish = false;
        draft.changeIntroError = null;
        break;

      case changeIntro/* CHANGE_INTRO_SUCCESS */.nI:
        draft.me.intro = action.data.intro;
        draft.changeIntroLoading = false;
        draft.changeIntroFinish = true;
        break;

      case changeIntro/* CHANGE_INTRO_FAILURE */.Zd:
        draft.changeIntroLoading = false;
        draft.changeIntroError = action.error;
        break;

      case changeArea/* CHANGE_AREA_REQUEST */.BK:
        draft.changeAreaLoading = true;
        draft.changeAreaFinish = false;
        draft.changeAreaError = null;
        break;

      case changeArea/* CHANGE_AREA_SUCCESS */.NV:
        draft.me.area = action.data.area;
        draft.changeAreaLoading = false;
        draft.changeAreaFinish = true;
        break;

      case changeArea/* CHANGE_AREA_FAILURE */.y2:
        draft.changeAreaLoading = false;
        draft.changeAreaError = action.error;
        break;

      case follow/* FOLLOW_REQUEST */.U_:
        draft.followLoading = true;
        draft.followFinish = false;
        draft.followError = null;
        break;

      case follow/* FOLLOW_SUCCESS */.mv:
        draft.followLoading = false;
        draft.followFinish = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case follow/* FOLLOW_FAILURE */.DG:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case unfollow/* UNFOLLOW_REQUEST */.Bk:
        draft.unfollowLoading = true;
        draft.unfollowFinish = false;
        draft.unfollowError = null;
        break;

      case unfollow/* UNFOLLOW_SUCCESS */.D7:
        draft.unfollowLoading = false;
        draft.unfollowFinish = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case unfollow/* UNFOLLOW_FAILURE */.OR:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case removeFollower/* REMOVE_FOLLOWER_REQUEST */.IB:
        draft.removeFollowerLoading = true;
        draft.removeFollowerFinish = false;
        draft.removeFollowerError = null;
        break;

      case removeFollower/* REMOVE_FOLLOWER_SUCCESS */.pe:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        draft.removeFollowerFinish = true;
        break;

      case removeFollower/* REMOVE_FOLLOWER_FAILURE */.IK:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      case ADD_DIARY_TO_ME:
        draft.me.Diaries.unshift({
          id: action.data.id,
          feel: action.data.feel
        });
        break;

      case REMOVE_DIARY_OF_ME:
        draft.me.Diaries = draft.me.Diaries.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const user = (reducer);
// EXTERNAL MODULE: ./reducers/post/addComment.ts
var addComment = __webpack_require__(4123);
// EXTERNAL MODULE: ./reducers/post/addPost.ts
var addPost = __webpack_require__(881);
// EXTERNAL MODULE: ./reducers/post/likePost.ts
var likePost = __webpack_require__(4487);
// EXTERNAL MODULE: ./reducers/post/loadAllPost.ts
var loadAllPost = __webpack_require__(4724);
// EXTERNAL MODULE: ./reducers/post/loadHashtagPosts.ts
var loadHashtagPosts = __webpack_require__(5780);
// EXTERNAL MODULE: ./reducers/post/loadRelatedPost.ts
var loadRelatedPost = __webpack_require__(7023);
// EXTERNAL MODULE: ./reducers/post/loadSinglePost.ts
var loadSinglePost = __webpack_require__(1910);
// EXTERNAL MODULE: ./reducers/post/loadUserAllPost.ts
var loadUserAllPost = __webpack_require__(9037);
// EXTERNAL MODULE: ./reducers/post/removeImage.ts
var removeImage = __webpack_require__(8444);
// EXTERNAL MODULE: ./reducers/post/removePost.ts
var removePost = __webpack_require__(6692);
// EXTERNAL MODULE: ./reducers/post/repost.ts
var repost = __webpack_require__(2493);
// EXTERNAL MODULE: ./reducers/post/unlikePost.ts
var unlikePost = __webpack_require__(8576);
// EXTERNAL MODULE: ./reducers/post/updatePost.ts
var updatePost = __webpack_require__(8949);
// EXTERNAL MODULE: ./reducers/post/uploadImages.ts
var uploadImages = __webpack_require__(4813);
;// CONCATENATED MODULE: ./reducers/post/index.ts















const post_initialState = {
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
  repostError: null
};

const post_reducer = (state = post_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case loadAllPost/* LOAD_ALL_POST_REQUEST */.tU:
        draft.loadAllPostLoading = true;
        draft.loadAllPostFinish = false;
        draft.loadAllPostError = null;
        break;

      case loadAllPost/* LOAD_ALL_POST_SUCCESS */.NC:
        draft.loadAllPostLoading = false;
        draft.loadAllPostFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case loadAllPost/* LOAD_ALL_POST_FAILURE */.Me:
        draft.loadAllPostLoading = false;
        draft.loadAllPostError = action.error;
        break;

      case loadUserAllPost/* LOAD_USER_ALL_POST_REQUEST */.cK:
        draft.loadUserAllPostLoading = true;
        draft.loadUserAllPostFinish = false;
        draft.loadUserAllPostError = null;
        break;

      case loadUserAllPost/* LOAD_USER_ALL_POST_SUCCESS */.Em:
        draft.loadUserAllPostLoading = false;
        draft.loadUserAllPostFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case loadUserAllPost/* LOAD_USER_ALL_POST_FAILURE */.JZ:
        draft.loadUserAllPostLoading = false;
        draft.loadUserAllPostError = action.error;
        break;

      case loadRelatedPost/* LOAD_RELATED_POSTS_REQUEST */.aW:
        draft.loadRelatedPostsLoading = true;
        draft.loadRelatedPostsFinish = false;
        draft.loadRelatedPostsError = null;
        break;

      case loadRelatedPost/* LOAD_RELATED_POSTS_SUCCESS */.Rp:
        draft.loadRelatedPostsLoading = false;
        draft.loadRelatedPostsFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case loadRelatedPost/* LOAD_RELATED_POSTS_FAILURE */.pd:
        draft.loadRelatedPostsLoading = false;
        draft.loadRelatedPostsError = action.error;
        break;

      case loadHashtagPosts/* LOAD_HASHTAG_POSTS_REQUEST */.az:
        draft.loadHashtagPostsLoading = true;
        draft.loadHashtagPostsFinish = false;
        draft.loadHashtagPostsError = null;
        break;

      case loadHashtagPosts/* LOAD_HASHTAG_POSTS_SUCCESS */.LF:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsFinish = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case loadHashtagPosts/* LOAD_HASHTAG_POSTS_FAILURE */.uk:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsError = action.error;
        break;

      case loadSinglePost/* LOAD_SINGLE_POST_REQUEST */.bW:
        draft.loadSinglePostLoading = true;
        draft.loadSinglePostFinish = false;
        draft.loadSinglePostError = null;
        break;

      case loadSinglePost/* LOAD_SINGLE_POST_SUCCESS */.U6:
        draft.loadSinglePostLoading = false;
        draft.loadSinglePostFinish = true;
        draft.singlePost = action.data;
        break;

      case loadSinglePost/* LOAD_SINGLE_POST_FAILURE */.IM:
        draft.loadSinglePostLoading = false;
        draft.loadSinglePostError = action.error;
        break;

      case addPost/* ADD_POST_REQUEST */.z9:
        draft.addPostLoading = true;
        draft.addPostFinish = false;
        draft.addPostError = null;
        break;

      case addPost/* ADD_POST_SUCCESS */._s:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostFinish = true;
        draft.imagePaths = [];
        break;

      case addPost/* ADD_POST_FAILURE */.tP:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case addPost/* ADD_POST_ERROR_FINISH */.mH:
        draft.addPostError = null;
        break;

      case updatePost/* UPDATE_POST_REQUEST */.wC:
        draft.updatePostLoading = true;
        draft.updatePostFinish = false;
        draft.updatePostError = null;
        break;

      case updatePost/* UPDATE_POST_SUCCESS */.js:
        draft.updatePostLoading = false;
        draft.updatePostFinish = true;
        let findPost = draft.mainPosts.find(v => v.id === action.data.PostId);

        if (findPost) {
          findPost.content = action.data.content;
        }

        break;

      case updatePost/* UPDATE_POST_FAILURE */.WC:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case repost/* REPOST_REQUEST */.p8:
        draft.repostLoading = true;
        draft.repostFinish = false;
        draft.repostError = null;
        break;

      case repost/* REPOST_SUCCESS */.UZ:
        draft.mainPosts.unshift(action.data);
        draft.repostLoading = false;
        draft.repostFinish = true;
        break;

      case repost/* REPOST_FAILURE */.j5:
        draft.repostLoading = false;
        draft.repostError = action.error;
        break;

      case repost/* REPOST_ERROR_FINISH */.OE:
        draft.repostError = null;
        break;

      case removePost/* REMOVE_POST_REQUEST */.HU:
        draft.removePostLoading = true;
        draft.removePostFinish = false;
        draft.removePostError = null;
        break;

      case removePost/* REMOVE_POST_SUCCESS */.rK:
        draft.removePostLoading = false;
        draft.removePostFinish = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        break;

      case removePost/* REMOVE_POST_FAILURE */.Ws:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case removeImage/* REMOVE_IMAGE */.P:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case likePost/* LIKE_POST_REQUEST */.xD:
        draft.likePostLoading = true;
        draft.likePostFinish = false;
        draft.likePostError = null;
        break;

      case likePost/* LIKE_POST_SUCCESS */.Gz:
        {
          var _draft$singlePost;

          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Likers.push({
              id: action.data.UserId
            });
          }

          if ((_draft$singlePost = draft.singlePost) !== null && _draft$singlePost !== void 0 && _draft$singlePost.Likers) {
            draft.singlePost.Likers.push({
              id: action.data.UserId
            });
          }

          draft.likePostLoading = false;
          draft.likePostFinish = true;
          break;
        }

      case likePost/* LIKE_POST_FAILURE */.cT:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case unlikePost/* UNLIKE_POST_REQUEST */.VT:
        draft.unlikePostLoading = true;
        draft.unlikePostFinish = false;
        draft.unlikePostError = null;
        break;

      case unlikePost/* UNLIKE_POST_SUCCESS */.XD:
        {
          var _draft$singlePost2;

          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          }

          if ((_draft$singlePost2 = draft.singlePost) !== null && _draft$singlePost2 !== void 0 && _draft$singlePost2.Likers) {
            const index = draft.singlePost.Likers.find(v => v.id === action.data.UserId);
            draft.singlePost.Likers.splice(index, 1);
          }

          draft.unlikePostLoading = false;
          draft.unlikePostFinish = true;
          break;
        }

      case unlikePost/* UNLIKE_POST_FAILURE */.gq:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case addComment/* ADD_COMMENT_REQUEST */.Ot:
        draft.addCommentLoading = true;
        draft.addCommentFinish = false;
        draft.addCommentError = null;
        break;

      case addComment/* ADD_COMMENT_SUCCESS */.nv:
        {
          var _draft$singlePost3;

          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Comments.unshift(action.data);
          }

          if ((_draft$singlePost3 = draft.singlePost) !== null && _draft$singlePost3 !== void 0 && _draft$singlePost3.Comments) {
            draft.singlePost.Comments.unshift(action.data);
          }

          draft.addCommentLoading = false;
          draft.addCommentFinish = true;
          break;
        }

      case addComment/* ADD_COMMENT_FAILURE */.rX:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case uploadImages/* UPLOAD_IMAGES_REQUEST */.QA:
        draft.uploadImagesLoading = true;
        draft.uploadImagesFinish = false;
        draft.uploadImagesError = null;
        break;

      case uploadImages/* UPLOAD_IMAGES_SUCCESS */.kv:
        {
          draft.imagePaths = draft.imagePaths.concat(action.data);
          draft.uploadImagesLoading = false;
          draft.uploadImagesFinish = true;
          break;
        }

      case uploadImages/* UPLOAD_IMAGES_FAILURE */.hX:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const post = (post_reducer);
// EXTERNAL MODULE: ./reducers/diary/backToDiary.ts
var backToDiary = __webpack_require__(1018);
// EXTERNAL MODULE: ./reducers/diary/removeDiaryPhoto.ts
var removeDiaryPhoto = __webpack_require__(1043);
// EXTERNAL MODULE: ./reducers/diary/addDiary.ts
var addDiary = __webpack_require__(6215);
// EXTERNAL MODULE: ./reducers/diary/removeDiary.ts
var removeDiary = __webpack_require__(2251);
// EXTERNAL MODULE: ./reducers/diary/uploadPhoto.ts
var uploadPhoto = __webpack_require__(1363);
// EXTERNAL MODULE: ./reducers/diary/loadFeelDiarys.ts
var loadFeelDiarys = __webpack_require__(9928);
// EXTERNAL MODULE: ./reducers/diary/loadSingleDiary.ts
var loadSingleDiary = __webpack_require__(1592);
// EXTERNAL MODULE: ./reducers/diary/loadUserDiarys.ts
var loadUserDiarys = __webpack_require__(8188);
;// CONCATENATED MODULE: ./reducers/diary/index.ts









const diary_initialState = {
  mainDiarys: [],
  photoPaths: [],
  singleDiary: null,
  hasMoreDiarys: true,
  loadUserDiarysLoading: false,
  loadUserDiarysFinish: false,
  loadUserDiarysError: null,
  loadSingleDiaryLoading: false,
  loadSingleDiaryFinish: false,
  loadSingleDiaryError: null,
  loadFeelDiarysLoading: false,
  loadFeelDiarysFinish: false,
  loadFeelDiarysError: null,
  addDiaryLoading: false,
  addDiaryFinish: false,
  addDiaryError: null,
  removeDiaryLoading: false,
  removeDiaryFinish: false,
  removeDiaryError: null,
  uploadPhotosLoading: false,
  uploadPhotosFinish: false,
  uploadPhotosError: null,
  backTodiary: false
};

const diary_reducer = (state = diary_initialState, action) => {
  return (0,external_immer_.produce)(state, draft => {
    switch (action.type) {
      case loadUserDiarys/* LOAD_USER_DIARYS_REQUEST */.Nn:
        draft.loadUserDiarysLoading = true;
        draft.loadUserDiarysFinish = false;
        draft.loadUserDiarysError = null;
        break;

      case loadUserDiarys/* LOAD_USER_DIARYS_SUCCESS */.Um:
        draft.mainDiarys = draft.mainDiarys.concat(action.data);
        draft.loadUserDiarysFinish = true;
        draft.loadUserDiarysLoading = false;
        draft.hasMoreDiarys = action.data.length === 30;
        break;

      case loadUserDiarys/* LOAD_USER_DIARYS_FAILURE */.Z9:
        draft.loadUserDiarysLoading = false;
        draft.loadUserDiarysError = action.error;
        break;

      case loadSingleDiary/* LOAD_SINGLE_DIARY_REQUEST */.cs:
        draft.loadSingleDiaryLoading = true;
        draft.loadSingleDiaryFinish = false;
        draft.loadSingleDiaryError = null;
        break;

      case loadSingleDiary/* LOAD_SINGLE_DIARY_SUCCESS */.Oj:
        draft.loadSingleDiaryFinish = true;
        draft.loadSingleDiaryLoading = false;
        draft.singleDiary = action.data;
        break;

      case loadSingleDiary/* LOAD_SINGLE_DIARY_FAILURE */.sg:
        draft.loadSingleDiaryLoading = false;
        draft.loadSingleDiaryError = action.error;
        break;

      case loadFeelDiarys/* LOAD_FEEL_DIARYS_REQUEST */.q0:
        draft.loadFeelDiarysLoading = true;
        draft.loadFeelDiarysFinish = false;
        draft.loadFeelDiarysError = null;
        break;

      case loadFeelDiarys/* LOAD_FEEL_DIARYS_SUCCESS */.hn:
        draft.loadFeelDiarysFinish = true;
        draft.loadFeelDiarysLoading = false;
        draft.mainDiarys = draft.mainDiarys.concat(action.data);
        draft.hasMoreDiarys = action.data.length === 30;
        break;

      case loadFeelDiarys/* LOAD_FEEL_DIARYS_FAILURE */.jm:
        draft.loadFeelDiarysLoading = false;
        draft.loadFeelDiarysError = action.error;
        break;

      case addDiary/* ADD_DIARY_REQUEST */.Om:
        draft.addDiaryLoading = true;
        draft.addDiaryFinish = false;
        draft.addDiaryError = null;
        break;

      case addDiary/* ADD_DIARY_SUCCESS */.H:
        draft.mainDiarys.unshift(action.data);
        draft.addDiaryFinish = true;
        draft.addDiaryLoading = false;
        draft.photoPaths = [];
        break;

      case addDiary/* ADD_DIARY_FAILURE */.e$:
        draft.addDiaryLoading = false;
        draft.addDiaryError = action.error;
        break;

      case addDiary/* ADD_DIARY_ERROR_FINISH */.r8:
        draft.addDiaryError = null;
        break;

      case removeDiary/* REMOVE_DIARY_REQUEST */.p7:
        draft.removeDiaryLoading = true;
        draft.removeDiaryFinish = false;
        draft.removeDiaryError = null;
        break;

      case removeDiary/* REMOVE_DIARY_SUCCESS */.Rv:
        draft.removeDiaryFinish = true;
        draft.removeDiaryLoading = false;
        draft.mainDiarys = draft.mainDiarys.filter(v => v.id !== action.data.DiaryId);
        break;

      case removeDiary/* REMOVE_DIARY_FAILURE */.KL:
        draft.removeDiaryLoading = false;
        draft.removeDiaryError = action.error;
        break;

      case uploadPhoto/* UPLOAD_PHOTO_REQUEST */.sC:
        draft.uploadPhotosLoading = true;
        draft.uploadPhotosFinish = false;
        draft.uploadPhotosError = null;
        break;

      case uploadPhoto/* UPLOAD_PHOTO_SUCCESS */.IO:
        {
          draft.photoPaths = action.data;
          draft.uploadPhotosLoading = false;
          draft.uploadPhotosFinish = true;
          break;
        }

      case uploadPhoto/* UPLOAD_PHOTO_FAILURE */.nD:
        {
          draft.uploadPhotosLoading = false;
          draft.uploadPhotosError = action.error;
          break;
        }

      case removeDiaryPhoto/* REMOVE_DIARY_PHOTO */.B:
        draft.photoPaths = draft.photoPaths.filter((v, i) => i !== action.data);
        break;

      case backToDiary/* BACK_TO_DIARY */.GM:
        draft.backTodiary = true;
        break;

      case backToDiary/* BACK_TO_DIARY_FINISH */.$z:
        draft.backTodiary = false;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const diary = (diary_reducer);
;// CONCATENATED MODULE: ./reducers/index.ts






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_.HYDRATE:
      console.log('HYDRATE: ', action);
      return action.payload;

    default:
      {
        const combinedReducer = (0,external_redux_.combineReducers)({
          user: user,
          post: post,
          diary: diary
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ const reducers = (rootReducer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(5060);
;// CONCATENATED MODULE: ./sagas/post.ts


















function likePostAPI(data) {
  return external_axios_default().patch(`/post/${data}/like`);
}

function* post_likePost(action) {
  try {
    const result = yield (0,effects_.call)(likePostAPI, action.data);
    yield (0,effects_.put)((0,likePost/* likePostSuccess */.xP)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,likePost/* likePostFailure */.DA)(err.response.data));
  }
}

function unlikePostAPI(data) {
  return external_axios_default().delete(`/post/${data}/like`);
}

function* post_unlikePost(action) {
  try {
    const result = yield (0,effects_.call)(unlikePostAPI, action.data);
    yield (0,effects_.put)((0,unlikePost/* unlikePostSuccess */.NI)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,unlikePost/* unlikePostFailure */.YV)(err.response.data));
  }
}

function repostAPI(data) {
  return external_axios_default().post(`/post/${data}/repost`);
}

function* post_repost(action) {
  try {
    const result = yield (0,effects_.call)(repostAPI, action.data);
    yield (0,effects_.put)((0,repost/* repostSuccess */.I0)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,repost/* repostFailure */.Wp)(err.response.data));
  } finally {
    yield (0,effects_.put)((0,repost/* repostErrorFinish */.t)());
  }
}

function loadPostsAPI(lastId) {
  return external_axios_default().get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,effects_.call)(loadPostsAPI, action.lastId);
    yield (0,effects_.put)((0,loadAllPost/* loadAllPostSuccess */.K3)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadAllPost/* loadAllPostFailure */.u4)(err.response.data));
  }
}

function loadRelatedPostsAPI(lastId) {
  return external_axios_default().get(`/posts/related?lastId=${lastId || 0}`);
}

function* loadRelatedPosts(action) {
  try {
    const result = yield (0,effects_.call)(loadRelatedPostsAPI, action.lastId);
    yield (0,effects_.put)((0,loadRelatedPost/* loadRelatedPostSuccess */.iJ)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadRelatedPost/* loadRelatedPostFailure */.Wd)(err.response.data));
  }
}

function loadPostAPI(data) {
  return external_axios_default().get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield (0,effects_.call)(loadPostAPI, action.data);
    yield (0,effects_.put)((0,loadSinglePost/* loadSinglePostSuccess */.VQ)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadSinglePost/* loadSinglePostFailure */.wg)(err.response.data));
  }
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default().get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield (0,effects_.call)(loadUserPostsAPI, action.data, action.lastId);
    yield (0,effects_.put)((0,loadUserAllPost/* loadUserAllPostSuccess */.$G)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadUserAllPost/* loadUserAllPostFailure */.kX)(err.response.data));
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default().get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* post_loadHashtagPosts(action) {
  try {
    const result = yield (0,effects_.call)(loadHashtagPostsAPI, action.data, action.lastId);
    yield (0,effects_.put)((0,loadHashtagPosts/* loadHashtagPostsSuccess */.Iy)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadHashtagPosts/* loadHashtagPostsFailure */._m)(err.response.data));
  }
}

function addPostAPI(data) {
  return external_axios_default().post('/post', data);
}

function* post_addPost(action) {
  try {
    const result = yield (0,effects_.call)(addPostAPI, action.data);
    yield (0,effects_.put)((0,addPost/* addPostSuccess */.Uv)(result.data));
    yield (0,effects_.put)(addPostToMeRequest(result.data.id));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,addPost/* addPostFailure */.FE)(err.response.data));
  } finally {
    yield (0,effects_.put)((0,addPost/* addPostErrorFinish */.qV)());
  }
}

function removePostAPI(data) {
  return external_axios_default().delete(`/post/${data}`);
}

function* post_removePost(action) {
  try {
    const result = yield (0,effects_.call)(removePostAPI, action.data);
    yield (0,effects_.put)((0,removePost/* removePostSuccess */.NY)(result.data));
    yield (0,effects_.put)(removePostOfMeRequest(action.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,removePost/* removePostFailure */.H9)(err.response.data));
  }
}

function updatePostAPI(data) {
  return external_axios_default().patch(`/post/${data.PostId}`, data);
}

function* post_updatePost(action) {
  try {
    const result = yield (0,effects_.call)(updatePostAPI, action.data);
    yield (0,effects_.put)((0,updatePost/* updatePostSuccess */.oX)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,updatePost/* updatePostFailure */.mP)(err.response.data));
  }
}

function addCommentAPI(data) {
  return external_axios_default().post(`/post/${data.postId}/comment`, data);
}

function* post_addComment(action) {
  try {
    const result = yield (0,effects_.call)(addCommentAPI, action.data);
    yield (0,effects_.put)((0,addComment/* addCommentSuccess */.sm)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,addComment/* addCommentFailure */.eV)(err.response.data));
  }
}

function uploadImagesAPI(data) {
  return external_axios_default().post('/post/images', data);
}

function* post_uploadImages(action) {
  try {
    const result = yield (0,effects_.call)(uploadImagesAPI, action.data);
    yield (0,effects_.put)((0,uploadImages/* uploadImagesSuccess */.mt)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,uploadImages/* uploadImagesFailure */.vp)(err.response.data));
  }
}

function* watchLoadPosts() {
  yield (0,effects_.throttle)(5000, loadAllPost/* LOAD_ALL_POST_REQUEST */.tU, loadPosts);
}

function* watchLoadPost() {
  yield (0,effects_.takeLatest)(loadSinglePost/* LOAD_SINGLE_POST_REQUEST */.bW, loadPost);
}

function* watchLoadUserPosts() {
  yield (0,effects_.throttle)(5000, loadUserAllPost/* LOAD_USER_ALL_POST_REQUEST */.cK, loadUserPosts);
}

function* watchLoadRelatedPosts() {
  yield (0,effects_.throttle)(5000, loadRelatedPost/* LOAD_RELATED_POSTS_REQUEST */.aW, loadRelatedPosts);
}

function* watchLoadHashtagPosts() {
  yield (0,effects_.throttle)(5000, loadHashtagPosts/* LOAD_HASHTAG_POSTS_REQUEST */.az, post_loadHashtagPosts);
}

function* watchAddPost() {
  yield (0,effects_.takeLatest)(addPost/* ADD_POST_REQUEST */.z9, post_addPost);
}

function* watchRemovePost() {
  yield (0,effects_.takeLatest)(removePost/* REMOVE_POST_REQUEST */.HU, post_removePost);
}

function* watchUpdatePost() {
  yield (0,effects_.takeLatest)(updatePost/* UPDATE_POST_REQUEST */.wC, post_updatePost);
}

function* watchAddComment() {
  yield (0,effects_.takeLatest)(addComment/* ADD_COMMENT_REQUEST */.Ot, post_addComment);
}

function* watchLikePost() {
  yield (0,effects_.takeLatest)(likePost/* LIKE_POST_REQUEST */.xD, post_likePost);
}

function* watchUnlikePost() {
  yield (0,effects_.takeLatest)(unlikePost/* UNLIKE_POST_REQUEST */.VT, post_unlikePost);
}

function* watchRepost() {
  yield (0,effects_.takeLatest)(repost/* REPOST_REQUEST */.p8, post_repost);
}

function* watchUploadImages() {
  yield (0,effects_.takeLatest)(uploadImages/* UPLOAD_IMAGES_REQUEST */.QA, post_uploadImages);
}

function* postSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchLikePost), (0,effects_.fork)(watchUnlikePost), (0,effects_.fork)(watchLoadPosts), (0,effects_.fork)(watchLoadPost), (0,effects_.fork)(watchLoadUserPosts), (0,effects_.fork)(watchLoadHashtagPosts), (0,effects_.fork)(watchLoadRelatedPosts), (0,effects_.fork)(watchAddPost), (0,effects_.fork)(watchUpdatePost), (0,effects_.fork)(watchRepost), (0,effects_.fork)(watchAddComment), (0,effects_.fork)(watchRemovePost), (0,effects_.fork)(watchUploadImages)]);
}
;// CONCATENATED MODULE: ./sagas/user.ts


















function loadMeAPI() {
  return external_axios_default().get('/user');
}

function* user_loadMe() {
  try {
    const result = yield (0,effects_.call)(loadMeAPI);
    yield (0,effects_.put)((0,loadMe/* loadMeSuccess */.lL)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,loadMe/* loadMeFailure */.hE)(err.response.data));
  }
}

function loadUserAPI(data) {
  return external_axios_default().get(`/user/${data}`);
}

function* user_loadUser(action) {
  try {
    const result = yield (0,effects_.call)(loadUserAPI, action.data);
    yield (0,effects_.put)((0,loadUser/* loadUserSuccess */.oN)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,loadUser/* loadUserFailure */.yt)(err.response.data));
  }
}

function loginAPI(data) {
  return external_axios_default().post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield (0,effects_.call)(loginAPI, action.data);
    yield (0,effects_.put)((0,login/* loginSuccess */.he)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,login/* loginFailure */.UR)(err.response.data));
  } finally {
    yield (0,effects_.put)((0,login/* loginErrorFinish */.$O)());
  }
}

function logOutAPI() {
  return external_axios_default().post('/user/logout');
}

function* logOut() {
  try {
    yield (0,effects_.call)(logOutAPI);
    yield (0,effects_.put)((0,logout/* logoutSuccess */.ls)());
  } catch (err) {
    yield (0,effects_.put)((0,logout/* logoutFailure */.EF)(err.response.data));
  }
}

function signUpAPI(data) {
  return external_axios_default().post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield (0,effects_.call)(signUpAPI, action.data);
    yield (0,effects_.put)((0,signup/* signupSuccess */.$R)());
  } catch (err) {
    yield (0,effects_.put)((0,signup/* signupFailure */.dQ)(err.response.data));
  }
}

function changeNicknameAPI(data) {
  return external_axios_default().patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield (0,effects_.call)(changeNicknameAPI, action.data);
    yield (0,effects_.put)((0,changeNick/* changeNickSuccess */.nL)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,changeNick/* changeNickFailure */.Lg)(err.response.data));
  }
}

function changeMbtiAPI(data) {
  return external_axios_default().patch('/user/mbti', {
    mbti: data
  });
}

function* user_changeMbti(action) {
  try {
    const result = yield (0,effects_.call)(changeMbtiAPI, action.data);
    yield (0,effects_.put)((0,changeMbti/* changeMbtiSuccess */.bq)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,changeMbti/* changeMbtiFailure */.d8)(err.response.data));
  }
}

function changeIntroAPI(data) {
  return external_axios_default().patch('/user/intro', {
    intro: data
  });
}

function* user_changeIntro(action) {
  try {
    const result = yield (0,effects_.call)(changeIntroAPI, action.data);
    yield (0,effects_.put)((0,changeIntro/* changeIntroSuccess */.Sl)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,changeIntro/* changeIntroFailure */.gX)(err.response.data));
  }
}

function changeAreaAPI(data) {
  return external_axios_default().patch('/user/area', {
    area: data
  });
}

function* user_changeArea(action) {
  try {
    const result = yield (0,effects_.call)(changeAreaAPI, action.data);
    yield (0,effects_.put)((0,changeArea/* changeAreaSuccess */.HK)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,changeArea/* changeAreaFailure */.HV)(err.response.data));
  }
}

function followAPI(data) {
  return external_axios_default().patch(`/user/${data}/follow`);
}

function* user_follow(action) {
  try {
    const result = yield (0,effects_.call)(followAPI, action.data);
    yield (0,effects_.put)((0,follow/* followSuccess */.GF)(result.data));
  } catch (err) {
    yield (0,effects_.put)(err.response.data);
  }
}

function unfollowAPI(data) {
  return external_axios_default().delete(`/user/${data}/follow`);
}

function* user_unfollow(action) {
  try {
    const result = yield (0,effects_.call)(unfollowAPI, action.data);
    yield (0,effects_.put)((0,unfollow/* unfollowSuccess */.VQ)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,unfollow/* unfollowFailure */.fJ)(err.response.data));
  }
}

function removeFollowerAPI(data) {
  return external_axios_default().delete(`/user/follower/${data}`);
}

function* user_removeFollower(action) {
  try {
    const result = yield (0,effects_.call)(removeFollowerAPI, action.data);
    yield (0,effects_.put)((0,removeFollower/* removeFollowerSuccess */.e8)(result.data));
  } catch (err) {
    yield (0,effects_.put)((0,removeFollower/* removeFollowerFailure */.VF)(err.response.data));
  }
}

function uploadAvatarAPI(data) {
  return external_axios_default().post('/user/images', data);
}

function* user_uploadAvatar(action) {
  try {
    const result = yield (0,effects_.call)(uploadAvatarAPI, action.data);
    yield (0,effects_.put)((0,uploadAvatar/* uploadAvatarSuccess */.cM)(result.data));
    yield (0,effects_.put)(saveAvatarRequest(result.data[0])); // "파일명"
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,uploadAvatar/* uploadAvatarFailure */.AG)(err.response.data));
  }
}

function saveAvatarAPI(data) {
  return external_axios_default().patch('/user/avatar', {
    avatar: data
  }); // avatar: "파일명"
}

function* saveAvatar(action) {
  try {
    const result = yield (0,effects_.call)(saveAvatarAPI, action.data);
    yield (0,effects_.put)(saveAvatarSuccess(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)(saveAvatarFailure(err.response.data));
  }
}

function randomUsersAPI() {
  return external_axios_default().get(`/users`);
}

function* randomUsers() {
  try {
    const result = yield (0,effects_.call)(randomUsersAPI);
    yield (0,effects_.put)((0,randomUser/* randomUserSuccess */.ek)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,randomUser/* randomUserFailure */.h1)(err.response.data));
  }
}

function* watchLoadMe() {
  yield (0,effects_.takeLatest)(loadMe/* LOAD_ME_REQUEST */.JQ, user_loadMe);
}

function* watchLoadUser() {
  yield (0,effects_.takeLatest)(loadUser/* LOAD_USER_REQUEST */.dQ, user_loadUser);
}

function* watchLogIn() {
  yield (0,effects_.takeLatest)(login/* LOG_IN_REQUEST */.uF, logIn);
}

function* watchLogOut() {
  yield (0,effects_.takeLatest)(logout/* LOG_OUT_REQUEST */.Xd, logOut);
}

function* watchSignUp() {
  yield (0,effects_.takeLatest)(signup/* SIGN_UP_REQUEST */.pK, signUp);
}

function* watchChangeNickname() {
  yield (0,effects_.takeLatest)(changeNick/* CHANGE_NICK_REQUEST */.IS, changeNickname);
}

function* watchChangeMbti() {
  yield (0,effects_.takeLatest)(changeMbti/* CHANGE_MBTI_REQUEST */.uO, user_changeMbti);
}

function* watchChangeIntro() {
  yield (0,effects_.takeLatest)(changeIntro/* CHANGE_INTRO_REQUEST */.wn, user_changeIntro);
}

function* watchChangeArea() {
  yield (0,effects_.takeLatest)(changeArea/* CHANGE_AREA_REQUEST */.BK, user_changeArea);
}

function* watchFollow() {
  yield (0,effects_.takeLatest)(follow/* FOLLOW_REQUEST */.U_, user_follow);
}

function* watchUnfollow() {
  yield (0,effects_.takeLatest)(unfollow/* UNFOLLOW_REQUEST */.Bk, user_unfollow);
}

function* watchRemoveFollower() {
  yield (0,effects_.takeLatest)(removeFollower/* REMOVE_FOLLOWER_REQUEST */.IB, user_removeFollower);
}

function* watchUploadAvatar() {
  yield (0,effects_.takeLatest)(uploadAvatar/* UPLOAD_AVATAR_REQUEST */.j7, user_uploadAvatar);
}

function* watchSaveAvatar() {
  yield (0,effects_.takeLatest)(SAVE_AVATAR_REQUEST, saveAvatar);
}

function* watchRandomUsers() {
  yield (0,effects_.takeLatest)(randomUser/* RANDOM_USER_REQUEST */.Jy, randomUsers);
}

function* userSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchLoadMe), (0,effects_.fork)(watchLoadUser), (0,effects_.fork)(watchLogIn), (0,effects_.fork)(watchLogOut), (0,effects_.fork)(watchSignUp), (0,effects_.fork)(watchChangeNickname), (0,effects_.fork)(watchChangeMbti), (0,effects_.fork)(watchChangeIntro), (0,effects_.fork)(watchChangeArea), (0,effects_.fork)(watchFollow), (0,effects_.fork)(watchUnfollow), (0,effects_.fork)(watchRemoveFollower), (0,effects_.fork)(watchUploadAvatar), (0,effects_.fork)(watchSaveAvatar), (0,effects_.fork)(watchRandomUsers)]);
}
;// CONCATENATED MODULE: ./sagas/diary.ts











function loadUserDiarysAPI(data, lastId) {
  return external_axios_default().get(`/diarys/${data}?lastId=${lastId || 0}`);
}

function* diary_loadUserDiarys(action) {
  try {
    const result = yield (0,effects_.call)(loadUserDiarysAPI, action.data, action.lastId);
    yield (0,effects_.put)((0,loadUserDiarys/* loadUserDiarysSuccess */.aU)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadUserDiarys/* loadUserDiarysFailure */.oC)(err.response.data));
  }
}

function loadDiaryAPI(data) {
  return external_axios_default().get(`/diary/${data}`);
}

function* loadDiary(action) {
  try {
    const result = yield (0,effects_.call)(loadDiaryAPI, action.data);
    yield (0,effects_.put)((0,loadSingleDiary/* loadSingleDiarySuccess */.n6)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadSingleDiary/* loadSingleDiaryFailure */.D9)(err.response.data));
  }
}

function loadFeelDiarysAPI(id, feel, lastId) {
  return external_axios_default().get(`/feel/${id}/${feel}?lastId=${lastId || 0}`);
}

function* diary_loadFeelDiarys(action) {
  try {
    const result = yield (0,effects_.call)(loadFeelDiarysAPI, action.id, action.feel, action.lastId);
    yield (0,effects_.put)((0,loadFeelDiarys/* loadFeelDiarysSuccess */.AQ)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,loadFeelDiarys/* loadFeelDiarysFailure */.np)(err.response.data));
  }
}

function addDiaryAPI(data) {
  return external_axios_default().post('/diary', data);
}

function* diary_addDiary(action) {
  try {
    const result = yield (0,effects_.call)(addDiaryAPI, action.data);
    yield (0,effects_.put)((0,addDiary/* addDiarySuccess */.Sh)(result.data));
    yield (0,effects_.put)(addDiaryToMeRequest(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,addDiary/* addDiaryFailure */.n_)(err.response.data));
  } finally {
    yield (0,effects_.put)((0,addDiary/* addDiaryErrorFinish */.d0)());
  }
}

function removeDiaryAPI(data) {
  return external_axios_default().delete(`/diary/${data}`);
}

function* diary_removeDiary(action) {
  try {
    const result = yield (0,effects_.call)(removeDiaryAPI, action.data);
    yield (0,effects_.put)((0,removeDiary/* removeDiarySuccess */.pZ)(result.data));
    yield (0,effects_.put)(removeDiaryOfMeRequest(action.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,removeDiary/* removeDiaryFailure */.yy)(err.response.data));
  }
}

function uploadPhotosAPI(data) {
  return external_axios_default().post('/diary/photos', data);
}

function* uploadPhotos(action) {
  try {
    const result = yield (0,effects_.call)(uploadPhotosAPI, action.data);
    yield (0,effects_.put)((0,uploadPhoto/* uploadPhotoSuccess */.W)(result.data));
  } catch (err) {
    console.error(err);
    yield (0,effects_.put)((0,uploadPhoto/* uploadPhotoFailure */.$l)(err.response.data));
  }
}

function* watchLoadUserDiarys() {
  yield (0,effects_.throttle)(5000, loadUserDiarys/* LOAD_USER_DIARYS_REQUEST */.Nn, diary_loadUserDiarys);
}

function* watchLoadFeelDiarys() {
  yield (0,effects_.throttle)(5000, loadFeelDiarys/* LOAD_FEEL_DIARYS_REQUEST */.q0, diary_loadFeelDiarys);
}

function* watchLoadDiary() {
  yield (0,effects_.takeLatest)(loadSingleDiary/* LOAD_SINGLE_DIARY_REQUEST */.cs, loadDiary);
}

function* watchAddDiary() {
  yield (0,effects_.takeLatest)(addDiary/* ADD_DIARY_REQUEST */.Om, diary_addDiary);
}

function* watchRemoveDiary() {
  yield (0,effects_.takeLatest)(removeDiary/* REMOVE_DIARY_REQUEST */.p7, diary_removeDiary);
}

function* watchUploadPhotos() {
  yield (0,effects_.takeLatest)(uploadPhoto/* UPLOAD_PHOTO_REQUEST */.sC, uploadPhotos);
}

function* diarySaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchLoadUserDiarys), (0,effects_.fork)(watchLoadFeelDiarys), (0,effects_.fork)(watchLoadDiary), (0,effects_.fork)(watchAddDiary), (0,effects_.fork)(watchRemoveDiary), (0,effects_.fork)(watchUploadPhotos)]);
}
// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__(4299);
;// CONCATENATED MODULE: ./sagas/index.ts






(external_axios_default()).defaults.baseURL = config/* backUrl */.T;
(external_axios_default()).defaults.withCredentials = true;
function* rootSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(postSaga), (0,effects_.fork)(userSaga), (0,effects_.fork)(diarySaga)]);
}
;// CONCATENATED MODULE: ./store/configureStore.ts







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middlewares)) : 0;
  const store = (0,external_redux_.createStore)(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ const store_configureStore = (wrapper);

/***/ })

};
;