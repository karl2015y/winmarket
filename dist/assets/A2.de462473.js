import{$ as B,c as H,b as q,N as G,A as L,S as N,a as j}from"./swiper-slide.c09f1ea2.js";import{_ as T}from"./index.827d2c96.js";import{D as V,Q as Y,m as P,n as F,s as J,w as z,F as D,av as R,aw as X,v as S,Y as Q,G as U,o as I}from"./vendor.2577d0b7.js";function _(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function W({swiper:a,extendParams:$,on:r,emit:C}){const d="swiper-pagination";$({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`}}),a.pagination={el:null,$el:null,bullets:[]};let y,g=0;function x(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function i(e,l){const{bulletActiveClass:o}=a.params.pagination;e[l]().addClass(`${o}-${l}`)[l]().addClass(`${o}-${l}-${l}`)}function c(){const e=a.rtl,l=a.params.pagination;if(x())return;const o=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,s=a.pagination.$el;let t;const u=a.params.loop?Math.ceil((o-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(t=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),t>o-1-a.loopedSlides*2&&(t-=o-a.loopedSlides*2),t>u-1&&(t-=u),t<0&&a.params.paginationType!=="bullets"&&(t=u+t)):typeof a.snapIndex!="undefined"?t=a.snapIndex:t=a.activeIndex||0,l.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const n=a.pagination.bullets;let p,m,k;if(l.dynamicBullets&&(y=n.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),s.css(a.isHorizontal()?"width":"height",`${y*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&a.previousIndex!==void 0&&(g+=t-(a.previousIndex-a.loopedSlides||0),g>l.dynamicMainBullets-1?g=l.dynamicMainBullets-1:g<0&&(g=0)),p=Math.max(t-g,0),m=p+(Math.min(n.length,l.dynamicMainBullets)-1),k=(m+p)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(h=>`${l.bulletActiveClass}${h}`).join(" ")),s.length>1)n.each(h=>{const b=B(h),f=b.index();f===t&&b.addClass(l.bulletActiveClass),l.dynamicBullets&&(f>=p&&f<=m&&b.addClass(`${l.bulletActiveClass}-main`),f===p&&i(b,"prev"),f===m&&i(b,"next"))});else{const h=n.eq(t),b=h.index();if(h.addClass(l.bulletActiveClass),l.dynamicBullets){const f=n.eq(p),E=n.eq(m);for(let v=p;v<=m;v+=1)n.eq(v).addClass(`${l.bulletActiveClass}-main`);if(a.params.loop)if(b>=n.length){for(let v=l.dynamicMainBullets;v>=0;v-=1)n.eq(n.length-v).addClass(`${l.bulletActiveClass}-main`);n.eq(n.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else i(f,"prev"),i(E,"next");else i(f,"prev"),i(E,"next")}}if(l.dynamicBullets){const h=Math.min(n.length,l.dynamicMainBullets+4),b=(y*h-y)/2-k*y,f=e?"right":"left";n.css(a.isHorizontal()?f:"top",`${b}px`)}}if(l.type==="fraction"&&(s.find(_(l.currentClass)).text(l.formatFractionCurrent(t+1)),s.find(_(l.totalClass)).text(l.formatFractionTotal(u))),l.type==="progressbar"){let n;l.progressbarOpposite?n=a.isHorizontal()?"vertical":"horizontal":n=a.isHorizontal()?"horizontal":"vertical";const p=(t+1)/u;let m=1,k=1;n==="horizontal"?m=p:k=p,s.find(_(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${m}) scaleY(${k})`).transition(a.params.speed)}l.type==="custom"&&l.renderCustom?(s.html(l.renderCustom(a,t+1,u)),C("paginationRender",s[0])):C("paginationUpdate",s[0]),a.params.watchOverflow&&a.enabled&&s[a.isLocked?"addClass":"removeClass"](l.lockClass)}function M(){const e=a.params.pagination;if(x())return;const l=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,o=a.pagination.$el;let s="";if(e.type==="bullets"){let t=a.params.loop?Math.ceil((l-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&t>l&&(t=l);for(let u=0;u<t;u+=1)e.renderBullet?s+=e.renderBullet.call(a,u,e.bulletClass):s+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;o.html(s),a.pagination.bullets=o.find(_(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?s=e.renderFraction.call(a,e.currentClass,e.totalClass):s=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,o.html(s)),e.type==="progressbar"&&(e.renderProgressbar?s=e.renderProgressbar.call(a,e.progressbarFillClass):s=`<span class="${e.progressbarFillClass}"></span>`,o.html(s)),e.type!=="custom"&&C("paginationRender",a.pagination.$el[0])}function O(){a.params.pagination=H(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let l=B(e.el);l.length!==0&&(a.params.uniqueNavElements&&typeof e.el=="string"&&l.length>1&&(l=a.$el.find(e.el),l.length>1&&(l=l.filter(o=>B(o).parents(".swiper")[0]===a.el))),e.type==="bullets"&&e.clickable&&l.addClass(e.clickableClass),l.addClass(e.modifierClass+e.type),l.addClass(e.modifierClass+a.params.direction),e.type==="bullets"&&e.dynamicBullets&&(l.addClass(`${e.modifierClass}${e.type}-dynamic`),g=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&l.addClass(e.progressbarOppositeClass),e.clickable&&l.on("click",_(e.bulletClass),function(s){s.preventDefault();let t=B(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),Object.assign(a.pagination,{$el:l,el:l[0]}),a.enabled||l.addClass(e.lockClass))}function A(){const e=a.params.pagination;if(x())return;const l=a.pagination.$el;l.removeClass(e.hiddenClass),l.removeClass(e.modifierClass+e.type),l.removeClass(e.modifierClass+a.params.direction),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&l.off("click",_(e.bulletClass))}r("init",()=>{O(),M(),c()}),r("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex=="undefined")&&c()}),r("snapIndexChange",()=>{a.params.loop||c()}),r("slidesLengthChange",()=>{a.params.loop&&(M(),c())}),r("snapGridLengthChange",()=>{a.params.loop||(M(),c())}),r("destroy",()=>{A()}),r("enable disable",()=>{const{$el:e}=a.pagination;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),r("lock unlock",()=>{c()}),r("click",(e,l)=>{const o=l.target,{$el:s}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&s.length>0&&!B(o).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&o===a.navigation.nextEl||a.navigation.prevEl&&o===a.navigation.prevEl))return;const t=s.hasClass(a.params.pagination.hiddenClass);C(t===!0?"paginationShow":"paginationHide"),s.toggleClass(a.params.pagination.hiddenClass)}}),Object.assign(a.pagination,{render:M,update:c,init:O,destroy:A})}q.use([W,G,L]);const K={props:["data"],components:{Swiper:N,SwiperSlide:j},setup(a){const $=V({main:{},sec:[{title:{type:"text",value:"\u9996\u9801\u5716\u7247"},url:{type:"text",value:"https://www.google.com"},pic_phone:{type:"img@820x410",value:"https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2F10d362de-aa20-4cf2-8bfe-7199ac335b1d.png?alt=media&token=9c400ced-284d-434e-ab6d-95c2ba6361a0"},pic_desktop:{type:"img@1920x1080",value:"https://firebasestorage.googleapis.com/v0/b/bgp-web.appspot.com/o/images%2Fe4418ba7-8572-405e-b946-351cf4a56912.png?alt=media&token=1e88f9f9-7156-40e5-b82c-1b991fb97358"}}]});return a.data&&($.value=JSON.parse(a.data),Y(()=>a.data,r=>{$.value=JSON.parse(r)})),{loc_data:$}}},Z=a=>(R("data-v-96e652d0"),a=a(),X(),a),w=["href"],aa=["src","alt"],la=["src","alt"],ea={key:1},ta=["src","alt"],sa=["src","alt"],na=Z(()=>I("div",{class:"w-full h-5 bg-gradient-to-r from-[#FCD44D] to-[#EC781E]"},null,-1));function ia(a,$,r,C,d,y){const g=P("swiper-slide"),x=P("swiper");return S(),F(D,null,[J(x,{speed:2e3,slidesPerView:1,loop:C.loc_data.sec.length>1,pagination:{clickable:!0},navigation:!0,autoplay:{delay:3500,disableOnInteraction:!1}},{default:z(()=>[(S(!0),F(D,null,Q(C.loc_data.sec,i=>(S(),U(g,{key:i},{default:z(()=>{var c;return[((c=i.url.value)!=null?c:!1)?(S(),F("a",{key:0,href:i.url.value,target:"_blank"},[I("img",{class:"w-full h-[50vw] hidden md:block",src:i.pic_desktop.value,alt:i.title.value},null,8,aa),I("img",{class:"w-full h-[50vw] md:hidden",src:i.pic_phone.value,alt:i.title.value},null,8,la)],8,w)):(S(),F("a",ea,[I("img",{class:"w-full h-[50vw] hidden md:block",src:i.pic_desktop.value,alt:i.title.value},null,8,ta),I("img",{class:"w-full h-[50vw] md:hidden",src:i.pic_phone.value,alt:i.title.value},null,8,sa)]))]}),_:2},1024))),128))]),_:1},8,["loop"]),na],64)}var ca=T(K,[["render",ia],["__scopeId","data-v-96e652d0"]]);export{ca as default};
