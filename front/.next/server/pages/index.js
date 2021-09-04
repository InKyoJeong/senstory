"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(2889);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./reducers/post/loadAllPost.ts
var loadAllPost = __webpack_require__(4724);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./reducers/user/randomUser.ts
var randomUser = __webpack_require__(8947);
// EXTERNAL MODULE: ./hocs/Conditional.tsx
var Conditional = __webpack_require__(1986);
// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 9 modules
var Layout = __webpack_require__(5394);
// EXTERNAL MODULE: ./components/post/PostCard/index.tsx + 12 modules
var PostCard = __webpack_require__(5053);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/post/PostWriteForm/styles.ts



const FormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__FormWrapper",
  componentId: "sc-k6ryx9-0"
})(["background-color:", ";margin-top:20px;margin-bottom:40px;padding:10px;border-radius:10px;"], ({
  theme
}) => theme.color.DARK_GRAY);
const PostWriteInput = external_styled_components_default()(external_antd_.Input.TextArea).withConfig({
  displayName: "styles__PostWriteInput",
  componentId: "sc-k6ryx9-1"
})(["margin-bottom:8px;background-color:", ";border-color:", ";color:white;border-radius:10px;"], ({
  theme
}) => theme.color.LIGHT_GRAY, ({
  theme
}) => theme.color.LIGHT_GRAY);
const WriteButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__WriteButtonWrapper",
  componentId: "sc-k6ryx9-2"
})(["display:flex;justify-content:flex-end;"]);
const PostWriteButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__PostWriteButton",
  componentId: "sc-k6ryx9-3"
})(["border-radius:10px;margin-left:8px;float:right;"]);
const ImageEnrollBtn = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__ImageEnrollBtn",
  componentId: "sc-k6ryx9-4"
})(["border-radius:10px;color:#9c4343;background-color:#f5c1c1;border-color:#f5d0d0;&:hover,&:focus{background-color:#e89b9b;color:#823030;border-color:#f5b0b0;}"]);
const ImagesWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImagesWrapper",
  componentId: "sc-k6ryx9-5"
})(["margin-top:20px;display:flex;align-items:center;overflow:auto;& div:not(:last-child){margin-right:20px;}& div{position:relative;display:inline-block;margin-top:8px;& img{width:100px;height:100px;border-radius:10px;}@media screen and (max-width:567px){& img{width:80px;height:80px;}}}"]);
const ImageDeleteBtn = external_styled_components_default()(icons_.CloseCircleOutlined).withConfig({
  displayName: "styles__ImageDeleteBtn",
  componentId: "sc-k6ryx9-6"
})(["position:absolute;top:-8px;right:-8px;font-size:20px;border-radius:10px;background-color:black;color:#d66565;&:hover{color:#e03d3d;}"]);
// EXTERNAL MODULE: ./reducers/post/addPost.ts
var addPost = __webpack_require__(881);
// EXTERNAL MODULE: ./reducers/post/uploadImages.ts
var uploadImages = __webpack_require__(4813);
// EXTERNAL MODULE: ./reducers/post/removeImage.ts
var removeImage = __webpack_require__(8444);
// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__(4299);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/post/PostWriteForm/index.tsx












const PostWriteForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    imagePaths,
    addPostFinish,
    addPostLoading,
    addPostError
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const [text, onChangeText, setText] = (0,useInput/* default */.Z)('');
  (0,external_react_.useEffect)(() => {
    if (addPostFinish) {
      setText('');
    }
  }, [addPostFinish]);
  (0,external_react_.useEffect)(() => {
    if (addPostError) {
      alert(addPostError);
    }
  }, [addPostError]);
  const onSubmit = (0,external_react_.useCallback)(() => {
    if (!text || !text.trim()) {
      return alert('내용을 입력해주세요.');
    }

    const formData = new FormData();
    imagePaths.forEach(v => {
      formData.append('image', v);
    });
    formData.append('content', text);
    return dispatch((0,addPost/* addPostRequest */.BZ)(formData));
  }, [text, imagePaths]);
  const imageInput = (0,external_react_.useRef)(null);
  const onClickImageUpload = (0,external_react_.useCallback)(() => {
    if (!imageInput.current) {
      return;
    }

    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = (0,external_react_.useCallback)(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch((0,uploadImages/* uploadImagesRequest */.Pf)(imageFormData));
  }, []);
  const onRemoveImage = (0,external_react_.useCallback)(index => () => {
    dispatch((0,removeImage/* removeImageRequest */.q)(index));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormWrapper, {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostWriteInput, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(WriteButtonWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }), /*#__PURE__*/jsx_runtime_.jsx(ImageEnrollBtn, {
        onClick: onClickImageUpload,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PictureFilled, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(PostWriteButton, {
        type: "primary",
        htmlType: "submit",
        loading: addPostLoading,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EditFilled, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ImagesWrapper, {
      children: imagePaths.map((v, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${config/* backUrl */.T}/${v}`,
          alt: v
        }), /*#__PURE__*/jsx_runtime_.jsx(ImageDeleteBtn, {
          onClick: onRemoveImage(i)
        })]
      }, v))
    })]
  });
};

/* harmony default export */ const post_PostWriteForm = (PostWriteForm);
;// CONCATENATED MODULE: ./pages/index.tsx
















const Home = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadAllPostLoading,
    repostError,
    loadAllPostError
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const [ref, inView] = (0,external_react_intersection_observer_.useInView)();
  (0,external_react_.useEffect)(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);
  (0,external_react_.useEffect)(() => {
    if (loadAllPostError) {
      alert(loadAllPostError);
    }
  }, [loadAllPostError]);
  (0,external_react_.useEffect)(() => {
    if (inView && hasMorePosts && !loadAllPostLoading) {
      var _mainPosts;

      const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch((0,loadAllPost/* loadAllPostRequest */.sE)(lastId));
    }
  }, [inView, hasMorePosts, loadAllPostLoading, mainPosts]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    main: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: me,
      children: /*#__PURE__*/jsx_runtime_.jsx(post_PostWriteForm, {})
    }), mainPosts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard/* default */.Z, {
      post: post,
      ref: hasMorePosts && !loadAllPostLoading ? ref : undefined
    }, post.id))]
  });
};

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(store => async ({
  req
}) => {
  const cookie = req ? req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  store.dispatch((0,loadMe/* loadMeRequest */.a4)());
  store.dispatch((0,loadAllPost/* loadAllPostRequest */.sE)());
  store.dispatch((0,randomUser/* randomUserRequest */.hL)());
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const pages = (Home);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,442,53], () => (__webpack_exec__(3923)));
module.exports = __webpack_exports__;

})();