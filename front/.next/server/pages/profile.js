"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 9163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "swr"
const external_swr_namespaceObject = require("swr");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./store/configureStore.ts + 13 modules
var configureStore = __webpack_require__(6051);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./reducers/user/loadMe.ts
var loadMe = __webpack_require__(1130);
// EXTERNAL MODULE: ./reducers/user/randomUser.ts
var randomUser = __webpack_require__(8947);
// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 9 modules
var Layout = __webpack_require__(5394);
// EXTERNAL MODULE: ./components/common/MyProfileForm/index.tsx + 1 modules
var MyProfileForm = __webpack_require__(9810);
// EXTERNAL MODULE: ./components/common/CustomError/index.tsx + 1 modules
var CustomError = __webpack_require__(4370);
// EXTERNAL MODULE: ./reducers/user/changeNick.ts
var changeNick = __webpack_require__(7004);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./hocs/Conditional.tsx
var Conditional = __webpack_require__(1986);
// EXTERNAL MODULE: ./components/common/Modal/index.tsx + 1 modules
var Modal = __webpack_require__(7442);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/profile/ChangeButton/styles.ts


const ChangeEditBtn = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__ChangeEditBtn",
  componentId: "sc-1f35os3-0"
})(["border-radius:10px;margin-left:5px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/profile/ChangeButton/index.tsx




const ChangeButton = ({
  loading
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ChangeEditBtn, {
    type: "primary",
    htmlType: "submit",
    loading: loading,
    children: "\uBCC0\uACBD"
  });
};

/* harmony default export */ const profile_ChangeButton = (ChangeButton);
;// CONCATENATED MODULE: ./components/profile/NickEditForm/styles.ts


const NickFormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__NickFormWrapper",
  componentId: "sc-sr1prq-0"
})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}"]);
const NickInput = external_styled_components_default()(external_antd_.Input).withConfig({
  displayName: "styles__NickInput",
  componentId: "sc-sr1prq-1"
})(["font-size:16px;background-color:", ";border-color:gray;color:white;border-radius:10px;overflow:hidden;"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
;// CONCATENATED MODULE: ./components/profile/NickEditForm/index.tsx











const NickEditForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    changeNickLoading,
    changeNickFinish,
    changeNickError
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [nickname, onChangeNickname, setNickname] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.nickname) || '');
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const onToggleModal = (0,external_react_.useCallback)(() => {
    setModalOpen(prev => !prev);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (changeNickFinish) {
      onToggleModal();
    }
  }, [changeNickFinish]);
  (0,external_react_.useEffect)(() => {
    if (changeNickError) {
      alert(changeNickError);
    }
  }, [changeNickError]);

  if (nickname.length > 20) {
    setNickname(nickname.slice(0, 20));
    alert('닉네임은 최대 20자 입니다.');
  }

  const onSubmit = (0,external_react_.useCallback)(() => {
    if (!nickname || !nickname.trim()) {
      return alert('닉네임을 입력해주세요.');
    }

    if (nickname.includes(' ')) {
      return alert('닉네임에 빈칸을 포함할 수 없어요.');
    }

    dispatch((0,changeNick/* changeNickRequest */.uS)(nickname));
  }, [nickname]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NickFormWrapper, {
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "user-nickname",
      children: "\uB2C9\uB124\uC784"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NickInput, {
        name: "nickname",
        value: nickname,
        onChange: onChangeNickname,
        type: "text"
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_ChangeButton, {
        loading: changeNickLoading
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: modalOpen,
      children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "\uB2C9\uB124\uC784 \uBCC0\uACBD \uC644\uB8CC",
        onToggleModal: onToggleModal
      })
    })]
  });
};

/* harmony default export */ const profile_NickEditForm = (NickEditForm);
// EXTERNAL MODULE: ./reducers/user/changeMbti.ts
var changeMbti = __webpack_require__(3010);
;// CONCATENATED MODULE: ./components/profile/MbtiEditForm/styles.ts


const MbtiFormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__MbtiFormWrapper",
  componentId: "sc-z6n0wx-0"
})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}& select{flex:1;background-color:", ";border-radius:10px;color:white;font-size:16px;&:focus{outline:none;}}"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
;// CONCATENATED MODULE: ./components/profile/MbtiEditForm/index.tsx











const MbtiEditForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    changeMbtiFinish,
    changeMbtiLoading
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [mbti, onChangeMbti] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.mbti) || '');
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const onToggleModal = (0,external_react_.useCallback)(() => {
    setModalOpen(prev => !prev);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (changeMbtiFinish) {
      onToggleModal();
    }
  }, [changeMbtiFinish]);
  const onSubmit = (0,external_react_.useCallback)(() => {
    dispatch((0,changeMbti/* changeMbtiRequest */.Vm)(mbti));
  }, [mbti]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MbtiFormWrapper, {
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "user-mbti",
      children: "MBTI"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
        value: mbti,
        name: "mbtis",
        id: "mbti-select",
        onChange: onChangeMbti,
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "x",
          children: "---- MBTI \uC120\uD0DD ----"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ISTJ",
          children: "ISTJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ISTP",
          children: "ISTP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ISFJ",
          children: "ISFJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ISFP",
          children: "ISFP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "INTJ",
          children: "INTJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "INTP",
          children: "INTP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "INFJ",
          children: "INFJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "INFP",
          children: "INFP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ESTJ",
          children: "ESTJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ESTP",
          children: "ESTP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ESFJ",
          children: "ESFJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ESFP",
          children: "ESFP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ENTJ",
          children: "ENTJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ENTP",
          children: "ENTP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ENFJ",
          children: "ENFJ"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "ENFP",
          children: "ENFP"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_ChangeButton, {
        loading: changeMbtiLoading
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: modalOpen,
      children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "MBTI \uBCC0\uACBD \uC644\uB8CC",
        onToggleModal: onToggleModal
      })
    })]
  });
};

/* harmony default export */ const profile_MbtiEditForm = (MbtiEditForm);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./reducers/user/unfollow.ts
var unfollow = __webpack_require__(5393);
// EXTERNAL MODULE: ./reducers/user/removeFollower.ts
var removeFollower = __webpack_require__(3797);
;// CONCATENATED MODULE: ./components/profile/FollowList/styles.ts


const BtnGradient = (0,external_styled_components_.css)(["background:linear-gradient(0deg,#607882,gray);"]);
const MoreButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__MoreButtonWrapper",
  componentId: "sc-1nluqhd-0"
})(["text-align:center;margin:10px 0px;& Button{", " border-radius:40px;border-color:gray;color:white;:hover{", "}:focus{", "}}"], BtnGradient, BtnGradient, BtnGradient);
const ListWrapper = external_styled_components_default()(external_antd_.List).withConfig({
  displayName: "styles__ListWrapper",
  componentId: "sc-1nluqhd-1"
})(["margin-bottom:20px;border-radius:10px;background-color:#404042;border-color:gray;& div{color:white;}"]);
const FollowListWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__FollowListWrapper",
  componentId: "sc-1nluqhd-2"
})(["flex:1;display:grid;grid-template-columns:2fr 1fr;"]);
const FollowInfoSection = external_styled_components_default().div.withConfig({
  displayName: "styles__FollowInfoSection",
  componentId: "sc-1nluqhd-3"
})(["display:flex;align-items:center;& div:first-child{margin-right:5px;}"]);
const FollowDelSection = external_styled_components_default().div.withConfig({
  displayName: "styles__FollowDelSection",
  componentId: "sc-1nluqhd-4"
})(["display:flex;justify-content:center;align-items:center;"]);
;// CONCATENATED MODULE: ./components/profile/FollowList/index.tsx











