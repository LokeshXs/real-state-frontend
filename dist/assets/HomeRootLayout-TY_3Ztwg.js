import{c as v,j as e,r as g,u as b,a as N,b as L,I as z,L as a,B as j,M as B,d as H,e as S,n as h,O as A,S as M,A as O}from"./index-Fg8nHKoD.js";import{A as f}from"./Avatar-ynzsweKY.js";import{M as y}from"./MenuItem-8cHGfbM-.js";import{m}from"./motion-v9GA2DKi.js";const V=v(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),I=v(e.jsx("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"}),"MenuOpen"),$=()=>{const[n,s]=g.useState(!1),{email:l,id:c,imageUrl:i}=b(t=>t.auth),[o,r]=g.useState(null),k=!!o,x=N(),p=L(),u=t=>{r(t.currentTarget)},d=()=>{s(!1),r(null)},C=async()=>{try{const t=await H.get("https://real-states-7kj2.onrender.com/api/v1/user/auth/logout",{headers:{"Content-Type":"application/json"},withCredentials:!0});console.log(t),d(),x(S.logout()),x(h.notify({type:"success",message:"Successfully logged out 🫰"}))}catch(t){console.log(t),x(h.notify({type:"error",message:`${t.response.data.message} 😔`}))}finally{p("/")}},w=()=>{d(),p(`/profile/${c}`)};return e.jsx("header",{className:" px-16 py-4 max-lg:px-4 max-lg:py-2 max-sm:px-1 absolute z-[30] w-full   ",children:e.jsxs("nav",{className:"relative  px-8 py-4 rounded-xl flex justify-between  items-center max-md:flex-row-reverse max-sm:px-4 max-sm:py-2 bg-primary ",children:[e.jsx("div",{className:"hidden max-md:block",children:e.jsx(z,{className:"z-40",onClick:()=>{s(t=>!t)},children:n?e.jsx(V,{fontSize:"large",className:"text-textVeryLight"}):e.jsx(I,{fontSize:"large",className:"text-textVeryLight"})})}),e.jsx(a,{to:"/",children:e.jsx("p",{className:"text-4xl font-medium text-textVeryLight tracking-wider max-xl:text-3xl max-sm:text-2xl =",children:"AashiyanaAve"})}),e.jsxs("ul",{className:"relative flex gap-8 items-center justify-center max-md:hidden ",children:[e.jsx("li",{className:"text-textVeryLight font-semibold text-2xl max-xl:text-xl",children:e.jsx(a,{to:"/",children:"Home"})}),e.jsx("li",{className:"text-textVeryLight font-semibold text-2xl max-xl:text-xl",children:e.jsx(a,{to:"/properties",children:"Browse"})}),e.jsx("li",{className:"text-textVeryLight font-semibold text-2xl max-xl:text-xl",children:l?e.jsxs("div",{children:[e.jsx(j,{onClick:u,children:e.jsx(f,{src:i})}),e.jsxs(B,{id:"basic-menu",anchorEl:o,open:k,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsx(y,{onClick:w,children:"Profile"}),e.jsx(y,{onClick:C,children:"Logout"})]})]}):e.jsx(a,{to:"/auth/login",className:"rounded-xl px-6 py-2 bg-white text-primary",children:"login"})})]}),e.jsx("div",{className:`fixed z-[30] w-8/12 h-screen top-0 right-0 bg-primary transition-all duration-300  ${n?"translate-x-0":"translate-x-[100%]"}`,children:e.jsx("div",{className:"mt-24 p-8",children:e.jsxs(m.ul,{variants:{visible:{transition:{staggerChildren:.3}}},initial:"hidden",animate:n?"visible":"",exit:"hidden",children:[e.jsx("li",{className:"mt-8",children:l?e.jsx(j,{onClick:u,children:e.jsx(f,{src:i})}):e.jsx(a,{to:"/auth/login",className:"font-montserrat leading-normal text-3xl text-white font-bold ",onClick:()=>{s(!1)},children:"Login"})}),e.jsx(m.li,{className:"mt-8",variants:{hidden:{opacity:0,x:80},visible:{opacity:1,x:0,transition:{duration:.5}}},children:e.jsx(a,{to:"/",className:"font-montserrat leading-normal text-3xl text-white font-bold",onClick:()=>{s(!1)},children:"Home"})}),e.jsx(m.li,{className:"mt-8",variants:{hidden:{opacity:0,x:80},visible:{opacity:1,x:0,transition:{duration:.5}}},children:e.jsx(a,{to:"/properties",className:"font-montserrat leading-normal text-3xl text-white font-bold",onClick:()=>{s(!1)},children:"Browse"})})]})})}),e.jsx("div",{className:`fixed top-0 left-0 z-20 backdrop-blur-sm h-screen w-screen ${n?"block ":"hidden "} `,onClick:()=>{s(t=>!t)}})]})})},T=()=>{const n=N(),{open:s,message:l,type:c}=b(o=>o.notification),i=(o,r)=>{r!=="clickaway"&&n(h.closeSnackbar())};return e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsxs("main",{className:"relative",children:[e.jsx(A,{}),e.jsx(M,{open:s,autoHideDuration:5e3,message:l,anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:i,children:e.jsx(O,{severity:c||"success",onClose:i,children:l})})]})]})};export{T as default};
