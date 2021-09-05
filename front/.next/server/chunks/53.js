"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 5053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post_PostCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(9318);
// EXTERNAL MODULE: ./utils/index.ts
var utils = __webpack_require__(3196);
// EXTERNAL MODULE: ./hocs/Conditional.tsx
var Conditional = __webpack_require__(1986);
// EXTERNAL MODULE: ./components/common/Modal/index.tsx + 1 modules
var Modal = __webpack_require__(7442);
// EXTERNAL MODULE: ./components/common/FollowButton/index.tsx + 1 modules
var FollowButton = __webpack_require__(3469);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/post/ImagesZoom/styles.ts


const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-1ezakj0-0"
})(["position:fixed;z-index:1000;top:0;bottom:0;left:0;right:0;"]);
const CloseBtn = external_styled_components_default()(icons_.CloseOutlined).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-1ezakj0-1"
})(["position:absolute;font-size:20px;right:10px;top:10px;padding:10px;line-height:14px;cursor:pointer;z-index:999;background-color:gray;color:", ";border-radius:100px;box-shadow:2px 2px 2px rgba(0,0,0,0.8);"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
const SlickWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-1ezakj0-2"
})(["height:100%;background:#090909;"]);
const ImageWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImageWrapper",
  componentId: "sc-1ezakj0-3"
})(["text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const Indicator = external_styled_components_default().div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-1ezakj0-4"
})(["display:flex;text-align:center;position:absolute;top:15px;left:15px;z-index:999;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background-color:", ";box-shadow:2px 2px 2px rgba(0,0,0,0.8);display:inline-block;text-align:center;color:white;font-size:15px;}"], ({
  theme
}) => theme.color.MIDDLE_GRAY);
const Global = (0,external_styled_components_.createGlobalStyle)([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/post/ImagesZoom/index.tsx






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Overlay, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Global, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseBtn, {
        onClick: onClose
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SlickWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `${v.src.replace(/\/thumb\//, '/original/')}`,
              alt: v.src
            })
          }, v.src))
        }), /*#__PURE__*/jsx_runtime_.jsx(Indicator, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [currentSlide + 1, " / ", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const post_ImagesZoom = (ImagesZoom);
;// CONCATENATED MODULE: ./components/post/PostImages/styles.ts

const imgStyle = (0,external_styled_components_.css)(["width:100%;height:100%;"]);
const hoverOpacity = (0,external_styled_components_.css)(["transition:0.5s;&:hover{opacity:0.7;}"]);
const ImgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-1kv8fqt-0"
})(["display:flex;cursor:pointer;width:100%;max-height:500px;"]);
const SigleImg = external_styled_components_default().img.withConfig({
  displayName: "styles__SigleImg",
  componentId: "sc-1kv8fqt-1"
})(["cursor:pointer;", ""], hoverOpacity);
const LeftImg = external_styled_components_default().div.withConfig({
  displayName: "styles__LeftImg",
  componentId: "sc-1kv8fqt-2"
})(["border-right:1px solid ", ";", " width:50%;& img{", "}"], ({
  theme
}) => theme.color.DARK_GRAY, hoverOpacity, imgStyle);
const RightImg = external_styled_components_default().div.withConfig({
  displayName: "styles__RightImg",
  componentId: "sc-1kv8fqt-3"
})(["border-left:1px solid ", ";", " width:50%;& img{", "}"], ({
  theme
}) => theme.color.DARK_GRAY, hoverOpacity, imgStyle);
const MoreImgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__MoreImgWrapper",
  componentId: "sc-1kv8fqt-4"
})(["position:relative;display:flex;justify-content:center;align-items:center;& img{opacity:0.5;}"]);
const MoreTextWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__MoreTextWrapper",
  componentId: "sc-1kv8fqt-5"
})(["position:absolute;& span{color:white;}"]);
const MoreText = external_styled_components_default().span.withConfig({
  displayName: "styles__MoreText",
  componentId: "sc-1kv8fqt-6"
})(["font-size:20px;"]);
;// CONCATENATED MODULE: ./components/post/PostImages/index.tsx









