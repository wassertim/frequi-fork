import{_ as y,d as A,D,h as g,u as $,v as z,r as p,o as e,c as a,a as s,N as S,P as w,g as I,b as n,w as l,f,V as M,j as k,k as N,t as P,p as F,e as T}from"./index.dc3313a3.js";const O=A({name:"FTBotAPIPairList",components:{DeleteIcon:D},setup(){const t=g(""),r=g(!1),c=g([]),i=$(),m=()=>{i.activeBot.whitelist.length===0&&i.activeBot.getWhitelist(),i.activeBot.blacklist.length===0&&i.activeBot.getBlacklist()},C=()=>{t.value&&(r.value=!1,i.activeBot.addBlacklist({blacklist:[t.value]}),t.value="")},b=o=>{console.log(o);const v=c.value.indexOf(o);v>-1?c.value.splice(v,1):c.value.push(o)},_=()=>{if(c.value.length===0){console.log("nothing to delete");return}const o=i.activeBot.blacklist.filter((v,B)=>c.value.indexOf(B)>-1);console.log("Deleting pairs: ",o),i.activeBot.deleteBlacklist(o),c.value=[]};return z(()=>{m()}),{addBlacklistPair:C,deletePairs:_,initBlacklist:m,blacklistSelectClick:b,botStore:i,newblacklistpair:t,blackListShow:r,blacklistSelect:c}}}),h=t=>(F("data-v-7f781389"),t=t(),T(),t),U=h(()=>s("h3",null,"Whitelist Methods",-1)),W={key:0,class:"list"},j=["title"],q={key:0,class:"list"},E={key:1},G=h(()=>s("hr",null,null,-1)),H=h(()=>s("label",{class:"me-auto h3",title:"Blacklist - Select (followed by a click on '-') to remove pairs"},"Blacklist",-1)),J={class:"float-end d-flex d-flex-columns pe-1"},K={key:2,class:"list"},Q=h(()=>s("span",{class:"check"},"\u2714",-1)),R={key:3};function X(t,r,c,i,m,C){const b=p("b-list-group-item"),_=p("b-list-group"),o=p("b-button"),v=p("DeleteIcon"),B=p("b-form-input"),L=p("b-form-group"),V=p("b-popover");return e(),a("div",null,[s("div",null,[U,t.botStore.activeBot.pairlistMethods.length?(e(),a("div",W,[(e(!0),a(S,null,w(t.botStore.activeBot.pairlistMethods,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{href:"#",class:"pair white"},{default:l(()=>[f(P(d),1)]),_:2},1024)]),_:2},1024))),128))])):I("",!0)]),s("h3",{title:`${t.botStore.activeBot.whitelist.length} pairs`},"Whitelist",8,j),t.botStore.activeBot.whitelist.length?(e(),a("div",q,[(e(!0),a(S,null,w(t.botStore.activeBot.whitelist,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{class:"pair white"},{default:l(()=>[f(P(d),1)]),_:2},1024)]),_:2},1024))),128))])):(e(),a("p",E,"List Unavailable. Please Login and make sure server is running.")),G,s("div",null,[H,s("div",J,[n(o,{id:"blacklist-add-btn",class:M(["me-1",t.botStore.activeBot.botApiVersion>=1.12?"col-6":""]),size:"sm"},{default:l(()=>[f("+ ")]),_:1},8,["class"]),t.botStore.activeBot.botApiVersion>=1.12?(e(),k(o,{key:0,size:"sm",class:"col-6",title:"Select pairs to delete pairs from your blacklist.",disabled:t.blacklistSelect.length===0,onClick:t.deletePairs},{default:l(()=>[n(v,{size:16,title:"Delete Bot"})]),_:1},8,["disabled","onClick"])):I("",!0)]),n(V,{title:"Add to blacklist",target:"blacklist-add-btn",triggers:"click",show:t.blackListShow},{default:l(()=>[s("form",{ref:"form",onSubmit:r[1]||(r[1]=N(()=>{},["prevent"]))},[s("div",null,[n(L,{"label-cols":"2",label:"Pair","label-for":"pair-input"},{default:l(()=>[n(B,{id:"pair-input",modelValue:t.newblacklistpair,"onUpdate:modelValue":r[0]||(r[0]=d=>t.newblacklistpair=d),required:"",autofocus:""},null,8,["modelValue"])]),_:1}),n(o,{id:"blacklist-submit",class:"float-end mb-2",size:"sm",type:"submit",onClick:t.addBlacklistPair},{default:l(()=>[f(" Add")]),_:1},8,["onClick"])])],544)]),_:1},8,["show"])]),t.botStore.activeBot.blacklist.length?(e(),a("div",K,[(e(!0),a(S,null,w(t.botStore.activeBot.blacklist,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{class:"pair black",active:t.blacklistSelect.indexOf(u)>-1,onClick:Y=>t.blacklistSelectClick(u)},{default:l(()=>[Q,f(P(d),1)]),_:2},1032,["active","onClick"])]),_:2},1024))),128))])):(e(),a("p",R,"BlackList Unavailable. Please Login and make sure server is running."))])}var x=y(O,[["render",X],["__scopeId","data-v-7f781389"]]);export{x as default};
//# sourceMappingURL=FTBotAPIPairList.91f18fff.js.map
