(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./theme/index.ts
const color = {
  MAIN: '#1890FF',
  DARK_MAIN: '#5a748f',
  BLACK: '#191A1A',
  DARK_GRAY: '#2d2d2e',
  MIDDLE_GRAY: '#404042',
  LIGHT_GRAY: '#808080',
  INVALID: '#64809c'
};
const theme = {
  color
};
/* harmony default export */ const theme_0 = (theme);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.tsx










const Senstory = ({
  Component
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: theme_0,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "SenStory"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, {})]
    })
  });
};

/* harmony default export */ const _app = (configureStore/* default.withRedux */.Z.withRedux(Senstory));

/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4584:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 7765:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ 5060:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 9914:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [51], () => (__webpack_exec__(3756)));
module.exports = __webpack_exports__;

})();