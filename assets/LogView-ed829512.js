import{d as c,u as g,z as m,i as f,g as d,c as i,G as $,H as L,a as v,b as l,w as V,n as _,o as p,f as w}from"./index-5b12648a.js";const B=c({name:"LogViewer",setup(){const e=g();m(async()=>{e.activeBot.getLogs()});const o=f(()=>{let n="";for(let s=0,a=e.activeBot.lastLogs.length;s<a;s+=1){const t=e.activeBot.lastLogs[s];n+=`${t[0]} - ${t[2]} - ${t[3]} - ${t[4]}
`}return n});return{botStore:e,formattedLogs:o}}});const h={class:"d-flex h-100 p-0 align-items-start"};function b(e,o,n,s,a,t){const r=_("b-button");return p(),i("div",h,[$(v("textarea",{"onUpdate:modelValue":o[0]||(o[0]=u=>e.formattedLogs=u),class:"h-100",readonly:""},null,512),[[L,e.formattedLogs]]),l(r,{id:"refresh-logs",size:"sm",onClick:e.botStore.activeBot.getLogs},{default:V(()=>[w("↻")]),_:1},8,["onClick"])])}const x=d(B,[["render",b],["__scopeId","data-v-dde3a0d1"]]),C=c({name:"LogView",components:{LogViewer:x}}),k={class:"p-4 h-100"};function y(e,o,n,s,a,t){const r=_("LogViewer");return p(),i("div",k,[l(r)])}const S=d(C,[["render",y]]);export{S as default};
//# sourceMappingURL=LogView-ed829512.js.map
