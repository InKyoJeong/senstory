"use strict";
(() => {
var exports = {};
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7765);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2889);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6051);
/* harmony import */ var _components_post_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5053);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5394);
/* harmony import */ var _reducers_post_loadHashtagPosts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5780);
/* harmony import */ var _reducers_user_loadMe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1130);
/* harmony import */ var _reducers_user_randomUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8947);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);














const Hashtag = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    tag
  } = router.query;
  const {
    mainPosts,
    hasMorePosts,
    loadHashtagPostsLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.post);
  const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inView && hasMorePosts && !loadHashtagPostsLoading) {
      var _mainPosts;

      const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch((0,_reducers_post_loadHashtagPosts__WEBPACK_IMPORTED_MODULE_10__/* .loadHashtagPostsRequest */ .Pm)(tag, lastId));
    }
  }, [inView, hasMorePosts, loadHashtagPostsLoading, mainPosts, tag]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    children: mainPosts.map(c => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_post_PostCard__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      post: c,
      ref: hasMorePosts && !loadHashtagPostsLoading ? ref : undefined
    }, c.id))
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_6__/* .default.getServerSideProps */ .Z.getServerSideProps(store => async ({
  req,
  params
}) => {
  const cookie = req ? req.headers.cookie : '';
  (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.Cookie) = '';

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.Cookie) = cookie;
  }

  store.dispatch((0,_reducers_post_loadHashtagPosts__WEBPACK_IMPORTED_MODULE_10__/* .loadHashtagPostsRequest */ .Pm)(params.tag));
  store.dispatch((0,_reducers_user_loadMe__WEBPACK_IMPORTED_MODULE_11__/* .loadMeRequest */ .a4)());
  store.dispatch((0,_reducers_user_randomUser__WEBPACK_IMPORTED_MODULE_12__/* .randomUserRequest */ .hL)());
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hashtag);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8349:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 5470:
/***/ ((module) => {

module.exports = require("dayjs/locale/ko");

/***/ }),

/***/ 2289:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 4584:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9318:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 2889:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 7765:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 5060:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,442,53], () => (__webpack_exec__(2269)));
module.exports = __webpack_exports__;

})();