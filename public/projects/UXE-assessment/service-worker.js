if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,o,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+i.slice(1)};return Promise.all(o.map((i=>{switch(i){case"exports":return r;case"module":return n;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-2d566c77"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"../../images/circle.svg",revision:"34310e47e844069065029bb78ecfa0fb"},{url:"assets/manifest.json",revision:"ca5aab340b28d8000ebab5aa6894cbeb"},{url:"bundle.js",revision:"bbdb08532ba6fe16ecea95d8c03ee526"},{url:"bundle.js.LICENSE.txt",revision:"23200fb75778ef603949cb91dcbab00d"},{url:"favicon/.DS_Store",revision:"194577a7e20bdcc7afbb718f502c134c"},{url:"favicon/android-chrome-192x192.png",revision:"d779b1ea67a34b81a69da73eb0ea045a"},{url:"favicon/android-chrome-512x512.png",revision:"4b379191b6e39e92b5506b85d4912501"},{url:"favicon/apple-touch-icon.png",revision:"0fa670186660466f45b19bb526831302"},{url:"favicon/favicon-16x16.png",revision:"bf081c48f784b0b565a29e59fe7a3966"},{url:"favicon/favicon-32x32.png",revision:"ef123a0fc346a559a5726f2b06923c23"},{url:"favicon/favicon.ico",revision:"48d57d7277c1dfedffe5b702c31de6ae"},{url:"favicon/site.webmanifest",revision:"685a574cb7b4b1eb749fd5327422a9fb"},{url:"fonts/ProximaNovaRegular.eot",revision:"12c5a0bf8a594f5dca2da11eb8907d56"},{url:"fonts/ProximaNovaRegular.ttf",revision:"d325c74976d581480f391d444b7216b9"},{url:"fonts/ProximaNovaRegular.woff",revision:"26aa9c4564719dd6d04769675cb92088"},{url:"fonts/proximanovalight.eot",revision:"9f70efb1c7de0b6f38bbb440f653aa54"},{url:"fonts/proximanovalight.ttf",revision:"5530d3f7d55331f58608e659761443ce"},{url:"fonts/proximanovalight.woff",revision:"de328f622d11b46ed92a47ac9168503f"},{url:"images/.DS_Store",revision:"776a97f3ae10ec4746e2a56ab74ae12d"},{url:"images/circle.svg",revision:"34310e47e844069065029bb78ecfa0fb"},{url:"images/glofox-logo-icon.svg",revision:"aed445f9564792606f113b954815ec0a"},{url:"images/glofox-logo.svg",revision:"975bee649631d01daa8bad7651724a3a"},{url:"images/triangle.svg",revision:"2f0e073d9db2ca12397d640d5d39de3a"},{url:"index.html",revision:"0f24840e393528e019270f63ba5d6217"},{url:"vendor/css/index.0d302e86a98e9387b413.css",revision:null}],{directoryIndex:"index.html"}),e.initialize({})}));
