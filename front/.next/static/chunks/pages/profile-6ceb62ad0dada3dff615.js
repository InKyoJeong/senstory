(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{4370:function(n,e,i){"use strict";i.d(e,{Z:function(){return s}});i(7294);var r=i(9163),t=i(1796),o=r.ZP.div.withConfig({displayName:"styles__ErrorPageWrapper",componentId:"sc-xmrpqp-0"})(["height:100vh;background:",";display:flex;justify-content:center;align-items:center;& span,& h2{display:flex;justify-content:center;}& h2,& div{color:white;opacity:0.8;}"],(function(n){return n.theme.color.DARK_GRAY})),l=(0,r.ZP)(t.Z).withConfig({displayName:"styles__ErrorIcon",componentId:"sc-xmrpqp-1"})(["font-size:2rem;margin-bottom:1rem;"]),a=i(5893),s=function(n){var e=n.errorTitle,i=n.errorContent;return(0,a.jsx)(o,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(l,{}),(0,a.jsx)("h2",{children:e}),(0,a.jsx)("span",{children:i})]})})}},7442:function(n,e,i){"use strict";i.d(e,{Z:function(){return c}});i(7294);var r=i(9508),t=i(8222),o=i(9163),l=o.ZP.div.withConfig({displayName:"styles__ModalOverlay",componentId:"sc-11iz77u-0"})(["position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.7);z-index:999;"]),a=o.ZP.div.withConfig({displayName:"styles__ModalForm",componentId:"sc-11iz77u-1"})(["position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;top:30%;left:50%;width:40%;padding:30px;transform:translate(-50%,-50%);background-color:#d9d7d7;border-radius:10px;animation:fadeIn 0.7s;& div{margin-bottom:15px;font-weight:bolder;color:",";}& Button{border-radius:10px;width:30%;}@media screen and (max-width:992px){width:80%;& Button{width:50%;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}"],(function(n){return n.theme.color.BLACK})),s=i(5893),c=function(n){var e=n.onToggleModal,i=n.title;return(0,s.jsx)(l,{children:(0,s.jsxs)(a,{children:[(0,s.jsx)("div",{children:i}),(0,s.jsx)(t.Z,{type:"primary",onClick:e,children:(0,s.jsx)(r.Z,{})})]})})}},460:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSP:function(){return en},default:function(){return rn}});var r=i(7294),t=i(9226),o=i(8575),l=i(9008),a=i(1163),s=i(9669),c=i.n(s),d=i(5394),u=i(9810),h=i(4370),p=i(9439),f=i(7004),x=i(8427),m=i(1986),g=i(7442),j=i(9163),v=i(8222),y=(0,j.ZP)(v.Z).withConfig({displayName:"styles__ChangeEditBtn",componentId:"sc-1f35os3-0"})(["border-radius:10px;margin-left:5px;"]),b=i(5893),I=function(n){var e=n.loading;return(0,b.jsx)(y,{type:"primary",htmlType:"submit",loading:e,children:"\ubcc0\uacbd"})},Z=i(8901),_=i(86),w=(0,j.ZP)(Z.Z).withConfig({displayName:"styles__NickFormWrapper",componentId:"sc-sr1prq-0"})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}"]),C=(0,j.ZP)(_.Z).withConfig({displayName:"styles__NickInput",componentId:"sc-sr1prq-1"})(["font-size:16px;background-color:",";border-color:gray;color:white;border-radius:10px;overflow:hidden;"],(function(n){return n.theme.color.MIDDLE_GRAY})),N=function(){var n=(0,t.I0)(),e=(0,t.v9)((function(n){return n.user})),i=e.me,o=e.changeNickLoading,l=e.changeNickFinish,a=e.changeNickError,s=(0,x.Z)((null===i||void 0===i?void 0:i.nickname)||""),c=(0,p.Z)(s,3),d=c[0],u=c[1],h=c[2],j=(0,r.useState)(!1),v=j[0],y=j[1],Z=(0,r.useCallback)((function(){y((function(n){return!n}))}),[]);(0,r.useEffect)((function(){l&&Z()}),[l]),(0,r.useEffect)((function(){a&&alert(a)}),[a]),d.length>20&&(h(d.slice(0,20)),alert("\ub2c9\ub124\uc784\uc740 \ucd5c\ub300 20\uc790 \uc785\ub2c8\ub2e4."));var _=(0,r.useCallback)((function(){return d&&d.trim()?d.includes(" ")?alert("\ub2c9\ub124\uc784\uc5d0 \ube48\uce78\uc744 \ud3ec\ud568\ud560 \uc218 \uc5c6\uc5b4\uc694."):void n((0,f.uS)(d)):alert("\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")}),[d]);return(0,b.jsxs)(w,{onFinish:_,children:[(0,b.jsx)("label",{htmlFor:"user-nickname",children:"\ub2c9\ub124\uc784"}),(0,b.jsx)("br",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)(C,{name:"nickname",value:d,onChange:u,type:"text"}),(0,b.jsx)(I,{loading:o})]}),(0,b.jsx)(m.Z,{condition:v,children:(0,b.jsx)(g.Z,{title:"\ub2c9\ub124\uc784 \ubcc0\uacbd \uc644\ub8cc",onToggleModal:Z})})]})},P=i(3010),k=(0,j.ZP)(Z.Z).withConfig({displayName:"styles__MbtiFormWrapper",componentId:"sc-z6n0wx-0"})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}& select{flex:1;background-color:",";border-radius:10px;color:white;font-size:16px;&:focus{outline:none;}}"],(function(n){return n.theme.color.MIDDLE_GRAY})),F=function(){var n=(0,t.I0)(),e=(0,t.v9)((function(n){return n.user})),i=e.me,o=e.changeMbtiFinish,l=e.changeMbtiLoading,a=(0,x.Z)((null===i||void 0===i?void 0:i.mbti)||""),s=(0,p.Z)(a,2),c=s[0],d=s[1],u=(0,r.useState)(!1),h=u[0],f=u[1],j=(0,r.useCallback)((function(){f((function(n){return!n}))}),[]);(0,r.useEffect)((function(){o&&j()}),[o]);var v=(0,r.useCallback)((function(){n((0,P.Vm)(c))}),[c]);return(0,b.jsxs)(k,{onFinish:v,children:[(0,b.jsx)("label",{htmlFor:"user-mbti",children:"MBTI"}),(0,b.jsx)("br",{}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("select",{value:c,name:"mbtis",id:"mbti-select",onChange:d,children:[(0,b.jsx)("option",{value:"x",children:"---- MBTI \uc120\ud0dd ----"}),(0,b.jsx)("option",{value:"ISTJ",children:"ISTJ"}),(0,b.jsx)("option",{value:"ISTP",children:"ISTP"}),(0,b.jsx)("option",{value:"ISFJ",children:"ISFJ"}),(0,b.jsx)("option",{value:"ISFP",children:"ISFP"}),(0,b.jsx)("option",{value:"INTJ",children:"INTJ"}),(0,b.jsx)("option",{value:"INTP",children:"INTP"}),(0,b.jsx)("option",{value:"INFJ",children:"INFJ"}),(0,b.jsx)("option",{value:"INFP",children:"INFP"}),(0,b.jsx)("option",{value:"ESTJ",children:"ESTJ"}),(0,b.jsx)("option",{value:"ESTP",children:"ESTP"}),(0,b.jsx)("option",{value:"ESFJ",children:"ESFJ"}),(0,b.jsx)("option",{value:"ESFP",children:"ESFP"}),(0,b.jsx)("option",{value:"ENTJ",children:"ENTJ"}),(0,b.jsx)("option",{value:"ENTP",children:"ENTP"}),(0,b.jsx)("option",{value:"ENFJ",children:"ENFJ"}),(0,b.jsx)("option",{value:"ENFP",children:"ENFP"})]}),(0,b.jsx)(I,{loading:l})]}),(0,b.jsx)(m.Z,{condition:h,children:(0,b.jsx)(g.Z,{title:"MBTI \ubcc0\uacbd \uc644\ub8cc",onToggleModal:j})})]})},E=i(1664),T=i(1347),S=i(8453),M=i(5360),J=i(5393),B=i(3797),A=(0,j.iv)(["background:linear-gradient(0deg,#607882,gray);"]),L=j.ZP.div.withConfig({displayName:"styles__MoreButtonWrapper",componentId:"sc-1nluqhd-0"})(["text-align:center;margin:10px 0px;& Button{"," border-radius:40px;border-color:gray;color:white;:hover{","}:focus{","}}"],A,A,A),q=(0,j.ZP)(T.ZP).withConfig({displayName:"styles__ListWrapper",componentId:"sc-1nluqhd-1"})(["margin-bottom:20px;border-radius:10px;background-color:#404042;border-color:gray;& div{color:white;}"]),z=j.ZP.div.withConfig({displayName:"styles__FollowListWrapper",componentId:"sc-1nluqhd-2"})(["flex:1;display:grid;grid-template-columns:2fr 1fr;"]),W=j.ZP.div.withConfig({displayName:"styles__FollowInfoSection",componentId:"sc-1nluqhd-3"})(["display:flex;align-items:center;& div:first-child{margin-right:5px;}"]),D=j.ZP.div.withConfig({displayName:"styles__FollowDelSection",componentId:"sc-1nluqhd-4"})(["display:flex;justify-content:center;align-items:center;"]),G=function(n){var e=n.header,i=n.data,o=n.onClickMore,l=n.loading,a=n.mutate,s=(0,t.I0)(),c=(0,r.useCallback)((function(n){return function(){"\ud314\ub85c\uc789"===e&&(s((0,J.Sp)(n)),a((function(e){return e.filter((function(e){return e.id!==n}))}))),s((0,B.qG)(n)),a((function(e){return e.filter((function(e){return e.id!==n}))}))}}),[]);return(0,b.jsx)(q,{size:"small",header:(0,b.jsx)("div",{children:e}),loadMore:(0,b.jsx)(L,{children:(0,b.jsx)(v.Z,{onClick:o,loading:l,children:"More"})}),bordered:!0,dataSource:i,renderItem:function(n){return(0,b.jsx)(T.ZP.Item,{children:(0,b.jsxs)(z,{children:[(0,b.jsxs)(W,{children:[(0,b.jsx)("div",{children:(0,b.jsx)(E.default,{href:"/user/".concat(n.id),children:(0,b.jsx)("a",{children:n.avatar?(0,b.jsx)(S.C,{src:"".concat(n.avatar)}):(0,b.jsx)(S.C,{children:n.nickname[0]})})})}),(0,b.jsx)("div",{children:n.nickname})]}),(0,b.jsx)(D,{children:(0,b.jsx)(M.Z,{onClick:c(n.id)},"stop")})]})})}})},R=(0,j.ZP)(Z.Z).withConfig({displayName:"styles__AreaFormWrapper",componentId:"sc-17dfuct-0"})(["margin-bottom:20px;margin-top:20px;& label{color:white;}& div{display:flex;margin-top:5px;}"]),Y=(0,j.ZP)(_.Z).withConfig({displayName:"styles__AreaInput",componentId:"sc-17dfuct-1"})(["font-size:16px;background-color:",";border-color:gray;color:white;border-radius:10px;overflow:hidden;"],(function(n){return n.theme.color.MIDDLE_GRAY})),O=i(4313),K=function(){var n=(0,t.I0)(),e=(0,t.v9)((function(n){return n.user})),i=e.me,o=e.changeAreaLoading,l=e.changeAreaFinish,a=(0,x.Z)((null===i||void 0===i?void 0:i.area)||""),s=(0,p.Z)(a,3),c=s[0],d=s[1],u=s[2],h=(0,r.useState)(!1),f=h[0],j=h[1],v=(0,r.useCallback)((function(){j((function(n){return!n}))}),[]);(0,r.useEffect)((function(){l&&v()}),[l]),c.length>10&&(u(c.slice(0,10)),alert("\ucd5c\ub300 10\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."));var y=(0,r.useCallback)((function(){n((0,O.wG)(c))}),[c]);return(0,b.jsxs)(R,{onFinish:y,children:[(0,b.jsx)("label",{htmlFor:"user-area",children:"\ud65c\ub3d9 \uc9c0\uc5ed"}),(0,b.jsx)("br",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)(Y,{name:"area",value:c,onChange:d,type:"text",placeholder:"\ud65c\ub3d9\uc9c0\uc5ed (\ucd5c\ub300 10\uc790)"}),(0,b.jsx)(I,{loading:o})]}),(0,b.jsx)(m.Z,{condition:f,children:(0,b.jsx)(g.Z,{title:"\ud65c\ub3d9\uc9c0\uc5ed \ubcc0\uacbd \uc644\ub8cc",onToggleModal:v})})]})},X=(0,j.ZP)(Z.Z).withConfig({displayName:"styles__IntroFormWrapper",componentId:"sc-1ml1yvd-0"})(["margin:20px 0px;& label{color:white;}"]),V=j.ZP.div.withConfig({displayName:"styles__IntroInputWrapper",componentId:"sc-1ml1yvd-1"})(["margin-top:5px;display:flex;"]),H=j.ZP.div.withConfig({displayName:"styles__IntroButton",componentId:"sc-1ml1yvd-2"})(["display:flex;justify-content:flex-end;& Button{border-radius:10px;}"]),Q=i(5371),U=function(){var n=(0,t.I0)(),e=(0,t.v9)((function(n){return n.user})),i=e.me,o=e.changeIntroLoading,l=e.changeIntroFinish,a=(0,x.Z)((null===i||void 0===i?void 0:i.intro)||""),s=(0,p.Z)(a,3),c=s[0],d=s[1],u=s[2],h=(0,r.useState)(!1),f=h[0],j=h[1],y=(0,r.useCallback)((function(){j((function(n){return!n}))}),[]);(0,r.useEffect)((function(){l&&y()}),[l]),c.length>100&&(u(c.slice(0,100)),alert("100\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."));var I=(0,r.useCallback)((function(){n((0,Q.Pl)(c))}),[c]),Z=(0,r.useMemo)((function(){return{marginBottom:8,backgroundColor:"#404042",borderColor:"gray",color:"white",borderRadius:10,fontSize:16}}),[]);return(0,b.jsxs)(X,{onFinish:I,children:[(0,b.jsx)("label",{htmlFor:"user-intro",children:"\ub0b4 \uc18c\uac1c"}),(0,b.jsx)("br",{}),(0,b.jsx)(V,{children:(0,b.jsx)(_.Z.TextArea,{style:Z,value:c,onChange:d,maxLength:100,placeholder:"\uc18c\uac1c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. (\ucd5c\ub300 100\uc790)"})}),(0,b.jsx)(H,{children:(0,b.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:o,children:"\ub4f1\ub85d"})}),(0,b.jsx)(m.Z,{condition:f,children:(0,b.jsx)(g.Z,{title:"\ub0b4 \uc18c\uac1c \ub4f1\ub85d \uc644\ub8cc",onToggleModal:y})})]})},$=i(4299),nn=function(n){return c().get(n,{withCredentials:!0}).then((function(n){return n.data}))},en=!0,rn=function(){var n=(0,t.v9)((function(n){return n.user})).me,e=(0,r.useState)(3),i=e[0],s=e[1],c=(0,r.useState)(3),p=c[0],f=c[1],x=(0,o.ZP)("".concat($.T,"/user/followers?limit=").concat(i),nn),m=x.data,g=x.error,j=x.mutate,v=(0,o.ZP)("".concat($.T,"/user/followings?limit=").concat(p),nn),y=v.data,I=v.error,Z=v.mutate;(0,r.useEffect)((function(){n||a.default.push("/login")}),[n]);var _=(0,r.useCallback)((function(){f((function(n){return n+3}))}),[]),w=(0,r.useCallback)((function(){s((function(n){return n+3}))}),[]);return g||I?(console.error(g||I),(0,b.jsx)(h.Z,{errorTitle:"\uc5d0\ub7ec \ubc1c\uc0dd!",errorContent:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."})):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.default,{children:(0,b.jsx)("title",{children:"Profile | SenStory"})}),(0,b.jsxs)(d.Z,{profile:!0,children:[(0,b.jsx)(u.Z,{hide:!0}),(0,b.jsx)(N,{}),(0,b.jsx)(F,{}),(0,b.jsx)(K,{}),(0,b.jsx)(U,{}),(0,b.jsx)(G,{header:"\ud314\ub85c\uc789",data:y,onClickMore:_,loading:!y&&!I,mutate:Z}),(0,b.jsx)(G,{header:"\ud314\ub85c\uc6cc",data:m,onClickMore:w,loading:!m&&g,mutate:j})]})]})}},2697:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return i(460)}])}},function(n){n.O(0,[988,211,347,906,394,774,888,179],(function(){return e=2697,n(n.s=e);var e}));var e=n.O();_N_E=e}]);