const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = (0,external_react_.useState)(false);
  const onZoom = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SigleImg, {
        role: "presentation",
        src: `${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
        condition: showImagesZoom,
        children: /*#__PURE__*/jsx_runtime_.jsx(post_ImagesZoom, {
          images: images,
          onClose: onClose
        })
      })]
    });
  }

  if (images.length === 2) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImgWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(LeftImg, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          role: "presentation",
          src: `${images[0].src}`,
          alt: images[0].src,
          onClick: onZoom
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RightImg, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          role: "presentation",
          src: `${images[1].src}`,
          alt: images[1].src,
          onClick: onZoom
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
        condition: showImagesZoom,
        children: /*#__PURE__*/jsx_runtime_.jsx(post_ImagesZoom, {
          images: images,
          onClose: onClose
        })
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ImgWrapper, {
      onClick: onZoom,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LeftImg, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          role: "presentation",
          src: `${images[0].src}`,
          alt: images[0].src
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RightImg, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreImgWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            role: "presentation",
            src: `${images[1].src}`,
            alt: images[1].src
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreTextWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreText, {
              children: [images.length - 1, "\uC7A5"]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: showImagesZoom,
      children: /*#__PURE__*/jsx_runtime_.jsx(post_ImagesZoom, {
        images: images,
        onClose: onClose
      })
    })]
  });
};

/* harmony default export */ const post_PostImages = (PostImages);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./reducers/post/addComment.ts
var addComment = __webpack_require__(4123);
;// CONCATENATED MODULE: ./components/post/CommentWriteForm/styles.ts


const WriteWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__WriteWrapper",
  componentId: "sc-s99wc9-0"
})(["display:flex;"]);
const WriteInput = external_styled_components_default()(external_antd_.Input).withConfig({
  displayName: "styles__WriteInput",
  componentId: "sc-s99wc9-1"
})(["font-size:16px;width:100%;height:40px;background-color:gray;border-radius:10px;border-color:#4e4e4f;color:white;"]);
const WriteButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__WriteButton",
  componentId: "sc-s99wc9-2"
})(["height:40px;border-radius:10px;margin-left:5px;"]);
;// CONCATENATED MODULE: ./components/post/CommentWriteForm/index.tsx










const CommentWriteForm = ({
  post
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const id = (0,external_react_redux_.useSelector)(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentFinish,
    addCommentLoading
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = (0,useInput/* default */.Z)('');
  (0,external_react_.useEffect)(() => {
    if (addCommentFinish) {
      setCommentText('');
    }
  }, [addCommentFinish]);
  const onSubmitComment = (0,external_react_.useCallback)(() => {
    if (!id) {
      setCommentText('');
      return alert('로그인이 필요합니다.');
    }

    if (!commentText || !commentText.trim()) {
      return alert('내용을 입력해주세요.');
    }

    dispatch((0,addComment/* addCommentRequest */.Pc)({
      content: commentText,
      postId: post.id,
      userId: id
    }));
  }, [commentText, id]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(WriteWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(WriteInput, {
          value: commentText,
          onChange: onChangeCommentText,
          placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694."
        }), /*#__PURE__*/jsx_runtime_.jsx(WriteButton, {
          type: "primary",
          htmlType: "submit",
          loading: addCommentLoading,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EditFilled, {})
        })]
      })
    })
  });
};

/* harmony default export */ const post_CommentWriteForm = (CommentWriteForm);
;// CONCATENATED MODULE: ./components/post/PostContents/styles.ts


const TagWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__TagWrapper",
  componentId: "sc-1sbzb8t-0"
})(["display:flex;"]);
const PostContent = external_styled_components_default().p.withConfig({
  displayName: "styles__PostContent",
  componentId: "sc-1sbzb8t-1"
})(["color:white;margin-right:3px;"]);
const PostEditWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__PostEditWrapper",
  componentId: "sc-1sbzb8t-2"
})(["display:flex;flex:1;"]);
const PostEditInput = external_styled_components_default()(external_antd_.Input.TextArea).withConfig({
  displayName: "styles__PostEditInput",
  componentId: "sc-1sbzb8t-3"
})(["background-color:", ";border-color:", ";color:white;border-radius:10px;"], ({
  theme
}) => theme.color.LIGHT_GRAY, ({
  theme
}) => theme.color.LIGHT_GRAY);
const EditBtnWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__EditBtnWrapper",
  componentId: "sc-1sbzb8t-4"
})(["margin-left:5px;& Button{background-color:#1890ff;color:white;border:none;border-radius:10px;&:hover{background-color:#4ea1ed;color:white;}}& Button:last-child{background-color:#6b7987;}& div{height:5px;}"]);
;// CONCATENATED MODULE: ./components/post/PostContents/index.tsx









const PostContents = ({
  postData,
  editMode = false,
  onChangePost,
  onCancelChange
}) => {
  const {
    updatePostLoading,
    updatePostFinish
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const {
    0: textEdit,
    1: setTextEdit
  } = (0,external_react_.useState)(postData);
  const onChangeText = (0,external_react_.useCallback)(e => {
    setTextEdit(e.target.value);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (updatePostFinish) {
      onCancelChange();
    }
  }, [updatePostFinish]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: editMode,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostEditWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PostEditInput, {
          value: textEdit,
          onChange: onChangeText
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EditBtnWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            loading: updatePostLoading,
            onClick: onChangePost(textEdit),
            children: "\uC644\uB8CC"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: onCancelChange,
            children: "\uCDE8\uC18C"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: !editMode,
      children: postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/g)) {
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/hashtag/${v.slice(1)}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: v
            })
          }, i);
        }

        return /*#__PURE__*/jsx_runtime_.jsx(PostContent, {
          children: v
        }, i);
      })
    })]
  });
};

/* harmony default export */ const post_PostContents = (PostContents);
;// CONCATENATED MODULE: ./components/post/PostCard/styles.ts


const cardStyle = (0,external_styled_components_.css)(["overflow:hidden;background-color:#2d2d2e;"]);
const PostCardWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__PostCardWrapper",
  componentId: "sc-1dmxedo-0"
})(["margin-top:20px;margin-bottom:20px;"]);
const RepostHeader = external_styled_components_default().div.withConfig({
  displayName: "styles__RepostHeader",
  componentId: "sc-1dmxedo-1"
})(["background-color:#39393b;color:white;border-top-left-radius:10px;border-top-right-radius:10px;padding:8px 10px;"]);
const RepostTitleWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__RepostTitleWrapper",
  componentId: "sc-1dmxedo-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-right:10px;"]);
const RepostTitle = external_styled_components_default().span.withConfig({
  displayName: "styles__RepostTitle",
  componentId: "sc-1dmxedo-3"
})(["color:#c5c5c7;margin-left:5px;"]);
const CommonCard = external_styled_components_default()(external_antd_.Card).withConfig({
  displayName: "styles__CommonCard",
  componentId: "sc-1dmxedo-4"
})(["", " border:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-left-radius:", ";border-top-right-radius:", ";"], cardStyle, props => props.radius, props => props.radius);
const LikeActive = external_styled_components_default().div.withConfig({
  displayName: "styles__LikeActive",
  componentId: "sc-1dmxedo-5"
})(["color:red;"]);
const CommentActive = external_styled_components_default().div.withConfig({
  displayName: "styles__CommentActive",
  componentId: "sc-1dmxedo-6"
})(["color:", ";"], ({
  theme
}) => theme.color.MAIN);
const IconCount = external_styled_components_default().span.withConfig({
  displayName: "styles__IconCount",
  componentId: "sc-1dmxedo-7"
})(["font-size:12px;font-style:italic;"]);
const InActive = external_styled_components_default().div.withConfig({
  displayName: "styles__InActive",
  componentId: "sc-1dmxedo-8"
})(["color:white;&:hover{color:", ";transition:0.3s;}"], ({
  theme
}) => theme.color.MAIN);
const RepostInnerCard = external_styled_components_default()(external_antd_.Card).withConfig({
  displayName: "styles__RepostInnerCard",
  componentId: "sc-1dmxedo-9"
})(["", " border-radius:10px;border:4px solid #404042;"], cardStyle);
const PostAuthor = external_styled_components_default().div.withConfig({
  displayName: "styles__PostAuthor",
  componentId: "sc-1dmxedo-10"
})(["display:flex;justify-content:space-between;align-items:center;color:white;"]);
const PostDate = external_styled_components_default().div.withConfig({
  displayName: "styles__PostDate",
  componentId: "sc-1dmxedo-11"
})(["display:flex;justify-content:flex-end;color:", ";padding-top:10px;"], ({
  theme
}) => theme.color.LIGHT_GRAY);
const CommentList = external_styled_components_default()(external_antd_.List).withConfig({
  displayName: "styles__CommentList",
  componentId: "sc-1dmxedo-12"
})(["padding:0px 20px;margin-top:10px;margin-bottom:30px;color:white;background-color:", ";border-radius:10px;& li:not(:last-child){border-bottom:0.5px solid rgba(255,255,255,0.1);}"], ({
  theme
}) => theme.color.MIDDLE_GRAY); // ----- PostDropdown -----

const DropdownWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__DropdownWrapper",
  componentId: "sc-1dmxedo-13"
})(["background-color:gray;display:flex;flex-direction:column;padding:8px 10px;border-radius:10px;"]);
const DropdownButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "styles__DropdownButton",
  componentId: "sc-1dmxedo-14"
})(["background-color:", ";color:white;margin:5px 0px;border-radius:10px;border-color:white;&:hover{background-color:", ";border-color:", ";color:white;}"], props => props.edit === 'edit' ? '#1890FF' : '#eb7575', props => props.edit === 'edit' ? '' : '#e89b9b', props => props.edit === 'edit' ? '' : '#e89b9b');
;// CONCATENATED MODULE: ./components/post/PostCard/PostDropdown.tsx







const PostDropdown = ({
  onRemovePost,
  removePostLoading,
  isRepost,
  onClickUpdate
}) => {
  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)(DropdownWrapper, {
    children: [isRepost && /*#__PURE__*/jsx_runtime_.jsx(DropdownButton, {
      edit: "edit",
      type: "primary",
      onClick: onClickUpdate,
      children: "\uC218\uC815"
    }), /*#__PURE__*/jsx_runtime_.jsx(DropdownButton, {
      onClick: onRemovePost,
      loading: removePostLoading,
      children: "\uC0AD\uC81C"
    })]
  });

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Space, {
    direction: "vertical",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Space, {
      wrap: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
        trigger: ['click'],
        overlay: menu,
        placement: "bottomCenter",
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EllipsisOutlined, {})
      })
    })
  });
};

/* harmony default export */ const PostCard_PostDropdown = (PostDropdown);
;// CONCATENATED MODULE: ./components/post/CommentItem/styles.ts

const CommentAuthor = external_styled_components_default().div.withConfig({
  displayName: "styles__CommentAuthor",
  componentId: "sc-js2da6-0"
})(["padding:3px 5px;border-radius:5px;color:white;background-color:", ";&:hover{color:white;}"], ({
  theme
}) => theme.color.DARK_GRAY);
const CommentDate = external_styled_components_default().div.withConfig({
  displayName: "styles__CommentDate",
  componentId: "sc-js2da6-1"
})(["display:flex;justify-content:flex-end;color:", ";"], ({
  theme
}) => theme.color.LIGHT_GRAY);
;// CONCATENATED MODULE: ./components/post/CommentItem/index.tsx









const CommentItem = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Comment, {
      author: /*#__PURE__*/jsx_runtime_.jsx(CommentAuthor, {
        children: item.User.nickname
      }),
      avatar: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/user/${item.User.id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: item.User.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
            src: `${item.User.avatar}`
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
            children: item.User.nickname[0]
          })
        })
      }),
      content: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [item.content, /*#__PURE__*/jsx_runtime_.jsx(CommentDate, {
          children: (0,utils/* fromNow */.Zh)(item.createdAt)
        })]
      })
    })
  });
};

/* harmony default export */ const post_CommentItem = (CommentItem);
// EXTERNAL MODULE: ./reducers/post/removePost.ts
var removePost = __webpack_require__(6692);
// EXTERNAL MODULE: ./reducers/post/updatePost.ts
var updatePost = __webpack_require__(8949);
// EXTERNAL MODULE: ./reducers/post/likePost.ts
var likePost = __webpack_require__(4487);
// EXTERNAL MODULE: ./reducers/post/unlikePost.ts
var unlikePost = __webpack_require__(8576);
// EXTERNAL MODULE: ./reducers/post/repost.ts
var repost = __webpack_require__(2493);
// EXTERNAL MODULE: ./config/config.ts
var config = __webpack_require__(4299);
;// CONCATENATED MODULE: ./components/post/PostCard/index.tsx

























const PostCard = /*#__PURE__*/(0,external_react_.forwardRef)(({
  post
}, ref) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const id = (0,external_react_redux_.useSelector)(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    removePostLoading
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const liked = post.Likers.find(v => v.id === id);
  const {
    0: editMode,
    1: setEditMode
  } = (0,external_react_.useState)(false);
  const {
    0: commentOpen,
    1: setCommentOpen
  } = (0,external_react_.useState)(false);
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const onToggleModal = (0,external_react_.useCallback)(() => {
    setModalOpen(prev => !prev);
  }, []);
  const onToggleComment = (0,external_react_.useCallback)(() => {
    setCommentOpen(prev => !prev);
  }, []);
  const onLike = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch((0,likePost/* likePostRequest */.vR)(post.id));
  }, [id]);
  const onUnlike = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch((0,unlikePost/* unlikePostRequest */.ao)(post.id));
  }, [id]);
  const onRemovePost = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch((0,removePost/* removePostRequest */.VE)(post.id));
  }, [id]);
  const onRepost = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch((0,repost/* repostRequest */.wh)(post.id));
  }, [id]);
  const onClickUpdate = (0,external_react_.useCallback)(() => {
    setEditMode(true);
  }, []);
  const onCancelChange = (0,external_react_.useCallback)(() => {
    setEditMode(false);
  }, []);
  const onChangePost = (0,external_react_.useCallback)(textEdit => () => {
    dispatch((0,updatePost/* updatePostRequest */.P)({
      PostId: post.id,
      content: textEdit
    }));
  }, [post]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostCardWrapper, {
    children: [post.RepostId && post.Repost && /*#__PURE__*/jsx_runtime_.jsx(RepostHeader, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(RepostTitleWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/user/${post.User.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: post.User.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                src: `${post.User.avatar}`
              }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                children: post.User.nickname[0]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(RepostTitle, {
            children: [post.User.nickname, "\uB2D8\uC774 \uACF5\uC720\uD588\uC2B5\uB2C8\uB2E4."]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
          condition: id && post.User.id === id,
          children: /*#__PURE__*/jsx_runtime_.jsx(PostCard_PostDropdown, {
            onRemovePost: onRemovePost,
            removePostLoading: removePostLoading
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CommonCard, {
      radius: post.RepostId !== null ? '0px' : '10px',
      cover: post.Images[0] && /*#__PURE__*/jsx_runtime_.jsx(post_PostImages, {
        images: post.Images
      }),
      actions: [liked ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(LikeActive, {
        onClick: onUnlike,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.HeartFilled, {}, "like"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconCount, {
          children: [" ", post.Likers.length]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(InActive, {
        onClick: onLike,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.HeartOutlined, {}, "like"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconCount, {
          children: [" ", post.Likers.length]
        })]
      }), commentOpen ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(CommentActive, {
        onClick: onToggleComment,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MessageFilled, {}, "comment"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconCount, {
          children: [" ", post.Comments.length]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(InActive, {
        onClick: onToggleComment,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MessageOutlined, {}, "comment"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconCount, {
          children: [" ", post.Comments.length]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(icons_.RetweetOutlined, {
        onClick: onRepost
      }, "re"), /*#__PURE__*/jsx_runtime_.jsx(external_react_copy_to_clipboard_.CopyToClipboard, {
        text: `${config/* frontUrl */.Y}/post/${post.id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ExportOutlined, {
          onClick: onToggleModal
        }, "share")
      })],
      children: post.RepostId && post.Repost ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(RepostInnerCard, {
          cover: post.Repost.Images[0] && /*#__PURE__*/jsx_runtime_.jsx(post_PostImages, {
            images: post.Repost.Images
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
            avatar: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/user/${post.Repost.User.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: post.Repost.User.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                  src: `${post.Repost.User.avatar}`
                }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
                  children: post.User.nickname[0]
                })
              })
            }),
            title: /*#__PURE__*/jsx_runtime_.jsx(PostAuthor, {
              children: post.Repost.User.nickname
            }),
            description: /*#__PURE__*/jsx_runtime_.jsx(post_PostContents, {
              postData: post.Repost.content,
              onChangePost: onChangePost,
              onCancelChange: onCancelChange
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(PostDate, {
          children: (0,utils/* fromNow */.Zh)(post.createdAt)
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
        avatar: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/user/${post.User.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: post.User.avatar ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
              src: `${post.User.avatar}`
            }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
              children: post.User.nickname[0]
            })
          })
        }),
        title: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostAuthor, {
          children: [post.User.nickname, /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
            condition: id && post.User.id === id,
            children: /*#__PURE__*/jsx_runtime_.jsx(PostCard_PostDropdown, {
              onRemovePost: onRemovePost,
              removePostLoading: removePostLoading,
              isRepost: !post.RepostId,
              onClickUpdate: onClickUpdate
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
            condition: id,
            children: /*#__PURE__*/jsx_runtime_.jsx(FollowButton/* default */.Z, {
              user: post.User
            })
          })]
        }),
        description: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(post_PostContents, {
            postData: post.content,
            editMode: editMode,
            onChangePost: onChangePost,
            onCancelChange: onCancelChange
          }), /*#__PURE__*/jsx_runtime_.jsx(PostDate, {
            children: (0,utils/* fromNow */.Zh)(post.createdAt)
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: commentOpen,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(post_CommentWriteForm, {
          post: post
        }), /*#__PURE__*/jsx_runtime_.jsx(CommentList, {
          itemLayout: "horizontal",
          dataSource: post.Comments,
          renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(post_CommentItem, {
            item
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Conditional/* default */.Z, {
      condition: modalOpen,
      children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        title: "\uAC8C\uC2DC\uAE00 \uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",
        onToggleModal: onToggleModal
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: ref
    })]
  });
});
/* harmony default export */ const post_PostCard = (PostCard);

/***/ }),

/***/ 3196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zh": () => (/* binding */ fromNow),
/* harmony export */   "m2": () => (/* binding */ todayDot),
/* harmony export */   "EB": () => (/* binding */ todayOnlyNum)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2289);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_locale_ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5470);
/* harmony import */ var dayjs_locale_ko__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ko__WEBPACK_IMPORTED_MODULE_2__);



dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale('ko');
const fromNow = createdAt => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(createdAt).locale('ko').fromNow();
const todayDot = createdAt => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(createdAt).format('YYYY.MM.DD');
const todayOnlyNum = createdAt => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(createdAt).format('YYYY MM DD');

/***/ })

};
;