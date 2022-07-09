(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{517:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return b}));var n=r(3),a=(r(0),r(618));const c={title:"$addThreadMember",description:"Add a member to thread."},l={unversionedId:"functions/addthreadmember",id:"functions/addthreadmember",isDocsHomePage:!1,title:"$addThreadMember",description:"Add a member to thread.",source:"@site/docs/functions/addthreadmember.md",slug:"/functions/addthreadmember",permalink:"/docs/functions/addthreadmember",version:"current",sidebar:"someSidebar",previous:{title:"$addSelectMenu",permalink:"/docs/functions/addselectmenu"},next:{title:"$addTimestamp",permalink:"/docs/functions/addtimestamp"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],o={toc:d};function b(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function will add a member to a channel's thread."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$addThreadMember[channelID;threadID;memberID;reason?]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"channelID"),Object(a.b)("td",{parentName:"tr",align:"left"},"ID of the channel"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"threadID"),Object(a.b)("td",{parentName:"tr",align:"left"},"ID of the channel's thread"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"memberID"),Object(a.b)("td",{parentName:"tr",align:"left"},"The member's ID"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"reason?"),Object(a.b)("td",{parentName:"tr",align:"left"},"A reason for adding member to a thread"),Object(a.b)("td",{parentName:"tr",align:"left"},"string"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-thread-member",\n  code: `\n  Added the user successfully!\n  \n  $addThreadMember[722031482163560499;938078671095365693;721032593511940177;Hello!]\n  `\n});\n')))}b.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=i(r),u=n,s=m["".concat(l,".").concat(u)]||m[u]||p[u]||c;return r?a.a.createElement(s,d(d({ref:t},b),{},{components:r})):a.a.createElement(s,d({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);