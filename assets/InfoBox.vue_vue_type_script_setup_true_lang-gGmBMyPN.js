import{g as d,m as s,aO as g,bf as u,bg as x,o as c,c as f,x as p,h as o,a as m,a7 as _,_ as b,n as h,B as q,b as y,e as A,q as v,A as T,t as z,y as C}from"./index-UoLg79PO.js";const k=["title"],F=d({__name:"DateTimeTZ",props:{date:{required:!0,type:Number},showTimezone:{required:!1,type:Boolean,default:!1},dateOnly:{required:!1,type:Boolean,default:!1}},setup(e){const t=e,i=s(()=>t.dateOnly?g(t.date):t.showTimezone?u(t.date):x(t.date)),r=s(()=>{const a=u(t.date),n=u(t.date,"UTC");return a===n?n:`${a}
${n}`});return(a,n)=>(c(),f("span",{title:o(r)},p(o(i)),9,k))}}),P={class:"d-inline-block"},R=d({__name:"ProfitSymbol",props:{profit:{type:Number,required:!0}},setup(e){const t=e,i=s(()=>t.profit>0);return(r,a)=>(c(),f("div",P,[m("div",{class:_(o(i)?"triangle-up":"triangle-down")},null,2)]))}}),w=b(R,[["__scopeId","data-v-6cf26661"]]),B=["title"],D={class:"d-flex justify-content-center align-items-center flex-grow-1"},N=["title"],S=d({__name:"ProfitPill",props:{profitRatio:{required:!1,default:void 0,type:Number},profitAbs:{required:!1,default:void 0,type:Number},stakeCurrency:{required:!0,type:String},profitDesc:{required:!1,default:"",type:String}},setup(e){const t=e,i=s(()=>t.profitRatio!==void 0&&t.profitRatio>0||t.profitRatio===void 0&&t.profitAbs!==void 0&&t.profitAbs>0),r=s(()=>t.profitRatio!==void 0&&t.profitAbs!==void 0?`(${h(t.profitAbs,3)})`:t.profitAbs!==void 0?t.stakeCurrency!==void 0?`${q(t.profitAbs,t.stakeCurrency,3)}`:`${h(t.profitAbs,3)}`:"");return(a,n)=>{const l=w;return c(),f("div",{class:_(["d-flex justify-content-between align-items-center profit-pill ps-2 pe-1",o(i)?"profit-pill-profit":""]),title:e.profitDesc},[y(l,{profit:(e.profitRatio||e.profitAbs)??0},null,8,["profit"]),m("div",D,[A(p(e.profitRatio!==void 0?o(v)(e.profitRatio,2):"")+" ",1),o(r)?(c(),f("span",{key:0,class:_(["ms-1",e.profitRatio?"small":""]),title:e.stakeCurrency},p(o(r)),11,N)):T("",!0)])],10,B)}}}),O=b(S,[["__scopeId","data-v-c66c704d"]]),G=d({__name:"TradeProfit",props:{trade:{required:!0,type:Object},mode:{required:!1,default:"default",type:String}},setup(e){const t=e,i={default:"Current profit",total:"Total profit",realized:"Realized profit"},r=s(()=>{switch(t.mode){case"default":return t.trade.profit_ratio;case"total":return t.trade.total_profit_ratio;case"realized":return t.trade.realized_profit_ratio;default:return}}),a=s(()=>{switch(t.mode){case"default":return t.trade.profit_abs;case"total":return t.trade.total_profit_abs;case"realized":return t.trade.realized_profit;default:return}}),n=s(()=>{let l=`${i[t.mode]}: ${r.value?v(r.value):""} (${a.value})`;return l+=`
Open since: ${z(t.trade.open_timestamp)}`,l});return(l,W)=>{const $=O;return c(),C($,{"profit-ratio":o(r),"profit-abs":o(a),"profit-desc":o(n),"stake-currency":e.trade.quote_currency||"USDT"},null,8,["profit-ratio","profit-abs","profit-desc","stake-currency"])}}}),V={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j=m("path",{fill:"currentColor",d:"M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"},null,-1),I=[j];function U(e,t){return c(),f("svg",V,[...I])}const E={name:"mdi-information-outline",render:U},M=["title"],H=d({__name:"InfoBox",props:{hint:{type:String,required:!0}},setup(e){return(t,i)=>{const r=E;return c(),f("div",{title:e.hint},[y(r)],8,M)}}});export{F as _,G as a,O as b,H as c};
//# sourceMappingURL=InfoBox.vue_vue_type_script_setup_true_lang-gGmBMyPN.js.map
