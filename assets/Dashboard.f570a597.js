import{d as P,u as A,i as d,x as $,_ as N,r as u,o as f,j as v,w as r,a as D,g as k,t as B,c as O,f as V,A as R,h as U,v as E,b as o,m as b,C,aC as L}from"./index.dc3313a3.js";import{D as G,a as I}from"./DraggableContainer.ce6ad14c.js";import{C as z,P as j,T as F}from"./TradesLog.ad330afa.js";import{P as M}from"./TradeProfit.4185efa5.js";import{T as W}from"./TradeList.8ad54ef3.js";import"./install.870b0ea5.js";import"./install.07e0ac58.js";const q=P({name:"BotComparisonList",components:{ProfitPill:M},setup(){const e=A(),y=[{key:"botName",label:"Bot"},{key:"trades",label:"Trades"},{key:"profitOpen",label:"Open Profit"},{key:"profitClosed",label:"Closed Profit"},{key:"balance",label:"Balance"},{key:"winVsLoss",label:"W/L"}],_=d(()=>{const h=[],m={botId:void 0,botName:"Summary",profitClosed:0,profitClosedRatio:void 0,profitOpen:0,profitOpenRatio:void 0,stakeCurrency:"USDT",wins:0,losses:0};return Object.entries(e.allProfit).forEach(([i,a])=>{var p,T,w,S;const l=e.allOpenTrades[i].reduce((c,s)=>c+s.stake_amount,0),n=e.allOpenTrades[i].reduce((c,s)=>c+s.profit_ratio*s.stake_amount,0)/l,t=e.allOpenTrades[i].reduce((c,s)=>{var g;return c+((g=s.profit_abs)!=null?g:0)},0);h.push({botId:i,botName:e.availableBots[i].botName,trades:`${e.allOpenTradeCount[i]} / ${((p=e.allBotState[i])==null?void 0:p.max_open_trades)||"N/A"}`,profitClosed:a.profit_closed_coin,profitClosedRatio:a.profit_closed_ratio||0,stakeCurrency:((T=e.allBotState[i])==null?void 0:T.stake_currency)||"",profitOpenRatio:n,profitOpen:t,wins:a.winning_trades,losses:a.losing_trades,balance:(w=e.allBalance[i])==null?void 0:w.total,stakeCurrencyDecimals:((S=e.allBotState[i])==null?void 0:S.stake_currency_decimals)||3}),a.profit_closed_coin!==void 0&&(m.profitClosed+=a.profit_closed_coin,m.profitOpen+=a.profit_all_coin,m.wins+=a.winning_trades,m.losses+=a.losing_trades)}),h.push(m),h});return{formatPrice:$,tableFields:y,tableItems:_,botStore:e}}}),H={class:"d-flex flex-row"},J={key:0},K=["title"],Q={class:"text-small"},X={key:0},Y={class:"text-profit"},Z={class:"text-loss"};function x(e,y,_,h,m,i){const a=u("b-form-checkbox"),l=u("profit-pill"),n=u("b-table");return f(),v(n,{ref:"tradesTable",small:"",hover:"","show-empty":"","primary-key":"botId",items:e.tableItems,fields:e.tableFields},{"cell(botName)":r(t=>[D("div",H,[t.item.botId&&e.botStore.botCount>1?(f(),v(a,{key:0,modelValue:e.botStore.botStores[t.item.botId].isSelected,"onUpdate:modelValue":p=>e.botStore.botStores[t.item.botId].isSelected=p,title:"Show bot in Dashboard"},null,8,["modelValue","onUpdate:modelValue"])):k("",!0),D("span",null,B(t.value),1)])]),"cell(profitOpen)":r(t=>[t.item.profitOpen&&t.item.botId!="Summary"?(f(),v(l,{key:0,"profit-ratio":t.item.profitOpenRatio,"profit-abs":t.item.profitOpen,"stake-currency":t.item.stakeCurrency},null,8,["profit-ratio","profit-abs","stake-currency"])):k("",!0)]),"cell(profitClosed)":r(t=>[t.item.profitClosed&&t.item.botId!="Summary"?(f(),v(l,{key:0,"profit-ratio":t.item.profitClosedRatio,"profit-abs":t.item.profitClosed,"stake-currency":t.item.stakeCurrency},null,8,["profit-ratio","profit-abs","stake-currency"])):k("",!0)]),"cell(balance)":r(t=>[t.item.balance?(f(),O("div",J,[D("span",{title:t.item.stakeCurrency},B(e.formatPrice(t.item.balance,t.item.stakeCurrencyDecimals)),9,K),D("span",Q,B(t.item.stakeCurrency),1)])):k("",!0)]),"cell(winVsLoss)":r(t=>[t.item.losses!==void 0?(f(),O("div",X,[D("span",Y,B(t.item.wins),1),V(" / "),D("span",Z,B(t.item.losses),1)])):k("",!0)]),_:1},8,["items","fields"])}var ee=N(q,[["render",x]]);const te=P({name:"Dashboard",components:{DailyChart:G,CumProfitChart:z,ProfitDistributionChart:j,TradesLogChart:F,BotComparisonList:ee,TradeList:W,DraggableContainer:I},setup(){const e=A(),y=R(),_=U(""),h=g=>{_.value=g},m=d(()=>["","sm","md","lg","xl"].includes(_.value)),i=d(()=>y.layoutLocked||!m),a=d(()=>m?y.dashboardLayout:[...y.getDashboardLayoutSm]),l=g=>{m&&(console.log("newlayout",g),console.log("saving dashboard"),y.dashboardLayout=g)},n=d(()=>C(a.value,L.dailyChart)),t=d(()=>C(a.value,L.botComparison)),p=d(()=>C(a.value,L.allOpenTrades)),T=d(()=>C(a.value,L.allClosedTrades)),w=d(()=>C(a.value,L.cumChartChart)),S=d(()=>C(a.value,L.profitDistributionChart)),c=d(()=>C(a.value,L.tradesLogChart)),s=d(()=>({sm:y.getDashboardLayoutSm}));return E(async()=>{await e.allGetDaily({timescale:30}),e.activeBot.getOpenTrades(),e.activeBot.getProfit()}),{botStore:e,formatPrice:$,isLayoutLocked:i,layoutUpdatedEvent:l,breakpointChanged:h,gridLayoutData:a,gridLayoutDaily:n,gridLayoutBotComparison:t,gridLayoutAllOpenTrades:p,gridLayoutAllClosedTrades:T,gridLayoutCumChart:w,gridLayoutProfitDistribution:S,gridLayoutTradesLogChart:c,responsiveGridLayouts:s}}});function ae(e,y,_,h,m,i){const a=u("DailyChart"),l=u("DraggableContainer"),n=u("grid-item"),t=u("bot-comparison-list"),p=u("trade-list"),T=u("CumProfitChart"),w=u("ProfitDistributionChart"),S=u("TradesLogChart"),c=u("grid-layout");return f(),v(c,{class:"h-100 w-100","row-height":50,layout:e.gridLayoutData,"vertical-compact":!1,margin:[5,5],"responsive-layouts":e.responsiveGridLayouts,"is-resizable":!e.isLayoutLocked,"is-draggable":!e.isLayoutLocked,responsive:!0,"prevent-collision":!0,cols:{lg:12,md:12,sm:12,xs:4,xxs:2},"col-num":12,onLayoutUpdated:e.layoutUpdatedEvent,onBreakpointChanged:e.breakpointChanged},{default:r(({gridItemProps:s})=>[o(n,b(s,{i:e.gridLayoutDaily.i,x:e.gridLayoutDaily.x,y:e.gridLayoutDaily.y,w:e.gridLayoutDaily.w,h:e.gridLayoutDaily.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:`Daily Profit ${e.botStore.botCount>1?"combined":""}`},{default:r(()=>[e.botStore.allDailyStatsSelectedBots?(f(),v(a,{key:0,"daily-stats":e.botStore.allDailyStatsSelectedBots,"show-title":!1},null,8,["daily-stats"])):k("",!0)]),_:1},8,["header"])]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutBotComparison.i,x:e.gridLayoutBotComparison.x,y:e.gridLayoutBotComparison.y,w:e.gridLayoutBotComparison.w,h:e.gridLayoutBotComparison.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Bot comparison"},{default:r(()=>[o(t)]),_:1})]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutAllOpenTrades.i,x:e.gridLayoutAllOpenTrades.x,y:e.gridLayoutAllOpenTrades.y,w:e.gridLayoutAllOpenTrades.w,h:e.gridLayoutAllOpenTrades.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Open Trades"},{default:r(()=>[o(p,{"active-trades":"",trades:e.botStore.allOpenTradesSelectedBots,"multi-bot-view":""},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutCumChart.i,x:e.gridLayoutCumChart.x,y:e.gridLayoutCumChart.y,w:e.gridLayoutCumChart.w,h:e.gridLayoutCumChart.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Cumulative Profit"},{default:r(()=>[o(T,{trades:e.botStore.allTradesSelectedBots,"show-title":!1},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutAllClosedTrades.i,x:e.gridLayoutAllClosedTrades.x,y:e.gridLayoutAllClosedTrades.y,w:e.gridLayoutAllClosedTrades.w,h:e.gridLayoutAllClosedTrades.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Closed Trades"},{default:r(()=>[o(p,{"active-trades":!1,"show-filter":"",trades:e.botStore.allClosedTradesSelectedBots,"multi-bot-view":""},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutProfitDistribution.i,x:e.gridLayoutProfitDistribution.x,y:e.gridLayoutProfitDistribution.y,w:e.gridLayoutProfitDistribution.w,h:e.gridLayoutProfitDistribution.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Profit Distribution"},{default:r(()=>[o(w,{trades:e.botStore.allTradesSelectedBots,"show-title":!1},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),o(n,b(s,{i:e.gridLayoutTradesLogChart.i,x:e.gridLayoutTradesLogChart.x,y:e.gridLayoutTradesLogChart.y,w:e.gridLayoutTradesLogChart.w,h:e.gridLayoutTradesLogChart.h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:r(()=>[o(l,{header:"Trades Log"},{default:r(()=>[o(S,{trades:e.botStore.allTradesSelectedBots,"show-title":!1},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"])]),_:1},8,["layout","responsive-layouts","is-resizable","is-draggable","onLayoutUpdated","onBreakpointChanged"])}var ue=N(te,[["render",ae]]);export{ue as default};
//# sourceMappingURL=Dashboard.f570a597.js.map
