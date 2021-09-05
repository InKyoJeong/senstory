"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 4370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_CustomError)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./components/common/CustomError/styles.ts


const ErrorPageWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ErrorPageWrapper",
  componentId: "sc-xmrpqp-0"
})(["height:100vh;background:", ";display:flex;justify-content:center;align-items:center;& span,& h2{display:flex;justify-content:center;}& h2,& div{color:white;opacity:0.8;}"], ({
  theme
}) => theme.color.DARK_GRAY);
const ErrorIcon = external_styled_components_default()(icons_.WarningOutlined).withConfig({
  displayName: "styles__ErrorIcon",
  componentId: "sc-xmrpqp-1"
})(["font-size:2rem;margin-bottom:1rem;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/common/CustomError/index.tsx





const CustomError = ({
  errorTitle,
  errorContent
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ErrorPageWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ErrorIcon, {}), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: errorTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: errorContent
      })]
    })
  });
};

/* harmony default export */ const common_CustomError = (CustomError);

/***/ })

};
;