(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{643:function(e,s,t){Promise.resolve().then(t.bind(t,9079))},9079:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var n=t(7437),r=t(6691),i=t.n(r);function o(e){return(0,n.jsx)(i(),{...e,style:{width:"100%",height:"auto"}})}var u=e=>{let{name:s}=e;return(0,n.jsx)(o,{src:"/img/cards/".concat(s),width:100,height:140,alt:s})},a=e=>{let{cards:s,highlighted:t}=e;return(0,n.jsx)("div",{className:"grid grid-cols-3 grid-rows-[repeat(6,_3em)_auto] place-items-start justify-items-center",children:s.map((e,s)=>(0,n.jsx)("div",{style:{zIndex:Math.floor(s/3),boxShadow:(null==t?void 0:t.includes(e))?"0 0 20px blue":void 0},children:(0,n.jsx)(u,{name:e})},e))})},c=t(2265);let g=["2C.svg","2D.svg","2H.svg","2S.svg","3C.svg","3D.svg","3H.svg","3S.svg","4C.svg","4D.svg","4H.svg","4S.svg","5C.svg","5D.svg","5H.svg","5S.svg","6C.svg","6D.svg","6H.svg","6S.svg","7C.svg","7D.svg","7H.svg","7S.svg","8C.svg","8D.svg","8H.svg","8S.svg","9C.svg","9D.svg","9H.svg","9S.svg","AC.svg","AD.svg","AH.svg","JC.svg","JD.svg","JH.svg","JS.svg","KC.svg","KD.svg","KH.svg","KS.svg","QC.svg","QD.svg","QH.svg","QS.svg","TC.svg","TD.svg","TH.svg","TS.svg"],l={0:"First round: which column is your card in?",1:"Second round: which column is your card in now?",2:"Third and final round: which column is your card in now?"};function d(){return{state:"playing",round:0,cards:g.sort(()=>.5-Math.random()).slice(0,21)}}function v(e,s){function t(s){let t=[];for(let n=0;n<7;n++)t.push(e[3*n+s]);return t}return 0==s?[...t(1),...t(0),...t(2)]:1==s?[...t(0),...t(1),...t(2)]:[...t(0),...t(2),...t(1)]}var f=()=>{let[e,s]=(0,c.useState)(d);return"playing"===e.state?(0,n.jsxs)("div",{children:[(0,n.jsx)(a,{cards:e.cards,highlighted:["5C.svg"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:l[e.round]}),[0,1,2].map(t=>(0,n.jsx)("button",{className:"btn mr-1",onClick:()=>{s("playing"!==e.state?d():2===e.round?{state:"done",guess:v(e.cards,t)[10]}:{state:"playing",round:e.round+1,cards:v(e.cards,t)})},children:t+1},t))]})]}):(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"This is your card!"}),(0,n.jsx)(u,{name:e.guess}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"btn",onClick:function(){s(d())},children:"Play again"})})]})}},7447:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{unstable_getImgProps:function(){return a},default:function(){return c}});let n=t(1024),r=t(8630),i=t(6184),o=t(1749),u=n._(t(536)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,r.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},c=o.Image},6993:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"RouterContext",{enumerable:!0,get:function(){return n}});let n=t(1024)._(t(2265)).default.createContext(null)},622:function(e,s,t){"use strict";var n=t(2265),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,t){var n,a={},c=null,g=null;for(n in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(g=s.ref),s)i.call(s,n)&&!u.hasOwnProperty(n)&&(a[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:r,type:e,key:c,ref:g,props:a,_owner:o.current}}s.jsx=a,s.jsxs=a},7437:function(e,s,t){"use strict";e.exports=t(622)},6691:function(e,s,t){e.exports=t(7447)}},function(e){e.O(0,[749,971,938,744],function(){return e(e.s=643)}),_N_E=e.O()}]);