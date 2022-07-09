(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{618:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},v=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),v=t,d=b["".concat(l,".").concat(v)]||b[v]||p[v]||i;return r?a.a.createElement(d,o(o({ref:n},u),{},{components:r})):a.a.createElement(d,o({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},86:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return u}));var t=r(3),a=(r(0),r(618));const i={title:"Channel Variables",description:"A variable value that will be saved to a channel"},l={unversionedId:"guides/variables/channel-variables",id:"guides/variables/channel-variables",isDocsHomePage:!1,title:"Channel Variables",description:"A variable value that will be saved to a channel",source:"@site/docs/guides/variables/channel-variables.md",slug:"/guides/variables/channel-variables",permalink:"/docs/guides/variables/channel-variables",version:"current",sidebar:"someSidebar",previous:{title:"Using Variables",permalink:"/docs/guides/variables/using-variables"},next:{title:"Global Variables",permalink:"/docs/guides/variables/global-variables"}},o=[{value:"Setting the channel variable",id:"setting-the-channel-variable",children:[]},{value:"Retrieving the variable value",id:"retrieving-the-variable-value",children:[]}],c={toc:o};function u(e){let{components:n,...r}=e;return Object(a.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'{% hint style="danger" %}\nMake sure you\'ve already created the variable\n{% endhint %}'),Object(a.b)("h3",{id:"setting-the-channel-variable"},"Setting the channel variable"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"$setChannelVar[variable;value;channelID (optional)]\n")),Object(a.b)("h3",{id:"retrieving-the-variable-value"},"Retrieving the variable value"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"$getChannelVar[variable;channelID (optional)]\n")))}u.isMDXComponent=!0}}]);