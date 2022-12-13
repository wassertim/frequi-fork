import{a as Y,_ as Q,T as X}from"./StrategySelect.65dd56a7.js";import{T as K}from"./TradeList.35f46f31.js";import{_ as A,d as L,i as P,q as b,x as z,aB as E,y as D,r as o,o as c,c as h,a as r,t as $,b as s,w as l,H as I,Q as H,R as q,j as V,f as R,u as j,v as x,g as S,p as O,e as G,h as y,X as Z,F as W,V as J,W as ee,Y as te}from"./index.cf317eb3.js";import{P as se,C as ae,T as le}from"./TradesLog.b2f5e98c.js";import{T as oe,P as re,D as ie}from"./TradeProfit.04b14a7d.js";import{P as ne}from"./PairSummary.4f74b6c6.js";import{C as ce}from"./CandleChartContainer.664f3653.js";import"./install.819b1beb.js";import"./install.9003a60d.js";import"./createSeriesDataSimply.9325bed0.js";const ue={class:"container-fluid px-0 backtestresult-container"},de={class:"row d-flex justify-content-center"},me={class:"row text-start ms-0"},be={class:"row w-100"},_e={class:"col-12 col-xl-6 px-0 px-xl-0 pe-xl-1"},pe={class:"col-12 col-xl-6 px-0 px-xl-0 pt-2 pt-xl-0 ps-xl-1"},fe=L({__name:"BacktestResultView",props:{backtestResult:{required:!0,type:Object}},setup(e){const t=e,n=a=>`${z(a,t.backtestResult.stake_currency_decimals)} ${t.backtestResult.stake_currency}`,_=a=>a.trades.slice().sort((k,w)=>k.profit_ratio-w.profit_ratio),f=P(()=>{const a=_(t.backtestResult);if(a.length===0)return"N/A";const g=a[a.length-1];return`${g.pair} ${b(g.profit_ratio,2)}`}),B=P(()=>{const a=_(t.backtestResult);if(a.length===0)return"N/A";const g=a[0];return`${g.pair} ${b(g.profit_ratio,2)}`}),u=P(()=>{var g,k,w,M,T;const a=((g=t.backtestResult)==null?void 0:g.trade_count_short)&&((k=t.backtestResult)==null?void 0:k.trade_count_short)>0?[{metric:"___",value:"___"},{metric:"Long / Short",value:`${t.backtestResult.trade_count_long} / ${t.backtestResult.trade_count_short}`},{metric:"Total profit Long",value:`${b(t.backtestResult.profit_total_long||0)} | ${n(t.backtestResult.profit_total_long_abs)}`},{metric:"Total profit Short",value:`${b(t.backtestResult.profit_total_short||0)} | ${n(t.backtestResult.profit_total_short_abs)}`}]:[];return[{metric:"Total Profit",value:`${b(t.backtestResult.profit_total)} | ${n(t.backtestResult.profit_total_abs)}`},{metric:"CAGR",value:`${t.backtestResult.cagr?b(t.backtestResult.cagr):"N/A"}`},{metric:"Profit factor",value:`${t.backtestResult.profit_factor?z(t.backtestResult.profit_factor,3):"N/A"}`},{metric:"Total trades / Daily Avg Trades",value:`${t.backtestResult.total_trades} / ${t.backtestResult.trades_per_day}`},{metric:"Best day",value:`${b(t.backtestResult.backtest_best_day,2)} | ${n(t.backtestResult.backtest_best_day_abs)}`},{metric:"Worst day",value:`${b(t.backtestResult.backtest_worst_day,2)} | ${n(t.backtestResult.backtest_worst_day_abs)}`},{metric:"Win/Draw/Loss",value:`${t.backtestResult.results_per_pair[t.backtestResult.results_per_pair.length-1].wins} / ${t.backtestResult.results_per_pair[t.backtestResult.results_per_pair.length-1].draws} / ${t.backtestResult.results_per_pair[t.backtestResult.results_per_pair.length-1].losses}`},{metric:"Days win/draw/loss",value:`${t.backtestResult.winning_days} / ${t.backtestResult.draw_days} / ${t.backtestResult.losing_days}`},{metric:"Avg. Duration winners",value:E(t.backtestResult.winner_holding_avg_s)},{metric:"Avg. Duration Losers",value:E(t.backtestResult.loser_holding_avg_s)},{metric:"Rejected entry signals",value:t.backtestResult.rejected_signals},{metric:"Entry/Exit timeouts",value:`${t.backtestResult.timedout_entry_orders} / ${t.backtestResult.timedout_exit_orders}`},{metric:"Canceled Trade Entries",value:(w=t.backtestResult.canceled_trade_entries)!=null?w:"N/A"},{metric:"Canceled Entry Orders",value:(M=t.backtestResult.canceled_entry_orders)!=null?M:"N/A"},{metric:"Replaced Entry Orders",value:(T=t.backtestResult.replaced_entry_orders)!=null?T:"N/A"},...a,{metric:"___",value:"___"},{metric:"Min balance",value:n(t.backtestResult.csum_min)},{metric:"Max balance",value:n(t.backtestResult.csum_max)},{metric:"Market change",value:b(t.backtestResult.market_change)},{metric:"___",value:"___"},{metric:"Max Drawdown (Account)",value:b(t.backtestResult.max_drawdown_account)},{metric:"Max Drawdown ABS",value:n(t.backtestResult.max_drawdown_abs)},{metric:"Drawdown high | low",value:`${n(t.backtestResult.max_drawdown_high)} | ${n(t.backtestResult.max_drawdown_low)}`},{metric:"Drawdown start",value:D(t.backtestResult.drawdown_start_ts)},{metric:"Drawdown end",value:D(t.backtestResult.drawdown_end_ts)},{metric:"___",value:"___"},{metric:"Best Pair",value:`${t.backtestResult.best_pair.key} ${b(t.backtestResult.best_pair.profit_sum)}`},{metric:"Worst Pair",value:`${t.backtestResult.worst_pair.key} ${b(t.backtestResult.worst_pair.profit_sum)}`},{metric:"Best single Trade",value:f.value},{metric:"Worst single Trade",value:B.value}]}),m=P(()=>[{setting:"Backtesting from",value:D(t.backtestResult.backtest_start_ts)},{setting:"Backtesting to",value:D(t.backtestResult.backtest_end_ts)},{setting:"BT execution time",value:E(t.backtestResult.backtest_run_end_ts-t.backtestResult.backtest_run_start_ts)},{setting:"Max open trades",value:t.backtestResult.max_open_trades},{setting:"Timeframe",value:t.backtestResult.timeframe},{setting:"Timeframe Detail",value:t.backtestResult.timeframe_detail||"N/A"},{setting:"Timerange",value:t.backtestResult.timerange},{setting:"Stoploss",value:b(t.backtestResult.stoploss,2)},{setting:"Trailing Stoploss",value:t.backtestResult.trailing_stop},{setting:"Trail only when offset is reached",value:t.backtestResult.trailing_only_offset_is_reached},{setting:"Trailing Stop positive",value:t.backtestResult.trailing_stop_positive},{setting:"Trailing stop positive offset",value:t.backtestResult.trailing_stop_positive_offset},{setting:"Custom Stoploss",value:t.backtestResult.use_custom_stoploss},{setting:"ROI",value:t.backtestResult.minimal_roi},{setting:"Use Exit Signal",value:t.backtestResult.use_exit_signal!==void 0?t.backtestResult.use_exit_signal:t.backtestResult.use_sell_signal},{setting:"Exit profit only",value:t.backtestResult.exit_profit_only!==void 0?t.backtestResult.exit_profit_only:t.backtestResult.sell_profit_only},{setting:"Exit profit offset",value:t.backtestResult.exit_profit_offset!==void 0?t.backtestResult.exit_profit_offset:t.backtestResult.sell_profit_offset},{setting:"Enable protections",value:t.backtestResult.enable_protections},{setting:"Starting balance",value:n(t.backtestResult.starting_balance)},{setting:"Final balance",value:n(t.backtestResult.final_balance)},{setting:"Avg. stake amount",value:n(t.backtestResult.avg_stake_amount)},{setting:"Total trade volume",value:n(t.backtestResult.total_volume)}]),d=P(()=>[{key:"key",label:"Pair"},{key:"trades",label:"Buys"},{key:"profit_mean",label:"Avg Profit %",formatter:a=>b(a,2)},{key:"profit_sum",label:"Cum Profit %",formatter:a=>b(a,2)},{key:"profit_total_abs",label:`Tot Profit ${t.backtestResult.stake_currency}`,formatter:a=>z(a,t.backtestResult.stake_currency_decimals)},{key:"profit_total",label:"Tot Profit %",formatter:a=>b(a,2)},{key:"duration_avg",label:"Avg Duration"},{key:"wins",label:"Wins"},{key:"draws",label:"Draws"},{key:"losses",label:"Losses"}]),v=P(()=>[{key:"exit_reason",label:"Exit Reason"},{key:"trades",label:"Buys"},{key:"profit_mean",label:"Avg Profit %",formatter:a=>b(a,2)},{key:"profit_sum",label:"Cum Profit %",formatter:a=>b(a,2)},{key:"profit_total_abs",label:`Tot Profit ${t.backtestResult.stake_currency}`,formatter:a=>z(a,t.backtestResult.stake_currency_decimals)},{key:"profit_total",label:"Tot Profit %",formatter:a=>b(a,2)},{key:"wins",label:"Wins"},{key:"draws",label:"Draws"},{key:"losses",label:"Losses"}]),C=[{key:"metric",label:"Metric"},{key:"value",label:"Value"}],p=[{key:"setting",label:"Setting"},{key:"value",label:"Value"}];return(a,g)=>{const k=o("b-table"),w=o("b-card");return c(),h("div",ue,[r("div",de,[r("h3",null,"Backtest-result for "+$(e.backtestResult.strategy_name),1)]),r("div",me,[r("div",be,[r("div",_e,[s(w,{header:"Strategy settings"},{default:l(()=>[s(k,{small:"",borderless:"",items:I(m),fields:p},null,8,["items"])]),_:1})]),r("div",pe,[s(w,{header:"Metrics"},{default:l(()=>[s(k,{small:"",borderless:"",items:I(u),fields:C},null,8,["items"])]),_:1})])]),s(w,{header:"Results per Exit-reason",class:"row mt-2 w-100"},{default:l(()=>[s(k,{small:"",hover:"",stacked:"sm",items:e.backtestResult.exit_reason_summary||e.backtestResult.sell_reason_summary,fields:I(v)},null,8,["items","fields"])]),_:1}),s(w,{header:"Results per pair",class:"row mt-2 w-100"},{default:l(()=>[s(k,{small:"",hover:"",stacked:"sm",items:e.backtestResult.results_per_pair,fields:I(d)},null,8,["items","fields"])]),_:1}),s(w,{header:"Single trades",class:"row mt-2 w-100"},{default:l(()=>[s(K,{class:"row trade-history mt-2 w-100",trades:e.backtestResult.trades,"show-filter":!0,"stake-currency":e.backtestResult.stake_currency},null,8,["trades","stake-currency"])]),_:1})])])}}});var ke=A(fe,[["__scopeId","data-v-86c7084e"]]);const ve=L({name:"BacktestResultSelect",props:{backtestHistory:{required:!0,type:Object},selectedBacktestResultKey:{required:!1,default:"",type:String}},emits:["selectionChange"],setup(e,{emit:t}){return{formatPercent:b,setBacktestResult:_=>{t("selectionChange",_)}}}}),ge={class:"container d-flex flex-column align-items-center"},ye=r("h3",null,"Available results:",-1);function Re(e,t,n,_,f,B){const u=o("b-list-group-item"),m=o("b-list-group");return c(),h("div",ge,[ye,s(m,{class:"ms-2"},{default:l(()=>[(c(!0),h(H,null,q(Object.entries(e.backtestHistory),([d,v])=>(c(),V(u,{key:d,button:"",active:d===e.selectedBacktestResultKey,class:"d-flex justify-content-between align-items-center py-1",onClick:C=>e.setBacktestResult(d)},{default:l(()=>[R($(d)+" "+$(v.total_trades)+" "+$(e.formatPercent(v.profit_total)),1)]),_:2},1032,["active","onClick"]))),128))]),_:1})])}var he=A(ve,[["render",Re]]);const Be=L({setup(){const e=j();return x(()=>{e.activeBot.getBacktestHistory()}),{timestampms:D,botStore:e}}}),we=r("p",null," Load Historic results from disk. You can click on multiple results to load all of them into freqUI. ",-1);function Se(e,t,n,_,f,B){const u=o("b-list-group-item"),m=o("b-list-group");return c(),h("div",null,[r("button",{class:"btn btn-secondary float-end",title:"Refresh","aria-label":"Refresh",onClick:t[0]||(t[0]=(...d)=>e.botStore.activeBot.getBacktestHistory&&e.botStore.activeBot.getBacktestHistory(...d))}," \u21BB "),we,e.botStore.activeBot.backtestHistoryList?(c(),V(m,{key:0,class:"ms-2"},{default:l(()=>[(c(!0),h(H,null,q(e.botStore.activeBot.backtestHistoryList,(d,v)=>(c(),V(u,{key:v,class:"d-flex justify-content-between align-items-center py-1 mb-1",button:"",onClick:C=>e.botStore.activeBot.getBacktestHistoryResult(d)},{default:l(()=>[r("strong",null,$(d.strategy),1),R(" backtested on: "+$(e.timestampms(d.backtest_start_time*1e3))+" ",1),r("small",null,$(d.filename),1)]),_:2},1032,["onClick"]))),128))]),_:1})):S("",!0)])}var $e=A(Be,[["render",Se]]);const Te=L({name:"BacktestGraphsView",components:{ProfitDistributionChart:se,CumProfitChart:ae,TradesLogChart:le},props:{trades:{required:!0,type:Array}},setup(){return{}}}),Ce=e=>(O("data-v-c2c9d094"),e=e(),G(),e),Ve={class:"text-center flex-fill mt-2 d-flex flex-column"},Pe=Ce(()=>r("hr",null,null,-1));function Ae(e,t,n,_,f,B){const u=o("TradesLogChart"),m=o("CumProfitChart"),d=o("ProfitDistributionChart");return c(),h("div",Ve,[s(u,{trades:e.trades,class:"trades-log"},null,8,["trades"]),s(m,{trades:e.trades,"profit-column":"profit_abs",class:"cum-profit","show-title":!0},null,8,["trades"]),Pe,s(d,{class:"mt-3",trades:e.trades,"show-title":!0},null,8,["trades"])])}var Le=A(Te,[["render",Ae],["__scopeId","data-v-c2c9d094"]]);const Me=L({name:"TradeListNav",components:{TradeProfit:oe,ProfitPill:re,DateTimeTZ:ie},props:{trades:{required:!0,type:Array},backtestMode:{required:!1,default:!1,type:Boolean}},emits:["trade-select"],setup(e,{emit:t}){const n=j(),_=y({}),f=u=>{_.value=u,t("trade-select",u)},B=P(()=>e.trades.slice().sort((u,m)=>m.open_timestamp-u.open_timestamp));return{botStore:n,selectedTrade:_,sortedTrades:B,onTradeSelect:f}}}),De=e=>(O("data-v-3322872f"),e=e(),G(),e),Fe=De(()=>r("span",null,"Trade Navigation",-1)),Ne={key:0};function Ue(e,t,n,_,f,B){const u=o("DateTimeTZ"),m=o("TradeProfit"),d=o("ProfitPill"),v=o("b-list-group-item"),C=o("b-list-group");return c(),h("div",null,[Fe,s(C,null,{default:l(()=>[(c(!0),h(H,null,q(e.sortedTrades,p=>(c(),V(v,{key:p.open_timestamp,button:"",class:"d-flex flex-wrap justify-content-between align-items-center py-1",title:`${p.pair}`,active:p.open_timestamp===e.selectedTrade.open_timestamp,onClick:a=>e.onTradeSelect(p)},{default:l(()=>[r("div",null,[e.botStore.activeBot.botState.trading_mode!=="spot"?(c(),h("span",Ne,$(p.is_short?"S-":"L-"),1)):S("",!0),s(u,{date:p.open_timestamp},null,8,["date"])]),s(m,{trade:p},null,8,["trade"]),e.backtestMode?(c(),V(d,{key:0,"profit-ratio":p.profit_ratio,"stake-currency":e.botStore.activeBot.stakeCurrency},null,8,["profit-ratio","stake-currency"])):S("",!0)]),_:2},1032,["title","active","onClick"]))),128)),e.trades.length===0?(c(),V(v,{key:0},{default:l(()=>[R("No trades to show...")]),_:1})):S("",!0)]),_:1})])}var ze=A(Me,[["render",Ue],["__scopeId","data-v-3322872f"]]);const Ie=L({name:"BacktestResultChart",components:{CandleChartContainer:ce,PairSummary:ne,TradeList:K,TradeListNav:ze},props:{timeframe:{required:!0,type:String},strategy:{required:!0,type:String},timerange:{required:!0,type:String},pairlist:{required:!0,type:Array},trades:{required:!0,type:Array}},setup(){const e=j(),t=y(!0),n=y();return{botStore:e,showRightBar:t,navigateChartToTrade:f=>{n.value={startValue:f.open_timestamp,endValue:f.close_timestamp}},sliderPosition:n}}}),je={class:"row"},Ee={class:"col-md-11 text-start"},He={class:"col-md-1 text-end"},qe={class:"row text-center h-100 d-flex align-items-stretch"};function Oe(e,t,n,_,f,B){const u=o("b-button"),m=o("PairSummary"),d=o("CandleChartContainer"),v=o("TradeListNav"),C=o("TradeList"),p=o("b-card");return c(),h("div",null,[r("div",je,[r("div",Ee,[r("p",null," Graph will always show the latest values for the selected strategy. Timerange: "+$(e.timerange)+" - "+$(e.strategy),1)]),r("div",He,[s(u,{"aria-label":"Close",title:"Trade Navigation",size:"sm",onClick:t[0]||(t[0]=a=>e.showRightBar=!e.showRightBar)},{default:l(()=>[R($(e.showRightBar?">":"<"),1)]),_:1})])]),r("div",qe,[s(m,{class:"col-md-2 overflow-auto",style:{"max-height":"calc(100vh - 200px)"},pairlist:e.pairlist,trades:e.trades,"sort-method":"profit","backtest-mode":!0},null,8,["pairlist","trades"]),s(d,{"available-pairs":e.pairlist,"historic-view":!0,timeframe:e.timeframe,timerange:e.timerange,strategy:e.strategy,trades:e.trades,class:Z(`${e.showRightBar?"col-md-8":"col-md-10"} candle-chart-container px-0 h-100 align-self-stretch`),"slider-position":e.sliderPosition},null,8,["available-pairs","timeframe","timerange","strategy","trades","class","slider-position"]),e.showRightBar?(c(),V(v,{key:0,class:"overflow-auto col-md-2",style:{"max-height":"calc(100vh - 200px)"},trades:e.trades.filter(a=>a.pair===e.botStore.activeBot.selectedPair),onTradeSelect:e.navigateChartToTrade},null,8,["trades","onTradeSelect"])):S("",!0)]),s(p,{header:"Single trades",class:"row mt-2 w-100"},{default:l(()=>[s(C,{class:"row trade-history mt-2 w-100",trades:e.trades,"show-filter":!0},null,8,["trades"])]),_:1})])}var Ge=A(Ie,[["render",Oe],["__scopeId","data-v-63c7a0c4"]]);const We=L({name:"Backtesting",components:{BacktestResultView:ke,BacktestGraphsView:Le,BacktestResultSelect:he,BacktestHistoryLoad:$e,TimeRangeSelect:Y,StrategySelect:Q,TimeframeSelect:X,BacktestResultChart:Ge},setup(){const e=j(),t=P(()=>e.activeBot.backtestHistory?Object.keys(e.activeBot.backtestHistory).length!==0:!1),n=P(()=>{try{return e.activeBot.selectedBacktestResult.timeframe}catch{return""}}),_=y(""),f=y(""),B=y(""),u=y(""),m=y(!1),d=y(!1),v=y(!1),C=y(""),p=y(""),a=y(""),g=y("run"),k=y(null),w=()=>{_.value=e.activeBot.selectedBacktestResult.strategy_name,f.value=e.activeBot.selectedBacktestResult.timeframe,B.value=e.activeBot.selectedBacktestResult.timeframe_detail||"",u.value=e.activeBot.selectedBacktestResult.timerange};W(()=>e.activeBot.selectedBacktestResultKey,()=>{w()});const M=()=>{const T={strategy:_.value,timerange:u.value,enable_protections:d.value},N=parseInt(C.value,10);if(N&&(T.max_open_trades=N),v.value)T.stake_amount="unlimited";else{const i=Number(p.value);i&&(T.stake_amount=i.toString())}const U=Number(a.value);U&&(T.dry_run_wallet=U),f.value&&(T.timeframe=f.value),B.value&&(T.timeframe_detail=B.value),e.activeBot.startBacktest(T)};return x(()=>e.activeBot.getState()),W(()=>e.activeBot.backtestRunning,()=>{e.activeBot.backtestRunning===!0?k.value=window.setInterval(e.activeBot.pollBacktest,1e3):k.value&&(clearInterval(k.value),k.value=null)}),{botStore:e,formatPercent:b,hasBacktestResult:t,timeframe:n,strategy:_,selectedTimeframe:f,selectedDetailTimeframe:B,timerange:u,enableProtections:d,showLeftBar:m,stakeAmountUnlimited:v,maxOpenTrades:C,stakeAmount:p,startingCapital:a,btFormMode:g,clickBacktest:M}}}),F=e=>(O("data-v-e087b70e"),e=e(),G(),e),Ke={class:"container-fluid",style:{"max-height":"calc(100vh - 60px)"}},xe={class:"container-fluid"},Ze=F(()=>r("div",{class:"row mb-2"},null,-1)),Ye={key:0},Qe={class:"row w-100"},Xe=F(()=>r("h2",{class:"col-4 col-lg-3"},"Backtesting",-1)),Je={class:"col-12 col-lg-order-last col-lg-6 mx-md-5 d-flex flex-wrap justify-content-md-center justify-content-between mb-4"},et={class:"d-md-flex"},tt={key:0,class:"flex-fill row d-flex flex-column bt-config"},st={key:1,class:"flex-fill row d-flex flex-column bt-config"},at={class:"mb-2"},lt=F(()=>r("span",null,"Strategy",-1)),ot={class:"d-flex"},rt=F(()=>r("hr",null,null,-1)),it=F(()=>r("h3",{class:"mt-3"},"Backtesting summary",-1)),nt={class:"d-flex flex-wrap flex-md-nowrap justify-content-between justify-content-md-center"},ct={key:0,class:"container-fluid text-center w-100 mt-2"};function ut(e,t,n,_,f,B){const u=o("b-form-radio"),m=o("b-button"),d=o("BacktestResultSelect"),v=o("backtest-history-load"),C=o("StrategySelect"),p=o("TimeframeSelect"),a=o("b-form-group"),g=o("b-form-input"),k=o("b-form-checkbox"),w=o("TimeRangeSelect"),M=o("b-card"),T=o("BacktestResultView"),N=o("BacktestGraphsView"),U=o("BacktestResultChart");return c(),h("div",Ke,[r("div",xe,[Ze,e.botStore.activeBot.canRunBacktest?S("",!0):(c(),h("p",Ye," Bot must be in webserver mode to enable Backtesting. ")),r("div",Qe,[Xe,r("div",Je,[e.botStore.activeBot.botApiVersion>=2.15?(c(),V(u,{key:0,modelValue:e.btFormMode,"onUpdate:modelValue":t[0]||(t[0]=i=>e.btFormMode=i),name:"bt-form-radios",button:"",class:"mx-1 flex-samesize-items",value:"historicResults",disabled:!e.botStore.activeBot.canRunBacktest},{default:l(()=>[R("Load Results")]),_:1},8,["modelValue","disabled"])):S("",!0),s(u,{modelValue:e.btFormMode,"onUpdate:modelValue":t[1]||(t[1]=i=>e.btFormMode=i),name:"bt-form-radios",button:"",class:"mx-1 flex-samesize-items",value:"run",disabled:!e.botStore.activeBot.canRunBacktest},{default:l(()=>[R("Run backtest")]),_:1},8,["modelValue","disabled"]),s(u,{id:"bt-analyze-btn",modelValue:e.btFormMode,"onUpdate:modelValue":t[2]||(t[2]=i=>e.btFormMode=i),name:"bt-form-radios",button:"",class:"mx-1 flex-samesize-items",value:"results",disabled:!e.hasBacktestResult},{default:l(()=>[R("Analyze result")]),_:1},8,["modelValue","disabled"]),s(u,{modelValue:e.btFormMode,"onUpdate:modelValue":t[3]||(t[3]=i=>e.btFormMode=i),name:"bt-form-radios",button:"",class:"mx-1 flex-samesize-items",value:"visualize-summary",disabled:!e.hasBacktestResult},{default:l(()=>[R("Visualize summary")]),_:1},8,["modelValue","disabled"]),s(u,{modelValue:e.btFormMode,"onUpdate:modelValue":t[4]||(t[4]=i=>e.btFormMode=i),name:"bt-form-radios",button:"",class:"mx-1 flex-samesize-items",value:"visualize",disabled:!e.hasBacktestResult},{default:l(()=>[R("Visualize result")]),_:1},8,["modelValue","disabled"])]),J(r("small",{class:"text-end bt-running-label col-8 col-lg-3"},"Backtest running: "+$(e.botStore.activeBot.backtestStep)+" "+$(e.formatPercent(e.botStore.activeBot.backtestProgress,2)),513),[[ee,e.botStore.activeBot.backtestRunning]])])]),r("div",et,[r("div",{class:Z(`${e.showLeftBar?"col-md-3":""} sticky-top sticky-offset me-3 d-flex flex-column`)},[e.btFormMode!=="visualize"?(c(),V(m,{key:0,class:"align-self-start","aria-label":"Close",size:"sm",onClick:t[5]||(t[5]=i=>e.showLeftBar=!e.showLeftBar)},{default:l(()=>[R($(e.showLeftBar?"<":">"),1)]),_:1})):S("",!0),s(te,{name:"fade",mode:"in-out"},{default:l(()=>[e.btFormMode!=="visualize"&&e.showLeftBar?(c(),V(d,{key:0,"backtest-history":e.botStore.activeBot.backtestHistory,"selected-backtest-result-key":e.botStore.activeBot.selectedBacktestResultKey,onSelectionChange:e.botStore.activeBot.setBacktestResultKey},null,8,["backtest-history","selected-backtest-result-key","onSelectionChange"])):S("",!0)]),_:1})],2),e.btFormMode=="historicResults"?(c(),h("div",tt,[s(v)])):S("",!0),e.btFormMode=="run"?(c(),h("div",st,[r("div",at,[lt,s(C,{modelValue:e.strategy,"onUpdate:modelValue":t[6]||(t[6]=i=>e.strategy=i)},null,8,["modelValue"])]),s(M,{"bg-variant":"light",disabled:e.botStore.activeBot.backtestRunning},{default:l(()=>[s(a,{"label-cols-lg":"2",label:"Backtest params","label-size":"sm","label-class":"fw-bold pt-0",class:"mb-0"},{default:l(()=>[s(a,{"label-cols-sm":"5",label:"Timeframe:","label-align-sm":"right","label-for":"timeframe-select"},{default:l(()=>[s(p,{id:"timeframe-select",modelValue:e.selectedTimeframe,"onUpdate:modelValue":t[7]||(t[7]=i=>e.selectedTimeframe=i)},null,8,["modelValue"])]),_:1}),s(a,{"label-cols-sm":"5",label:"Detail Timeframe:","label-align-sm":"right","label-for":"timeframe-detail-select",title:"Detail timeframe, to simulate intra-candle results. Not setting this will not use this functionality."},{default:l(()=>[s(p,{id:"timeframe-detail-select",modelValue:e.selectedDetailTimeframe,"onUpdate:modelValue":t[8]||(t[8]=i=>e.selectedDetailTimeframe=i),"below-timeframe":e.selectedTimeframe},null,8,["modelValue","below-timeframe"])]),_:1}),s(a,{"label-cols-sm":"5",label:"Max open trades:","label-align-sm":"right","label-for":"max-open-trades"},{default:l(()=>[s(g,{id:"max-open-trades",modelValue:e.maxOpenTrades,"onUpdate:modelValue":t[9]||(t[9]=i=>e.maxOpenTrades=i),placeholder:"Use strategy default",type:"number"},null,8,["modelValue"])]),_:1}),s(a,{"label-cols-sm":"5",label:"Starting capital:","label-align-sm":"right","label-for":"starting-capital"},{default:l(()=>[s(g,{id:"starting-capital",modelValue:e.startingCapital,"onUpdate:modelValue":t[10]||(t[10]=i=>e.startingCapital=i),type:"number",step:"0.001"},null,8,["modelValue"])]),_:1}),s(a,{"label-cols-sm":"5",label:"Stake amount:","label-align-sm":"right","label-for":"stake-amount"},{default:l(()=>[r("div",ot,[s(k,{id:"stake-amount-bool",modelValue:e.stakeAmountUnlimited,"onUpdate:modelValue":t[11]||(t[11]=i=>e.stakeAmountUnlimited=i),class:"col-md-6"},{default:l(()=>[R("Unlimited stake")]),_:1},8,["modelValue"]),s(g,{id:"stake-amount",modelValue:e.stakeAmount,"onUpdate:modelValue":t[12]||(t[12]=i=>e.stakeAmount=i),type:"number",placeholder:"Use strategy default",step:"0.01",disabled:e.stakeAmountUnlimited},null,8,["modelValue","disabled"])])]),_:1}),s(a,{"label-cols-sm":"5",label:"Enable Protections:","label-align-sm":"right","label-for":"enable-protections"},{default:l(()=>[s(k,{id:"enable-protections",modelValue:e.enableProtections,"onUpdate:modelValue":t[13]||(t[13]=i=>e.enableProtections=i)},null,8,["modelValue"])]),_:1}),rt,s(w,{modelValue:e.timerange,"onUpdate:modelValue":t[14]||(t[14]=i=>e.timerange=i),class:"mt-2"},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled"]),it,r("div",nt,[s(m,{id:"start-backtest",variant:"primary",disabled:e.botStore.activeBot.backtestRunning||!e.botStore.activeBot.canRunBacktest,class:"mx-1",onClick:e.clickBacktest},{default:l(()=>[R(" Start backtest ")]),_:1},8,["disabled","onClick"]),s(m,{variant:"primary",disabled:e.botStore.activeBot.backtestRunning||!e.botStore.activeBot.canRunBacktest,class:"mx-1",onClick:e.botStore.activeBot.pollBacktest},{default:l(()=>[R(" Load backtest result ")]),_:1},8,["disabled","onClick"]),s(m,{variant:"primary",class:"mx-1",disabled:!e.botStore.activeBot.backtestRunning,onClick:e.botStore.activeBot.stopBacktest},{default:l(()=>[R("Stop Backtest")]),_:1},8,["disabled","onClick"]),s(m,{variant:"primary",class:"mx-1",disabled:e.botStore.activeBot.backtestRunning||!e.botStore.activeBot.canRunBacktest,onClick:e.botStore.activeBot.removeBacktest},{default:l(()=>[R("Reset Backtest")]),_:1},8,["disabled","onClick"])])])):S("",!0),e.hasBacktestResult&&e.btFormMode=="results"?(c(),V(T,{key:2,"backtest-result":e.botStore.activeBot.selectedBacktestResult,class:"flex-fill"},null,8,["backtest-result"])):S("",!0),e.hasBacktestResult&&e.btFormMode=="visualize-summary"?(c(),V(N,{key:3,trades:e.botStore.activeBot.selectedBacktestResult.trades},null,8,["trades"])):S("",!0)]),e.hasBacktestResult&&e.btFormMode=="visualize"?(c(),h("div",ct,[s(U,{timeframe:e.timeframe,strategy:e.strategy,timerange:e.timerange,pairlist:e.botStore.activeBot.selectedBacktestResult.pairlist,trades:e.botStore.activeBot.selectedBacktestResult.trades},null,8,["timeframe","strategy","timerange","pairlist","trades"])])):S("",!0)])}var Rt=A(We,[["render",ut],["__scopeId","data-v-e087b70e"]]);export{Rt as default};
//# sourceMappingURL=Backtesting.15702e99.js.map
