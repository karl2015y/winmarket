var w=Object.defineProperty;var H=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var E=(l,e,o)=>e in l?w(l,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[e]=o,x=(l,e)=>{for(var o in e||(e={}))M.call(e,o)&&E(l,o,e[o]);if(H)for(var o of H(e))S.call(e,o)&&E(l,o,e[o]);return l};import{D as r,v as g,n as _,o as u,x as C,s as n,a2 as A,h as T,U as j,m as D,al as P,a1 as L,am as N,a3 as U,w as c,F as z,a0 as f,$ as B}from"./vendor.2e9f8f3e.js";/* empty css                        *//* empty css               *//* empty css                   *//* empty css                  */import{_ as y,s as V,c as F,d as I}from"./index.4c5df9d9.js";const J={props:["page_data","editMode","pageEditCallbackHandler","pageAddCallbackHandler"],setup(l){var d,i;const e=r(""),o=r((d=l.page_data.title)!=null?d:""),t=r((i=l.page_data.description)!=null?i:""),m=r(l.editMode);return{url:e,title:o,description:t,editMode:m,updatePageDataHandler:()=>{const s={id:l.page_data.id,title:o.value,description:t.value};V(["pages"],s).then(()=>{l.pageEditCallbackHandler(x({id:l.page_data.id},s))})},createPageDataHandler:()=>{if(e.value.length==0)return alert("\u8DEF\u5F91\u70BA\u5FC5\u586B"),!1;const s={id:e.value,title:o.value,description:t.value};V(["pages"],s).then(()=>{l.pageAddCallbackHandler(x({id:e.value},s))})}}}},O={class:"flex justify-between"},R={key:0,class:"text-xl font-bold"},q={key:1,class:"text-xl font-bold"},G={class:"border border-solid m-3 p-2 shadow"},K={key:0,class:"p-1.5"},Q=u("h2",{class:"mb-2"},"\u8DEF\u5F91\u8A2D\u5B9A",-1),W={class:"p-1.5"},X=u("h2",{class:"mb-2"},"\u6A19\u984C\u8A2D\u5B9A",-1),Y={class:"p-1.5"},Z=u("h2",{class:"mb-2"},"\u7C21\u4ECB\u8A2D\u5B9A",-1),$=u("div",{class:"border-b-2 border-solid"},null,-1);function ee(l,e,o,t,m,v){const p=A;return g(),_("div",null,[u("div",O,[t.editMode?(g(),_("h1",R,"\u66F4\u65B0\u9801\u9762")):(g(),_("h1",q,"\u65B0\u589E\u9801\u9762")),t.editMode?(g(),_("button",{key:2,onClick:e[0]||(e[0]=d=>t.updatePageDataHandler()),class:"inline-flex text-white bg-skin-500 border-0 py-1 px-3 focus:outline-none hover:bg-skin-600 rounded"}," \u5132\u5B58 ")):C("",!0),t.editMode?C("",!0):(g(),_("button",{key:3,onClick:e[1]||(e[1]=d=>t.createPageDataHandler()),class:"inline-flex text-white bg-skin-500 border-0 py-1 px-3 focus:outline-none hover:bg-skin-600 rounded"}," \u5EFA\u7ACB "))]),u("div",G,[t.editMode?C("",!0):(g(),_("div",K,[Q,n(p,{modelValue:t.url,"onUpdate:modelValue":e[2]||(e[2]=d=>t.url=d),placeholder:"\u8ACB\u8F38\u5165\u8DEF\u5F91"},null,8,["modelValue"])])),u("div",W,[X,n(p,{modelValue:t.title,"onUpdate:modelValue":e[3]||(e[3]=d=>t.title=d),placeholder:"\u8ACB\u8F38\u5165\u9801\u9762\u6A19\u984C"},null,8,["modelValue"])]),u("div",Y,[Z,n(p,{modelValue:t.description,"onUpdate:modelValue":e[4]||(e[4]=d=>t.description=d),autosize:{minRows:2},type:"textarea",placeholder:"\u8ACB\u8F38\u5165\u9801\u9762\u7C21\u4ECB"},null,8,["modelValue"])])]),$])}var te=y(J,[["render",ee]]);const ae={name:"pageList",components:{pageTitle:te},setup(){const l=r([]),e=()=>{F(["pages"]).then(a=>{l.value=a})},o=r(!1),t=r(-1),m=r({}),v=(a,b)=>{t.value=a,o.value=!0,m.value=JSON.parse(JSON.stringify(b))},p=a=>{l.value[t.value]={id:a.id,title:a.title,description:a.description},o.value=!1,t.value=-1,alert("\u66F4\u65B0\u6210\u529F\uFF01")},d=(a,b)=>{if(!confirm("\u9801\u9762\u5167\u6240\u6709\u6578\u64DA\u5373\u5C07\u522A\u9664\uFF0C\u662F\u5426\u7E7C\u7E8C\uFF1F"))return!1;I(["pages",b.id]).then(()=>{l.value.splice(a,1)})},i=r(!1),s=()=>{i.value=!0},k=a=>{l.value.push({id:a.id,title:a.title,description:a.description}),i.value=!1,alert("\u65B0\u589E\u6210\u529F\uFF01")},h=T({get:()=>o.value||i.value,set:a=>{o.value=a,i.value=a}});return j(()=>{e()}),{pageList:l,openDialogStatus:h,pageEditStatus:o,pageEditHandler:v,pageEditTemp:m,pageEditCallbackHandler:p,pageDeleteHandler:d,pageAddHandler:s,pageAddCallbackHandler:k}}},le=f("\u65B0\u589E\u9801\u9762"),oe=f("Edit"),de=f("Delete");function ne(l,e,o,t,m,v){const p=D("router-link"),d=P,i=L,s=N,k=D("pageTitle"),h=U;return g(),_(z,null,[n(s,{data:t.pageList,style:{width:"100%"}},{default:c(()=>[n(d,{prop:"id",label:"URL",width:"180"},{default:c(a=>[n(p,{to:{name:"pageSet",params:{page_id:a.row.id}},class:"text-blue-500 hover:text-blue-300"},{default:c(()=>[f(B(a.row.id),1)]),_:2},1032,["to"])]),_:1}),n(d,{prop:"title",label:"\u6A19\u984C",width:"180"}),n(d,{prop:"description",label:"\u7C21\u4ECB"}),n(d,{align:"right"},{header:c(()=>[n(i,{size:"small",type:"primary",onClick:e[0]||(e[0]=a=>t.pageAddHandler())},{default:c(()=>[le]),_:1})]),default:c(a=>[n(i,{size:"small",onClick:b=>t.pageEditHandler(a.$index,a.row)},{default:c(()=>[oe]),_:2},1032,["onClick"]),n(i,{size:"small",type:"danger",onClick:b=>t.pageDeleteHandler(a.$index,a.row)},{default:c(()=>[de]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),n(h,{modelValue:t.openDialogStatus,"onUpdate:modelValue":e[1]||(e[1]=a=>t.openDialogStatus=a),title:"\u9801\u9762\u53C3\u6578","destroy-on-close":!0},{default:c(()=>[n(k,{page_data:t.pageEditTemp,editMode:t.pageEditStatus,pageEditCallbackHandler:t.pageEditCallbackHandler,pageAddCallbackHandler:t.pageAddCallbackHandler},null,8,["page_data","editMode","pageEditCallbackHandler","pageAddCallbackHandler"])]),_:1},8,["modelValue"])],64)}var _e=y(ae,[["render",ne]]);export{_e as default};
