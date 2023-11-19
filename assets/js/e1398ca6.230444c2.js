"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6603],{25533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(11527),r=n(11683);const o={},s="Starting a new pHMeter",a={id:"phmeter/using/gettingStarted",title:"Starting a new pHMeter",description:"When you have a new pHMeter you should start by configuring it. You may connect using a terminal through the serial port.",source:"@site/docs/05-phmeter/03-using/01-gettingStarted.md",sourceDirName:"05-phmeter/03-using",slug:"/phmeter/using/gettingStarted",permalink:"/docs.hackuarium.org/docs/phmeter/using/gettingStarted",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/05-phmeter/03-using/01-gettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using",permalink:"/docs.hackuarium.org/docs/category/using-1"},next:{title:"Steps",permalink:"/docs.hackuarium.org/docs/phmeter/using/steps"}},c={},l=[{value:"Initializing parameters",id:"initializing-parameters",level:2},{value:"Setup the pH",id:"setup-the-ph",level:2},{value:"Setup the EC",id:"setup-the-ec",level:2},{value:"The main parameters",id:"the-main-parameters",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"starting-a-new-phmeter",children:"Starting a new pHMeter"}),"\n",(0,i.jsx)(t.p,{children:"When you have a new pHMeter you should start by configuring it. You may connect using a terminal through the serial port."}),"\n",(0,i.jsxs)(t.p,{children:["You may as well use the ",(0,i.jsx)(t.a,{href:"https://platformio.org/install/ide?install=vscode",children:"PlatformIO"})," in ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})," application (or even ",(0,i.jsx)(t.a,{href:"https://www.arduino.cc/en/software",children:"Arduino"})," application) to directly connect to the pHMeter through serial. The menu is accessible using the ",(0,i.jsx)(t.code,{children:"h"})," instruction."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you are using Arduino, you should not forget to add a ",(0,i.jsx)(t.code,{children:"CR + LF"})," after each instruction."]})}),"\n",(0,i.jsx)(t.h2,{id:"initializing-parameters",children:"Initializing parameters"}),"\n",(0,i.jsx)(t.p,{children:"Connect via the terminal and reset all the parameters to the default parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"ur1234"})}),"\n",(0,i.jsxs)(t.p,{children:["It is also important to set a unique qualifier for the bioreactor. You should fill the ",(0,i.jsx)(t.a,{href:"/docs.hackuarium.org/docs/phmeter/using/qualifiers",children:"list"})," with a free\ncode."]}),"\n",(0,i.jsx)(t.h2,{id:"setup-the-ph",children:"Setup the pH"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"\xa1UPDATE 17082022!"})}),"\n",(0,i.jsxs)(t.p,{children:["There is now a special menu for the pH calibration ",(0,i.jsx)(t.code,{children:"c"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You should do the following step in order to callibrate the pH:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Neutral pH: ",(0,i.jsx)(t.code,{children:"cn"})]}),"\n",(0,i.jsxs)(t.li,{children:["Acid solution (4.0): ",(0,i.jsx)(t.code,{children:"ca"})]}),"\n",(0,i.jsxs)(t.li,{children:["Base solution (7.0): ",(0,i.jsx)(t.code,{children:"cb"})]}),"\n",(0,i.jsxs)(t.li,{children:["Base solution (10.0) : ",(0,i.jsx)(t.code,{children:"ck"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You may now check the reproducibility and the pH in Hidrogen concentration of any object using ",(0,i.jsx)(t.code,{children:"ct"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["It is important to note that an error (stored in ",(0,i.jsx)(t.a,{href:"/docs.hackuarium.org/docs/phmeter/platformio/parameters#PARAM_ERROR",children:"PARAM_ERROR"})," will be generated if the pH is either under the minimal value or over the maximal value and this should stop all the functions for pH control."]}),"\n",(0,i.jsx)(t.h2,{id:"setup-the-ec",children:"Setup the EC"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"\xa1UPDATE 17082022!"})}),"\n",(0,i.jsxs)(t.p,{children:["There is now a special menu for the EC calibration ",(0,i.jsx)(t.code,{children:"c"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You should do the following step in order to callibrate the EC:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Destiled water: ",(0,i.jsx)(t.code,{children:"cd"})]}),"\n",(0,i.jsxs)(t.li,{children:["10% Potassium Chloride (KCI): ",(0,i.jsx)(t.code,{children:"cp"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You may now check the reproducibility and the EC in \u03bcSiemens/cm of any object using ",(0,i.jsx)(t.code,{children:"ce"})]}),"\n",(0,i.jsxs)(t.p,{children:["It is important to note that an error (stored in ",(0,i.jsx)(t.a,{href:"/docs.hackuarium.org/docs/phmeter/platformio/parameters#PARAM_ERROR",children:"PARAM_ERROR"})," will be generated if the EC is either under the minimal value or over the maximal value."]}),"\n",(0,i.jsx)(t.h2,{id:"the-main-parameters",children:"The main parameters"}),"\n",(0,i.jsx)(t.p,{children:"In order to activate the pHMeter you need to enable functions. Currently there are 3 functions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"pH control (value 1)."}),"\n",(0,i.jsx)(t.li,{children:"EC control (value 2)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You may enable the functionnablities by setting the parameter ",(0,i.jsx)(t.code,{children:"AZ"}),". To activate all the functionnalities enter ",(0,i.jsx)(t.code,{children:"AZ63"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11683:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(50959);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);