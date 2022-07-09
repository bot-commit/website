(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{292:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(618));const a={title:"$forEachChannel",description:"Loop over every channel this bot can see executing awaited commands."},c={unversionedId:"functions/foreachchannel",id:"functions/foreachchannel",isDocsHomePage:!1,title:"$forEachChannel",description:"Loop over every channel this bot can see executing awaited commands.",source:"@site/docs/functions/foreachchannel.md",slug:"/functions/foreachchannel",permalink:"/docs/functions/foreachchannel",version:"current",sidebar:"someSidebar",previous:{title:"$footer",permalink:"/docs/functions/footer"},next:{title:"$forEachGuild",permalink:"/docs/functions/foreachguild"}},i=[],l={toc:i};function u(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function creates a loop over ALL channels the bot has access to"),Object(o.b)("h4",{id:"fields"},"Fields"),Object(o.b)("p",null,"This function has 1 required field"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Awaited Command ","(","Required",")"),Object(o.b)("li",{parentName:"ol"},"Awaited Command 2 ","(","Optional",")"),Object(o.b)("li",{parentName:"ol"},"Etc")),Object(o.b)("p",null,"Raw Usage: ",Object(o.b)("inlineCode",{parentName:"p"},"$forEachChannel[awaitedCommand1;awaitedCommand2;...]")),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Awaited Command","(","s",")"," - The awaited command","(","s",")"," we're executing")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "forEachChannel",\ncode: "$forEachChannel[loop1]"\n})\n\nbot.awaitedCommand({\nname: "loop1",\ncode: `$setChannelVar[hello;bye]` //Every channels value for \'hello\' will be \'bye\'\n})\n')))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);