"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6549],{35048:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=o(11527),r=o(11683);const t={sidebar_position:1},s="Installation",a={id:"bioreactor/platformio/platformio",title:"Installation",description:"Cloning the project",source:"@site/docs/03-bioreactor/01-platformio/01-platformio.md",sourceDirName:"03-bioreactor/01-platformio",slug:"/bioreactor/platformio/",permalink:"/docs.hackuarium.org/docs/bioreactor/platformio/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/03-bioreactor/01-platformio/01-platformio.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PlatformIO",permalink:"/docs.hackuarium.org/docs/category/platformio"},next:{title:"Parameters",permalink:"/docs.hackuarium.org/docs/bioreactor/platformio/parameters"}},l={},d=[{value:"Cloning the project",id:"cloning-the-project",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installing the PlatformIO plugin",id:"installing-the-platformio-plugin",level:2},{value:"Hardware support for Leonardo 8MHz = LilyPad Arduino USB",id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb",level:2},{value:"Using USBtiny",id:"using-usbtiny",level:2},{value:"That&#39;s it",id:"thats-it",level:2},{value:"Burning bootloader",id:"burning-bootloader",level:3},{value:"Upload the code",id:"upload-the-code",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"cloning-the-project",children:"Cloning the project"}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Git (^2.25.1)"}),"\n",(0,i.jsx)(n.li,{children:"Visual Studio Code (^1.61.2)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You know with age we take some habits and it would be easier if you follow the same ones..."}),"\n",(0,i.jsxs)(n.p,{children:["All our github projects are always in a folder called ",(0,i.jsx)(n.code,{children:"git"}),"\nwhich is at the first level of the ",(0,i.jsx)(n.code,{children:"home"})," directory. It is followed by the\nname of the github user/organization and finally the project name."]}),"\n",(0,i.jsx)(n.p,{children:"So, to install the project from bash:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/git/hackuarium/\ncd ~/git/hackuarium/\ngit clone https://github.com/Hackuarium/bioreactor-platformio.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"The possibility to clone the project will require that you validate your public key\nin github!"}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-platformio-plugin",children:"Installing the PlatformIO plugin"}),"\n",(0,i.jsxs)(n.p,{children:["In VSCode you need to open ",(0,i.jsx)(n.code,{children:"Extensions"})," tab or press (PC) ",(0,i.jsx)("kbd",{children:"Ctrl"}),"+",(0,i.jsx)("kbd",{children:"\u21e7"}),"+",(0,i.jsx)("kbd",{children:"X"}),", (Mac) ",(0,i.jsx)("kbd",{children:"\u2318"}),"+",(0,i.jsx)("kbd",{children:"\u21e7"}),"+",(0,i.jsx)("kbd",{children:"X"})," and search \xb4PlatformIO IDE\xb4 to install it:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"PlatformIO IDE",src:o(7801).Z+"",width:"1044",height:"823"})}),"\n",(0,i.jsx)(n.h2,{id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb",children:"Hardware support for Leonardo 8MHz = LilyPad Arduino USB"}),"\n",(0,i.jsxs)(n.p,{children:["The version ",(0,i.jsx)(n.code,{children:"6.0.1"})," of the bioreactor is operating at 8MHz/3V3 instead of the standard 16MHz/5V."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If you do any mistake and try flashing the bioreactor board as if it was a normal Leonardo, you will be able to flash the program but the USB port will not be recognized anymore afterwards. You will have to reflash the bootloader!!!"})}),"\n",(0,i.jsx)(n.h2,{id:"using-usbtiny",children:"Using USBtiny"}),"\n",(0,i.jsx)(n.p,{children:"By default some Linux versions will only give you a USB readonly access and will prevent you from burning the bootloader. You can implent two options to solve this problem:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Check the ID for USBTinyISP:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lusb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You need to find USBtiny in the prompt:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 001 Device 005: ID 8087:0a2b Intel Corp.\nBus 001 Device 006: ID 047f:0115 Plantronics, Inc. Voyager Legend\nBus 001 Device 003: ID 046d:c31c Logitech, Inc. Keyboard K120\nBus 001 Device 002: ID 046d:c011 Logitech, Inc. Optical MouseMan\nBus 001 Device 007: ID 1781:0c9f Multiple Vendors USBtiny\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For this case, USBtiny is: ",(0,i.jsx)(n.strong,{children:"Bus 001 Device 007: ID 1781:0c9f Multiple Vendors USBtiny"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Show Device permissions:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls -al /dev/bus/usb/001/007\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you have a similar response like this:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"crw-rw---- 1 root root 189, 6 Okt 2 09:45 /dev/bus/usb/001/007\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You need to change permissions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls -al /dev/bus/usb/001/007\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"In order for the USBTiny to have r/w access you should add a USB rule:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# UDEV rule for Arduino ISP R3 programmer board,\n# to prevent having to run Arduino IDE as root to get it to program.\n# Copy this file to /etc/udev/rules.d with the name 99-USBtiny.rules\n\nSUBSYSTEMS=="usb", ATTRS{idVendor}=="1781", ATTRS{idProduct}=="0c9f", GROUP="plugdev", MODE="0666"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"thats-it",children:"That's it"}),"\n",(0,i.jsx)(n.p,{children:"You should now be able to compile the project from PlatformIO IDE."}),"\n",(0,i.jsx)(n.h3,{id:"burning-bootloader",children:"Burning bootloader"}),"\n",(0,i.jsxs)(n.p,{children:["You can now proceed with burning the bootloader using the ",(0,i.jsx)(n.code,{children:"program_via_USBtinyISP"})," environment created in ",(0,i.jsx)(n.code,{children:"platformio.ini"})," file. Go to ",(0,i.jsx)(n.code,{children:"platformIO Terminal"})," and type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$: pio run -e program_via_USBtinyISP --target bootloader\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"PlatformIO: New Terminal",src:o(32140).Z+"",width:"924",height:"82"})}),"\n",(0,i.jsx)(n.h3,{id:"upload-the-code",children:"Upload the code"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have the bootloader, you can remove USBtinyISP and upload your code using USB cable directly between bioreactor and laptop with ",(0,i.jsx)(n.code,{children:"PlatformIO: Upload"})," button or press ",(0,i.jsx)("kbd",{children:"Ctrl"})," + ",(0,i.jsx)("kbd",{children:"Alt"})," + ",(0,i.jsx)("kbd",{children:"U"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Upload option",src:o(15166).Z+"",width:"563",height:"224"})}),"\n",(0,i.jsx)(n.p,{children:"You can check upload success in the same terminal:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Upload success",src:o(73726).Z+"",width:"1013",height:"447"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7801:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/platformio-5aeb75216f723a042fde6f4b6cd43094.png"},32140:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/terminal-825da6e832df51eff130b4bdf9017976.png"},73726:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/upload-success-2442a1697a2b84db3b25f375c3d4fc13.png"},15166:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/upload-b377666afcae228db0186a26c3957976.png"},11683:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var i=o(50959);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);