"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 2620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Loader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Loader/styles.ts

const LoaderWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__LoaderWrapper",
  componentId: "sc-qy7mjt-0"
})(["display:flex;align-items:center;justify-content:center;padding:20px;background-color:", ";"], ({
  theme
}) => theme.color.DARK_GRAY);
const LoaderFull = external_styled_components_default().div.withConfig({
  displayName: "styles__LoaderFull",
  componentId: "sc-qy7mjt-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:calc(100vh - 40px);color:white;"]);
const LoaderContent = external_styled_components_default().div.withConfig({
  displayName: "styles__LoaderContent",
  componentId: "sc-qy7mjt-2"
})(["display:flex;flex-direction:column;font-size:15px;& div{padding-bottom:15px;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/common/Loader/index.tsx






const Loader = ({
  text
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(LoaderWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(LoaderFull, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoaderContent, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: text
        }), /*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {})]
      })
    })
  });
};

/* harmony default export */ const common_Loader = (Loader);

/***/ })

};
;