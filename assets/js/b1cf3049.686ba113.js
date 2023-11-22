"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8159],{38721:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(11527),o=i(63883);const s={},r="BeeMos bee counter module (BCM)",l={id:"beemos/bee-counter/README",title:"BeeMos bee counter module (BCM)",description:"BCM PCB soldering and debug instructions",source:"@site/docs/02-beemos/bee-counter/README.md",sourceDirName:"02-beemos/bee-counter",slug:"/beemos/bee-counter/",permalink:"/docs.hackuarium.org/docs/beemos/bee-counter/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/02-beemos/bee-counter/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Beemos",permalink:"/docs.hackuarium.org/docs/beemos"},next:{title:"Using the RJ12 for luminosity, temperature and power supply",permalink:"/docs.hackuarium.org/docs/beemos/bee-counter/rj12-hacking/"}},d={},a=[{value:"BCM PCB soldering and debug instructions",id:"bcm-pcb-soldering-and-debug-instructions",level:2},{value:"1. Soldering (part 1)",id:"1-soldering-part-1",level:3},{value:"2. Power",id:"2-power",level:3},{value:"3. Initial test",id:"3-initial-test",level:3},{value:"Bootloader",id:"bootloader",level:4},{value:"Uploading test",id:"uploading-test",level:4},{value:"4. Soldering (part 2)",id:"4-soldering-part-2",level:3},{value:"5. IR LED emission test",id:"5-ir-led-emission-test",level:3},{value:"Upload sketch",id:"upload-sketch",level:4},{value:"LED check",id:"led-check",level:4},{value:"6. Final soldering and IR checks",id:"6-final-soldering-and-ir-checks",level:3},{value:"7. Final test",id:"7-final-test",level:3},{value:"Opening the serial monitor",id:"opening-the-serial-monitor",level:4},{value:"Interacting with the board",id:"interacting-with-the-board",level:4},{value:"10. Install the PCB in its laser cut box",id:"10-install-the-pcb-in-its-laser-cut-box",level:3},{value:"11. Test in the field",id:"11-test-in-the-field",level:3}];function c(e){const n={admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"beemos-bee-counter-module-bcm",children:"BeeMos bee counter module (BCM)"}),"\n",(0,t.jsx)(n.h2,{id:"bcm-pcb-soldering-and-debug-instructions",children:"BCM PCB soldering and debug instructions"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"UNDER CONSTRUCTION"})}),"\n",(0,t.jsx)(n.p,{children:"![PCBsoldering](images/PCBsoldering.jpg"}),"\n",(0,t.jsx)(n.h3,{id:"1-soldering-part-1",children:"1. Soldering (part 1)"}),"\n",(0,t.jsx)(n.p,{children:"Solder the basic elements to make the microcontroller work as shown in the picture above in red (starting with the hardest/riskiest to solder):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Microcontroller"}),"\n",(0,t.jsx)(n.li,{children:"Mini USB port"}),"\n",(0,t.jsx)(n.li,{children:"Voltage regulator"}),"\n",(0,t.jsx)(n.li,{children:"2x 22 Ohm resistors"}),"\n",(0,t.jsx)(n.li,{children:"3x 10 uF capacitors"}),"\n",(0,t.jsx)(n.li,{children:"3x Shottky diodes (direction matters)"}),"\n",(0,t.jsx)(n.li,{children:"4x 10k Ohm resistors"}),"\n",(0,t.jsx)(n.li,{children:"3x 100 nF capacitors"}),"\n",(0,t.jsx)(n.li,{children:"1M F capacitor"}),"\n",(0,t.jsx)(n.li,{children:"2x 22 pF capacitors"}),"\n",(0,t.jsx)(n.li,{children:"8 Mhz cristal"}),"\n",(0,t.jsx)(n.li,{children:"Blank/white LED (direction matters)"}),"\n",(0,t.jsx)(n.li,{children:"Red LED (direction matters)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-power",children:"2. Power"}),"\n",(0,t.jsx)(n.p,{children:"Power the board by connecting the USB cable (one LED should turn on), check immediately that the USB port or the microcontroller are not overheating by touching them with your fingers (a few seconds are usually enough to know)"}),"\n",(0,t.jsx)(n.h3,{id:"3-initial-test",children:"3. Initial test"}),"\n",(0,t.jsx)(n.h4,{id:"bootloader",children:"Bootloader"}),"\n",(0,t.jsx)(n.p,{children:'Choose "Lilipad USB" as board in the Arduino IDE, then burn bootloader with USBtiny in-circuit programmer and JTAG cable in contact with the ISP pins of the board until the bootloader has finished to burn'}),"\n",(0,t.jsx)(n.h4,{id:"uploading-test",children:"Uploading test"}),"\n",(0,t.jsx)(n.p,{children:'Connect the board to computer with USB cable, upload a simple "blink" sketch, confirm that the sketch was indeed uploaded (i.e. confirm that the LED is indeed blinking)'}),"\n",(0,t.jsx)(n.h3,{id:"4-soldering-part-2",children:"4. Soldering (part 2)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"}),' in PCB version 1.0, the two resistors are labelled "220" and "1k", DO NOT USE THESE VALUES.Use 100 Ohm instead of 1 kOhm and 1 kOhm instead of 220 Ohm and do not solder the 10 nF capacitor.']}),"\n",(0,t.jsx)(n.p,{children:"Disconnect the USB cable and solder the demultiplexer, the multiplexer and 1 IR emitter/receptor (QRE1113) as shown in blue in the above picture. Try not to spend to much time while soldering to avoid overheating of the component. Solder the two associated resistors (see note below before doing so)."}),"\n",(0,t.jsx)(n.h3,{id:"5-ir-led-emission-test",children:"5. IR LED emission test"}),"\n",(0,t.jsx)(n.h4,{id:"upload-sketch",children:"Upload sketch"}),"\n",(0,t.jsxs)(n.p,{children:["Reconnect the USB cable, choose the Lilipad USB as board (",(0,t.jsx)(n.code,{children:"Tools"})," > ",(0,t.jsx)(n.code,{children:"Board"})," > ",(0,t.jsx)(n.code,{children:"Lilipad USB"}),"), select the port where it is connected (this should appear under ",(0,t.jsx)(n.code,{children:"Tools"})," > ",(0,t.jsx)(n.code,{children:"Ports"})," as ttyACM0 (Lilipad USB) ) and upload the Arduino sketch in ",(0,t.jsx)(n.code,{children:"counter-i2c/arduino"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"led-check",children:"LED check"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Option A: Check that the IR LED is emitting either using an oscilloscope between ",(0,t.jsx)(n.del,{children:"pins X and Y"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Option B: Use the camera of your phone (you should see a purple beam, although this works more or less depending on your phone/camera, you can try to go in a dark place and change the angle between the camera and the board to better see the IR beam, see picture below)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In case you see no signal from the IR LED, make sure soldering is appropriate and if fiddling with soldering doesn't work, try replacing the QRE1113 sensor (some have failed during our test perhaps due to overheating during soldering or manufacture issues)"}),"\n",(0,t.jsx)(n.h3,{id:"6-final-soldering-and-ir-checks",children:"6. Final soldering and IR checks"}),"\n",(0,t.jsx)(n.p,{children:"Disconnect USB cable and solder the 15 other QRE1113s, their associated resistors and the RJ12 connector as indicated in yellow in the above image."}),"\n",(0,t.jsx)(n.p,{children:"Repeat the IR LED emission test (from step 5) on all other QRE1113s until all work"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IRbeams",src:i(69988).Z+"",width:"1061",height:"557"})}),"\n",(0,t.jsx)(n.h3,{id:"7-final-test",children:"7. Final test"}),"\n",(0,t.jsx)(n.h4,{id:"opening-the-serial-monitor",children:"Opening the serial monitor"}),"\n",(0,t.jsx)(n.p,{children:'To test the board, connect the USB cable, open the serial monitor in Arduino IDE and make sure to choose the "Both NL & CR" option at the bottom right of the serial monitor (needed to have access to the menu).'}),"\n",(0,t.jsx)(n.h4,{id:"interacting-with-the-board",children:"Interacting with the board"}),"\n",(0,t.jsx)(n.p,{children:"You can use the serial monitor to send different instructions to the BCM. Below is a list of the instructions avaiable."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"h + ENTER: Help menu that will show you the different menus you can enter by typing the first letter + ENTER."}),"\n",(0,t.jsx)(n.li,{children:"c + ENTER: Show the hexadecimal values of the IR values read from the sensors. When passing your finger or a pencil over a sensor, you should see its corresponding value change."}),"\n",(0,t.jsxs)(n.li,{children:["s + ENTER: Display the current values of settings A to Z.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A: Log ID"}),"\n",(0,t.jsx)(n.li,{children:"B: Number of seconds since the card was started (uptime)"}),"\n",(0,t.jsx)(n.li,{children:"C: number of exiting bees through gate 1"}),"\n",(0,t.jsx)(n.li,{children:"D: Number of entering bees through gate 1"}),"\n",(0,t.jsx)(n.li,{children:"E: Number of exiting bee through gate 2"}),"\n",(0,t.jsx)(n.li,{children:"F: Number of entering bees through gate 2"}),"\n",(0,t.jsx)(n.li,{children:"etc..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can move a pencil over a gate in both direction and retype 's'+ENTER to update the values on the serial monitor screen."}),"\n",(0,t.jsx)(n.h3,{id:"10-install-the-pcb-in-its-laser-cut-box",children:"10. Install the PCB in its laser cut box"}),"\n",(0,t.jsx)(n.h3,{id:"11-test-in-the-field",children:"11. Test in the field"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},69988:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/IRbeams-2995be48a8e45720f82222b2ed70997e.jpg"},63883:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(50959);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);