if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"174a4e030bfeff3e2a8709d53e85cbe0"},{url:"/_next/static/1N22jmI0zCttlm7Z2dkqu/_buildManifest.js",revision:"1c3c99422ac92eb40e814c62eb58bcae"},{url:"/_next/static/1N22jmI0zCttlm7Z2dkqu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2910-9bea09ce8e6250b8.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/3222-e48329781143e73d.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/3674-760269dea9f1cc66.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/4697-a4c668fead67e03c.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/596-a12a37f420c759b3.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/6685-1aed4e02be58545f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/6820-4078d44ca5a18063.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/9589-27ae08778d4e4d5f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/970-2c92144e6fe64db3.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/endevents/detail/page-bf75b2498224c656.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/endevents/page-09e07bb02375025f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/ingevents/detail/page-e42266171f4429a5.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/ingevents/page-86ba181d5dc915ac.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/layout-91f5b1323f815e66.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/winevents/detail/page-6a313870f0f32f4a.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/(event)/winevents/page-15f88a98c2150189.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/benefitMyLuck/page-46076384a461bec1.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/endCoupon/page-25619399c7b5430d.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/layout-129e7469af6c159f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/myCoupon/page-1f20337e5e992ca6.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/myEvent/detail/page-10495916a525c65a.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/myEvent/page-588b6492c41f973b.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/pntPlus/attend/page-37c2547c615ef2ba.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/pntPlus/roulette/page-178788e96b871009.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/pntTip/page-31a4fd2baee2571b.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/benefits/winEvent/page-521648bb59b1fe07.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/coupon/page-826a53a2d21aafc7.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/consult/answered/page-8c4c1e24f62a3404.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/consult/list/page-b4eb27dbad54d06f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/consult/write/page-9f5061b899d4dc8a.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/faq/page-5b3ca6e2551ba371.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/layout-5d6c750239ffc6ed.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/cscenter/notice/page-6aa348aaba0d4311.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/layout-a62ca4dbdb2b46b8.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/loading-ef572de5908ea106.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/login/page-186998107e7c3a02.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/findIdPw/page-bdfe176f22f1813e.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/findIdResult/page-5cd46b3e8c923eec.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/findPw/page-f87e5ab1e9879ed5.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/findPwResult/page-6a2ce35f8f93541c.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/join/agree/page-57d22f8409687d90.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/join/cert/page-08e67deebf471062.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/join/form/page-a9defd5ce1db87dc.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/join/page-cd31583f685bc21a.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/member/join/success/page-6a972237cc28ea55.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/cert/page-8d1dddbda2fe2a7d.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/changePwd/page-1cf3cef1d4d8f342.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/infoRcvAgree/page-a448ddb74a031626.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/layout-b3ba2acb830aea97.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/serviceAgree/page-c18e834a43c788ab.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/myinfo/withdrawal/leavePassword/page-1986e9fdc9f806b1.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypage/layout-31d0de75ebe18aa3.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypage/page-cd1d5bcc61068be4.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/cardManage/page-6fee52de52d6fbb0.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/chgPntPwdCert/page-905c459f6dac6295.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/convertPntList/page-5ab3827cb7a6ceb0.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/layout-231bacf07341135a.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/pntGiftMain/page-b7cc4aec36bf40c3.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/pntGiftMainsub/page-b974211faa2cbb83.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/pntHistory/page-7e14c2ac4ab8bbd0.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/regAffiliatePntCard/page-f0dc0a30d904ecd5.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/mypoint/savePoint/page-79cfa989958f4add.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/page-2e47dc94630ad858.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/app/spoint/tempCardCert/page-1bb857e45a1aae81.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/fd9d1056-38d3db176f9cfe61.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/main-5074c350a7a67ac2.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/main-app-d79d5aa69c2c0dbe.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/pages/_app-c39a67c97d2e85f6.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/pages/_error-f172337bda537849.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f81378568925ba4f.js",revision:"1N22jmI0zCttlm7Z2dkqu"},{url:"/_next/static/css/0497f658781b2ed2.css",revision:"0497f658781b2ed2"},{url:"/_next/static/css/0c8dea5cacfc13d5.css",revision:"0c8dea5cacfc13d5"},{url:"/_next/static/css/15ad8330f11d5c61.css",revision:"15ad8330f11d5c61"},{url:"/_next/static/css/16c845edca3d1ffe.css",revision:"16c845edca3d1ffe"},{url:"/_next/static/css/1f4427a11af49939.css",revision:"1f4427a11af49939"},{url:"/_next/static/css/316c626588dfc7ad.css",revision:"316c626588dfc7ad"},{url:"/_next/static/css/39de87d357eb0922.css",revision:"39de87d357eb0922"},{url:"/_next/static/css/3cc51d4aa93b8060.css",revision:"3cc51d4aa93b8060"},{url:"/_next/static/css/5674b66eb0416d1c.css",revision:"5674b66eb0416d1c"},{url:"/_next/static/css/5a157e8aa42ddfc8.css",revision:"5a157e8aa42ddfc8"},{url:"/_next/static/css/5f9e4777bf052113.css",revision:"5f9e4777bf052113"},{url:"/_next/static/css/707f27ad8ba6e255.css",revision:"707f27ad8ba6e255"},{url:"/_next/static/css/7a5649e59c9c24b5.css",revision:"7a5649e59c9c24b5"},{url:"/_next/static/css/84522a5dec064ddd.css",revision:"84522a5dec064ddd"},{url:"/_next/static/css/8688ea39335405d4.css",revision:"8688ea39335405d4"},{url:"/_next/static/css/8e6f28182d23569f.css",revision:"8e6f28182d23569f"},{url:"/_next/static/css/a900ec436ddbad8e.css",revision:"a900ec436ddbad8e"},{url:"/_next/static/css/c40b6f63de77bd98.css",revision:"c40b6f63de77bd98"},{url:"/_next/static/css/c644f8a2ea431390.css",revision:"c644f8a2ea431390"},{url:"/_next/static/css/c7f72a14dd786628.css",revision:"c7f72a14dd786628"},{url:"/_next/static/css/cd8939ab6ee9e90a.css",revision:"cd8939ab6ee9e90a"},{url:"/_next/static/css/cf9b1ce3868ba191.css",revision:"cf9b1ce3868ba191"},{url:"/_next/static/css/dda21219c95037a4.css",revision:"dda21219c95037a4"},{url:"/_next/static/css/e49f202aa528a953.css",revision:"e49f202aa528a953"},{url:"/_next/static/css/e96ae29d07bf1d5c.css",revision:"e96ae29d07bf1d5c"},{url:"/_next/static/css/e9e9bd7d668ec366.css",revision:"e9e9bd7d668ec366"},{url:"/_next/static/css/f18f1b195344bccc.css",revision:"f18f1b195344bccc"},{url:"/_next/static/css/fbbb0123490b664d.css",revision:"fbbb0123490b664d"},{url:"/_next/static/css/fda2168474461b9c.css",revision:"fda2168474461b9c"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/btn_arrow_under.7ed4bda7.png",revision:"7ed4bda7"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/chevrons-up.ef98243d.svg",revision:"b9b13bd35d0638d572a193927e10ec25"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/pntCell.61052e06.png",revision:"61052e06"},{url:"/_next/static/media/pntCell2.a0c4b32a.png",revision:"a0c4b32a"},{url:"/asiana_membership.png",revision:"96600d478888cf7111208b829a7a8208"},{url:"/assets/images/icons/chevrons-up.svg",revision:"b9b13bd35d0638d572a193927e10ec25"},{url:"/assets/images/icons/icon_x128.png",revision:"78e9318295f911f24e8991a2f332d423"},{url:"/assets/images/icons/icon_x192.png",revision:"270fa607351156ececdf627508cec9dc"},{url:"/assets/images/icons/icon_x384.png",revision:"5e5947a33c6e6435665e910a31d8be9c"},{url:"/assets/images/icons/icon_x512.png",revision:"89d7a101260a470d8bff23b3f367c4a0"},{url:"/assets/images/loader.svg",revision:"6f4bd8af4c9af3ed857cbc0f4ce39cd7"},{url:"/assets/images/login-loading.gif",revision:"a10863b37d849ff571c74b7941490088"},{url:"/btn_arrow_under.png",revision:"64f8425692f5c6405d7999488332345b"},{url:"/cardManageBanner.jpg",revision:"1841358a5d4c231975cda7a63653c3dc"},{url:"/emart.png",revision:"7511b2f7ea5737557d9d37d9c48a1ef6"},{url:"/gift_card_img.png",revision:"6cbe8447e4d49640b0450d5f74957803"},{url:"/icon_minus.png",revision:"4561bc114bfd915632cd7b9cf7dc700b"},{url:"/icon_plus.png",revision:"79b24e2f48db186676b19744cf4b5afb"},{url:"/koreanair_membership.png",revision:"48e2f89dcfca75c3d0af3bfcdcfc715b"},{url:"/manifest.json",revision:"e636d53d65404634b276700679170173"},{url:"/menu01.png",revision:"872481882d5433e39ff580e794f5f3f6"},{url:"/menu02.png",revision:"96a89fef89fd63892f45e55f80b6849a"},{url:"/menu03.png",revision:"18e8712b57ae132c32093618a3f62fba"},{url:"/menu04.png",revision:"0a56e0013e6e4153fc4f9f815c8d0a89"},{url:"/menu05.png",revision:"d3c0c4328239445da72847a88f92f12f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/noneinfoicon.png",revision:"e2cb8d3d0459a7fdd0842ca56144f8dc"},{url:"/pntCell.png",revision:"d5d9bfaf75c9303f31a94a7a57ea6a39"},{url:"/pntCell2.png",revision:"e0cc01f5b0de139104c0c8f9263b8ba5"},{url:"/pnthistorycardlogo.png",revision:"324720241cd606b21308782d2a95fb44"},{url:"/pnthistoryinfoicon.png",revision:"5e3b6b7bea5560e102d4a7937a38085d"},{url:"/pnticon01.png",revision:"3f928317f582434a7cbd1444015c5a73"},{url:"/point_logo_okcashbag.png",revision:"6277d2dc513d9fb69b04591dfa33c656"},{url:"/point_logo_scbank.png",revision:"35c746c1736ca2d5c3e387147c84e383"},{url:"/samsungMembership.png",revision:"160e3ffd1d5029b610857491cfd61221"},{url:"/sw.js",revision:"b71f18f7532dc8749d6f8c500527038c"},{url:"/sw.js.map",revision:"e19adc90936aa1f24aae2ddcda8abcd1"},{url:"/switch_step_icon.png",revision:"5f9170298c6598cefc3bc0059e480fbf"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