const FollowList = ({
  header,
  data,
  onClickMore,
  loading,
  mutate
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const onCancel = (0,external_react_.useCallback)(id => () => {
    if (header === '팔로잉') {
      dispatch((0,unfollow/* unfollowRequest */.Sp)(id));
      mutate(prev => prev.filter(data => data.id !== id));
    }

    dispatch((0,removeFollower/* removeFollowerRequest */.qG)(id));
    mutate(prev => prev.filter(data => data.id !== id));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(ListWrapper, {
    size: "small",
    header: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: header
    }),
    loadMore: /*#__PURE__*/jsx_runtime_.jsx(MoreButtonWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClickMore,
        loading: loading,
        children: "More"
      })
    }),
    bordered: true,
    dataSource: data,
    renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FollowListWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FollowInfoSection, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/user/${item.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: item.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                  src: `${item.avatar}`
                }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                  children: item.nickname[0]
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: item.nickname
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(FollowDelSection, {
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.StopOutlined, {
            onClick: onCancel(item.id)
          }, "stop")
        })]
      })
    })
  });
};

/* harmony default export */ const profile_FollowList = (FollowList);
;// CONCATENATED MODULE: ./components/profile/AreaEditForm/styles.ts


const AreaFormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__AreaFormWrapper",
  componentId: "sc-17dfuct-0"
})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}"]);
const AreaInput = external_styled_components_default()(external_antd_.Input).withConfig({
  displayName: "styles__AreaInput",
  componentId: "sc-17dfuct-1"
})(["font-size:16px;background-color:", ";border-color:gray;color:white;border-radius:10px;overflow:hidden;"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
// EXTERNAL MODULE: ./reducers/user/changeArea.ts
var changeArea = __webpack_require__(4313);
;// CONCATENATED MODULE: ./components/profile/AreaEditForm/index.tsx











const AreaEditForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    changeAreaLoading,
    changeAreaFinish
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [area, onChangeArea, setArea] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.area) || '');
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const onToggleModal = (0,external_react_.useCallback)(() => {
    setModalOpen(prev => !prev);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (changeAreaFinish) {
      onToggleModal();
    }
  }, [changeAreaFinish]);

  if (area.length > 10) {
    setArea(area.slice(0, 10));
    alert('최대 10자로 입력해주세요.'); // return;
  }

  const onSubmit = (0,external_react_.useCallback)(() => {
    dispatch((0,changeArea/* changeAreaRequest */.wG)(area));
  }, [area]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AreaFormWrapper, {
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "user-area",
      children: "\uD65C\uB3D9 \uC9C0\uC5ED"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(AreaInput, {
        name: "area",
        value: area,
        onChange: onChangeArea,
        type: "text",
        placeholder: '활동지역 (최대 10자)'
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_ChangeButton, {
        loading: changeAreaLoading
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: modalOpen,
      children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "\uD65C\uB3D9\uC9C0\uC5ED \uBCC0\uACBD \uC644\uB8CC",
        onToggleModal: onToggleModal
      })
    })]
  });
};

/* harmony default export */ const profile_AreaEditForm = (AreaEditForm);
;// CONCATENATED MODULE: ./components/profile/IntroEditForm/styles.ts


const IntroFormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "styles__IntroFormWrapper",
  componentId: "sc-1ml1yvd-0"
})(["margin:20px 0px;& label{color:white;}"]);
const IntroInputWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__IntroInputWrapper",
  componentId: "sc-1ml1yvd-1"
})(["margin-top:5px;display:flex;"]);
const IntroButton = external_styled_components_default().div.withConfig({
  displayName: "styles__IntroButton",
  componentId: "sc-1ml1yvd-2"
})(["display:flex;justify-content:flex-end;& Button{border-radius:10px;}"]);
// EXTERNAL MODULE: ./reducers/user/changeIntro.ts
var changeIntro = __webpack_require__(5371);
;// CONCATENATED MODULE: ./components/profile/IntroEditForm/index.tsx











const IntroEditForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    changeIntroLoading,
    changeIntroFinish
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [intro, onChangeIntro, setIntro] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.intro) || '');
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const onToggleModal = (0,external_react_.useCallback)(() => {
    setModalOpen(prev => !prev);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (changeIntroFinish) {
      onToggleModal();
    }
  }, [changeIntroFinish]);

  if (intro.length > 100) {
    setIntro(intro.slice(0, 100));
    alert('100자 이내로 입력해주세요.');
  }

  const onSubmit = (0,external_react_.useCallback)(() => {
    dispatch((0,changeIntro/* changeIntroRequest */.Pl)(intro));
  }, [intro]);
  const introStyle = (0,external_react_.useMemo)(() => ({
    marginBottom: 8,
    backgroundColor: '#404042',
    borderColor: 'gray',
    color: 'white',
    borderRadius: 10,
    fontSize: 16
  }), []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(IntroFormWrapper, {
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "user-intro",
      children: "\uB0B4 \uC18C\uAC1C"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(IntroInputWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.TextArea, {
        style: introStyle,
        value: intro,
        onChange: onChangeIntro,
        maxLength: 100,
        placeholder: "\uC18C\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (\uCD5C\uB300 100\uC790)"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(IntroButton, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        htmlType: "submit",
        loading: changeIntroLoading,
        children: "\uB4F1\uB85D"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: modalOpen,
      children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "\uB0B4 \uC18C\uAC1C \uB4F1\uB85D \uC644\uB8CC",
        onToggleModal: onToggleModal
      })
    })]
  });
};

/* harmony default export */ const profile_IntroEditForm = (IntroEditForm);
// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__(4299);
;// CONCATENATED MODULE: ./pages/profile.tsx























const fetcher = url => external_axios_default().get(url, {
  withCredentials: true
}).then(result => result.data);

const Profile = () => {
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: followerLimit,
    1: setFollowerLimit
  } = (0,external_react_.useState)(3);
  const {
    0: followingLimit,
    1: setFollowingLimit
  } = (0,external_react_.useState)(3);
  const {
    data: followerData,
    error: followerError,
    mutate: mutateFollower
  } = external_swr_default()(`${config/* backUrl */.T}/user/followers?limit=${followerLimit}`, fetcher);
  const {
    data: followingData,
    error: followingError,
    mutate: mutateFollowing
  } = external_swr_default()(`${config/* backUrl */.T}/user/followings?limit=${followingLimit}`, fetcher);
  (0,external_react_.useEffect)(() => {
    if (!(me && me !== null && me !== void 0 && me.id)) {
      router_default().push('/login');
    }
  }, [me && (me === null || me === void 0 ? void 0 : me.id)]);
  const loadMoreFollowings = (0,external_react_.useCallback)(() => {
    setFollowingLimit(prev => prev + 3);
  }, []);
  const loadMoreFollowers = (0,external_react_.useCallback)(() => {
    setFollowerLimit(prev => prev + 3);
  }, []);

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return /*#__PURE__*/jsx_runtime_.jsx(CustomError/* default */.Z, {
      errorTitle: "\uC5D0\uB7EC \uBC1C\uC0DD!",
      errorContent: "\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Profile | SenStory"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
      profile: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(MyProfileForm/* default */.Z, {
        hide: true
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_NickEditForm, {}), /*#__PURE__*/jsx_runtime_.jsx(profile_MbtiEditForm, {}), /*#__PURE__*/jsx_runtime_.jsx(profile_AreaEditForm, {}), /*#__PURE__*/jsx_runtime_.jsx(profile_IntroEditForm, {}), /*#__PURE__*/jsx_runtime_.jsx(profile_FollowList, {
        header: "\uD314\uB85C\uC789",
        data: followingData,
        onClickMore: loadMoreFollowings,
        loading: !followingData && !followingError,
        mutate: mutateFollowing
      }), /*#__PURE__*/jsx_runtime_.jsx(profile_FollowList, {
        header: "\uD314\uB85C\uC6CC",
        data: followerData,
        onClickMore: loadMoreFollowers,
        loading: !followerData && followerError,
        mutate: mutateFollower
      })]
    })]
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
  store.dispatch((0,randomUser/* randomUserRequest */.hL)());
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const profile = (Profile);

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
var __webpack_exports__ = __webpack_require__.X(0, [61,51,790,442,370], () => (__webpack_exec__(9163)));
module.exports = __webpack_exports__;

})();