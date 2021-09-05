"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 7442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Modal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Modal/styles.ts

const ModalOverlay = external_styled_components_default().div.withConfig({
  displayName: "styles__ModalOverlay",
  componentId: "sc-11iz77u-0"
})(["position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.7);z-index:999;"]);
const ModalForm = external_styled_components_default().div.withConfig({
  displayName: "styles__ModalForm",
  componentId: "sc-11iz77u-1"
})(["position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;top:30%;left:50%;width:40%;padding:30px;transform:translate(-50%,-50%);background-color:#d9d7d7;border-radius:10px;animation:fadeIn 0.7s;& div{margin-bottom:15px;font-weight:bolder;color:", ";}& Button{border-radius:10px;width:30%;}@media screen and (max-width:992px){width:80%;& Button{width:50%;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}"], ({
  theme
}) => theme.color.BLACK);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/common/Modal/index.tsx







const Modal = ({
  onToggleModal,
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ModalOverlay, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalForm, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        onClick: onToggleModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CheckOutlined, {})
      })]
    })
  });
};

/* harmony default export */ const common_Modal = (Modal);

/***/ })

};
;