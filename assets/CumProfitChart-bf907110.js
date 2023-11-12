import{g as k,aL as O,l as b,o as P,c as q,a as G,x as L,h as _,y as $,b as v,w as H,a6 as W,a3 as Z,N as F,_ as B,aX as U,r as X,q as E,b0 as Y,R as J,m as w}from"./index-20bfe6b3.js";import{u as M,a_ as S,aW as A,aX as D,aY as I,aZ as z,a$ as N}from"./installCanvasRenderer-3885c599.js";import{k as R,f as V,l as K,g as Q,m as tt}from"./install-e19e7d48.js";function et(i,e){const r=Math.min(...i),m=(Math.max(...i)-r)*1.01/e,f=[...Array(e).keys()].map(l=>[Math.round((r+l*m)*1e3)/1e3,0]);for(let l=0;l<i.length;l++){const p=Math.min(Math.floor((i[l]-r)/m),e-1);isNaN(p)||f[p][1]++}return f}const ot={class:"d-flex flex-column h-100 position-relative"},at={class:"flex-grow-1 order-2"},x="Trade count",st=k({__name:"ProfitDistributionChart",props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(i){M([R,S,A,V,D,I,z]);const e=i,r=O(),y=[10,15,20,25,50],m=b(()=>{const l=e.trades.map(p=>p.profit_ratio);return et(l,r.profitDistributionBins)}),f=b(()=>({title:{text:"Profit distribution",show:e.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{source:m.value},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[x],right:"5%",selectedMode:!1},xAxis:{type:"category",name:"Profit %",nameLocation:"middle",nameGap:25},yAxis:[{type:"value",name:x,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:35,position:"left"}],series:[{type:"bar",name:x,animation:!0,encode:{x:"x0",y:"y0"}}]}));return(l,p)=>{const h=Z,g=F;return P(),q("div",ot,[G("div",at,[i.trades?(P(),L(_(N),{key:0,option:f.value,autoresize:"",theme:_(r).chartTheme},null,8,["option","theme"])):$("",!0)]),v(g,{class:W(["order-1",i.showTitle?"ms-5 ps-5":"position-absolute"]),label:"Bins",style:{width:"33%","min-width":"12rem"},"label-for":"input-bins","label-cols":"6","content-cols":"6",size:"sm"},{default:H(()=>[v(h,{id:"input-bins",modelValue:_(r).profitDistributionBins,"onUpdate:modelValue":p[0]||(p[0]=a=>_(r).profitDistributionBins=a),size:"sm",class:"mt-1",options:y},null,8,["modelValue"])]),_:1},8,["class"])])}}});const ct=B(st,[["__scopeId","data-v-1dc7de89"]]),C="Profit",rt=k({__name:"CumProfitChart",props:{trades:{required:!0,type:Array},openTrades:{required:!1,type:Array,default:()=>[]},showTitle:{default:!0,type:Boolean},profitColumn:{default:"profit_abs",type:String}},setup(i){M([R,K,S,A,V,Q,D,I,z]);const e=i,r=O(),y=U(),m=X(),f=b(()=>e.openTrades.reduce((a,o)=>a+(o.total_profit_abs??o[e.profitColumn]??0),0)),l=b(()=>{const a=[],o={},c=e.trades.slice().sort((s,n)=>s.close_timestamp>n.close_timestamp?1:-1);let u=0;for(let s=0,n=c.length;s<n;s+=1){const t=c[s];t.close_timestamp&&t[e.profitColumn]&&(u+=t[e.profitColumn],o[t.close_timestamp]?(o[t.close_timestamp].profit+=t[e.profitColumn],o[t.close_timestamp][t.botId]?o[t.close_timestamp][t.botId]+=t[e.profitColumn]:o[t.close_timestamp][t.botId]=u):o[t.close_timestamp]={profit:u,[t.botId]:u},a.push({date:t.close_timestamp,profit:u,[t.botId]:u}))}const d=Object.entries(o).map(([s,n])=>({date:parseInt(s,10),profit:n.profit}));if(e.openTrades.length>0){let s=0,n=0;if(d.length>0){const T=d[d.length-1];s=T.profit??0,n=T.date??0}else n=e.openTrades[0].open_timestamp;const t=(s??0)+f.value;d.push({date:n,currentProfit:s});const j=Date.now()+24*60*60*1e3;d.push({date:j,currentProfit:t})}return d});function p(a=!1){const{colorProfit:o,colorLoss:c}=y;return{dataset:{dimensions:["date","profit","currentProfit"],source:l.value},series:[{type:"line",name:"currentProfit",animation:a,lineStyle:{color:f.value>0?o:c,type:"dotted"},itemStyle:{color:f.value>0?o:c},encode:{x:"date",y:"currentProfit"}},{type:"line",name:C,animation:a,step:"end",lineStyle:{color:r.chartTheme==="dark"?"#c2c2c2":"black"},itemStyle:{color:r.chartTheme==="dark"?"#c2c2c2":"black"},encode:{x:"date",y:"profit"}}]}}function h(a=!1){var c;const o=p(a);(c=m.value)==null||c.setOption(o,{replaceMerge:["series","dataset"],noMerge:!a})}function g(){var c,u;(c=m.value)==null||c.setOption({},{noMerge:!0});const a={title:{text:"Cumulative Profit",show:e.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",tooltip:{trigger:"axis",formatter:d=>{const s=d[0].data.profit,n=d[0].data.currentProfit;return n?`Projected profit (incl. unrealized): ${w(n,3)}`:`Profit: ${w(s,3)}`},axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[C],right:"5%",selectedMode:!1},useUTC:!1,xAxis:{type:"time"},yAxis:[{type:"value",name:C,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:40}],grid:{bottom:80},dataZoom:[{type:"inside",start:0,end:100},{bottom:10,start:0,end:100,...tt}]},o=p(!0);a.series=o.series,a.dataset=o.dataset,(u=m.value)==null||u.setOption(a,{noMerge:!0}),h(!0)}return E(()=>{g()}),Y(()=>e.openTrades,()=>{h()},{throttle:60*1e3}),J(()=>e.trades,()=>{h()}),(a,o)=>i.trades?(P(),L(_(N),{key:0,ref_key:"chart",ref:m,autoresize:"","manual-update":"",theme:_(r).chartTheme},null,8,["theme"])):$("",!0)}});const pt=B(rt,[["__scopeId","data-v-84d4c491"]]);export{pt as _,ct as a};
//# sourceMappingURL=CumProfitChart-bf907110.js.map
