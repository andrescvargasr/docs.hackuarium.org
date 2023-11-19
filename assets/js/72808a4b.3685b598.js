"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[4016],{19254:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=d(11527),r=d(11683);const s={},i="Steps and Examples",l={id:"bioreactor/using/steps",title:"Steps and Examples",description:"We create a compact way to describe a set of instruction",source:"@site/docs/03-bioreactor/03-using/02-steps.md",sourceDirName:"03-bioreactor/03-using",slug:"/bioreactor/using/steps",permalink:"/docs.hackuarium.org/docs/bioreactor/using/steps",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/03-bioreactor/03-using/02-steps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Starting a new bioreactor",permalink:"/docs.hackuarium.org/docs/bioreactor/using/README"},next:{title:"List of qualifiers",permalink:"/docs.hackuarium.org/docs/bioreactor/using/qualifiers"}},c={},h=[{value:"Flags",id:"flags",level:2},{value:"Actions",id:"actions",level:2},{value:"Change parameters",id:"change-parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3}];function x(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"steps-and-examples",children:"Steps and Examples"}),"\n",(0,n.jsx)(t.p,{children:"We create a compact way to describe a set of instruction"}),"\n",(0,n.jsx)(t.h2,{id:"flags",children:"Flags"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"BIT"}),(0,n.jsx)(t.th,{children:"PARAM_STATUS"}),(0,n.jsx)(t.th,{children:"COMMENT"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"PID"}),(0,n.jsx)(t.td,{children:"enable/disable heating"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Stepper"}),(0,n.jsx)(t.td,{children:"enable/disable agitation control"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"OUTPUT 1"}),(0,n.jsx)(t.td,{children:"enable/disable output 1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"OUTPUT 2"}),(0,n.jsx)(t.td,{children:"enable/disable output 2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"OUTPUT 3"}),(0,n.jsx)(t.td,{children:"enable/disable output 3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"OUTPUT 4"}),(0,n.jsx)(t.td,{children:"enable/disable output 4"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.p,{children:"0 xxx x yyy yyyy yyyy"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"xxxx"}),(0,n.jsx)(t.th,{children:"Action"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0000"}),(0,n.jsx)(t.td,{children:"Do nothing"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0001"}),(0,n.jsx)(t.td,{children:"Wait in minutes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"0010"}),(0,n.jsx)(t.td,{children:"Wait in hours"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"0011"}),(0,n.jsx)(t.td,{children:"Wait for weight reduction to yy% of maximum weight"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"0100"}),(0,n.jsx)(t.td,{children:"Wait for weight increase to yy% of maximum weight"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"0101"}),(0,n.jsx)(t.td,{children:"Wait for temperature change (continue if delta < yy [\xb0C/100])"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8"}),(0,n.jsx)(t.td,{children:"1000"}),(0,n.jsx)(t.td,{children:"Set all the flags"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"change-parameters",children:"Change parameters"}),"\n",(0,n.jsx)(t.p,{children:"1 xxx x yyy yyyy yyyy"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["xxxx the parameter (0 -> 15)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"0: Target temperature (in \xb0C)"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"yyy yyyy yyyy: the new value (0 to 2047)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(t.p,{children:"Using two peristaltic pumps to remove bacteria and add fresh media:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Step"}),(0,n.jsx)(t.th,{children:"Instruction"}),(0,n.jsx)(t.th,{children:"Explanation"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0 0010 000 0001 1000 (4120)"}),(0,n.jsx)(t.td,{children:"Wait 1 day (24 h)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0000 (16384)"}),(0,n.jsx)(t.td,{children:"Stepper: off, PID: off"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"0 0001 000 0001 1110 (2078)"}),(0,n.jsx)(t.td,{children:"Wait 30 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0100 (16388)"}),(0,n.jsx)(t.td,{children:"OUT1: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"0 0011 000 0001 1110 (6174)"}),(0,n.jsx)(t.td,{children:"Weight reduction 30 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 1011 (16395)"}),(0,n.jsx)(t.td,{children:"OUT2: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"0 0100 000 0110 0100 (8292)"}),(0,n.jsx)(t.td,{children:"Weight increase 100 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8-15"}),(0,n.jsx)(t.td,{children:"0 0000 000 0000 0000 (0)"}),(0,n.jsx)(t.td,{children:"Do nothing"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(t.p,{children:"Changing temperature and turning on / off a light (on IO3). We simulate a day / night cycle:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Step"}),(0,n.jsx)(t.th,{children:"Instruction"}),(0,n.jsx)(t.th,{children:"Explanation"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0 1000 000 0001 0011 (16403)"}),(0,n.jsx)(t.td,{children:"IO3: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"1 0000 000 0010 1000 (32808)"}),(0,n.jsx)(t.td,{children:"Set target temperature to 40 \xb0C"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"0 0010 000 0000 1100 (4108)"}),(0,n.jsx)(t.td,{children:"Wait 12 h"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"IO3: off, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"1 0000 000 0001 1110 (32798)"}),(0,n.jsx)(t.td,{children:"Set target temperature to 30 \xb0C"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"0 0010 000 0000 1100 (4108)"}),(0,n.jsx)(t.td,{children:"Wait 12 h"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6-15"}),(0,n.jsx)(t.td,{children:"0 0000 000 0000 0000 (0)"}),(0,n.jsx)(t.td,{children:"Do nothing"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(t.p,{children:"Run bioreactor with temperature control, agitation control, and adding fresh media in steps of 25% of maximum weight every 30 minutes; when it obtains 100% weight it continues for 16 hours."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Step"}),(0,n.jsx)(t.th,{children:"Instruction"}),(0,n.jsx)(t.th,{children:"Explanation"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0111 (16391)"}),(0,n.jsx)(t.td,{children:"IO1: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0 0100 000 0001 1001 (8217)"}),(0,n.jsx)(t.td,{children:"Weight increase until 25 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"IO1: off, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"0 0001 000 0001 1110 (2078)"}),(0,n.jsx)(t.td,{children:"Wait 30 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0111 (16391)"}),(0,n.jsx)(t.td,{children:"IO1: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"0 0100 000 0011 0010 (8242)"}),(0,n.jsx)(t.td,{children:"Weight increase until 50 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"IO1: off, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"0 0001 000 0001 1110 (2078)"}),(0,n.jsx)(t.td,{children:"Wait 30 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0111 (16391)"}),(0,n.jsx)(t.td,{children:"IO1: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9"}),(0,n.jsx)(t.td,{children:"0 0100 000 0100 1011 (8267)"}),(0,n.jsx)(t.td,{children:"Weight increase until 75 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"IO1: off, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11"}),(0,n.jsx)(t.td,{children:"0 0001 000 0001 1110 (2078)"}),(0,n.jsx)(t.td,{children:"Wait 30 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"12"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0111 (16391)"}),(0,n.jsx)(t.td,{children:"IO1: on, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"13"}),(0,n.jsx)(t.td,{children:"0 0100 000 0110 0100 (8292)"}),(0,n.jsx)(t.td,{children:"Weight increase until 75 %"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"14"}),(0,n.jsx)(t.td,{children:"0 1000 000 0000 0011 (16387)"}),(0,n.jsx)(t.td,{children:"IO1: off, Stepper: on, PID: on"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"15"}),(0,n.jsx)(t.td,{children:"0 0010 000 0001 0000 (4112)"}),(0,n.jsx)(t.td,{children:"Wait 16 h"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},11683:(e,t,d)=>{d.d(t,{Z:()=>l,a:()=>i});var n=d(50959);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);