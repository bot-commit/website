"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),p=o,f=c["".concat(d,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Command Handler",description:"Command Handler Setup - How to use it.",id:"commandhandler"},i=void 0,l={unversionedId:"guides/commandhandler",id:"guides/commandhandler",title:"Command Handler",description:"Command Handler Setup - How to use it.",source:"@site/docs/guides/3commandhandler.md",sourceDirName:"guides",slug:"/guides/commandhandler",permalink:"/docs/guides/commandhandler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Command Handler",description:"Command Handler Setup - How to use it.",id:"commandhandler"},sidebar:"docs",previous:{title:"Client Events",permalink:"/docs/guides/events"},next:{title:"Client Status",permalink:"/docs/guides/status"}},d={},s=[{value:"Why should you use Command Handler?",id:"why-should-you-use-command-handler",level:2},{value:"Storing your commands in your main file may seem fine, but after a certain amount of commands it can get hard to find and update commands. Therefore you should use the Command Handler to keep your main file neat and save yourself from the clutter.",id:"storing-your-commands-in-your-main-file-may-seem-fine-but-after-a-certain-amount-of-commands-it-can-get-hard-to-find-and-update-commands-therefore-you-should-use-the-command-handler-to-keep-your-main-file-neat-and-save-yourself-from-the-clutter",level:3},{value:"Table of Content",id:"table-of-content",level:3},{value:"Starting off with modifying your main file",id:"starting-off-with-modifying-your-main-file",level:3},{value:"Setting everything up with folders and files",id:"setting-everything-up-with-folders-and-files",level:3},{value:"Creating directory",id:"creating-directory",level:4},{value:"Creating sub directories",id:"creating-sub-directories",level:4},{value:"Creating files inside of the directory",id:"creating-files-inside-of-the-directory",level:4},{value:"Final Steps",id:"final-steps",level:2},{value:"Change of creating commands",id:"change-of-creating-commands",level:3},{value:"Multiple commands in one file",id:"multiple-commands-in-one-file",level:3},{value:"Updating your commands without restart!",id:"updating-your-commands-without-restart",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-should-you-use-command-handler"},"Why should you use Command Handler?"),(0,o.kt)("h3",{id:"storing-your-commands-in-your-main-file-may-seem-fine-but-after-a-certain-amount-of-commands-it-can-get-hard-to-find-and-update-commands-therefore-you-should-use-the-command-handler-to-keep-your-main-file-neat-and-save-yourself-from-the-clutter"},"Storing your commands in your main file may seem fine, but after a certain amount of commands it can get hard to find and update commands. Therefore you should use the Command Handler to keep your main file neat and save yourself from the clutter."),(0,o.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#starting-off-with-modifying-your-main-file"},"Modifying your main file"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#setting-everything-up-with-folders-and-files"},"Creating folders and files"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#final-steps"},"Using multiple commands in one file")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#updating-your-commands-without-restart"},"Updating commands without restarting your Discord Bot")))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"starting-off-with-modifying-your-main-file"},"Starting off with modifying your main file"),(0,o.kt)("p",null,"In this step we'll take a look at your main file also known as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),". We add ",(0,o.kt)("inlineCode",{parentName:"p"},"aoijs.LoadCommands(bot)")," in order for the bot to understand where our files are."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const bot = new aoijs.AoiClient({\n  token: "DISCORD BOT TOKEN",\n  prefix: "DISCORD BOT PREFIX",\n  intents: ["Guilds", "GuildMessages", "MessageContent"]\n});\n\nbot.onMessage(); //required for your bot to detect prefix commands\n\nconst loader = new aoijs.LoadCommands(bot)\nloader.load(bot.cmd,"./commands/") //you can change this to any directory you want\n')),(0,o.kt)("h3",{id:"setting-everything-up-with-folders-and-files"},"Setting everything up with folders and files"),(0,o.kt)("p",null,"Once you're done with your main file, we'll move on onto files, in order for this to work we need to do two things."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create directories and sub-directories where your commands go."),(0,o.kt)("li",{parentName:"ol"},"And create a file to test out if everything worked well.")),(0,o.kt)("h4",{id:"creating-directory"},"Creating directory"),(0,o.kt)("p",null,"Your created directory should look like that:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/901271834589278228/1059592951304556664/image.png",alt:"commands"})),(0,o.kt)("h4",{id:"creating-sub-directories"},"Creating sub directories"),(0,o.kt)("p",null,"If you want to have your commands and files more organised then use sub directories, simply click on the ",(0,o.kt)("strong",{parentName:"p"},"commands"),"  directory you created earlier and create as many sub directories as you want inside of it, for example, music commands:"),(0,o.kt)("h4",{id:"creating-files-inside-of-the-directory"},"Creating files inside of the directory"),(0,o.kt)("p",null,"You can create as many files as you want in your directories as long as they have ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," at the end of their file name it'll work without issues. For now, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"help.js"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/901271834589278228/1059598511278137455/image_2.png",alt:"example"})),(0,o.kt)("h2",{id:"final-steps"},"Final Steps"),(0,o.kt)("h3",{id:"change-of-creating-commands"},"Change of creating commands"),(0,o.kt)("p",null,"From now on you have to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = [{...}]\n")),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"help.js")," and copy & paste the following code snippet: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = [{\n  name: "help",\n  aliases: ["helpcmd", "helpme"],\n  code: `\n$title[Help Command!]\n$thumbnail[$authorAvatar] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}];\n')),(0,o.kt)("p",null,"Now restart your bot, and let the magic happen! Simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"[prefix]help")," or any of the aliases to make the message appear."),(0,o.kt)("h3",{id:"multiple-commands-in-one-file"},"Multiple commands in one file"),(0,o.kt)("p",null,"From now on, you can have multiple commands in one file, this is useful for ",(0,o.kt)("inlineCode",{parentName:"p"},"awaited")," commands or any similar. Let's create a little nice welcome command and combine the command from above with it! "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = [{\n  name: "help",\n  aliases: ["helpcmd", "helpme"],\n  code: `\n$title[Help Command!]\n$thumbnail[$userAvatar[$authorID]] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}, {\n  type: "join",\n  channel: "any channel ID",\n  code: `\n$title[Someone joined!]\n$description[Welcome to this server <@$authorID>!]`\n}]\n')),(0,o.kt)("p",null,"Make sure you have the required intents and ",(0,o.kt)("inlineCode",{parentName:"p"},"bot.onJoin();")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or else this won't work!  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Required intents: ",(0,o.kt)("inlineCode",{parentName:"strong"},"guildMembers")))),(0,o.kt)("h3",{id:"updating-your-commands-without-restart"},"Updating your commands without restart!"),(0,o.kt)("p",null,"You are able to use ",(0,o.kt)("inlineCode",{parentName:"p"},"$updateCommands")," when updating commands in your directory. Please note that this does ",(0,o.kt)("strong",{parentName:"p"},"not")," apply to any files outside of the directory."))}u.isMDXComponent=!0}}]);