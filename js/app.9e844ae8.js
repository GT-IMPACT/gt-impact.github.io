(()=>{"use strict";var e={8854:(e,t,a)=>{a(7280),a(5363),a(71);var r=a(8880),o=a(9592),n=a(3673);function i(e,t,a,r,o,i){const d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(d)}const d=(0,n.aZ)({name:"App"});d.render=i;const s=d;var l=a(4584),c=a(7083),p=a(9582);const u=[{path:"/about",component:()=>Promise.all([a.e(736),a.e(571)]).then(a.bind(a,7571)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(722)]).then(a.bind(a,6722))}]},{path:"/download",component:()=>Promise.all([a.e(736),a.e(571)]).then(a.bind(a,7571)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(258)]).then(a.bind(a,8258))}]},{path:"/",component:()=>Promise.all([a.e(736),a.e(571)]).then(a.bind(a,7571)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(344)]).then(a.bind(a,3344))},{path:"/machines",component:()=>Promise.all([a.e(736),a.e(761)]).then(a.bind(a,2761))},{path:"/mechanics",component:()=>Promise.all([a.e(736),a.e(688)]).then(a.bind(a,2688))},{path:"/items",component:()=>Promise.all([a.e(736),a.e(910)]).then(a.bind(a,7910))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(193)]).then(a.bind(a,2193))}],h=u,m=(0,c.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:(e,t,a)=>e.hash||t.hash?a:{left:0,top:0},routes:h,history:e("")});return t}));async function _(e,t){const r="function"===typeof l["default"]?await(0,l["default"])({}):l["default"],{storeKey:n}=await Promise.resolve().then(a.bind(a,4584)),i="function"===typeof m?await m({store:r}):m;r.$router=i;const d=e(s);return d.use(o.Z,t),{app:d,store:r,storeKey:n,router:i}}var f=a(6417);const g={config:{},plugins:{Notify:f.Z}},b="";async function v({app:e,router:t,store:a,storeKey:r},o){let n=!1;const i=e=>{n=!0;const a=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=a},d=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<o.length;l++)try{await o[l]({app:e,router:t,store:a,ssrContext:null,redirect:i,urlPath:d,publicPath:b})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.use(a,r),e.mount("#q-app"))}_(r.ri,g).then((e=>Promise.all([Promise.resolve().then(a.bind(a,4759)),Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));v(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,api:()=>i});var r=a(7083),o=a(52),n=a.n(o);const i=n().create({baseURL:"https://api.example.com"}),d=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},4759:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,i18n:()=>s});var r=a(7083),o=a(5948);const n={notify_wiki:"If the text does not load, restart the page",home:"Home",about:"About modpack",download:"Download",wiki:"Wiki",home_title_impact:"Unique modpack based on gregtech",update_progress:"Update 1.0.2.0",about_part1:"Global industrial modpack for Minecraft 1.7.10, based on GregTech 5 and various mods deeply integrated with each other. There has never been such integration in Minecraft with mods.",about_part2:"The main advantage of this build is the modification of each mod for the realities of GregTech. It is here that this mod is integrated into every era, from basic machines to interdimensional travel.",for_beginner:"For the beginner",for_beginner1:"This is my first time playing with GregTech, can I master it here?",for_beginner2:"More likely no than yes, as we have changed quite a few mechanics compared to vanilla GregTech.",gt_plus1:"Don't want to add GT++ to your modpack?",gt_plus2:"No, we don’t want to! We write a mod that completely covers all in-game needs.",our_team:"OUR TEAM",our_team1:"There are 2 people working on the modpack: 4gname and Sportacus.",donate:"You can donate to the project!",mod_list:"Mod list",mod_list1:"Last version modpack",changelog:"Changelog",client:"Client",server:"Server",search:"Search",download_modpack:"Download Modpack",last_update:"Last Update",download_server_cores:"Recommended cores for the server",update_date_1015:"07.27.21",update_title_1015:"More bugs…",update_desc_1015:"Many bug fixed, new NEI version by GTNH-team and modpack redesign.",update_date_1016:"08.02.21",update_title_1016:"Oh, bugs, again..",update_desc_1016:"Many bug fixed, GT-P2P, main menu and more new recipes.",update_date_1017:"01.05.22",update_title_1017:"It happened!",update_desc_1017:"New Ore Gen, Matrix System and more fixes.. and bugs :)",update_date_1018:"01.07.22",update_title_1018:"The Mill triggered",update_desc_1018:"Fixed recipes balance and wind mill, all right",update_date_1019:"03.26.22",update_title_1019:"Global optimization",update_desc_1019:"Impact performance, limit lag by multi blocks and more..",update_date_1020:"04.18.22",update_title_1020:"Bug Hunt",update_desc_1020:"Wild Hunt and Critical Bugs",wiki_modpack:"Wiki modpack",wiki_desc:"Description",wiki_general:"General",wiki_credits:"This wiki is create by of 4gname, FireWarrior, and Rait_GamerGR",wiki_machines:"Machines",wiki_mechanics:"Mechanics",wiki_items:"Tools and Items",wiki_mechanics_oregeneration:"Ore Generation",wiki_mechanics_parallelism:"Parallelism"},i={notify_wiki:"Если у вас не загрузился текст, перезапустите страницу",home:"Главная",about:"О Модпаке",download:"Скачать",wiki:"Википедия",home_title_impact:"Уникальный модпак на основе gregtech ",update_progress:"Обновление 1.0.2.0",about_part1:"Глобальный индустриальный модпак для Minecraft 1.7.10, основанный на GregTech 5 и различных модах, глубоко интегрированных друг с другом.  В Minecraft никогда не было такой интеграции с модами.",about_part2:"Основным преимуществом этой сборки является модификация каждого мода под реалии GregTech. Именно здесь этот мод интегрирован в каждую эпоху, от базовых машин до межпространственных путешествий.",for_beginner:"Для новичков",for_beginner1:"Я впервые играю с GregTech, могу ли я освоить его здесь?",for_beginner2:"Скорее нет, чем да, так как мы изменили довольно много механик по сравнению с ванильным GregTech.",gt_plus1:"Не хотите добавлять GT++ в свой модпак?",gt_plus2:"Нет, мы этого не хотим! Мы сделали мод, который полностью покрывает все внутриигровые потребности.",our_team:"НАША КОМАНДА",our_team1:"Над модпаком работают 2 человека: 4gname и Sportacus.",donate:"Вы можете помочь проекту!",mod_list:"Список модов",mod_list1:"Последяя версия модпака",changelog:"Список изменений",client:"Клиент",server:"Сервер",search:"Поиск",download_modpack:"Скачать Модпак",last_update:"Последнее обновление",download_server_cores:"Рекомендуемые серверные ядра",update_date_1015:"27.07.21",update_title_1015:"Много багов…",update_desc_1015:"Исправлено множество ошибок, новая версия NEI от GTNH-team и редизайн модпака",update_date_1017:"05.01.22",update_title_1017:"Это Свершилось!",update_desc_1017:"Новый рудоген, Матричная система, удаление модов и исправление багов.. и добавление новых :)",update_date_1016:"02.08.21",update_title_1016:"Ох, снова баги..",update_desc_1016:"Исправлено множество ошибок, GT-P2P, главное меню и куча новых рецептов",update_date_1018:"07.01.22",update_title_1018:"Ветряная мельница заработала!",update_desc_1018:"Баланс рецептов и ветряная мельница, все в порядке",update_date_1019:"27.03.22",update_title_1019:"Глобальные оптимизации",update_desc_1019:"Влияние на производительность и многое другое..",update_date_1020:"18.04.22",update_title_1020:"Охота за багами",update_desc_1020:"Дикая охота и критические баги",wiki_modpack:"Вики по модпаку",wiki_desc:"Описание",wiki_general:"Главное",wiki_credits:"Данная вики сделана благодаря 4gname, FireWarrior и Rait_GamerGR",wiki_machines:"Машины и Механизмы",wiki_mechanics:"Механики",wiki_items:"Инструменты и предметы",wiki_mechanics_oregeneration:"Рудогенерация",wiki_mechanics_parallelism:"Параллельность"},d={"en-US":n,"ru-RU":i},s=(0,o.o)({locale:"en-US",messages:d}),l=(0,r.xr)((({app:e})=>{e.use(s)}))},4584:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7083),o=a(7874);const n=(0,r.h)((function(){const e=(0,o.MT)({modules:{},strict:!1});return e}))}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,n]=e[c],d=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(d=!1,n<i&&(i=n));if(d){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{193:"1241862d",258:"9390e3a0",344:"7a6d3b97",571:"6c86bee1",688:"a5db561a",722:"5cb54bd0",761:"b963fed0",910:"c5d9dbb1"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"36f35e09",258:"f5f1fbf1",344:"b0f24efe",571:"4086966b",688:"68aec8fa",722:"d70bbbbc",736:"45b96d46",761:"cf7da973",910:"7f2c5262"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="impact-front:";a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var d,s;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){d=p;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",t+n),d.src=r),e[r]=[o];var u=(t,a)=>{d.onerror=d.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(a))),t)return t(a)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),s&&document.head.appendChild(d)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e=(e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],n=o.getAttribute("data-href");if(n===e||n===t)return o}},r=r=>new Promise(((o,n)=>{var i=a.miniCssF(r),d=a.p+i;if(t(i,d))return o();e(r,d,o,n)})),o={143:0};a.f.miniCss=(e,t)=>{var a={258:1,344:1,571:1,688:1,722:1,761:1,910:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=e[t]=[a,r]));r.push(o[2]=n);var i=a.p+a.u(t),d=new Error,s=r=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,o[1](d)}};a.l(i,s,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,d,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);if(s)var c=s(a)}for(t&&t(r);l<i.length;l++)n=i[l],a.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return a.O(c)},r=self["webpackChunkimpact_front"]=self["webpackChunkimpact_front"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(8854)));r=a.O(r)})();