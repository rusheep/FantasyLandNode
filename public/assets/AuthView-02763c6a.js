import{r as d,A as m,y as i,o as a,c as o,g as p,l as g,t as l,h as v,f as e,F as y,b as f,K as k,x as c}from"./index-e6eb8d31.js";const x={key:0},V=e("h3",null,"驗票紀錄",-1),U={class:"ticket-list"},b={class:"text"},w=e("strong",null,"名稱:",-1),L=e("br",null,null,-1),N=e("strong",null,"入園時間:",-1),S=e("br",null,null,-1),A=e("strong",null,"票型:",-1),B=e("br",null,null,-1),Q={__name:"AuthView",setup(C){const s=d(""),_=async n=>{if(s.value=n,confirm(`Do you want to open the scanned URL?
${s.value}`))try{await i.get(`/api/v1/authTicket/${s.value}`).then(t=>alert(t.data.msg))}catch(t){console.log(t.response.data.msg),alert(t.response.data.msg)}},u=d([]);return m(()=>{try{const n=i.get("/api/v1/authTicket").then(r=>{u.value=r.data})}catch(n){console.log(n)}}),(n,r)=>(a(),o("main",null,[p(g(k.QrStream),{onDecode:_}),s.value?(a(),o("div",x,"Scanned URL: "+l(s.value),1)):v("",!0),V,e("ul",U,[(a(!0),o(y,null,f(u.value,(t,h)=>(a(),o("li",{key:h,class:"ticket-item"},[e("div",b,[w,c(" "+l(t.userId.name),1),L,N,c(" "+l(t.date),1),S,A,c(" "+l(t.ticketCategoryId),1),B])]))),128))])]))}};export{Q as default};
