import{_ as m,g as h}from"./index.4c5df9d9.js";import{Q as f,a4 as v,D as x,U as C,R as P,m as y,n,o as i,s as g,w as p,F as k,Z as $,x as q,v as c,a0 as _,$ as w}from"./vendor.2e9f8f3e.js";import{P as B,a as b}from"./ProductListByCategory.aa23ec39.js";const H={components:{ProductCard:B,ProductListByCategory:b},props:["category"],setup(r){const{chageLoadingStatusHandler:l,setHistory:d}=f("mapStore"),o=()=>{var t;e.name=="shop"&&(((t=e.query.category)!=null?t:!1)?d([{link:"/shop",name:"\u5546\u5E97"},{link:`/shop?category=${e.query.category}`,name:`${e.query.category}`}]):d([{link:"/shop",name:"\u5546\u5E97"}]))},e=v(),a=x([]),s=()=>{e.params.setting&&e.params.setting.category?a.value=e.params.setting.category:(l("Shop_getProductCategoryHandler",!0),h(["products/setting"]).then(t=>{a.value=t.category,l("Shop_getProductCategoryHandler",!1)}))};return C(()=>{s(),o()}),P(()=>e.fullPath,async()=>{o()}),{product_category_list:a}}},L={class:"flex"},S={key:0,class:"md:w-1/3 w-0 overflow-hidden"},j=_(" \u5168\u90E8\u5546\u54C1 "),N={class:"w-full"},V={class:"grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mb-13"};function D(r,l,d,o,e,a){const s=y("router-link"),t=y("ProductListByCategory");return c(),n("div",L,[o.product_category_list.length>0?(c(),n("div",S,[i("div",null,[g(s,{to:{name:"shop"},class:"text-blue-500 hover:text-blue-300"},{default:p(()=>[j]),_:1})]),(c(!0),n(k,null,$(o.product_category_list,u=>(c(),n("div",{key:u},[g(s,{to:{name:"shop",query:{category:u.name}},class:"text-blue-500 hover:text-blue-300"},{default:p(()=>[_(w(u.name),1)]),_:2},1032,["to"])]))),128))])):q("",!0),i("div",N,[i("div",V,[g(t,{product_category:r.$route.query&&r.$route.query.category?[r.$route.query.category]:null,max:16,need_more:!0},null,8,["product_category"])])])])}var M=m(H,[["render",D]]);export{M as default};
