"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[4013],{21767:(e,s,t)=>{t.d(s,{Z:()=>v});var a=t(50959),i=t(45924),r=t(88958),l=t(15917),n=t(57964),c=t(5656),o=t(28903),d=t(26003);function m(e){const{pathname:s}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.Mg)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_sMMu",sidebarItemTitle:"sidebarItemTitle_osBl",sidebarItemList:"sidebarItemList_W5p2",sidebarItem:"sidebarItem_IEst",sidebarItemLink:"sidebarItemLink_YYgd",sidebarItemLinkActive:"sidebarItemLinkActive_mpEf"};var g=t(11527);function h(e){let{sidebar:s}=e;const t=m(s.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=t(58223);function p(e){let{sidebar:s}=e;const t=m(s.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.i)();return s?.items.length?"mobile"===t?(0,g.jsx)(j,{sidebar:s}):(0,g.jsx)(h,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,g.jsx)(r.Z,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:s}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})})}},56669:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});t(50959);var a=t(45924),i=t(94190),r=t(28024),l=t(17641),n=t(21767),c=t(1333),o=t(43883),d=t(15314),m=t(11527);function u(e){let{tags:s,sidebar:t}=e;const u=(0,i.M)();return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(r.d,{title:u}),(0,m.jsx)(o.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(n.Z,{sidebar:t,children:[(0,m.jsx)(d.Z,{as:"h1",children:u}),(0,m.jsx)(c.Z,{tags:s})]})]})}},36480:(e,s,t)=>{t.d(s,{Z:()=>n});t(50959);var a=t(45924),i=t(57964);const r={tag:"tag_UHGZ",tagRegular:"tagRegular_SVfi",tagWithCount:"tagWithCount_nHrs"};var l=t(11527);function n(e){let{permalink:s,label:t,count:n}=e;return(0,l.jsxs)(i.Z,{href:s,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}},1333:(e,s,t)=>{t.d(s,{Z:()=>o});t(50959);var a=t(94190),i=t(36480),r=t(15314);const l={tag:"tag_uHoG"};var n=t(11527);function c(e){let{letterEntry:s}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.Z,{as:"h2",id:s.letter,children:s.letter}),(0,n.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.Z,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:s}=e;const t=(0,a.P)(s);return(0,n.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},94190:(e,s,t)=>{t.d(s,{M:()=>i,P:()=>r});var a=t(5656);const i=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}}}]);