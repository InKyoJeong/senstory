"use strict";
(() => {
var exports = {};
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 8558:
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
/* harmony import */ var _reducers_diary_loadFeelDiarys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9928);
/* harmony import */ var _reducers_user_loadMe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1130);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5394);
/* harmony import */ var _components_diary_DiaryBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4721);
/* harmony import */ var _components_diary_DiaryBlockContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8739);
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2620);
/* harmony import */ var _components_diary_FeelSelectForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5237);
/* harmony import */ var _components_diary_DiaryEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3290);
/* harmony import */ var _hocs_Conditional__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);




















const Feel = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    id,
    feel
  } = router.query;
  const userId = parseInt(id, 10);
  const {
    mainDiarys,
    hasMoreDiarys,
    loadFeelDiarysLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.diary);
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(me !== null && me !== void 0 && me.id) || userId !== (me === null || me === void 0 ? void 0 : me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
    }
  }, [userId, me === null || me === void 0 ? void 0 : me.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inView && hasMoreDiarys && !loadFeelDiarysLoading) {
      var _mainDiarys;

      const lastId = (_mainDiarys = mainDiarys[mainDiarys.length - 1]) === null || _mainDiarys === void 0 ? void 0 : _mainDiarys.id;
      dispatch((0,_reducers_diary_loadFeelDiarys__WEBPACK_IMPORTED_MODULE_15__/* .loadFeelDiarysRequest */ .Sv)(userId, feel, lastId));
    }
  }, [inView, hasMoreDiarys, loadFeelDiarysLoading, mainDiarys, feel]);

  if (!(me !== null && me !== void 0 && me.id) || userId !== (me === null || me === void 0 ? void 0 : me.id)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      text: "\uC798\uBABB\uB41C \uC811\uADFC\uC785\uB2C8\uB2E4. \uD648\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    diary: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_diary_FeelSelectForm__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
      hide: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_hocs_Conditional__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      condition: mainDiarys.length === 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_diary_DiaryEmpty__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_diary_DiaryBlockContainer__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      children: mainDiarys.map(diary => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_diary_DiaryBlock__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        diary: diary,
        ref: hasMoreDiarys && !loadFeelDiarysLoading ? ref : undefined
      }, diary.id))
    })]
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

  store.dispatch((0,_reducers_diary_loadFeelDiarys__WEBPACK_IMPORTED_MODULE_15__/* .loadFeelDiarysRequest */ .Sv)(params.id, params.feel));
  store.dispatch((0,_reducers_user_loadMe__WEBPACK_IMPORTED_MODULE_16__/* .loadMeRequest */ .a4)());
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feel);

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

/***/ 2889:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,620,41], () => (__webpack_exec__(8558)));
module.exports = __webpack_exports__;

})();