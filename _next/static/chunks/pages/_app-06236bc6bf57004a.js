(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1880)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),l=r(880),c=r(9246);var f={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=u.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,y=e.children,v=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var g=(t=u.default.Children.only(y))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],E=u.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);u.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,w,b,r,n]);var _={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:u}))}(e,n,d,p,v,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(p,O,n&&n.locales,n&&n.domainLocales);_.href=C||i.addBasePath(i.addLocale(p,O,n&&n.defaultLocale))}return u.default.cloneElement(t,_)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],h=y[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return a.useEffect((function(){if(!i&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,d]};var a=r(7294),u=r(4686),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},1880:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=(r(7982),r(1372),r(1098),r(9008)),a=r(1664),u=function(e){var t=e.href,r=e.text;return(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{className:"font-semibold text-2xl",children:r})})},i=function(){return(0,n.jsxs)("section",{className:"flex flex-row justify-around",children:[(0,n.jsx)(u,{href:"/",text:"Home"}),(0,n.jsx)(u,{href:"/blog",text:"Blog"}),(0,n.jsx)(u,{href:"https://github.com/darichey",text:"GitHub"})]})};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}var f=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"David Richey"})}),(0,n.jsx)("div",{className:"flex justify-center my-10",children:(0,n.jsxs)("div",{className:"flex flex-col w-4/5 md:w-2/5 gap-4",children:[(0,n.jsx)(i,{}),(0,n.jsx)(t,c({},r))]})})]})}},1372:function(){},1098:function(){},7982:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var r=e.O();_N_E=r}]);