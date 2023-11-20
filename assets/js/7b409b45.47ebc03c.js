"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8911],{24414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(11527),i=n(11683);const a={},r="EC",o={id:"phmeter/tests/ec/README",title:"EC",description:"For the EC reading, we are checking all the hardware steps to be sure that the signal pass correctly.",source:"@site/docs/05-phmeter/04-tests/04-ec/README.md",sourceDirName:"05-phmeter/04-tests/04-ec",slug:"/phmeter/tests/ec/",permalink:"/docs/phmeter/tests/ec/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/05-phmeter/04-tests/04-ec/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pH",permalink:"/docs/phmeter/tests/ph/"},next:{title:"Programming",permalink:"/docs/category/programming"}},c={},h=[{value:"Signal generator",id:"signal-generator",level:2},{value:"Excitation signal",id:"excitation-signal",level:3},{value:"Adquiring EC signal",id:"adquiring-ec-signal",level:2},{value:"First stage of conditioning",id:"first-stage-of-conditioning",level:3},{value:"Second stage of conditioning",id:"second-stage-of-conditioning",level:2},{value:"ADC conversion",id:"adc-conversion",level:2}];function l(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ec",children:"EC"}),"\n",(0,s.jsx)(t.p,{children:"For the EC reading, we are checking all the hardware steps to be sure that the signal pass correctly."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"pHMeter and EC probe",src:n(98008).Z+"",width:"1280",height:"961"})}),"\n",(0,s.jsx)(t.h2,{id:"signal-generator",children:"Signal generator"}),"\n",(0,s.jsx)(t.p,{children:"This first test is in the outoput pin for the signal generator, you must to put the oscilloscope probe in the pin 7 for U8 IC like the next picture:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC test signal generator",src:n(80076).Z+"",width:"776",height:"835"})}),"\n",(0,s.jsx)(t.p,{children:"If everything runs well, you have to obtain a signal plot like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC signal generator",src:n(73750).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsx)(t.p,{children:"The ideal values for this part of the circuit need to be:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Voltage Max"}),(0,s.jsx)(t.td,{children:"3.3 V"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Voltage Min"}),(0,s.jsx)(t.td,{children:"-3.3 V"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Frequency"}),(0,s.jsx)(t.td,{children:"1.76 kHz"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The experimental results are very similiar to the plot 1 in the figure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC signal generator",src:n(86633).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsx)(t.h3,{id:"excitation-signal",children:"Excitation signal"}),"\n",(0,s.jsx)(t.p,{children:"Once you have a correct signal generation, the next step is check if you have the correct reduction voltage to supply the EC probe. So, you need to check the center pin for the BNC connector in the EC circuit."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC excitation",src:n(12881).Z+"",width:"776",height:"835"})}),"\n",(0,s.jsx)(t.p,{children:"Now, you must obtain this results:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measurement"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Voltage Max"}),(0,s.jsx)(t.td,{children:"129 mV"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Voltage Min"}),(0,s.jsx)(t.td,{children:"-129 mV"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Frequency"}),(0,s.jsx)(t.td,{children:"1.76 kHz"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"You can see plot 2 signal result in this figure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC excitation plot",src:n(91182).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"You can see the differnce between the magnitude of the voltage between the signal square generation and excitation in this figure:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Considering the difference between the gain in each channel. ",(0,s.jsx)(t.strong,{children:"Channel 1"})," has 2.00 V for every square in the horizontal axis (white dots behind yellow and blue plots), while ",(0,s.jsx)(t.strong,{children:"Channel 2"})," has 200 mV instead."]}),"\n",(0,s.jsx)(t.li,{children:"Due to design for OPA (negative feedback), the excitation signal has the negative part for the signal generation, but this doesn't have any important consequence later."}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC signal square generation vs EC excitation",src:n(11948).Z+"",width:"320",height:"234"})})]}),"\n",(0,s.jsx)(t.h2,{id:"adquiring-ec-signal",children:"Adquiring EC signal"}),"\n",(0,s.jsx)(t.p,{children:"The principal measurement in this case was made using KCI (potassium chloride) mixed with destilated water in proportion 1:1 for 50 ml. In this case, you need to read in 1 of the 4 external pins in the BNC connector for EC (see Figure)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC probe response",src:n(28773).Z+"",width:"776",height:"835"})}),"\n",(0,s.jsx)(t.p,{children:"The response in the oscilloscope must to be similar to this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC response",src:n(37744).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsx)(t.p,{children:"You can see the big difference compare to the excitation. Now, you have volage peaks with the same frequency to the signal excitation not square signal. This is due to the fast exponential behavior in the transfer of ions from the solution. In the same way, in the later stages of the conditioning circuit, a change in the signal will be obtained, so that it's easily interpreted by the ADC."}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["Compare the excitation signal (",(0,s.jsx)(t.strong,{children:"Channel 2"}),") versus signal response (",(0,s.jsx)(t.strong,{children:"Channel 1"}),"):"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC signal excitation vs signal response",src:n(94519).Z+"",width:"320",height:"234"})})]}),"\n",(0,s.jsx)(t.h3,{id:"first-stage-of-conditioning",children:"First stage of conditioning"}),"\n",(0,s.jsx)(t.p,{children:"After check the correct response for the EC probe, you need to check the diode + OPA configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC diodes signal",src:n(84528).Z+"",width:"776",height:"835"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"You can put the oscilloscope probe near to D1 pin or D2 pin, the signal must to be the same."})}),"\n",(0,s.jsx)(t.p,{children:"In this case, you will be obtain a signal similar to a sawtooth with negative ramp and positive and negative peaks:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC conditioning in first stage",src:n(56449).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsx)(t.p,{children:"This signal varies in amplitudes depending on the quantity of KCI + destilated water in the test."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This first test is only for check the answer in the EC, so the final value can change if you want to calibrate the EC."})}),"\n",(0,s.jsx)(t.h2,{id:"second-stage-of-conditioning",children:"Second stage of conditioning"}),"\n",(0,s.jsx)(t.p,{children:"After see the sawtooth, you are ready to test the last stage for the analog conditioning."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC response ADC",src:n(88267).Z+"",width:"776",height:"835"})}),"\n",(0,s.jsx)(t.p,{children:"In this stage, you must to observe only a sawtooth with negative peaks and positive peaks."}),"\n",(0,s.jsx)(t.p,{children:"This stage converts the negative values to positive and smooths the signal:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC response to ADC",src:n(92111).Z+"",width:"320",height:"234"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["Compare the initial response (",(0,s.jsx)(t.strong,{children:"Channel 1"}),") versus second stage of conditioning (",(0,s.jsx)(t.strong,{children:"Channel 2"}),")."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC response vs first stage of conditioning",src:n(10025).Z+"",width:"320",height:"234"})})]}),"\n",(0,s.jsx)(t.h2,{id:"adc-conversion",children:"ADC conversion"}),"\n",(0,s.jsx)(t.p,{children:"Once you have verify all conversion stages, the final steps is check the serial monitor with the ADC values from the microcontroller. So, if you have everthing ok, you will be obtain raw values likes this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC raw values",src:n(49314).Z+"",width:"1652",height:"993"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Be sure that  the ADC response is stable, in other case, you need to check the previous stages or considering to replace the capacitor ",(0,s.jsx)(t.strong,{children:"C35"})," in the board for a new with the 220 nF or 22 nF value."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},84528:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_hw_test_diode_response-8a3c425327ab2e25f49660d0a1adcb32.png"},12881:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_hw_test_excitation-a5c7d31616304efd33a8b45eddc7e0b4.png"},88267:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_hw_test_response_to_ADC-784ade52f464483d5535adcf15117d2c.png"},80076:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_hw_test_signal_generator-a7fd9975bf6710f11066c4f392a9668a.png"},28773:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_hw_test_signal_response-3a17433dd6cf8537f8a26c7b878dbe8a.png"},37744:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_probe_response-750fa502ee8606d3b5bfb1c045b91274.bmp"},49314:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ec_raw-18d48c30136417c489f7944764064d67.svg"},91182:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/excitation_pp-43de1976666c5169792fa241fa8977af.bmp"},94519:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/excitation_vs_response-7e2069c1207b54bb7c276c8bd048fd02.bmp"},98008:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/phMeter_pH_and_EC_probe-425ce632793cd50bd858393d69ab1713.jpg"},56449:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/response_diodes-9def3dd2b30dd3188bddf6ae9c63882f.bmp"},92111:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/response_to_ADC-0d2b1e01b7c12efe1c5701606725fa90.bmp"},10025:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/response_vs_to_ADC-7a4bef2e6d9981db26d99fe26fdaabfc.bmp"},73750:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/signal_generator-85014fa2578bc4fae0e1294b82258d10.bmp"},86633:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/signal_generator_pp-3a0fc2d53392355d2deebd05e757e3e4.bmp"},11948:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/signal_generator_vs_excitation-0f17f11ae76b123e77137209f3d5c484.bmp"},11683:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(50959);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);