(this["webpackJsonpflip-card-template"]=this["webpackJsonpflip-card-template"]||[]).push([[0],{25:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),i=a.n(s),r=a(11),l=a(9),p=(a(24),a(25),a(2));const o=e=>e<10&&0!==e?e:10===e||0===e?9:e-10,d=e=>{let{value:t,countdown:a}=e;const n=Object(c.useRef)(),s=Object(c.useRef)(),[i,r]=Object(c.useState)(a?o(t+3):t);return Object(c.useEffect)((()=>{const e=n.current,t=s.current;return l.a.DOM.create(e,{value:i,didInit:e=>{s.current=e},view:{children:[{root:"div",style:".tick",repeat:!0,children:[{view:"flip"}]}]}}),()=>l.a.DOM.destroy(t)}),[]),Object(c.useEffect)((()=>{if(a){const e=l.a.helper.interval((()=>{r((e=>{if(e===t)return t;return Math.abs(o(--e))}))}),250);return()=>{e.stop()}}}),[t,a]),Object(c.useEffect)((()=>{s.current&&(s.current.value=i)}),[i]),Object(p.jsx)("div",{ref:n})};a(27);const j=e=>{let{value:t}=e;return Object(p.jsxs)("div",{className:"tick",children:[Object(p.jsx)("span",{className:"tick-flip-top-card",children:t}),Object(p.jsxs)("span",{"data-view":"flip",className:"tick-flip",children:[Object(p.jsxs)("span",{className:"tick-flip-card",children:[Object(p.jsxs)("span",{className:"tick-flip-panel-front tick-flip-front tick-flip-panel",style:{transform:"rotateX(0deg)"},children:[Object(p.jsx)("span",{className:"tick-flip-panel-front-text",children:Object(p.jsx)("span",{className:"tick-flip-panel-text-wrapper",children:""})}),Object(p.jsx)("span",{className:"tick-flip-panel-front-shadow",style:{opacity:"0"}})]}),Object(p.jsxs)("span",{className:"tick-flip-panel-back tick-flip-back tick-flip-panel",style:{transform:"rotateX(-180deg)"},children:[Object(p.jsx)("span",{className:"tick-flip-panel-back-text",children:Object(p.jsx)("span",{className:"tick-flip-panel-text-wrapper"})}),Object(p.jsx)("span",{className:"tick-flip-panel-back-highlight",style:{opacity:"2"}}),Object(p.jsx)("span",{className:"tick-flip-panel-back-shadow"})]})]}),Object(p.jsxs)("span",{className:"tick-flip-card",children:[Object(p.jsxs)("span",{className:"tick-flip-panel-front tick-flip-front tick-flip-panel",style:{transform:"rotateX(-180deg)"},children:[Object(p.jsx)("span",{className:"tick-flip-panel-front-text",children:Object(p.jsx)("span",{className:"tick-flip-panel-text-wrapper"})}),Object(p.jsx)("span",{className:"tick-flip-panel-front-shadow",style:{opacity:"0"}})]}),Object(p.jsxs)("span",{className:"tick-flip-panel-back tick-flip-back tick-flip-panel",style:{transform:"rotateX(-360deg)"},children:[Object(p.jsx)("span",{className:"tick-flip-panel-back-text",children:Object(p.jsx)("span",{className:"tick-flip-panel-text-wrapper",children:""})}),Object(p.jsx)("span",{className:"tick-flip-panel-back-highlight",style:{opacity:"0"}}),Object(p.jsx)("span",{className:"tick-flip-panel-back-shadow",style:{opacity:"0"}})]})]}),Object(p.jsx)("span",{className:"tick-flip-spacer",children:" "}),Object(p.jsx)("span",{className:"tick-flip-shadow-top tick-flip-shadow tick-flip-front"}),Object(p.jsx)("span",{className:"tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"}),Object(p.jsx)("span",{className:"tick-flip-card-shadow",style:{opacity:"0",transform:"scaleY(0)"}})]})]})};var f,b,h,m,O,k=a(4),u=a(5);const x=u.a.div(f||(f=Object(k.a)(['\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: "mainContent" "mainContent" "secondaryContent";\n  font-family: sans-serif;\n  text-align: center;\n  padding: 0;\n  position: relative;\n']))),g=u.a.div(b||(b=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 2em 0;\n  grid-area: ",';\n  background-image: url("','");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  color: #fff;\n'])),(e=>e.gridArea),(e=>e.img)),y=u.a.h1(h||(h=Object(k.a)(["\n  color: #fff;\n  background-color: #da011a;\n  display: inline-block;\n  padding: 0.3em 1em;\n  margin: 0 0 1em;\n  text-transform: uppercase;\n"]))),w=u.a.h1(m||(m=Object(k.a)(["\n  text-transform: uppercase;\n"]))),v=u.a.div(O||(O=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n  grid-area: ",";\n  position: relative;\n  background-color: #da011a;\n  color: #fff;\n"])),(e=>e.gridArea));a(30);function N(e){let{currency:t,price:a,backgroundImage:n,endCard:s,headingOne:i,headingTwo:l,bodyOne:o,bodyUrl:f}=e;const[b,h]=Object(c.useState)(!1),[m,O]=Object(c.useState)(!1),k=Object(r.useSpring)({to:{scale:1.1},from:{scale:1},reset:!0,reverse:m,delay:1200,pause:b,onRest:e=>(1===e.value.scale&&h(!0),O(!m))});return Object(p.jsxs)(x,{children:[Object(p.jsx)(g,{gridArea:"mainContent",img:n,children:Object(p.jsxs)(r.a.div,{style:k,children:[Object(p.jsx)(y,{children:i}),Object(p.jsxs)("div",{children:[Object(p.jsx)(j,{value:"FROM"}),Object(p.jsx)(d,{value:t}),Array.from(a.toString()).map(((e,t)=>Object(p.jsx)(d,{value:Number(e),countdown:!0},t))),s&&Object(p.jsx)(j,{value:s})]})]})}),Object(p.jsxs)(v,{gridArea:"secondaryContent",children:[Object(p.jsx)(w,{children:l}),Object(p.jsxs)("p",{children:[o,Object(p.jsx)("br",{}),f]})]})]})}N.defaultProps={currency:"$",price:"1198",backgroundImage:"image.jpg",endCard:"Per Couple",headingOne:"Flexible Changes",headingTwo:"Barossa Valley Wine & Dine Retreat",bodyOne:"^ Terms, conditions & select travel dates apply. Price and saving is per couple, twin share.",bodyUrl:"www.flightcentre.com.au/product/12879562"};const C=document.getElementById("root");i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N,{...window.templateProps})}),C)}},[[31,1,2]]]);
//# sourceMappingURL=main.f6df1cfc.chunk.js.map