(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2920:function(e,t,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,423))},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return r}});let a=n(9920),s=n(497),l=n(8173),i=a._(n(1241));function r(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=l.Image},423:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var a=n(7437),s=n(2265),l=n(5601),i=n.n(l);let r=[{name:"Alex",image:"/assets/alex.png"},{name:"Angelica",image:"/assets/angelica.png"},{name:"Arnold",image:"/assets/arnold.png"},{name:"Daria",image:"/assets/daria.png"},{name:"Dexter",image:"/assets/dexter.png"}];function o(){let[e,t]=(0,s.useState)(0),[n,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{l(!0);let e=setInterval(()=>{t(e=>(e+1)%r.length)},5e3);return()=>clearInterval(e)},[]),n)?(0,a.jsx)("section",{id:"agents",className:"py-20",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Meet Our Agents"}),(0,a.jsxs)("div",{className:"relative w-full max-w-md mx-auto",children:[r.map((t,n)=>(0,a.jsxs)("div",{className:"absolute top-0 left-0 w-full transition-opacity duration-500 ".concat(n===e?"opacity-100":"opacity-0"),children:[(0,a.jsx)(i(),{src:t.image,alt:t.name,width:400,height:400,className:"rounded-lg shadow-md"}),(0,a.jsx)("p",{className:"text-center mt-4 text-xl font-semibold",children:t.name})]},t.name)),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4",children:r.map((n,s)=>(0,a.jsx)("button",{className:"w-3 h-3 rounded-full ".concat(s===e?"bg-blue-500":"bg-gray-300"),onClick:()=>t(s)},s))})]})]})}):null}}},function(e){e.O(0,[30,971,23,744],function(){return e(e.s=2920)}),_N_E=e.O()}]);