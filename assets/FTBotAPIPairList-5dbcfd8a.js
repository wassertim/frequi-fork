import{d as y,D as A,r as g,u as D,z,g as $,c as a,a as s,J as S,K as w,h as L,b as n,w as l,L as M,j as k,n as p,o as e,f,t as C,s as F,p as N,e as T}from"./index-5b12648a.js";const O=y({name:"FTBotAPIPairList",components:{DeleteIcon:A},setup(){const t=g(""),r=g(!1),c=g([]),i=D(),m=()=>{i.activeBot.whitelist.length===0&&i.activeBot.getWhitelist(),i.activeBot.blacklist.length===0&&i.activeBot.getBlacklist()},P=()=>{t.value&&(r.value=!1,i.activeBot.addBlacklist({blacklist:[t.value]}),t.value="")},b=o=>{console.log(o);const v=c.value.indexOf(o);v>-1?c.value.splice(v,1):c.value.push(o)},_=()=>{if(c.value.length===0){console.log("nothing to delete");return}const o=i.activeBot.blacklist.filter((v,B)=>c.value.indexOf(B)>-1);console.log("Deleting pairs: ",o),i.activeBot.deleteBlacklist(o),c.value=[]};return z(()=>{m()}),{addBlacklistPair:P,deletePairs:_,initBlacklist:m,blacklistSelectClick:b,botStore:i,newblacklistpair:t,blackListShow:r,blacklistSelect:c}}});const h=t=>(N("data-v-54166b11"),t=t(),T(),t),U=h(()=>s("h3",null,"Whitelist Methods",-1)),W={key:0,class:"list"},j=["title"],q={key:0,class:"list"},E={key:1},J=h(()=>s("hr",null,null,-1)),K=h(()=>s("label",{class:"me-auto h3",title:"Blacklist - Select (followed by a click on '-') to remove pairs"},"Blacklist",-1)),G={class:"float-end d-flex d-flex-columns pe-1"},H={key:2,class:"list"},Q=h(()=>s("span",{class:"check"},"✔",-1)),R={key:3};function X(t,r,c,i,m,P){const b=p("b-list-group-item"),_=p("b-list-group"),o=p("b-button"),v=p("DeleteIcon"),B=p("b-form-input"),I=p("b-form-group"),V=p("b-popover");return e(),a("div",null,[s("div",null,[U,t.botStore.activeBot.pairlistMethods.length?(e(),a("div",W,[(e(!0),a(S,null,w(t.botStore.activeBot.pairlistMethods,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{href:"#",class:"pair white"},{default:l(()=>[f(C(d),1)]),_:2},1024)]),_:2},1024))),128))])):L("",!0)]),s("h3",{title:`${t.botStore.activeBot.whitelist.length} pairs`},"Whitelist",8,j),t.botStore.activeBot.whitelist.length?(e(),a("div",q,[(e(!0),a(S,null,w(t.botStore.activeBot.whitelist,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{class:"pair white"},{default:l(()=>[f(C(d),1)]),_:2},1024)]),_:2},1024))),128))])):(e(),a("p",E,"List Unavailable. Please Login and make sure server is running.")),J,s("div",null,[K,s("div",G,[n(o,{id:"blacklist-add-btn",class:M(["me-1",t.botStore.activeBot.botApiVersion>=1.12?"col-6":""]),size:"sm"},{default:l(()=>[f("+ ")]),_:1},8,["class"]),t.botStore.activeBot.botApiVersion>=1.12?(e(),k(o,{key:0,size:"sm",class:"col-6",title:"Select pairs to delete pairs from your blacklist.",disabled:t.blacklistSelect.length===0,onClick:t.deletePairs},{default:l(()=>[n(v,{size:16,title:"Delete Bot"})]),_:1},8,["disabled","onClick"])):L("",!0)]),n(V,{title:"Add to blacklist",target:"blacklist-add-btn",triggers:"click",show:t.blackListShow},{default:l(()=>[s("form",{ref:"form",onSubmit:r[1]||(r[1]=F(()=>{},["prevent"]))},[s("div",null,[n(I,{"label-cols":"2",label:"Pair","label-for":"pair-input"},{default:l(()=>[n(B,{id:"pair-input",modelValue:t.newblacklistpair,"onUpdate:modelValue":r[0]||(r[0]=d=>t.newblacklistpair=d),required:"",autofocus:""},null,8,["modelValue"])]),_:1}),n(o,{id:"blacklist-submit",class:"float-end mb-2",size:"sm",type:"submit",onClick:t.addBlacklistPair},{default:l(()=>[f(" Add")]),_:1},8,["onClick"])])],544)]),_:1},8,["show"])]),t.botStore.activeBot.blacklist.length?(e(),a("div",H,[(e(!0),a(S,null,w(t.botStore.activeBot.blacklist,(d,u)=>(e(),k(_,{key:u},{default:l(()=>[n(b,{class:"pair black",active:t.blacklistSelect.indexOf(u)>-1,onClick:Y=>t.blacklistSelectClick(u)},{default:l(()=>[Q,f(C(d),1)]),_:2},1032,["active","onClick"])]),_:2},1024))),128))])):(e(),a("p",R,"BlackList Unavailable. Please Login and make sure server is running."))])}const x=$(O,[["render",X],["__scopeId","data-v-54166b11"]]);export{x as default};
//# sourceMappingURL=FTBotAPIPairList-5dbcfd8a.js.map
