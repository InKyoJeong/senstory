"use strict";
exports.id = 157;
exports.ids = [157];
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

/***/ })

};
;