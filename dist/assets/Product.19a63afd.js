import{_ as O,b as G}from"./index.4c5df9d9.js";import{Q as q,U as H,D as C,R as J,m as E,v as h,n as x,a0 as L,$ as I,s as V,w as B,F as M,Z as D,H as j,o as d,ab as X,ac as Y,h as Q,ad as W,x as P,aa as z,ae as Z,af as w,a4 as K}from"./vendor.2e9f8f3e.js";/* empty css               *//* empty css                  *//* empty css                  */import{i as $,$ as U,n as N,S as ee,a as te,A as oe,N as se}from"./swiper-slide.9a1966e1.js";import{a as ne}from"./ProductListByCategory.aa23ec39.js";function le({swiper:e,extendParams:r,on:m}){r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let t=!1,f=!1;e.thumbs={swiper:null};function b(){const s=e.thumbs.swiper;if(!s)return;const o=s.clickedIndex,c=s.clickedSlide;if(c&&U(c).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof o=="undefined"||o===null)return;let a;if(s.params.loop?a=parseInt(U(s.clickedSlide).attr("data-swiper-slide-index"),10):a=o,e.params.loop){let g=e.activeIndex;e.slides.eq(g).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,g=e.activeIndex);const i=e.slides.eq(g).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(),p=e.slides.eq(g).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index();typeof i=="undefined"?a=p:typeof p=="undefined"?a=i:p-g<g-i?a=p:a=i}e.slideTo(a)}function u(){const{thumbs:s}=e.params;if(t)return!1;t=!0;const o=e.constructor;if(s.swiper instanceof o)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if($(s.swiper)){const c=Object.assign({},s.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(c),f=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",b),!0}function n(s){const o=e.thumbs.swiper;if(!o)return;const c=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView,a=e.params.thumbs.autoScrollOffset,g=a&&!o.params.loop;if(e.realIndex!==o.realIndex||g){let _=o.activeIndex,l,k;if(o.params.loop){o.slides.eq(_).hasClass(o.params.slideDuplicateClass)&&(o.loopFix(),o._clientLeft=o.$wrapperEl[0].clientLeft,_=o.activeIndex);const S=o.slides.eq(_).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),y=o.slides.eq(_).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof S=="undefined"?l=y:typeof y=="undefined"?l=S:y-_==_-S?l=o.params.slidesPerGroup>1?y:_:y-_<_-S?l=y:l=S,k=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,k=l>e.previousIndex?"next":"prev";g&&(l+=k==="next"?a:-1*a),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(l)<0&&(o.params.centeredSlides?l>_?l=l-Math.floor(c/2)+1:l=l+Math.floor(c/2)-1:l>_&&o.params.slidesPerGroup===1,o.slideTo(l,s?0:void 0))}let i=1;const p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(i=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),o.slides.removeClass(p),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let _=0;_<i;_+=1)o.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+_}"]`).addClass(p);else for(let _=0;_<i;_+=1)o.slides.eq(e.realIndex+_).addClass(p)}m("beforeInit",()=>{const{thumbs:s}=e.params;!s||!s.swiper||(u(),n(!0))}),m("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||n()}),m("setTransition",(s,o)=>{const c=e.thumbs.swiper;!c||c.setTransition(o)}),m("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||f&&s&&s.destroy()}),Object.assign(e.thumbs,{init:u,update:n})}function ae({swiper:e,extendParams:r,emit:m,once:t}){r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function f(){const{touchEventsData:u,touches:n}=e;u.velocities.length===0&&u.velocities.push({position:n[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:n[e.isHorizontal()?"currentX":"currentY"],time:N()})}function b({currentPos:u}){const{params:n,$wrapperEl:s,rtlTranslate:o,snapGrid:c,touchEventsData:a}=e,i=N()-a.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(n.freeMode.momentum){if(a.velocities.length>1){const v=a.velocities.pop(),T=a.velocities.pop(),F=v.position-T.position,R=v.time-T.time;e.velocity=F/R,e.velocity/=2,Math.abs(e.velocity)<n.freeMode.minimumVelocity&&(e.velocity=0),(R>150||N()-v.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=n.freeMode.momentumVelocityRatio,a.velocities.length=0;let p=1e3*n.freeMode.momentumRatio;const _=e.velocity*p;let l=e.translate+_;o&&(l=-l);let k=!1,S;const y=Math.abs(e.velocity)*20*n.freeMode.momentumBounceRatio;let A;if(l<e.maxTranslate())n.freeMode.momentumBounce?(l+e.maxTranslate()<-y&&(l=e.maxTranslate()-y),S=e.maxTranslate(),k=!0,a.allowMomentumBounce=!0):l=e.maxTranslate(),n.loop&&n.centeredSlides&&(A=!0);else if(l>e.minTranslate())n.freeMode.momentumBounce?(l-e.minTranslate()>y&&(l=e.minTranslate()+y),S=e.minTranslate(),k=!0,a.allowMomentumBounce=!0):l=e.minTranslate(),n.loop&&n.centeredSlides&&(A=!0);else if(n.freeMode.sticky){let v;for(let T=0;T<c.length;T+=1)if(c[T]>-l){v=T;break}Math.abs(c[v]-l)<Math.abs(c[v-1]-l)||e.swipeDirection==="next"?l=c[v]:l=c[v-1],l=-l}if(A&&t("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(o?p=Math.abs((-l-e.translate)/e.velocity):p=Math.abs((l-e.translate)/e.velocity),n.freeMode.sticky){const v=Math.abs((o?-l:l)-e.translate),T=e.slidesSizesGrid[e.activeIndex];v<T?p=n.speed:v<2*T?p=n.speed*1.5:p=n.speed*2.5}}else if(n.freeMode.sticky){e.slideToClosest();return}n.freeMode.momentumBounce&&k?(e.updateProgress(S),e.setTransition(p),e.setTranslate(l),e.transitionStart(!0,e.swipeDirection),e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||!a.allowMomentumBounce||(m("momentumBounce"),e.setTransition(n.speed),setTimeout(()=>{e.setTranslate(S),s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(m("_freeModeNoMomentumRelease"),e.updateProgress(l),e.setTransition(p),e.setTranslate(l),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(l),e.updateActiveIndex(),e.updateSlidesClasses()}else if(n.freeMode.sticky){e.slideToClosest();return}else n.freeMode&&m("_freeModeNoMomentumRelease");(!n.freeMode.momentum||i>=n.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchMove:f,onTouchEnd:b}})}const ie={components:{Swiper:ee,SwiperSlide:te},props:["images","choose_spec_obj"],setup(e){q("mapStore");const r=()=>{document.querySelectorAll("img.loading-img").forEach(s=>{s.src})};H(()=>{r()});const m=s=>{var o;((o=s.path[0].src)!=null?o:!1)&&s.path[0].classList.remove("loading-img")},t=C(Object.keys(e.images).length),f=C(null),b=C(null),u=s=>{const o=s.slides[s.activeIndex].querySelector("img").src;document.querySelectorAll("img.thumbs-img").forEach(c=>{c.className="thumbs-img opacity-25 mt-2"}),document.querySelectorAll(`img.thumbs-img[src="${o}"]`).forEach(c=>{c.className="thumbs-img border shadow mt-1.5"}),f.value&&f.value.autoplay.start()},n=s=>{let o=null;const c=f.value.slides;for(let a=0;a<c.length;a++)if(c[a].querySelector(`img[src="${s}"]`)){o=a;break}f.value.slides[o]?(f.value.slideTo(o),f.value.autoplay.stop()):f.value.autoplay.start()};return J(()=>e.choose_spec_obj,s=>{n(s.image_url)}),{imgs_length:t,modules:[oe,ae,se,le],thumbsSwiper:f,thumbsSwiper2:b,slideChange:u,toSideHandler:n,ImgIsLoaded:m}}},re=["src"],ce=["src"];function de(e,r,m,t,f,b){const u=E("swiper-slide"),n=E("swiper");return h(),x(M,null,[L(I()+" ",1),V(n,{onSwiper:r[1]||(r[1]=s=>{t.thumbsSwiper=s,t.slideChange(t.thumbsSwiper)}),style:{"--swiper-navigation-color":"#00000014","--swiper-pagination-color":"#00000014"},spaceBetween:10,navigation:!0,thumbs:{swiper:t.thumbsSwiper2},modules:t.modules,autoplay:{delay:5e3,disableOnInteraction:!1},class:"shadow",onSlideChangeTransitionStart:t.slideChange},{default:B(()=>[(h(!0),x(M,null,D(m.images,s=>(h(),j(u,{key:s,class:"bg-white"},{default:B(()=>[d("img",{src:s,onLoad:r[0]||(r[0]=(...o)=>t.ImgIsLoaded&&t.ImgIsLoaded(...o)),class:"loading-img"},null,40,re)]),_:2},1024))),128))]),_:1},8,["thumbs","modules","onSlideChangeTransitionStart"]),X(V(n,{onSwiper:r[3]||(r[3]=s=>{t.thumbsSwiper2=s}),spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:t.modules},{default:B(()=>[(h(!0),x(M,null,D(m.images,s=>(h(),j(u,{key:s},{default:B(()=>[d("img",{src:s,class:"thumbs-img opacity-25 loading-img",onLoad:r[2]||(r[2]=(...o)=>t.ImgIsLoaded&&t.ImgIsLoaded(...o))},null,40,ce)]),_:2},1024))),128))]),_:1},8,["modules"]),[[Y,t.imgs_length>1]])],64)}var ue=O(ie,[["render",de]]);const me={props:["product"],components:{ProductDetailImgSwiper:ue},setup(e){const r=C(e.product),m=C({}),t=()=>{r.value.image_url.forEach((i,p)=>{m.value[p]=i}),r.value.collection.forEach(i=>{i.image_url&&(m.value[decodeURIComponent(i.id)]=i.image_url)})},f=C({}),b=()=>{r.value.collection.forEach(i=>{f.value[i.id]=i})},u=C([]),n=Q(()=>{if(r.value.option.length>0){const i=encodeURIComponent(u.value.toString().replace(",","/"));return f.value[i]}else return r.value.collection[0]}),s=C(1),{state:o,pushCart:c,deleteCartItme:a}=q("mapStore"),g=()=>{if(!n.value)return alert("\u8ACB\u5148\u9078\u64C7\u54C1\u9805"),!1;const i={product_id:r.value.id,product_spec:JSON.parse(JSON.stringify(n.value)),count:s.value};i.product_spec.image_url||(i.product_spec.image_url=r.value.image_url[0]),c(i)};return H(()=>{t(),b()}),{product:r,product_images:m,choose_spec_list:u,choose_spec_obj:n,buy_spec_count:s,addToCartHandler:g}}},fe={class:"bg-white bg-opacity-60 w-screen -ml-5 md:-ml-10"},he={class:"md:py-10 md:flex"},_e={class:"md:w-1/2 w-full"},pe={class:"md:max-w-xs xl:max-w-sm md:ml-auto 2xl:mr-20"},be={class:"mt-10 ml-5 pr-8 md:ml-0 2xl:-ml-9 md:pr-0 md:mt-0 md:w-1/2 w-full"},ge={class:"md:w-2/3 md:mx-auto 2xl:mx-0"},xe={class:"text-3xl md:text-2xl font-bold md:font-normal"},ve={class:"mt-1 text-base md:text-xs"},ye={class:"text-xl md:text-sm md:font-light whitespace-pre-line mt-5 pb-5 border-solid border-b"},Se={class:"mt-5 font-bold text-xl"},Te={key:0},Ce={key:0,class:"ml-2 text-red-500"},Ie={key:1},ke={key:0},Me={class:"flex"},je={class:"mt-2 text-gray-500 text-xs"},Pe=d("br",null,null,-1),Ee={key:0,class:"md:hidden w-1/2 ml-7 mr-3"},Be=["src"],De={key:0,class:"mt-3"},Le={class:"text-gray-500 text-xs"},Ve=d("br",null,null,-1),Ae={class:"mt-5 text-right"},Oe=d("svg",{class:"w-5 h-5 inline -mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),qe=L(" \u52A0\u5165\u8CFC\u7269\u8ECA "),He=[Oe,qe],Ne=d("button",{class:"ml-3 text-skin-500 border-solid border border-skin-500 py-1 px-3 2xl:py-2 2xl:px-6 focus:outline-none hover:bg-skin-600 hover:text-white rounded text-sm 2xl:text-base"}," \u7ACB\u5373\u7D50\u5E33 ",-1),Re=["innerHTML"];function ze(e,r,m,t,f,b){const u=E("ProductDetailImgSwiper"),n=E("router-link"),s=Z,o=w,c=W;return h(),x("div",fe,[d("div",he,[d("div",_e,[d("div",pe,[t.product_images&&t.product_images[0]?(h(),j(u,{key:0,images:t.product_images,choose_spec_obj:t.choose_spec_obj},null,8,["images","choose_spec_obj"])):P("",!0)])]),d("div",be,[d("div",ge,[d("h1",xe,I(t.product.name),1),d("div",ve,[(h(!0),x(M,null,D(t.product.category,a=>(h(),j(n,{key:a,to:{name:"shop",query:{category:a}},class:"text-blue-500 hover:text-blue-300"},{default:B(()=>[L(" #"+I(a),1)]),_:2},1032,["to"]))),128))]),d("p",ye,I(t.product.description),1),d("h2",Se,[t.choose_spec_obj?(h(),x("span",Te,[d("span",{class:z({"line-through":t.choose_spec_obj.price!=t.choose_spec_obj.origin_price})},I(e.$filters.money(t.choose_spec_obj.origin_price)),3),t.choose_spec_obj.price!=t.choose_spec_obj.origin_price?(h(),x("span",Ce,I(e.$filters.money(t.choose_spec_obj.price)),1)):P("",!0)])):(h(),x("span",Ie,[L(I(e.$filters.money(t.product.min_price))+" ",1),t.product.min_price!=t.product.max_price?(h(),x("span",ke," ~ "+I(e.$filters.money(t.product.max_price)),1)):P("",!0)]))]),d("div",Me,[d("div",{class:z(["w-full transform-gpu transition-all duration-700",{"!w-1/2 md:!w-full":t.choose_spec_obj&&t.choose_spec_obj.image_url}])},[(h(!0),x(M,null,D(t.product.option,(a,g)=>(h(),x("div",{key:a},[d("span",je,I(a.name),1),Pe,V(o,{modelValue:t.choose_spec_list[g],"onUpdate:modelValue":i=>t.choose_spec_list[g]=i,class:"w-full",placeholder:`\u8ACB\u9078\u64C7${a.name}`},{default:B(()=>[(h(!0),x(M,null,D(a.value,i=>(h(),j(s,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])]))),128))],2),t.choose_spec_obj&&t.choose_spec_obj.image_url?(h(),x("div",Ee,[d("img",{class:"shadow",src:t.choose_spec_obj.image_url},null,8,Be)])):P("",!0)]),t.choose_spec_obj?(h(),x("div",De,[d("span",Le,"\u8CFC\u8CB7\u6578\u91CF (\u6700\u591A\uFF1A"+I(t.choose_spec_obj.count-t.choose_spec_obj.sold_count)+")",1),Ve,V(c,{class:"mt-1",modelValue:t.buy_spec_count,"onUpdate:modelValue":r[0]||(r[0]=a=>t.buy_spec_count=a),min:1,max:t.choose_spec_obj.count-t.choose_spec_obj.sold_count},null,8,["modelValue","max"])])):P("",!0),d("div",Ae,[d("button",{onClick:r[1]||(r[1]=a=>t.addToCartHandler()),class:"text-white bg-skin-500 border-0 py-1 px-3 2xl:py-2 2xl:px-6 focus:outline-none hover:bg-skin-600 rounded 2xl:text-lg"},He),Ne])])])]),d("div",{innerHTML:t.product.content,class:"mt-5 w-full md:w-2/3 px-5 md:px-0 mx-auto"},null,8,Re)])}var Ue=O(me,[["render",ze]]);const Fe={components:{ProductDetailCard:Ue,ProductListByCategory:ne},setup(){const{chageLoadingStatusHandler:e,setHistory:r,state:m}=q("mapStore"),t=()=>{var s;const n=(s=m.history.length)!=null?s:null;n!=null&&n>=2&&m.history[1].link.indexOf("product")==-1?r([...m.history,{link:`/shop/product/${b.value.id}`,name:`${b.value.name}`}]):r([{link:"/shop",name:"\u5546\u5E97"},{link:`/shop/product/${b.value.id}`,name:`${b.value.name}`}])},f=C(K().params.product_id),b=C(null),u=()=>{e("Product_getProductHandler",!0),G(["products",f.value],["spec"]).then(n=>{b.value=n,e("Product_getProductHandler",!1),t()})};return H(()=>{u()}),{product_id:f,product:b}}},Ge={class:"pt-10"},Je=d("h1",{class:"text-3xl font-bold text-center"},"\u76F8\u95DC\u5546\u54C1",-1),Xe={class:"grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-13"};function Ye(e,r,m,t,f,b){const u=E("ProductDetailCard"),n=E("ProductListByCategory");return h(),x(M,null,[d("section",null,[t.product?(h(),j(u,{product:t.product,key:`${e.$route.fullPath}_ProductDetailCard`},null,8,["product"])):P("",!0)]),d("section",Ge,[Je,d("div",Xe,[t.product&&t.product.category?(h(),j(n,{key:`${e.$route.fullPath}_ProductListByCategory`,product_category:t.product.category,product_id:t.product.id,max:8},null,8,["product_category","product_id"])):P("",!0)])])],64)}var tt=O(Fe,[["render",Ye]]);export{tt as default};
