if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dde7e15b38bd093f094b7af3fd296289"},{url:"/_next/static/chunks/2910-9bea09ce8e6250b8.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/3222-e48329781143e73d.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/3674-760269dea9f1cc66.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/3988-8fbed87f9152383f.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/4697-a4c668fead67e03c.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/596-a12a37f420c759b3.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/6685-1aed4e02be58545f.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/6820-4078d44ca5a18063.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/970-2c92144e6fe64db3.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/endevents/detail/page-7321b674beb3d843.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/endevents/page-2206dc9f67ba1ba2.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/ingevents/detail/page-17ff2e3ef758ddc1.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/ingevents/page-a652c8381686dfc5.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/layout-df5a18715d2564a4.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/winevents/detail/page-c9994b48d3d49502.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/(event)/winevents/page-ca56fd6c2e4aee87.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/benefitMyLuck/page-c91e1edfc8d43c04.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/endCoupon/page-d5ab6c544fe7a89c.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/layout-a1cae129c51bfcc9.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/myCoupon/page-22895926e9258e5c.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/myEvent/detail/page-64b37094541f1831.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/myEvent/page-7f88e581ea219592.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/pntPlus/attend/page-57e524d277fabff0.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/pntPlus/roulette/page-6a064d062c5cf0e6.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/pntTip/page-0a1819c745c96950.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/benefits/winEvent/page-3e2b2756c5898033.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/coupon/page-4218847651e85869.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/consult/answered/page-1d4dc51434476892.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/consult/list/page-02d1ecd36077959b.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/consult/write/page-f2e40b1a98515c41.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/faq/page-068bed468dade212.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/layout-a08adee4d84f478a.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/cscenter/notice/page-35e07331434e3a00.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/layout-b2595d16e61c01a5.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/loading-0be37a488db4fb91.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/login/page-d1f334bf42a4c2e9.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/findIdPw/page-f8068d1434cb371e.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/findIdResult/page-7e18ff6ae89640c0.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/findPw/page-a871e446abb44edc.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/findPwResult/page-d2f6a0b6947f6942.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/join/agree/page-3c5b604d403654b1.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/join/cert/page-bdc56005e313817b.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/join/form/page-a19ed7f49242f342.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/join/page-dce3a48c85d1e1b3.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/member/join/success/page-ded509f1edcddc64.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/cert/page-b669afbf7c68a46f.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/changePwd/page-df952fd76f15dd76.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/infoRcvAgree/page-457862552e4d7d80.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/layout-29f2d2b5f5ad9974.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/serviceAgree/page-c82ec49c97124b60.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/myinfo/withdrawal/leavePassword/page-0861a6931cfe0d26.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypage/layout-db1de4177d317d3a.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypage/page-b03151bac6a75cd4.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/cardManage/page-5b3f93c9484f9d8a.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/chgPntPwdCert/page-bd9dae7648bfa20f.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/convertPntList/page-8b105f71f61fe8d8.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/layout-7f54f4bc7fb3b02e.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/pntGiftMain/page-cd541f8e2e447c0f.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/pntGiftMainsub/page-2caa5134b85bf0a3.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/pntHistory/page-86b5b4816ae3d1e7.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/regAffiliatePntCard/page-aeedd0257c6cf6de.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/mypoint/savePoint/page-d89e29c295b98ca9.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/page-f77a4d5143bb0dec.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/app/spoint/tempCardCert/page-f0c36df66f260591.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/fd9d1056-38d3db176f9cfe61.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/main-5074c350a7a67ac2.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/main-app-38c165e143c8ef2c.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/pages/_app-c39a67c97d2e85f6.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/pages/_error-f172337bda537849.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c9cc50ce4a9dc2d1.js",revision:"t91U83yzUKMjk7CXX0nN3"},{url:"/_next/static/css/0497f658781b2ed2.css",revision:"0497f658781b2ed2"},{url:"/_next/static/css/0c8dea5cacfc13d5.css",revision:"0c8dea5cacfc13d5"},{url:"/_next/static/css/15ad8330f11d5c61.css",revision:"15ad8330f11d5c61"},{url:"/_next/static/css/16c845edca3d1ffe.css",revision:"16c845edca3d1ffe"},{url:"/_next/static/css/1f4427a11af49939.css",revision:"1f4427a11af49939"},{url:"/_next/static/css/316c626588dfc7ad.css",revision:"316c626588dfc7ad"},{url:"/_next/static/css/39de87d357eb0922.css",revision:"39de87d357eb0922"},{url:"/_next/static/css/3cc51d4aa93b8060.css",revision:"3cc51d4aa93b8060"},{url:"/_next/static/css/5674b66eb0416d1c.css",revision:"5674b66eb0416d1c"},{url:"/_next/static/css/5a157e8aa42ddfc8.css",revision:"5a157e8aa42ddfc8"},{url:"/_next/static/css/5f9e4777bf052113.css",revision:"5f9e4777bf052113"},{url:"/_next/static/css/707f27ad8ba6e255.css",revision:"707f27ad8ba6e255"},{url:"/_next/static/css/781641b4b88b4c3e.css",revision:"781641b4b88b4c3e"},{url:"/_next/static/css/7a5649e59c9c24b5.css",revision:"7a5649e59c9c24b5"},{url:"/_next/static/css/84522a5dec064ddd.css",revision:"84522a5dec064ddd"},{url:"/_next/static/css/8688ea39335405d4.css",revision:"8688ea39335405d4"},{url:"/_next/static/css/8e6f28182d23569f.css",revision:"8e6f28182d23569f"},{url:"/_next/static/css/a900ec436ddbad8e.css",revision:"a900ec436ddbad8e"},{url:"/_next/static/css/c40b6f63de77bd98.css",revision:"c40b6f63de77bd98"},{url:"/_next/static/css/c644f8a2ea431390.css",revision:"c644f8a2ea431390"},{url:"/_next/static/css/c7f72a14dd786628.css",revision:"c7f72a14dd786628"},{url:"/_next/static/css/cd8939ab6ee9e90a.css",revision:"cd8939ab6ee9e90a"},{url:"/_next/static/css/dda21219c95037a4.css",revision:"dda21219c95037a4"},{url:"/_next/static/css/e49f202aa528a953.css",revision:"e49f202aa528a953"},{url:"/_next/static/css/e96ae29d07bf1d5c.css",revision:"e96ae29d07bf1d5c"},{url:"/_next/static/css/e9e9bd7d668ec366.css",revision:"e9e9bd7d668ec366"},{url:"/_next/static/css/f18f1b195344bccc.css",revision:"f18f1b195344bccc"},{url:"/_next/static/css/fbbb0123490b664d.css",revision:"fbbb0123490b664d"},{url:"/_next/static/css/fda2168474461b9c.css",revision:"fda2168474461b9c"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/btn_arrow_under.7ed4bda7.png",revision:"7ed4bda7"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/chevrons-up.bca65efd.svg",revision:"54d16a938727028cbfb5446d6a42e50b"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/pntCell.61052e06.png",revision:"61052e06"},{url:"/_next/static/media/pntCell2.a0c4b32a.png",revision:"a0c4b32a"},{url:"/_next/static/t91U83yzUKMjk7CXX0nN3/_buildManifest.js",revision:"1c3c99422ac92eb40e814c62eb58bcae"},{url:"/_next/static/t91U83yzUKMjk7CXX0nN3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/asiana_membership.png",revision:"96600d478888cf7111208b829a7a8208"},{url:"/assets/images/icons/chevrons-up.svg",revision:"54d16a938727028cbfb5446d6a42e50b"},{url:"/assets/images/icons/icon_x128.png",revision:"78e9318295f911f24e8991a2f332d423"},{url:"/assets/images/icons/icon_x192.png",revision:"270fa607351156ececdf627508cec9dc"},{url:"/assets/images/icons/icon_x384.png",revision:"5e5947a33c6e6435665e910a31d8be9c"},{url:"/assets/images/icons/icon_x512.png",revision:"89d7a101260a470d8bff23b3f367c4a0"},{url:"/assets/images/loader.svg",revision:"6f4bd8af4c9af3ed857cbc0f4ce39cd7"},{url:"/assets/images/login-loading.gif",revision:"a10863b37d849ff571c74b7941490088"},{url:"/btn_arrow_under.png",revision:"64f8425692f5c6405d7999488332345b"},{url:"/cardManageBanner.jpg",revision:"1841358a5d4c231975cda7a63653c3dc"},{url:"/emart.png",revision:"7511b2f7ea5737557d9d37d9c48a1ef6"},{url:"/gift_card_img.png",revision:"6cbe8447e4d49640b0450d5f74957803"},{url:"/icon_minus.png",revision:"4561bc114bfd915632cd7b9cf7dc700b"},{url:"/icon_plus.png",revision:"79b24e2f48db186676b19744cf4b5afb"},{url:"/koreanair_membership.png",revision:"48e2f89dcfca75c3d0af3bfcdcfc715b"},{url:"/manifest.json",revision:"2fb467f19209dc236cb7f82e8589d040"},{url:"/menu01.png",revision:"872481882d5433e39ff580e794f5f3f6"},{url:"/menu02.png",revision:"96a89fef89fd63892f45e55f80b6849a"},{url:"/menu03.png",revision:"18e8712b57ae132c32093618a3f62fba"},{url:"/menu04.png",revision:"0a56e0013e6e4153fc4f9f815c8d0a89"},{url:"/menu05.png",revision:"d3c0c4328239445da72847a88f92f12f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/noneinfoicon.png",revision:"e2cb8d3d0459a7fdd0842ca56144f8dc"},{url:"/pntCell.png",revision:"d5d9bfaf75c9303f31a94a7a57ea6a39"},{url:"/pntCell2.png",revision:"e0cc01f5b0de139104c0c8f9263b8ba5"},{url:"/pnthistorycardlogo.png",revision:"324720241cd606b21308782d2a95fb44"},{url:"/pnthistoryinfoicon.png",revision:"5e3b6b7bea5560e102d4a7937a38085d"},{url:"/pnticon01.png",revision:"3f928317f582434a7cbd1444015c5a73"},{url:"/point_logo_okcashbag.png",revision:"6277d2dc513d9fb69b04591dfa33c656"},{url:"/point_logo_scbank.png",revision:"35c746c1736ca2d5c3e387147c84e383"},{url:"/samsungMembership.png",revision:"160e3ffd1d5029b610857491cfd61221"},{url:"/sw.js",revision:"8b9bd3abef0b653c0e9edc3b49db6acc"},{url:"/sw.js.map",revision:"e19adc90936aa1f24aae2ddcda8abcd1"},{url:"/switch_step_icon.png",revision:"5f9170298c6598cefc3bc0059e480fbf"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
