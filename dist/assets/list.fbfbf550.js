import{D as _,U as d,al as f,am as m,H as u,w as t,v as h,s as l,o as n,$ as c}from"./vendor.2e9f8f3e.js";/* empty css                        *//* empty css               *//* empty css                   *//* empty css                  */import{_ as w,c as b}from"./index.4c5df9d9.js";const g={name:"FormList",setup(){const o=_([]),r=()=>{b(["form","XeM0DqNM96oRIxeRfRou","response"]).then(a=>{console.log(a),o.value=a})};return d(()=>{r()}),{list:o}}},j={class:"whitespace-pre-line"},x={class:"whitespace-pre-line"},N={class:"whitespace-pre-line"};function v(o,r,a,p,y,D){const s=f,i=m;return h(),u(i,{data:p.list,style:{width:"100%"}},{default:t(()=>[l(s,{prop:"date",label:"\u5EFA\u7ACB\u65E5\u671F",width:"180"},{default:t(e=>[n("p",j,c(new Date(e.row.date).toLocaleString()),1)]),_:1}),l(s,{prop:"contactWay",label:"\u8A62\u554F\u4EBA\u8CC7\u6599",width:"180"},{default:t(e=>[n("p",x,c(e.row.contactWay),1)]),_:1}),l(s,{prop:"Note",label:"\u554F\u984C"},{default:t(e=>[n("p",N,c(e.row.Note),1)]),_:1})]),_:1},8,["data"])}var k=w(g,[["render",v]]);export{k as default};
