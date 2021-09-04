"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./reducers/user/login.ts
var login = __webpack_require__(9924);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./components/common/MiniTitle/index.tsx + 1 modules
var MiniTitle = __webpack_require__(2157);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/user/LoginForm/styles.ts


const FormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__FormWrapper",
  componentId: "sc-18zkv9z-0"
})(["margin:0px 20px;& label{color:white;}"]);
const LoginInput = external_styled_components_default()(external_antd_.Input).withConfig({
  displayName: "styles__LoginInput",
  componentId: "sc-18zkv9z-1"
})(["border-radius:10px;margin-top:5px;color:white;border-color:", ";background-color:", ";"], ({
  theme
}) => theme.color.LIGHT_GRAY, ({
  theme
}) => theme.color.MIDDLE_GRAY);
const InputWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-18zkv9z-2"
})(["margin-top:30px;& label{color:white;}"]);
const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-18zkv9z-3"
})(["margin-top:20px;"]);
const LoginButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__LoginButton",
  componentId: "sc-18zkv9z-4"
})(["width:100%;height:40px;border-radius:10px;margin-top:5px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/user/LoginForm/index.tsx









const LoginForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    logInLoading,
    logInError
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,useInput/* default */.Z)('');
  const [password, onChangePassword] = (0,useInput/* default */.Z)('');
  (0,external_react_.useEffect)(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitForm = (0,external_react_.useCallback)(() => {
    dispatch((0,login/* loginRequest */.Qb)({
      email,
      password
    }));
  }, [email, password]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/jsx_runtime_.jsx(MiniTitle/* default */.Z, {
      title1: "Log",
      title2: "In"
    }), /*#__PURE__*/jsx_runtime_.jsx(InputWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(LoginInput, {
          name: "user-email",
          type: "email",
          value: email,
          onChange: onChangeEmail,
          required: true,
          autoComplete: "off"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(InputWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(LoginInput, {
          name: "user-password",
          type: "password",
          value: password,
          onChange: onChangePassword,
          required: true
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ButtonWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(LoginButton, {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      })
    })]
  });
};

/* harmony default export */ const user_LoginForm = (LoginForm);
// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 9 modules
var Layout = __webpack_require__(5394);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx + 1 modules
var Loader = __webpack_require__(2620);
;// CONCATENATED MODULE: ./pages/login.tsx















const Login = () => {
  const {
    me,
    logInFinish,
    logInLoading,
    logInError
  } = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  (0,external_react_.useEffect)(() => {
    if (me && me.id) {
      router_default().replace('/');
    }
  }, [me && me.id]);
  (0,external_react_.useEffect)(() => {
    if (logInFinish) {
      router_default().replace('/');
    }
  }, [logInFinish]);

  if (logInLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {
      text: "\uB85C\uADF8\uC778 \uC911..."
    });
  }

  if (me && me.id) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {
      text: "\uB85C\uADF8\uC778 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD648\uC73C\uB85C \uC774\uB3D9 \uC911..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "\uB85C\uADF8\uC778 | SenStory"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(user_LoginForm, {})]
    })
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
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const pages_login = (Login);

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

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,620,157], () => (__webpack_exec__(9124)));
module.exports = __webpack_exports__;

})();