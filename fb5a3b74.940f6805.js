(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{603:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(618));const i={title:"$interactionEdit",description:"Edit an interaction message."},o={unversionedId:"functions/interactionedit",id:"functions/interactionedit",isDocsHomePage:!1,title:"$interactionEdit",description:"Edit an interaction message.",source:"@site/docs/functions/interactionedit.md",slug:"/functions/interactionedit",permalink:"/docs/functions/interactionedit",version:"current",sidebar:"someSidebar",previous:{title:"$interactionDelete",permalink:"/docs/functions/interactiondelete"},next:{title:"$interactionFollowUp",permalink:"/docs/functions/interactionfollowup"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Property Types",id:"property-types",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function b(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"$interactionEdit"),", edits the interaction message send. "),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$interactionEdit[content;embeds?;components?;files?;allowed mentions?]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"content"),Object(a.b)("td",{parentName:"tr",align:"left"},"A content message for reply"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"embeds"),Object(a.b)("td",{parentName:"tr",align:"left"},"Send embed messages for reply"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"components"),Object(a.b)("td",{parentName:"tr",align:"left"},"Adds components for reply"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"files"),Object(a.b)("td",{parentName:"tr",align:"left"},"Send file & attachment for reply"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"allowed mentions"),Object(a.b)("td",{parentName:"tr",align:"left"},'Allowing to "x" mentions for reply'),Object(a.b)("td",{parentName:"tr",align:"left"},"no")))),Object(a.b)("h3",{id:"property-types"},"Property Types"),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CONTENT")," \u2014 ",Object(a.b)("em",{parentName:"li"},"classic message text \ud83e\udd20")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"EMBEDS")," \u2014 ",Object(a.b)("em",{parentName:"li"},"embed-errors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"COMPONENTS")," \u2014 ",Object(a.b)("em",{parentName:"li"},"buttons, selection menus")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FILES")," \u2014 ",Object(a.b)("em",{parentName:"li"},"files & attachment embed-errors should be used in here.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ALLOWED_MENTIONS")," \u2014 ",Object(a.b)("em",{parentName:"li"},'"USERS,ROLES,EVERYONE"')))),Object(a.b)("h6",{id:"footnotes"},"Footnotes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},'If you want to make only embed message(s), you can just pass "content" property.')),Object(a.b)("li",{parentName:"ul"},"Message ",Object(a.b)("em",{parentName:"li"},"cannot")," be ephemeral, if it wasn't an ephemeral message before!")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"//Afte\nbot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionEdit[Bye, World!]\n  \n  $wait[5s]\n  \n  $interactionReply[Hello, World!]\n  `\n});\n")))}b.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,l(l({ref:t},b),{},{components:n})):a.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);