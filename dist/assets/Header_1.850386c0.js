import{_ as i}from"./index.827d2c96.js";import{D as m,Q as _,n as t,o,x as c,Z as d,F as f,Y as x,v as a}from"./vendor.2577d0b7.js";const u={props:["data"],setup(s){const r=m(null);return s.data&&(r.value=JSON.parse(s.data),_(()=>s.data,l=>{r.value=JSON.parse(l)})),{data:r}}},h={class:"text-gray-600 body-font"},v={class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},p={class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},y=["src"],k=["textContent"],b={key:0,class:"md:ml-auto flex flex-wrap items-center text-base justify-center"},g=["href"];function w(s,r,l,e,N,j){return a(),t("header",h,[o("div",v,[o("a",p,[e.data?(a(),t("img",{key:0,src:e.data.main.pic.value,alt:"",class:"w-12 h-12 rounded-full"},null,8,y)):c("",!0),o("span",{textContent:d(e.data?e.data.main.title.value:"Tailblocks"),class:"ml-3 text-xl"},null,8,k)]),e.data&&e.data.sec?(a(),t("nav",b,[(a(!0),t(f,null,x(e.data.sec,n=>(a(),t("a",{key:n,href:n.link.value,class:"mr-5 hover:text-gray-900"},d(n.title.value),9,g))),128))])):c("",!0)])])}var S=i(u,[["render",w]]);export{S as default};
