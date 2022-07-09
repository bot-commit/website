(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var o=n(3),r=(n(0),n(618));const a={title:"bot.onRoleUpdate",description:"An event that gets executed, if the bot sees a role updated in one of it's servers. To let the bot listen to the event, add one bot.onRoleUpdate() callback inside your main file."},l={unversionedId:"events/bot.onroleupdate",id:"events/bot.onroleupdate",isDocsHomePage:!1,title:"bot.onRoleUpdate",description:"An event that gets executed, if the bot sees a role updated in one of it's servers. To let the bot listen to the event, add one bot.onRoleUpdate() callback inside your main file.",source:"@site/docs/events/bot.onroleupdate.md",slug:"/events/bot.onroleupdate",permalink:"/docs/events/bot.onroleupdate",version:"current",sidebar:"someSidebar",previous:{title:"bot.onRoleDelete",permalink:"/docs/events/bot.onroledelete"},next:{title:"bot.onTypingStart",permalink:"/docs/events/bot.ontypingstart"}},i=[],c={toc:i};function b(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This callback triggers every time a role gets updated"),Object(r.b)("h4",{id:"usage"},"Usage:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.roleUpdateCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),Object(r.b)("h4",{id:"example-command"},"Example Command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.roleUpdateCommand({ \nchannel: "772414449839636490", \ncode: `\nRole Name Updated:\nOld Name: $oldRole[name]\nNew Name: $newRole[name]\n`\n})\n')),Object(r.b)("h4",{id:"options"},"Options:"),Object(r.b)("p",null,"You can use these functions ",Object(r.b)("a",{parentName:"p",href:"/docs/functions/oldrole"},"$oldRole","[","]")," and ",Object(r.b)("a",{parentName:"p",href:"/docs/functions/newrole"},"$newRole","[","]")," with the options below to return old and new role data:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," =",">"," The ID of the role"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),' "The name of the role'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"position")," =",">"," The position of this role"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rawPosition")," =",">"," The position of this role given by the API"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hexColor")," =",">"," The hex color for this role"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"color")," =",">"," The color of this role"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hoist")," =",">"," Whether the role is hoisted or not"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mentionable")," =",">"," Whether the role is mentionable or not"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"guildID")," =",">"," The ID of the guild the role belongs to"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"editable")," =",">"," Whether the role is editable by the client or not"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"managed:")," =",">"," Whether this role is managed by discord or not ","(","bot- & booster-roles",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleted:")," =",">"," Whether the role was deleted or not"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"permissions")," =",">"," The permissions for this role")))}b.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||a;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var b=2;b<a;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);