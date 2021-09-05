"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 2157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_MiniTitle)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/MiniTitle/styles.ts

const subTitle = (0,external_styled_components_.css)(["font-weight:bolder;font-size:18px;"]);
const PageTitleWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__PageTitleWrapper",
  componentId: "sc-fwds8b-0"
})(["display:flex;justify-content:center;align-items:center;margin-top:40px;"]);
const TextFront = external_styled_components_default().i.withConfig({
  displayName: "styles__TextFront",
  componentId: "sc-fwds8b-1"
})(["", " color:", ";margin:0px 3px;"], subTitle, ({
  theme
}) => theme.color.MAIN);
const TextBack = external_styled_components_default().i.withConfig({
  displayName: "styles__TextBack",
  componentId: "sc-fwds8b-2"
})(["", " color:", ";"], subTitle, ({
  theme
}) => theme.color.LIGHT_GRAY);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/common/MiniTitle/index.tsx






const MiniTitle = ({
  title1,
  title2
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageTitleWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TextFront, {
        children: title1
      }), /*#__PURE__*/jsx_runtime_.jsx(TextBack, {
        children: title2
      })]
    })
  });
};

/* harmony default export */ const common_MiniTitle = (MiniTitle);

/***/ }),

/***/ 5026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ user_FormButton)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/user/FormButton/styles.ts


const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-2h82z2-0"
})(["margin-top:20px;"]);
const FormBtn = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__FormBtn",
  componentId: "sc-2h82z2-1"
})(["width:100%;height:40px;border-radius:10px;margin-top:5px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/user/FormButton/index.tsx




const FormButton = ({
  loading,
  buttonText
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ButtonWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(FormBtn, {
      type: "primary",
      htmlType: "submit",
      loading: loading,
      children: buttonText
    })
  });
};

/* harmony default export */ const user_FormButton = (FormButton);

/***/ })

};
;