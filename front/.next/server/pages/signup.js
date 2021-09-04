"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 2777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_signup),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 9 modules
var Layout = __webpack_require__(5394);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx + 1 modules
var Loader = __webpack_require__(2620);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./hocs/Conditional.tsx
var Conditional = __webpack_require__(1986);
// EXTERNAL MODULE: ./components/common/MiniTitle/index.tsx + 1 modules
var MiniTitle = __webpack_require__(2157);
// EXTERNAL MODULE: ./reducers/user/signup.ts
var signup = __webpack_require__(9664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/user/SignUpForm/styles.ts


const SignUpFormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__SignUpFormWrapper",
  componentId: "sc-r4nk1d-0"
})(["margin:0px 20px;"]);
const ErrorMessage = external_styled_components_default().div.withConfig({
  displayName: "styles__ErrorMessage",
  componentId: "sc-r4nk1d-1"
})(["color:#d43578;"]);
const InputWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-r4nk1d-2"
})(["margin-top:30px;& label{color:white;}"]);
const SignUpInput = external_styled_components_default()(external_antd_.Input).withConfig({
  displayName: "styles__SignUpInput",
  componentId: "sc-r4nk1d-3"
})(["border-radius:10px;margin-top:5px;color:white;border-color:", ";background-color:", ";"], ({
  theme
}) => theme.color.LIGHT_GRAY, ({
  theme
}) => theme.color.MIDDLE_GRAY);
const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-r4nk1d-4"
})(["margin-top:20px;& Button{border-radius:10px;width:100%;height:40px;background-color:", ";border-color:", ";}"], props => props.isValid || props.theme.color.INVALID, props => props.isValid || props.theme.color.INVALID);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/user/SignUpForm/index.tsx











const SignUpForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    signUpLoading,
    signUpError
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,useInput/* default */.Z)('');
  const [password, onChangePassword] = (0,useInput/* default */.Z)('');
  const [nickname, onChangeNickname] = (0,useInput/* default */.Z)('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,external_react_.useState)('');
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,external_react_.useState)(false);
  const {
    0: isValid,
    1: setIsValid
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  (0,external_react_.useEffect)(() => {
    setIsValid(email.length != 0 && password.length != 0 && passwordCheck.length != 0 && nickname.length != 0 && !passwordError);
  }, [email, password, passwordCheck, nickname]);
  const onChangePasswordCheck = (0,external_react_.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  const onSubmit = (0,external_react_.useCallback)(() => {
    if (!isValid) return;

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    dispatch((0,signup/* signupRequest */.wB)({
      email,
      password,
      nickname
    }));
  }, [email, password, passwordCheck, isValid]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SignUpFormWrapper, {
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx(MiniTitle/* default */.Z, {
      title1: "Sign",
      title2: "Up"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-email",
        children: "\uC774\uBA54\uC77C"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(SignUpInput, {
        name: "user-email",
        type: "email",
        value: email,
        onChange: onChangeEmail,
        required: true,
        autoComplete: "off"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-nick",
        children: "\uB2C9\uB124\uC784"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(SignUpInput, {
        name: "user-nick",
        value: nickname,
        onChange: onChangeNickname,
        required: true,
        autoComplete: "off"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(SignUpInput, {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "user-password-check",
        children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(SignUpInput, {
        name: "user-password",
        type: "password",
        value: passwordCheck,
        onChange: onChangePasswordCheck,
        required: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
        condition: passwordError,
        children: /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ButtonWrapper, {
      isValid: isValid,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        htmlType: "submit",
        loading: signUpLoading,
        children: "\uAC00\uC785\uD558\uAE30"
      })
    })]
  });
};

/* harmony default export */ const user_SignUpForm = (SignUpForm);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/user/SignUpFinish/styles.ts

const FinishWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__FinishWrapper",
  componentId: "sc-14qbr70-0"
})(["height:100vh;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;& div{font-size:15px;color:white;margin-bottom:10px;}& Button{background-color:", ";border-radius:10px;border:none;}"], ({
  theme
}) => theme.color.DARK_GRAY, ({
  theme
}) => theme.color.MAIN);
;// CONCATENATED MODULE: ./components/user/SignUpFinish/index.tsx







const SignUpFinish = () => {
  const handleLoginPage = (0,external_react_.useCallback)(() => {
    router_default().replace("/login");
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FinishWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
      onClick: handleLoginPage,
      children: "\uB85C\uADF8\uC778\uD558\uAE30"
    })]
  });
};

/* harmony default export */ const user_SignUpFinish = (SignUpFinish);
;// CONCATENATED MODULE: ./pages/signup.tsx














const Signup = () => {
  const {
    signUpLoading,
    signUpFinish
  } = (0,external_react_redux_.useSelector)(state => state.user);

  if (signUpFinish) {
    return /*#__PURE__*/jsx_runtime_.jsx(user_SignUpFinish, {});
  }

  if (signUpLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {
      text: "\uD68C\uC6D0\uAC00\uC785 \uC911..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | SenStory"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(user_SignUpForm, {})]
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
/* harmony default export */ const pages_signup = (Signup);

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
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,620,157], () => (__webpack_exec__(2777)));
module.exports = __webpack_exports__;

})();