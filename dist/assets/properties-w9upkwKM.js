import{d as r,Q as t}from"./index-Fg8nHKoD.js";class n{async getAllProperties(e){return r.get(`${t}/api/v1/property/all?${e}`)}async getProperty(e){return r.get(`${t}/api/v1/property/${e}`)}async uploadPropertyImages(e){return r.post("https://api.cloudinary.com/v1_1/dhaboeimw/image/upload",e)}async createNewProperty(e,p,a,o){return console.log(p,e),await r.post(`${t}/api/v1/property/new-property`,{...a,creator:e,images:p},{withCredentials:!0,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}})}}export{n as P};
