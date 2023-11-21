"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[5582],{77460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var d=n(11527),r=n(11683);const s={},i="Steps",l={id:"phmeter/using/steps",title:"Steps",description:"\xa1UPDATE FOR PH CONTROL 18042022!",source:"@site/docs/05-phmeter/03-using/02-steps.md",sourceDirName:"05-phmeter/03-using",slug:"/phmeter/using/steps",permalink:"/docs.hackuarium.org/docs/phmeter/using/steps",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/05-phmeter/03-using/02-steps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Starting a new pHMeter",permalink:"/docs.hackuarium.org/docs/phmeter/using/gettingStarted"},next:{title:"List of qualifiers",permalink:"/docs.hackuarium.org/docs/phmeter/using/qualifiers"}},c={},h=[{value:"Actions",id:"actions",level:3},{value:"Change parameters",id:"change-parameters",level:3},{value:"Example",id:"example",level:3}];function x(e){const t={admonition:"admonition",h1:"h1",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"steps",children:"Steps"}),"\n",(0,d.jsx)(t.admonition,{type:"danger",children:(0,d.jsx)(t.p,{children:"\xa1UPDATE FOR PH CONTROL 18042022!"})}),"\n",(0,d.jsx)(t.p,{children:"We create a compact way to describe a set of instruction"}),"\n",(0,d.jsx)(t.p,{children:"Flags:"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"0 : PID"}),"\n",(0,d.jsx)(t.li,{children:"1 : Stepper"}),"\n",(0,d.jsx)(t.li,{children:"2 : OUT1"}),"\n",(0,d.jsx)(t.li,{children:"3 : OUT2"}),"\n",(0,d.jsx)(t.li,{children:"4 : OUT3"}),"\n",(0,d.jsx)(t.li,{children:"5 : OUT4"}),"\n"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"BIT"}),(0,d.jsx)(t.th,{children:"PARAM_STATUS"}),(0,d.jsx)(t.th,{children:"COMMENT"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"PID"}),(0,d.jsx)(t.td,{children:"enable/disable heating"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"Stepper"}),(0,d.jsx)(t.td,{children:"enable/disable agitation control"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"OUTPUT 1"}),(0,d.jsx)(t.td,{children:"enable/disable output 1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"OUTPUT 2"}),(0,d.jsx)(t.td,{children:"enable/disable output 2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"OUTPUT 3"}),(0,d.jsx)(t.td,{children:"enable/disable output 3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"OUTPUT 4"}),(0,d.jsx)(t.td,{children:"enable/disable output 4"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,d.jsx)(t.p,{children:"0xxxx yyy yyyy yyyy"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"xxxx"}),(0,d.jsx)(t.th,{children:"Action"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"0000"}),(0,d.jsx)(t.td,{children:"Do nothing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"0001"}),(0,d.jsx)(t.td,{children:"Wait in minutes"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"0010"}),(0,d.jsx)(t.td,{children:"Wait in hours"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"0011"}),(0,d.jsx)(t.td,{children:"Wait for weight reduction to yy grams"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"0100"}),(0,d.jsx)(t.td,{children:"Wait for weight increase to yy grams"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"0101"}),(0,d.jsx)(t.td,{children:"Wait for temperature change (continue if delta < yyy \xb0C/100)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8"}),(0,d.jsx)(t.td,{children:"1000"}),(0,d.jsx)(t.td,{children:"Set all the flags"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"change-parameters",children:"Change parameters"}),"\n",(0,d.jsx)(t.p,{children:"1xxxx yyy yyyy yyyy"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:["xxxx the parameter (0 -> 15)","\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"4: Target temperature (in \xb0C)"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(t.li,{children:"yyy yyyy yyyy: the new value (0 to 2047)"}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.p,{children:"Using two peristaltic pumps to remove bacteria and add fresh media"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Step"}),(0,d.jsx)(t.th,{children:"Instruction"}),(0,d.jsx)(t.th,{children:"Explanation"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,d.jsx)(t.td,{children:"Stepper: on, PID: on"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"0 0010 000 0001 1000 (4120)"}),(0,d.jsx)(t.td,{children:"Wait 1 day (24 h)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"0 1000 000 0000 0000 (16384)"}),(0,d.jsx)(t.td,{children:"Stepper: off, PID: off"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"0 0001 000 0001 1110 (2078)"}),(0,d.jsx)(t.td,{children:"Wait 30 min"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"0 1000 000 0000 0100 (16388)"}),(0,d.jsx)(t.td,{children:"OUT1: on"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"0 0011 000 0001 1110 (6174)"}),(0,d.jsx)(t.td,{children:"Weight reduction 30%"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6"}),(0,d.jsx)(t.td,{children:"0 1000 000 0000 1011 (16395)"}),(0,d.jsx)(t.td,{children:"OUT2: on, Stepper: on, PID: on"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"0 0100 000 0110 0100 (8292)"}),(0,d.jsx)(t.td,{children:"Weight increase 100%"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8-15"}),(0,d.jsx)(t.td,{children:"0 0000 000 0000 0000 (0)"}),(0,d.jsx)(t.td,{children:"Do nothing"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Changing temperature and turning on / off a light (on IO3).\nWe simulate a day / night cycle"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Step"}),(0,d.jsx)(t.th,{children:"Instruction"}),(0,d.jsx)(t.th,{children:"Explanation"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"0"}),(0,d.jsx)(t.td,{children:"0 1000 000 0001 0011 (16403)"}),(0,d.jsx)(t.td,{children:"IO3: on, Stepper: on, PID: on"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"1 0000 000 0010 1000 (32808)"}),(0,d.jsx)(t.td,{children:"Set target temperature to 40\xb0C"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"0 0010 000 0000 1100 (4108)"}),(0,d.jsx)(t.td,{children:"Wait 12h"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,d.jsx)(t.td,{children:"IO3: off, Stepper: on, PID: on"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"1 0000 000 0001 1110 (32798)"}),(0,d.jsx)(t.td,{children:"Set target temperature to 30\xb0C"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"0 0010 000 0000 1100 (4108)"}),(0,d.jsx)(t.td,{children:"Wait 12h"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6-15"}),(0,d.jsx)(t.td,{children:"0 0000 000 0000 0000 (0)"}),(0,d.jsx)(t.td,{children:"Do nothing"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},11683:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var d=n(50959);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);