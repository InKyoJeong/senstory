"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{7442:function(e,n,t){t.d(n,{Z:function(){return a}});t(7294);var o=t(9508),i=t(8222),r=t(9163),s=r.ZP.div.withConfig({displayName:"styles__ModalOverlay",componentId:"sc-11iz77u-0"})(["position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.7);z-index:999;"]),c=r.ZP.div.withConfig({displayName:"styles__ModalForm",componentId:"sc-11iz77u-1"})(["position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;top:30%;left:50%;width:40%;padding:30px;transform:translate(-50%,-50%);background-color:#d9d7d7;border-radius:10px;animation:fadeIn 0.7s;& div{margin-bottom:15px;font-weight:bolder;color:",";}& Button{border-radius:10px;width:30%;}@media screen and (max-width:992px){width:80%;& Button{width:50%;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}"],(function(e){return e.theme.color.BLACK})),d=t(5893),a=function(e){var n=e.onToggleModal,t=e.title;return(0,d.jsx)(s,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)("div",{children:t}),(0,d.jsx)(i.Z,{type:"primary",onClick:n,children:(0,d.jsx)(o.Z,{})})]})})}},5053:function(e,n,t){t.d(n,{Z:function(){return De}});var o=t(7294),i=t(9226),r=t(1664),s=t(8453),c=t(6040),d=t(7569),a=t(7206),l=t(1935),p=t(5491),x=t(574),h=t(924),m=t(4855),u=t(3196),f=t(1986),g=t(7442),j=t(3469),y=t(9101),C=t(6066),v=t(9163),b=t(4549),_=v.ZP.div.withConfig({displayName:"styles__Overlay",componentId:"sc-1ezakj0-0"})(["position:fixed;z-index:1000;top:0;bottom:0;left:0;right:0;"]),Z=(0,v.ZP)(b.Z).withConfig({displayName:"styles__CloseBtn",componentId:"sc-1ezakj0-1"})(["position:absolute;font-size:20px;right:10px;top:10px;padding:10px;line-height:14px;cursor:pointer;z-index:999;background-color:gray;color:",";border-radius:100px;box-shadow:2px 2px 2px rgba(0,0,0,0.8);"],(function(e){return e.theme.color.MIDDLE_GRAY})),k=v.ZP.div.withConfig({displayName:"styles__SlickWrapper",componentId:"sc-1ezakj0-2"})(["height:100%;background:#090909;"]),w=v.ZP.div.withConfig({displayName:"styles__ImageWrapper",componentId:"sc-1ezakj0-3"})(["text-align:center;& img{margin:0 auto;max-height:750px;}"]),I=v.ZP.div.withConfig({displayName:"styles__Indicator",componentId:"sc-1ezakj0-4"})(["display:flex;text-align:center;position:absolute;top:15px;left:15px;z-index:999;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background-color:",";box-shadow:2px 2px 2px rgba(0,0,0,0.8);display:inline-block;text-align:center;color:white;font-size:15px;}"],(function(e){return e.theme.color.MIDDLE_GRAY})),P=(0,v.vJ)([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]),N=t(5893),R=function(e){var n=e.images,t=e.onClose,i=(0,o.useState)(0),r=i[0],s=i[1];return(0,N.jsxs)(_,{children:[(0,N.jsx)(P,{}),(0,N.jsx)("div",{children:(0,N.jsx)(Z,{onClick:t})}),(0,N.jsx)(k,{children:(0,N.jsxs)("div",{children:[(0,N.jsx)(C.Z,{initialSlide:0,afterChange:function(e){return s(e)},infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,children:n.map((function(e){return(0,N.jsx)(w,{children:(0,N.jsx)("img",{src:"".concat(e.src.replace(/\/thumb\//,"/original/")),alt:e.src})},e.src)}))}),(0,N.jsx)(I,{children:(0,N.jsxs)("div",{children:[r+1," / ",n.length]})})]})})]})},A=(0,v.iv)(["width:100%;height:100%;"]),U=(0,v.iv)(["transition:0.5s;&:hover{opacity:0.7;}"]),z=v.ZP.div.withConfig({displayName:"styles__ImgWrapper",componentId:"sc-1kv8fqt-0"})(["display:flex;cursor:pointer;width:100%;max-height:500px;"]),L=v.ZP.img.withConfig({displayName:"styles__SigleImg",componentId:"sc-1kv8fqt-1"})(["cursor:pointer;",""],U),D=v.ZP.div.withConfig({displayName:"styles__LeftImg",componentId:"sc-1kv8fqt-2"})(["border-right:1px solid ",";"," width:50%;& img{","}"],(function(e){return e.theme.color.DARK_GRAY}),U,A),M=v.ZP.div.withConfig({displayName:"styles__RightImg",componentId:"sc-1kv8fqt-3"})(["border-left:1px solid ",";"," width:50%;& img{","}"],(function(e){return e.theme.color.DARK_GRAY}),U,A),Y=v.ZP.div.withConfig({displayName:"styles__MoreImgWrapper",componentId:"sc-1kv8fqt-4"})(["position:relative;display:flex;justify-content:center;align-items:center;& img{opacity:0.5;}"]),T=v.ZP.div.withConfig({displayName:"styles__MoreTextWrapper",componentId:"sc-1kv8fqt-5"})(["position:absolute;& span{color:white;}"]),W=v.ZP.span.withConfig({displayName:"styles__MoreText",componentId:"sc-1kv8fqt-6"})(["font-size:20px;"]),G=function(e){var n=e.images,t=(0,o.useState)(!1),i=t[0],r=t[1],s=(0,o.useCallback)((function(){r(!0)}),[]),c=(0,o.useCallback)((function(){r(!1)}),[]);return 1===n.length?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L,{role:"presentation",src:"".concat(n[0].src),alt:n[0].src,onClick:s}),(0,N.jsx)(f.Z,{condition:i,children:(0,N.jsx)(R,{images:n,onClose:c})})]}):2===n.length?(0,N.jsxs)(z,{children:[(0,N.jsx)(D,{children:(0,N.jsx)("img",{role:"presentation",src:"".concat(n[0].src),alt:n[0].src,onClick:s})}),(0,N.jsx)(M,{children:(0,N.jsx)("img",{role:"presentation",src:"".concat(n[1].src),alt:n[1].src,onClick:s})}),(0,N.jsx)(f.Z,{condition:i,children:(0,N.jsx)(R,{images:n,onClose:c})})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(z,{onClick:s,children:[(0,N.jsx)(D,{children:(0,N.jsx)("img",{role:"presentation",src:"".concat(n[0].src),alt:n[0].src})}),(0,N.jsx)(M,{children:(0,N.jsxs)(Y,{children:[(0,N.jsx)("img",{role:"presentation",src:"".concat(n[1].src),alt:n[1].src}),(0,N.jsxs)(T,{children:[(0,N.jsx)(y.Z,{}),(0,N.jsxs)(W,{children:[n.length-1,"\uc7a5"]})]})]})})]}),(0,N.jsx)(f.Z,{condition:i,children:(0,N.jsx)(R,{images:n,onClose:c})})]})},E=t(9439),F=t(6511),S=t(8901),B=t(8427),q=t(4123),H=t(86),K=t(8222),O=v.ZP.div.withConfig({displayName:"styles__WriteWrapper",componentId:"sc-s99wc9-0"})(["display:flex;"]),J=(0,v.ZP)(H.Z).withConfig({displayName:"styles__WriteInput",componentId:"sc-s99wc9-1"})(["font-size:16px;width:100%;height:40px;background-color:gray;border-radius:10px;border-color:#4e4e4f;color:white;"]),V=(0,v.ZP)(K.Z).withConfig({displayName:"styles__WriteButton",componentId:"sc-s99wc9-2"})(["height:40px;border-radius:10px;margin-left:5px;"]),Q=function(e){var n=e.post,t=(0,i.I0)(),r=(0,i.v9)((function(e){var n;return null===(n=e.user.me)||void 0===n?void 0:n.id})),s=(0,i.v9)((function(e){return e.post})),c=s.addCommentFinish,d=s.addCommentLoading,a=(0,B.Z)(""),l=(0,E.Z)(a,3),p=l[0],x=l[1],h=l[2];(0,o.useEffect)((function(){c&&h("")}),[c]);var m=(0,o.useCallback)((function(){return r?p&&p.trim()?void t((0,q.Pc)({content:p,postId:n.id,userId:r})):alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):(h(""),alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))}),[p,r]);return(0,N.jsx)(S.Z,{onFinish:m,children:(0,N.jsx)(S.Z.Item,{children:(0,N.jsxs)(O,{children:[(0,N.jsx)(J,{value:p,onChange:x,placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694."}),(0,N.jsx)(V,{type:"primary",htmlType:"submit",loading:d,children:(0,N.jsx)(F.Z,{})})]})})})},X=v.ZP.div.withConfig({displayName:"styles__TagWrapper",componentId:"sc-1sbzb8t-0"})(["display:flex;"]),$=v.ZP.p.withConfig({displayName:"styles__PostContent",componentId:"sc-1sbzb8t-1"})(["color:white;margin-right:3px;"]),ee=v.ZP.div.withConfig({displayName:"styles__PostEditWrapper",componentId:"sc-1sbzb8t-2"})(["display:flex;flex:1;"]),ne=(0,v.ZP)(H.Z.TextArea).withConfig({displayName:"styles__PostEditInput",componentId:"sc-1sbzb8t-3"})(["background-color:",";border-color:",";color:white;border-radius:10px;"],(function(e){return e.theme.color.LIGHT_GRAY}),(function(e){return e.theme.color.LIGHT_GRAY})),te=v.ZP.div.withConfig({displayName:"styles__EditBtnWrapper",componentId:"sc-1sbzb8t-4"})(["margin-left:5px;& Button{background-color:#1890ff;color:white;border:none;border-radius:10px;&:hover{background-color:#4ea1ed;color:white;}}& Button:last-child{background-color:#6b7987;}& div{height:5px;}"]),oe=function(e){var n=e.postData,t=e.editMode,s=void 0!==t&&t,c=e.onChangePost,d=e.onCancelChange,a=(0,i.v9)((function(e){return e.post})),l=a.updatePostLoading,p=a.updatePostFinish,x=(0,o.useState)(n),h=x[0],m=x[1],u=(0,o.useCallback)((function(e){m(e.target.value)}),[]);return(0,o.useEffect)((function(){p&&d()}),[p]),(0,N.jsxs)(X,{children:[(0,N.jsx)(f.Z,{condition:s,children:(0,N.jsxs)(ee,{children:[(0,N.jsx)(ne,{value:h,onChange:u}),(0,N.jsxs)(te,{children:[(0,N.jsx)(K.Z,{loading:l,onClick:c(h),children:"\uc644\ub8cc"}),(0,N.jsx)("div",{}),(0,N.jsx)(K.Z,{onClick:d,children:"\ucde8\uc18c"})]})]})}),(0,N.jsx)(f.Z,{condition:!s,children:n.split(/(#[^\s#]+)/g).map((function(e,n){return e.match(/(#[^\s#]+)/g)?(0,N.jsx)(r.default,{href:"/hashtag/".concat(e.slice(1)),children:(0,N.jsx)("a",{children:e})},n):(0,N.jsx)($,{children:e},n)}))})]})},ie=t(9650),re=t(6114),se=t(4545),ce=t(1347),de=(0,v.iv)(["overflow:hidden;background-color:#2d2d2e;"]),ae=v.ZP.div.withConfig({displayName:"styles__PostCardWrapper",componentId:"sc-1dmxedo-0"})(["margin-top:20px;margin-bottom:20px;"]),le=v.ZP.div.withConfig({displayName:"styles__RepostHeader",componentId:"sc-1dmxedo-1"})(["background-color:#39393b;color:white;border-top-left-radius:10px;border-top-right-radius:10px;padding:8px 10px;"]),pe=v.ZP.div.withConfig({displayName:"styles__RepostTitleWrapper",componentId:"sc-1dmxedo-2"})(["display:flex;align-items:center;justify-content:space-between;margin-right:10px;"]),xe=v.ZP.span.withConfig({displayName:"styles__RepostTitle",componentId:"sc-1dmxedo-3"})(["color:#c5c5c7;margin-left:5px;"]),he=(0,v.ZP)(c.Z).withConfig({displayName:"styles__CommonCard",componentId:"sc-1dmxedo-4"})([""," border:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-left-radius:",";border-top-right-radius:",";"],de,(function(e){return e.radius}),(function(e){return e.radius})),me=v.ZP.div.withConfig({displayName:"styles__LikeActive",componentId:"sc-1dmxedo-5"})(["color:red;"]),ue=v.ZP.div.withConfig({displayName:"styles__CommentActive",componentId:"sc-1dmxedo-6"})(["color:",";"],(function(e){return e.theme.color.MAIN})),fe=v.ZP.span.withConfig({displayName:"styles__IconCount",componentId:"sc-1dmxedo-7"})(["font-size:12px;font-style:italic;"]),ge=v.ZP.div.withConfig({displayName:"styles__InActive",componentId:"sc-1dmxedo-8"})(["color:white;&:hover{color:",";transition:0.3s;}"],(function(e){return e.theme.color.MAIN})),je=(0,v.ZP)(c.Z).withConfig({displayName:"styles__RepostInnerCard",componentId:"sc-1dmxedo-9"})([""," border-radius:10px;border:4px solid #404042;"],de),ye=v.ZP.div.withConfig({displayName:"styles__PostAuthor",componentId:"sc-1dmxedo-10"})(["display:flex;justify-content:space-between;align-items:center;color:white;"]),Ce=v.ZP.div.withConfig({displayName:"styles__PostDate",componentId:"sc-1dmxedo-11"})(["display:flex;justify-content:flex-end;color:",";padding-top:10px;"],(function(e){return e.theme.color.LIGHT_GRAY})),ve=(0,v.ZP)(ce.ZP).withConfig({displayName:"styles__CommentList",componentId:"sc-1dmxedo-12"})(["padding:0px 20px;margin-top:10px;margin-bottom:30px;color:white;background-color:",";border-radius:10px;& li:not(:last-child){border-bottom:0.5px solid rgba(255,255,255,0.1);}"],(function(e){return e.theme.color.MIDDLE_GRAY})),be=v.ZP.div.withConfig({displayName:"styles__DropdownWrapper",componentId:"sc-1dmxedo-13"})(["background-color:gray;display:flex;flex-direction:column;padding:8px 10px;border-radius:10px;"]),_e=(0,v.ZP)(K.Z).withConfig({displayName:"styles__DropdownButton",componentId:"sc-1dmxedo-14"})(["background-color:",";color:white;margin:5px 0px;border-radius:10px;border-color:white;&:hover{background-color:",";border-color:",";color:white;}"],(function(e){return"edit"===e.edit?"#1890FF":"#eb7575"}),(function(e){return"edit"===e.edit?"":"#e89b9b"}),(function(e){return"edit"===e.edit?"":"#e89b9b"})),Ze=function(e){var n=e.onRemovePost,t=e.removePostLoading,o=e.isRepost,i=e.onClickUpdate,r=(0,N.jsxs)(be,{children:[o&&(0,N.jsx)(_e,{edit:"edit",type:"primary",onClick:i,children:"\uc218\uc815"}),(0,N.jsx)(_e,{onClick:n,loading:t,children:"\uc0ad\uc81c"})]});return(0,N.jsx)(ie.Z,{direction:"vertical",children:(0,N.jsx)(ie.Z,{wrap:!0,children:(0,N.jsx)(re.Z,{trigger:["click"],overlay:r,placement:"bottomCenter",children:(0,N.jsx)(se.Z,{})})})})},ke=t(1990),we=v.ZP.div.withConfig({displayName:"styles__CommentAuthor",componentId:"sc-js2da6-0"})(["padding:3px 5px;border-radius:5px;color:white;background-color:",";&:hover{color:white;}"],(function(e){return e.theme.color.DARK_GRAY})),Ie=v.ZP.div.withConfig({displayName:"styles__CommentDate",componentId:"sc-js2da6-1"})(["display:flex;justify-content:flex-end;color:",";"],(function(e){return e.theme.color.LIGHT_GRAY})),Pe=function(e){var n=e.item;return(0,N.jsx)("li",{children:(0,N.jsx)(ke.Z,{author:(0,N.jsx)(we,{children:n.User.nickname}),avatar:(0,N.jsx)(r.default,{href:"/user/".concat(n.User.id),children:(0,N.jsx)("a",{children:n.User.avatar?(0,N.jsx)(s.C,{src:"".concat(n.User.avatar)}):(0,N.jsx)(s.C,{children:n.User.nickname[0]})})}),content:(0,N.jsxs)(N.Fragment,{children:[n.content,(0,N.jsx)(Ie,{children:(0,u.Zh)(n.createdAt)})]})})})},Ne=t(6692),Re=t(8949),Ae=t(4487),Ue=t(8576),ze=t(2493),Le=t(4299),De=(0,o.forwardRef)((function(e,n){var t=e.post,y=(0,i.I0)(),C=(0,i.v9)((function(e){var n;return null===(n=e.user.me)||void 0===n?void 0:n.id})),v=(0,i.v9)((function(e){return e.post})).removePostLoading,b=t.Likers.find((function(e){return e.id===C})),_=(0,o.useState)(!1),Z=_[0],k=_[1],w=(0,o.useState)(!1),I=w[0],P=w[1],R=(0,o.useState)(!1),A=R[0],U=R[1],z=(0,o.useCallback)((function(){U((function(e){return!e}))}),[]),L=(0,o.useCallback)((function(){P((function(e){return!e}))}),[]),D=(0,o.useCallback)((function(){return C?y((0,Ae.vR)(t.id)):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}),[C]),M=(0,o.useCallback)((function(){return C?y((0,Ue.ao)(t.id)):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}),[C]),Y=(0,o.useCallback)((function(){return C?y((0,Ne.VE)(t.id)):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}),[C]),T=(0,o.useCallback)((function(){return C?y((0,ze.wh)(t.id)):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}),[C]),W=(0,o.useCallback)((function(){k(!0)}),[]),E=(0,o.useCallback)((function(){k(!1)}),[]),F=(0,o.useCallback)((function(e){return function(){y((0,Re.P)({PostId:t.id,content:e}))}}),[t]);return(0,N.jsxs)(ae,{children:[t.RepostId&&t.Repost&&(0,N.jsx)(le,{children:(0,N.jsxs)(pe,{children:[(0,N.jsxs)("div",{children:[(0,N.jsx)(r.default,{href:"/user/".concat(t.User.id),children:(0,N.jsx)("a",{children:t.User.avatar?(0,N.jsx)(s.C,{src:"".concat(t.User.avatar)}):(0,N.jsx)(s.C,{children:t.User.nickname[0]})})}),(0,N.jsxs)(xe,{children:[t.User.nickname,"\ub2d8\uc774 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4."]})]}),(0,N.jsx)(f.Z,{condition:C&&t.User.id===C,children:(0,N.jsx)(Ze,{onRemovePost:Y,removePostLoading:v})})]})}),(0,N.jsx)(he,{radius:null!==t.RepostId?"0px":"10px",cover:t.Images[0]&&(0,N.jsx)(G,{images:t.Images}),actions:[b?(0,N.jsxs)(me,{onClick:M,children:[(0,N.jsx)(d.Z,{},"like"),(0,N.jsxs)(fe,{children:[" ",t.Likers.length]})]}):(0,N.jsxs)(ge,{onClick:D,children:[(0,N.jsx)(a.Z,{},"like"),(0,N.jsxs)(fe,{children:[" ",t.Likers.length]})]}),I?(0,N.jsxs)(ue,{onClick:L,children:[(0,N.jsx)(l.Z,{},"comment"),(0,N.jsxs)(fe,{children:[" ",t.Comments.length]})]}):(0,N.jsxs)(ge,{onClick:L,children:[(0,N.jsx)(p.Z,{},"comment"),(0,N.jsxs)(fe,{children:[" ",t.Comments.length]})]}),(0,N.jsx)(x.Z,{onClick:T},"re"),(0,N.jsx)(m.CopyToClipboard,{text:"".concat(Le.Y,"/post/").concat(t.id),children:(0,N.jsx)(h.Z,{onClick:z},"share")})],children:t.RepostId&&t.Repost?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(je,{cover:t.Repost.Images[0]&&(0,N.jsx)(G,{images:t.Repost.Images}),children:(0,N.jsx)(c.Z.Meta,{avatar:(0,N.jsx)(r.default,{href:"/user/".concat(t.Repost.User.id),children:(0,N.jsx)("a",{children:t.Repost.User.avatar?(0,N.jsx)(s.C,{src:"".concat(t.Repost.User.avatar)}):(0,N.jsx)(s.C,{children:t.User.nickname[0]})})}),title:(0,N.jsx)(ye,{children:t.Repost.User.nickname}),description:(0,N.jsx)(oe,{postData:t.Repost.content,onChangePost:F,onCancelChange:E})})}),(0,N.jsx)(Ce,{children:(0,u.Zh)(t.createdAt)})]}):(0,N.jsx)(c.Z.Meta,{avatar:(0,N.jsx)(r.default,{href:"/user/".concat(t.User.id),children:(0,N.jsx)("a",{children:t.User.avatar?(0,N.jsx)(s.C,{src:"".concat(t.User.avatar)}):(0,N.jsx)(s.C,{children:t.User.nickname[0]})})}),title:(0,N.jsxs)(ye,{children:[t.User.nickname,(0,N.jsx)(f.Z,{condition:C&&t.User.id===C,children:(0,N.jsx)(Ze,{onRemovePost:Y,removePostLoading:v,isRepost:!t.RepostId,onClickUpdate:W})}),(0,N.jsx)(f.Z,{condition:C,children:(0,N.jsx)(j.Z,{user:t.User})})]}),description:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(oe,{postData:t.content,editMode:Z,onChangePost:F,onCancelChange:E}),(0,N.jsx)(Ce,{children:(0,u.Zh)(t.createdAt)})]})})}),(0,N.jsx)(f.Z,{condition:I,children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Q,{post:t}),(0,N.jsx)(ve,{itemLayout:"horizontal",dataSource:t.Comments,renderItem:function(e){return(0,N.jsx)(Pe,{item:e})}})]})}),(0,N.jsx)(f.Z,{condition:A,children:(0,N.jsx)(g.Z,{title:"\uac8c\uc2dc\uae00 \ub9c1\ud06c\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",onToggleModal:z})}),(0,N.jsx)("div",{ref:n})]})}))},3196:function(e,n,t){t.d(n,{Zh:function(){return c},m2:function(){return d},EB:function(){return a}});var o=t(7484),i=t.n(o),r=t(4110),s=t.n(r);t(9132);i().extend(s()),i().locale("ko");var c=function(e){return i()(e).locale("ko").fromNow()},d=function(e){return i()(e).format("YYYY.MM.DD")},a=function(e){return i()(e).format("YYYY MM DD")}}}]);