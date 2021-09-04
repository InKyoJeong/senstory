"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(2889);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: ./hocs/Conditional.tsx
var Conditional = __webpack_require__(1986);
// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 9 modules
var Layout = __webpack_require__(5394);
// EXTERNAL MODULE: ./components/post/PostCard/index.tsx + 12 modules
var PostCard = __webpack_require__(5053);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/profile/UserProfileForm/styles.ts


const userTitle = (0,external_styled_components_.css)(["display:flex;justify-content:center;border-radius:5px;margin:10px 0px 5px 0px;border:2px solid ", ";"], ({
  theme
}) => theme.color.DARK_MAIN);
const UserHeader = external_styled_components_default().div.withConfig({
  displayName: "styles__UserHeader",
  componentId: "sc-17qujos-0"
})(["padding:8px 0px;display:flex;align-items:center;justify-content:center;background-color:", ";border:1px solid ", ";border-bottom-left-radius:10px;border-bottom-right-radius:10px;font-weight:bolder;"], ({
  theme
}) => theme.color.MAIN, ({
  theme
}) => theme.color.DARK_GRAY);
const UserInfoNick = external_styled_components_default().div.withConfig({
  displayName: "styles__UserInfoNick",
  componentId: "sc-17qujos-1"
})(["color:white;"]);
const UserProfileWrapper = external_styled_components_default()(external_antd_.Card).withConfig({
  displayName: "styles__UserProfileWrapper",
  componentId: "sc-17qujos-2"
})(["margin:20px 0;background-color:", ";color:white;border-radius:5px;border:1px solid black;"], ({
  theme
}) => theme.color.DARK_GRAY);
const UserInfoWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__UserInfoWrapper",
  componentId: "sc-17qujos-3"
})(["display:grid;gap:2px;grid-template-columns:1fr 1fr 1fr;margin-top:20px;background-color:", ";border:1px solid #5e5d5d;padding:15px 0px;border-radius:8px;& div{display:flex;justify-content:center;flex-direction:column;align-items:center;color:white;}"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
const UserIntroTop = external_styled_components_default().div.withConfig({
  displayName: "styles__UserIntroTop",
  componentId: "sc-17qujos-4"
})(["display:grid;grid-template-columns:1fr 1fr;gap:20px;flex-direction:column;justify-content:center;& div{display:flex;flex-direction:column;justify-content:center;align-items:center;}"]);
const UserIntroWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__UserIntroWrapper",
  componentId: "sc-17qujos-5"
})(["color:white;margin-top:20px;& span{color:gray;}"]);
const UserIntroTitle = external_styled_components_default().div.withConfig({
  displayName: "styles__UserIntroTitle",
  componentId: "sc-17qujos-6"
})(["width:calc(50% - 10px);", ""], userTitle);
const UserHalfTitle = external_styled_components_default().div.withConfig({
  displayName: "styles__UserHalfTitle",
  componentId: "sc-17qujos-7"
})(["width:100%;", ""], userTitle);
// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__(4299);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/profile/UserProfileForm/index.tsx









const UserProfileForm = ({
  userInfo
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(UserHeader, {
      children: [userInfo.nickname, "\uB2D8\uC758 \uD504\uB85C\uD544"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserProfileWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
        avatar: userInfo.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
          src: `${config/* backUrl */.T}/${userInfo.avatar}`
        }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
          children: userInfo.nickname[0]
        }),
        title: /*#__PURE__*/jsx_runtime_.jsx(UserInfoNick, {
          children: userInfo.nickname
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserIntroWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(UserIntroTop, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(UserHalfTitle, {
              children: "\uD65C\uB3D9 \uC9C0\uC5ED"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: userInfo.area
            }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
              condition: userInfo.area === '',
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\uB4F1\uB85D\uC911"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(UserHalfTitle, {
              children: "MBTI"
            }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
              condition: userInfo.mbti !== 'x',
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: userInfo.mbti
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
              condition: userInfo.mbti === 'x',
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\uB4F1\uB85D\uC911"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(UserIntroTitle, {
            children: "\uC18C\uAC1C"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: userInfo.intro
          }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
            condition: userInfo.intro === '',
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\uB4F1\uB85D\uC911"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserInfoWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "\uAC8C\uC2DC\uBB3C"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: userInfo.Posts
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "\uD314\uB85C\uC6CC"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: userInfo.Followers
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "\uD314\uB85C\uC789"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: userInfo.Followings
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const profile_UserProfileForm = (UserProfileForm);
// EXTERNAL MODULE: ./reducers/post/loadUserAllPost.ts
var loadUserAllPost = __webpack_require__(9037);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./reducers/user/loadUser.ts
var loadUser = __webpack_require__(3438);
;// CONCATENATED MODULE: ./pages/user/[id].tsx


















const User = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  const {
    repostError,
    mainPosts,
    hasMorePosts,
    loadUserAllPostLoading
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const {
    userInfo
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [ref, inView] = (0,external_react_intersection_observer_.useInView)();
  (0,external_react_.useEffect)(() => {
    if (repostError) {
      alert(repostError);
    }
  });
  (0,external_react_.useEffect)(() => {
    if (inView && hasMorePosts && !loadUserAllPostLoading) {
      var _mainPosts;

      const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch((0,loadUserAllPost/* loadUserAllPostRequest */.LL)(id, lastId));
    }
  }, [inView, hasMorePosts, loadUserAllPostLoading, mainPosts, id]);
  const noUserStyle = (0,external_react_.useMemo)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: '40vh',
    fontSize: 15
  }), []);

  if (!userInfo) {
    return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: noUserStyle,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC0AC\uC6A9\uC790\uC785\uB2C8\uB2E4."
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Conditional/* default */.Z, {
      condition: !!userInfo,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: [userInfo.nickname, "\uB2D8 | SenStory"]
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: `${userInfo.nickname}님`
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:title",
          content: `${userInfo.nickname}님`
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:description",
          content: `${userInfo.nickname}님`
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:image",
          content: "http://localhost:3060/favicon.ico"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:url",
          content: `http://localhost:3060/user/${id}`
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_UserProfileForm, {
        userInfo: userInfo
      })]
    }), mainPosts.map(c => /*#__PURE__*/jsx_runtime_.jsx(PostCard/* default */.Z, {
      post: c,
      ref: hasMorePosts && !loadUserAllPostLoading ? ref : undefined
    }, c.id))]
  });
};

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(store => async ({
  req,
  params
}) => {
  const cookie = req ? req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  store.dispatch((0,loadUserAllPost/* loadUserAllPostRequest */.LL)(params.id));
  store.dispatch((0,loadMe/* loadMeRequest */.a4)());
  store.dispatch((0,loadUser/* loadUserRequest */.LE)(params.id));
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const _id_ = (User);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,442,53], () => (__webpack_exec__(8259)));
module.exports = __webpack_exports__;

})();