import{_ as r}from"./TicketHistory-a218f8af.js";import{_,r as i,A as n,y as p,a as l,o as u,c as f,g as o,e as d,l as m,p as k,j as y,f as v}from"./index-e6eb8d31.js";import"./index-e64505e3.js";const w="/assets/left_arrow_circle_solid-88bccfcb.svg";const H=e=>(k("data-v-74f5f65e"),e=e(),y(),e),T=H(()=>v("img",{class:"arrow-icon",src:w},null,-1)),g={__name:"TicketHistoryView",setup(e){const t=i([]);return n(()=>{p.get("/api/v1/userTickets/ticketHistory").then(s=>{t.value=s.data})}),(s,h)=>{const c=l("router-link"),a=r;return u(),f("main",null,[o(c,{to:"/user/userTicket"},{default:d(()=>[T]),_:1}),o(a,{ticketsHistory:m(t),status:1},null,8,["ticketsHistory"])])}}},B=_(g,[["__scopeId","data-v-74f5f65e"]]);export{B as default};