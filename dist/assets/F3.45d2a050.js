import{P as d}from"./PicText_3.b5300d20.js";import{_ as p}from"./index.4c5df9d9.js";import{D as u,R as x,m as f,H as _,w as v,v as l,o as s,n as c,Z as m,$ as r,F as y}from"./vendor.2e9f8f3e.js";const h={components:{PicText3:d},props:["data"],setup(t){const e=u({main:{title:{type:"text",value:"\u7A69\u76C8\u7684\u512A\u52E2"}},sec:[{title:{type:"text",value:"\u884C\u92B7\u8A2D\u8A08"},content:{type:"textarea",value:`\u54C1\u724C\u5B9A\u4F4D\u5206\u6790
\u7DB2\u7AD9\u6578\u4F4D\u884C\u92B7
\u524D\u53F0UI/UX\u898F\u5283`}},{title:{type:"text",value:"\u793E\u7FA4\u4F01\u5283"},content:{type:"textarea",value:`\u7CBE\u6E96\u7784\u6E96\u53D7\u773E
\u67B6\u69CB\u793E\u7FA4\u898F\u5283
\u57F7\u884C\u5A92\u9AD4\u9810\u7B97`}},{title:{type:"text",value:"\u6578\u64DA\u4F01\u5283"},content:{type:"textarea",value:`\u6578\u64DA\u512A\u5316\u8FFD\u8E64
\u5EE3\u544A\u6295\u653E\u4EE3\u64CD
\u518D\u884C\u92B7\u670D\u52D9`}},{title:{type:"text",value:"\u8996\u89BA\u8A2D\u8A08"},content:{type:"textarea",value:`\u793E\u7FA4\u7D20\u6750\u7522\u51FA
\u5F62\u8C61\u8A2D\u8A08\u8F38\u51FA
\u4F01\u696DCIS\u8A2D\u8A08`}}]});return t.data&&(e.value=JSON.parse(t.data),x(()=>t.data,n=>{e.value=JSON.parse(n)})),{loc_data:e}}},g={class:"!w-3/5 mx-auto gap-3 grid grid-cols-2 md:grid-cols-4"},w={class:"text-left ml-5 font-bold"},b={class:"border-solid border-l-8 border-skin-500 pl-3 mt-4 text-left text-gray-400 whitespace-pre-line"};function T(t,e,n,o,k,P){const i=f("PicText3");return l(),_(i,{class:"w-full pt-5 md:pt-28 pb-12 md:pb-32 bg-white",chtTitle:o.loc_data.main.title.value,engTitle:"",_class:"!w-full flex-col"},{default:v(()=>[s("div",g,[(l(!0),c(y,null,m(o.loc_data.sec,a=>(l(),c("div",{key:a,class:"w-full flex flex-col"},[s("h1",w,r(a.title.value),1),s("p",b,r(a.content.value),1)]))),128))])]),_:1},8,["chtTitle"])}var C=p(h,[["render",T]]);export{C as default};
