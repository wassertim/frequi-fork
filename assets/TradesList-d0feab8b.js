import{d as h,C as w,x as L,g as k,c as n,a as c,t as v,b as u,n as o,o as r,u as D,r as B,i as $,w as g,h as m,j as y,J as S,K as V,m as P,f as N}from"./index-5b12648a.js";import{D as I,_ as E}from"./InfoBox-1693ab62.js";import{T as z}from"./TradeDetail-52484ea4.js";const j=h({components:{DateTimeTZ:I,TradeProfit:E},props:{trade:{type:Object,required:!0},stakeCurrencyDecimals:{type:Number,required:!0},showDetails:{type:Boolean,default:!1}},setup(){return{formatPrice:w,formatPercent:L}}});const q={class:"d-flex"},F={class:"px-1 d-flex flex-row flex-fill text-start justify-content-between align-items-center"},Z={class:"me-1 fw-bold"},M={class:"text-secondary"};function x(e,t,a,f,d,_){const s=o("DateTimeTZ"),p=o("trade-profit");return r(),n("div",q,[c("div",F,[c("span",null,[c("span",Z,v(e.trade.pair),1),c("small",M,"(#"+v(e.trade.trade_id)+")",1)]),c("small",null,[u(s,{date:e.trade.open_timestamp,"date-only":!0},null,8,["date"])])]),u(p,{class:"col-5",trade:e.trade},null,8,["trade"])])}const A=k(j,[["render",x],["__scopeId","data-v-aeb30764"]]),H=h({name:"CustomTradeList",components:{CustomTradeListEntry:A},props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String},stakeCurrencyDecimals:{default:3,type:Number}},setup(e){const t=D(),a=B(1),f=B(""),d=e.activeTrades?200:25,_=$(()=>e.trades.length),s=$(()=>e.trades.slice((a.value-1)*d,a.value*d));return{currentPage:a,filterText:f,perPage:d,filteredTrades:s,formatPriceWithDecimals:i=>w(i,e.stakeCurrencyDecimals),handleContextMenuEvent:(i,l,C)=>{e.activeTrades&&(C.preventDefault(),console.log(i))},tradeClick:i=>{t.activeBot.setDetailTrade(i)},botStore:t,rows:_}}});const O={class:"h-100 overflow-auto p-1"},U={key:0,class:"mt-5"},W={class:"w-100 d-flex justify-content-between mt-1"};function J(e,t,a,f,d,_){const s=o("CustomTradeListEntry"),p=o("b-list-group-item"),T=o("b-list-group"),b=o("b-pagination"),i=o("b-form-input");return r(),n("div",O,[u(T,{id:"tradeList"},{default:g(()=>[(r(!0),n(S,null,V(e.filteredTrades,l=>(r(),y(p,{key:l.trade_id,class:"border border-secondary rounded my-05 px-1",onClick:C=>e.tradeClick(l)},{default:g(()=>[u(s,{trade:l,"stake-currency-decimals":e.stakeCurrencyDecimals},null,8,["trade","stake-currency-decimals"])]),_:2},1032,["onClick"]))),128))]),_:1}),e.trades.length==0?(r(),n("span",U,v(e.emptyText),1)):m("",!0),c("div",W,[e.activeTrades?m("",!0):(r(),y(b,{key:0,modelValue:e.currentPage,"onUpdate:modelValue":t[0]||(t[0]=l=>e.currentPage=l),"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"tradeList"},null,8,["modelValue","total-rows","per-page"])),e.showFilter?(r(),y(i,{key:1,modelValue:e.filterText,"onUpdate:modelValue":t[1]||(t[1]=l=>e.filterText=l),type:"text",placeholder:"Filter",size:"sm",style:{width:"unset"}},null,8,["modelValue"])):m("",!0)])])}const K=k(H,[["render",J],["__scopeId","data-v-b3576e8e"]]),G={name:"ArrowLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Q=["aria-hidden","aria-label"],R=["fill","width","height"],X={d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"},Y={key:0};function ee(e,t,a,f,d,_){return r(),n("span",P(e.$attrs,{"aria-hidden":!a.title,"aria-label":a.title,class:"material-design-icon arrow-left-icon",role:"img",onClick:t[0]||(t[0]=s=>e.$emit("click",s))}),[(r(),n("svg",{fill:a.fillColor,class:"material-design-icon__svg",width:a.size,height:a.size,viewBox:"0 0 24 24"},[c("path",X,[a.title?(r(),n("title",Y,v(a.title),1)):m("",!0)])],8,R))],16,Q)}const te=k(G,[["render",ee]]),ae=h({name:"TradesList",components:{CustomTradeList:K,TradeDetail:z,BackIcon:te},props:{history:{default:!1,type:Boolean}},setup(){return{botStore:D()}}}),re={key:2,class:"d-flex flex-column"};function oe(e,t,a,f,d,_){const s=o("CustomTradeList"),p=o("BackIcon"),T=o("b-button"),b=o("TradeDetail");return r(),n("div",null,[!e.history&&!e.botStore.activeBot.detailTradeId?(r(),y(s,{key:0,trades:e.botStore.activeBot.openTrades,title:"Open trades","active-trades":!0,"stake-currency-decimals":e.botStore.activeBot.stakeCurrencyDecimals,"empty-text":"No open Trades."},null,8,["trades","stake-currency-decimals"])):m("",!0),e.history&&!e.botStore.activeBot.detailTradeId?(r(),y(s,{key:1,trades:e.botStore.activeBot.closedTrades,title:"Trade history","stake-currency-decimals":e.botStore.activeBot.stakeCurrencyDecimals,"empty-text":"No closed trades so far."},null,8,["trades","stake-currency-decimals"])):m("",!0),e.botStore.activeBot.detailTradeId&&e.botStore.activeBot.tradeDetail?(r(),n("div",re,[u(T,{size:"sm",class:"align-self-start mt-1 ms-1",onClick:t[0]||(t[0]=i=>e.botStore.activeBot.setDetailTrade(null))},{default:g(()=>[u(p),N(" Back")]),_:1}),u(b,{trade:e.botStore.activeBot.tradeDetail,"stake-currency":e.botStore.activeBot.stakeCurrency},null,8,["trade","stake-currency"])])):m("",!0)])}const le=k(ae,[["render",oe]]);export{le as default};
//# sourceMappingURL=TradesList-d0feab8b.js.map
