import{_ as h}from"./Button-d43c7df3.js";import{_ as w,r as n,o as y,c as b,f as s,k as i,v as u,l as r,m as v,q as m,g,e as S,s as V,x as B,p as z,j as k,y as I,z as C}from"./index-e6eb8d31.js";const _=a=>(z("data-v-e59217f7"),a=a(),k(),a),E=_(()=>s("h1",null,"後台驗票系統",-1)),L={class:"userPassword"},N={class:"input-box"},M={class:"emailpassword-box"},T=_(()=>s("p",null,"電子信箱",-1)),U={style:{color:"red","font-size":"10px"},"font-size":"2px"},j={class:"input-box"},q={class:"emailpassword-box"},D=_(()=>s("p",null,"密碼",-1)),F={style:{color:"red","font-size":"10px"},"font-size":"2px"},P={class:"btn-box"},R={__name:"LoginBSView",setup(a){let o=n("dev@gmail.com"),e=n("password");const c=n(!1),d=n(!1);async function f(){try{c.value=!o.value,d.value=!e.value,o.value&&e.value&&(await I.post("api/v1/auth/login",{email:o.value,password:e.value}),alert("登入成功"),C.push("/auth"))}catch(p){p.response&&p.response.status===401&&(e.value="",alert("錯誤帳號/密碼"))}}return(p,l)=>{const x=h;return y(),b("form",null,[s("main",null,[E,s("div",L,[s("div",N,[s("div",M,[T,i(s("p",U," 請輸入電子信箱 ",512),[[u,r(c)]])]),i(s("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>m(o)?o.value=t:o=t),autocomplete:"username",type:"text"},null,512),[[v,r(o)]])]),s("div",j,[s("div",q,[D,i(s("p",F," 請輸入密碼 ",512),[[u,r(d)]])]),i(s("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>m(e)?e.value=t:e=t),type:"password",autocomplete:"current-password"},null,512),[[v,r(e)]])])]),s("div",P,[g(x,{onClick:V(f,["prevent"]),btnFontSize:"10px"},{default:S(()=>[B("登入")]),_:1},8,["onClick"])])])])}}},H=w(R,[["__scopeId","data-v-e59217f7"]]);export{H as default};