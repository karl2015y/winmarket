import{D as h,U as B,al as D,m as f,ao as M,aA as N,a1 as z,am as L,a3 as O,aB as T,n as y,o,av as U,s,w as a,x as u,H as _,F as $,v as n,a0 as m,$ as c}from"./vendor.2e9f8f3e.js";/* empty css                        *//* empty css                        *//* empty css               *//* empty css                   *//* empty css                  *//* empty css                  */import{_ as J,g as H,s as I}from"./index.4c5df9d9.js";import{d as P}from"./vuedraggable.umd.15e797dc.js";const A={components:{draggable:P},name:"productList",setup(){const r=h([]),l=()=>{H(["products/category"]).then(d=>{r.value=d.datas})},p=h(!1),t=h([]),k=d=>{t.value=JSON.parse(JSON.stringify(d)),p.value=!0},b=()=>{r.value=JSON.parse(JSON.stringify(t.value)),i(()=>{p.value=!1})},i=d=>{I(["products"],{id:"category",datas:r.value}).then(()=>{alert("\u66F4\u65B0\u6210\u529F"),d&&d()})},v=h("");return B(()=>{l()}),{product_category_list:r,preview_image_url:v,sort_dialog_status:p,sort_temp_list:t,openSortDialog:k,saveSortTempList:b}}},F={class:"flex mt-3"},q={class:"flex justify-center items-center"},G=o("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})],-1),K=[G],Q=o("div",{class:"!whitespace-nowrap"},"\u6392\u5E8F\u9806\u4F4D",-1),R=["textContent"],W={key:1},X=m("\u65B0\u589E\u5206\u985E"),Y=m("Edit"),Z=m("Delete"),ee={key:0,class:"border-solid border-l-2 w-full"},te=m("\u5132\u5B58"),oe={class:"flex justify-start items-center hover:bg-white rounded-sm"},ae=o("button",{class:"handle cursor-move ml-3"},[o("svg",{class:"h-auto w-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1),re={class:"mx-3 cursor-pointer border-solid border p-3 rounded m-1"},le=o("br",null,null,-1);function se(r,l,p,t,k,b){const i=D,v=f("router-link"),d=M,x=N,g=z,C=L,V=f("router-view"),j=f("draggable"),S=O,E=T;return n(),y($,null,[o("div",F,[o("div",{class:"w-full transition-all duration-500",style:U(r.$route.name?"width: 180px;":"")},[s(C,{data:t.product_category_list,"default-sort":{prop:"sort_index",order:"ascending"},"row-class-name":e=>e.row.name==r.$route.params.category_name?"current-row":""},{default:a(()=>[r.$route.name?u("",!0):(n(),_(i,{key:0,prop:"sort_index",align:"center",width:"180"},{header:a(()=>[o("div",q,[o("div",{onClick:l[0]||(l[0]=e=>t.openSortDialog(t.product_category_list)),class:"cursor-pointer"},K),Q])]),_:1})),s(i,{label:"\u985E\u5225\u540D\u7A31",width:"180"},{default:a(e=>[s(v,{to:{name:"productList",params:{category_name:e.row.name}},class:"text-blue-500 hover:text-blue-300"},{default:a(()=>[m(c(e.row.name),1)]),_:2},1032,["to"])]),_:1}),r.$route.name?u("",!0):(n(),_(i,{key:1,label:"\u662F\u5426\u555F\u7528",width:"180"},{default:a(e=>[s(d,{modelValue:e.row.is_enabled,"onUpdate:modelValue":w=>e.row.is_enabled=w,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1})),r.$route.name?u("",!0):(n(),_(i,{key:2,label:"\u63CF\u8FF0",width:"180"},{default:a(e=>[o("p",{textContent:c(e.row.description),class:"whitespace-pre-line"},null,8,R)]),_:1})),r.$route.name?u("",!0):(n(),_(i,{key:3,label:"\u7E2E\u5716"},{default:a(e=>[e.row.image_url?(n(),_(x,{key:0,class:"cursor-pointer",src:e.row.image_url,style:{width:"100px",height:"100px"},onClick:w=>t.preview_image_url=e.row.image_url},null,8,["src","onClick"])):(n(),y("p",W,"\u6C92\u6709\u5716\u7247"))]),_:1})),r.$route.name?u("",!0):(n(),_(i,{key:4,align:"right",width:"200"},{header:a(()=>[s(g,{size:"small",type:"primary"},{default:a(()=>[X]),_:1})]),default:a(e=>[m(c(e.data)+" ",1),s(g,{size:"small"},{default:a(()=>[Y]),_:1}),s(g,{size:"small",type:"danger"},{default:a(()=>[Z]),_:1})]),_:1}))]),_:1},8,["data","row-class-name"])],4),r.$route.name?(n(),y("div",ee,[s(V)])):u("",!0)]),s(S,{modelValue:t.sort_dialog_status,"onUpdate:modelValue":l[3]||(l[3]=e=>t.sort_dialog_status=e),title:"\u5546\u54C1\u985E\u5225\u66F4\u6539\u6392\u5E8F"},{default:a(()=>[s(g,{onClick:l[1]||(l[1]=e=>t.saveSortTempList()),type:"primary"},{default:a(()=>[te]),_:1}),o("ul",null,[s(j,{modelValue:t.sort_temp_list,"onUpdate:modelValue":l[2]||(l[2]=e=>t.sort_temp_list=e),"item-key":"index",handle:".handle"},{item:a(({element:e,index:w})=>[o("li",oe,[ae,o("div",re,[m(c(e.sort_index=w)+". "+c(e.name)+" ",1),le,e.image_url?(n(),_(x,{key:0,src:e.image_url,style:{width:"100px",height:"100px"}},null,8,["src"])):u("",!0)])])]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),t.preview_image_url?(n(),_(E,{key:0,onClose:l[4]||(l[4]=e=>t.preview_image_url=""),"url-list":[t.preview_image_url],"hide-on-click-modal":!0},null,8,["url-list"])):u("",!0)],64)}var we=J(A,[["render",se]]);export{we as default};
