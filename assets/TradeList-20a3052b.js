import{g as z,o as u,c as x,a as h,t as y,h as g,m as q,d as H,j as B,w as c,b as r,f as T,ax as Z,D as ie,n as k,r as b,u as G,i as W,q as j,s as re,k as S,l as ne,ay as se,C as M,x as de,M as ue}from"./index-a26190e4.js";import{_ as ce,D as K}from"./InfoBox-bb0b0dfe.js";const me={name:"CloseBoxMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},fe=["aria-hidden","aria-label"],ve=["fill","width","height"],pe={d:"M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z"},be={key:0};function ye(t,l,e,m,f,v){return u(),x("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon close-box-multiple-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(u(),x("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",pe,[e.title?(u(),x("title",be,y(e.title),1)):g("",!0)])],8,ve))],16,fe)}const xe=z(me,[["render",ye]]),_e={name:"GestureTapIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ge=["aria-hidden","aria-label"],ke=["fill","width","height"],Ve={d:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"},Ce={key:0};function $e(t,l,e,m,f,v){return u(),x("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon gesture-tap-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(u(),x("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",Ve,[e.title?(u(),x("title",Ce,y(e.title),1)):g("",!0)])],8,ke))],16,ge)}const Te=z(_e,[["render",$e]]),he={name:"CloseBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},we=["aria-hidden","aria-label"],Le=["fill","width","height"],Be={d:"M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"},Ae={key:0};function Fe(t,l,e,m,f,v){return u(),x("span",q(t.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon close-box-icon",role:"img",onClick:l[0]||(l[0]=i=>t.$emit("click",i))}),[(u(),x("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[h("path",Be,[e.title?(u(),x("title",Ae,y(e.title),1)):g("",!0)])],8,Le))],16,we)}const N=z(he,[["render",Fe]]),Oe={class:"d-flex flex-column"},Se=H({__name:"TradeActions",props:{botApiVersion:{type:Number,default:1},trade:{type:Object,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","deleteTrade"],setup(t){return(l,e)=>{const m=k("b-button");return u(),x("div",Oe,[t.botApiVersion<=1.1?(u(),B(m,{key:0,class:"btn-xs text-start",size:"sm",title:"Forceexit",onClick:e[0]||(e[0]=f=>l.$emit("forceExit",t.trade))},{default:c(()=>[r(N,{size:16,title:"Forceexit",class:"me-1"}),T("Forceexit ")]),_:1})):g("",!0),t.botApiVersion>1.1?(u(),B(m,{key:1,class:"btn-xs text-start",size:"sm",title:"Forceexit limit",onClick:e[1]||(e[1]=f=>l.$emit("forceExit",t.trade,"limit"))},{default:c(()=>[r(N,{size:16,title:"Forceexit limit",class:"me-1"}),T("Forceexit limit ")]),_:1})):g("",!0),t.botApiVersion>1.1?(u(),B(m,{key:2,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit market",onClick:e[2]||(e[2]=f=>l.$emit("forceExit",t.trade,"market"))},{default:c(()=>[r(N,{size:16,title:"Forceexit market",class:"me-1"}),T("Forceexit market ")]),_:1})):g("",!0),t.botApiVersion>2.16?(u(),B(m,{key:3,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit partial",onClick:e[3]||(e[3]=f=>l.$emit("forceExitPartial",t.trade))},{default:c(()=>[r(xe,{size:16,title:"Forceexit partial",class:"me-1"}),T("Forceexit partial ")]),_:1})):g("",!0),t.botApiVersion>=2.24&&t.trade.open_order_id?(u(),B(m,{key:4,class:"btn-xs text-start mt-1",size:"sm",title:"Cancel open orders",onClick:e[4]||(e[4]=f=>l.$emit("cancelOpenOrder",t.trade))},{default:c(()=>[r(Z,{size:16,title:"Cancel open order",class:"me-1"}),T("Cancel open order ")]),_:1})):g("",!0),r(m,{class:"btn-xs text-start mt-1",size:"sm",title:"Delete trade",onClick:e[5]||(e[5]=f=>l.$emit("deleteTrade",t.trade))},{default:c(()=>[r(ie,{size:16,title:"Delete trade",class:"me-1"}),T(" Delete ")]),_:1})])}}}),Ee=H({__name:"TradeActionsPopover",props:{trade:{type:Object,required:!0},id:{type:Number,required:!0},botApiVersion:{type:Number,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","deleteTrade"],setup(t,{emit:l}){const e=b(!1),m=(i,s=void 0)=>{e.value=!1,l("forceExit",i,s)},f=i=>{e.value=!1,l("forceExitPartial",i)},v=i=>{e.value=!1,l("cancelOpenOrder",i)};return(i,s)=>{const V=k("b-button"),L=k("b-popover");return u(),x("div",null,[r(V,{id:`btn-actions-${t.id}`,class:"btn-xs",size:"sm",title:"Actions",onClick:s[0]||(s[0]=w=>e.value=!e.value)},{default:c(()=>[r(Te,{size:16,title:"Actions"})]),_:1},8,["id"]),r(L,{target:`btn-actions-${t.id}`,title:`Actions for ${t.trade.pair}`,triggers:"manual",show:e.value,placement:"left"},{default:c(()=>[r(Se,{trade:t.trade,"bot-api-version":t.botApiVersion,onForceExit:m,onForceExitPartial:f,onDeleteTrade:s[1]||(s[1]=w=>{e.value=!1,i.$emit("deleteTrade",t.trade)}),onCancelOpenOrder:v},null,8,["trade","bot-api-version"]),r(V,{class:"mt-1 w-100 text-start",size:"sm",onClick:s[2]||(s[2]=w=>e.value=!1)},{default:c(()=>[r(Z,{size:16,title:"Close popup",class:"me-1"}),T("Close Actions menu ")]),_:1})]),_:1},8,["target","title","show"])])}}}),Ie=["onSubmit"],ze=h("br",null,null,-1),He=H({__name:"ForceExitForm",props:{trade:{type:Object,required:!0},modelValue:{required:!0,default:!1,type:Boolean}},emits:["update:modelValue"],setup(t,{emit:l}){const e=t,m=G(),f=b(),v=b(void 0),i=b("limit"),s=()=>{var d;return(d=f.value)==null?void 0:d.checkValidity()},V=W({get(){return e.modelValue},set(p){l("update:modelValue",p)}}),L=()=>{if(!s())return;const p={tradeid:String(e.trade.trade_id)};i.value&&(p.ordertype=i.value),v.value&&(p.amount=v.value),m.activeBot.forceexit(p),V.value=!1},w=()=>{var p,d,A,F;v.value=e.trade.amount,i.value=((d=(p=m.activeBot.botState)==null?void 0:p.order_types)==null?void 0:d.force_exit)||((F=(A=m.activeBot.botState)==null?void 0:A.order_types)==null?void 0:F.exit)||"limit"},C=()=>{L()};return(p,d)=>{const A=k("b-form-input"),F=k("b-form-group"),E=k("b-form-select"),P=k("b-modal");return u(),x("div",null,[r(P,{id:"forceexit-modal",modelValue:S(V),"onUpdate:modelValue":d[3]||(d[3]=$=>ne(V)?V.value=$:null),title:"Force exiting a trade",onShow:w,onHidden:w,onOk:C},{default:c(()=>[h("form",{ref_key:"form",ref:f,onSubmit:re(L,["stop","prevent"])},[h("p",null,[h("span",null,"Exiting Trade #"+y(t.trade.trade_id)+" "+y(t.trade.pair)+".",1),ze,h("span",null,"Currently owning "+y(t.trade.amount)+" "+y(t.trade.base_currency),1)]),r(F,{label:`*Amount in ${t.trade.base_currency} [optional]`,"label-for":"stake-input","invalid-feedback":"Amount must be empty or a positive number",state:v.value!==void 0&&v.value>0},{default:c(()=>[r(A,{id:"stake-input",modelValue:v.value,"onUpdate:modelValue":d[0]||(d[0]=$=>v.value=$),type:"number",step:"0.000001",onKeydown:j(C,["enter"])},null,8,["modelValue","onKeydown"]),r(A,{id:"stake-input",modelValue:v.value,"onUpdate:modelValue":d[1]||(d[1]=$=>v.value=$),type:"range",step:"0.000001",min:"0",max:t.trade.amount,onKeydown:j(C,["enter"])},null,8,["modelValue","max","onKeydown"])]),_:1},8,["label","state"]),r(F,{label:"*OrderType","label-for":"ordertype-input","invalid-feedback":"OrderType",state:i.value!==void 0},{default:c(()=>[r(E,{modelValue:i.value,"onUpdate:modelValue":d[2]||(d[2]=$=>i.value=$),class:"ms-2",options:["market","limit"],style:{"min-width":"7em"},size:"sm"},null,8,["modelValue"])]),_:1},8,["state"])],40,Ie)]),_:1},8,["modelValue"])])}}}),Pe={class:"h-100 overflow-auto w-100"},De={class:"w-100 d-flex justify-content-between"},Me=H({__name:"TradeList",props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String}},setup(t){const l=t,e=G(),m=se(),f=b(1),v=b(),i=b(""),s=b({}),V=l.activeTrades?200:15,L=b(),w=b(!1),C=b(!1),p=b(""),d=b(null),A=[{key:"actions"}],F=[{key:"close_timestamp",label:"Close date"},{key:"exit_reason",label:"Close Reason"}],E=a=>M(a,e.activeBot.stakeCurrencyDecimals),P=W(()=>l.trades.length),$=[{key:"trade_id",label:"ID"},{key:"pair",label:"Pair"},{key:"amount",label:"Amount"},{key:"stake_amount",label:"Stake amount"},{key:"open_rate",label:"Open rate",formatter:a=>M(a)},{key:l.activeTrades?"current_rate":"close_rate",label:l.activeTrades?"Current rate":"Close rate",formatter:a=>M(a)},{key:"profit",label:l.activeTrades?"Current profit %":"Profit %",formatter:(a,n,_)=>{if(!_)return"";const O=_;return`${de(O.profit_ratio,2)} ${`(${E(O.profit_abs)})`}`}},{key:"open_timestamp",label:"Open date"},...l.activeTrades?A:F];l.multiBotView&&$.unshift({key:"botName",label:"Bot"});const I=b(void 0),J=(a,n=void 0)=>{s.value=a,d.value=1,p.value=`Really exit trade ${a.trade_id} (Pair ${a.pair}) using ${n} Order?`,C.value=!0,I.value=n},Q=()=>{if(d.value===0){const a={tradeid:String(s.value.trade_id),botId:s.value.botId};e.deleteTradeMulti(a).catch(n=>console.log(n.response))}if(d.value===1){const a={tradeid:String(s.value.trade_id),botId:s.value.botId};I.value&&(a.ordertype=I.value),e.forceSellMulti(a).then(n=>console.log(n)).catch(n=>console.log(n.response))}if(d.value===3){const a={tradeid:String(s.value.trade_id),botId:s.value.botId};e.cancelOpenOrderMulti(a)}I.value=void 0,C.value=!1},X=a=>{p.value=`Really delete trade ${a.trade_id} (Pair ${a.pair})?`,d.value=0,s.value=a,C.value=!0},Y=a=>{s.value=a,w.value=!0},ee=a=>{p.value=`Cancel open order for trade ${a.trade_id} (Pair ${a.pair})?`,s.value=a,d.value=3,C.value=!0},te=(a,n,_)=>{l.activeTrades&&(_.preventDefault(),console.log(a))},ae=a=>{l.multiBotView&&e.selectedBot!==a.botId&&e.selectBot(a.botId),a&&a.trade_id!==e.activeBot.detailTradeId?(e.activeBot.setDetailTrade(a),l.multiBotView&&m.push({name:"Freqtrade Trading"})):e.activeBot.setDetailTrade(null)},le=()=>{var a;if(e.activeBot.detailTradeId){const n=l.trades.findIndex(_=>_.trade_id===e.activeBot.detailTradeId);n>=0?(a=L.value)==null||a.selectRow(n):(console.log(`Unsetting item for tradeid ${v.value}`),v.value=void 0)}};return ue(()=>e.activeBot.detailTradeId,a=>{var _;l.trades.findIndex(O=>O.trade_id===a)<0&&((_=L.value)==null||_.clearSelected())}),(a,n)=>{const _=k("b-table"),O=k("b-pagination"),R=k("b-form-input"),oe=k("b-modal");return u(),x("div",Pe,[r(_,{ref_key:"tradesTable",ref:L,small:"",hover:"",stacked:"md",items:t.trades.filter(o=>{var D,U;return o.pair.toLowerCase().includes(i.value.toLowerCase())||((D=o.exit_reason)==null?void 0:D.toLowerCase().includes(i.value.toLowerCase()))||((U=o.enter_tag)==null?void 0:U.toLowerCase().includes(i.value.toLowerCase()))}),fields:$,"show-empty":"","empty-text":t.emptyText,"per-page":S(V),"current-page":f.value,"primary-key":"botTradeId",selectable:"","select-head":!1,"select-mode":"single",onRowContextmenu:te,onRowClicked:ae,onRowSelected:le},{"cell(actions)":c(o=>[r(Ee,{id:o.index,trade:o.item,"bot-api-version":S(e).activeBot.botApiVersion,onDeleteTrade:D=>X(o.item),onForceExit:J,onForceExitPartial:Y,onCancelOpenOrder:ee},null,8,["id","trade","bot-api-version","onDeleteTrade"])]),"cell(pair)":c(o=>[h("span",null,y(`${o.item.pair}${o.item.open_order_id===void 0||o.item.open_order_id===null?"":"*"}`),1)]),"cell(trade_id)":c(o=>[T(y(o.item.trade_id)+" "+y(S(e).activeBot.botApiVersion>2&&o.item.trading_mode!=="spot"?"| "+(o.item.is_short?"Short":"Long"):""),1)]),"cell(stake_amount)":c(o=>[T(y(E(o.item.stake_amount))+" "+y(o.item.trading_mode!=="spot"?`(${o.item.leverage}x)`:""),1)]),"cell(profit)":c(o=>[r(ce,{trade:o.item},null,8,["trade"])]),"cell(open_timestamp)":c(o=>[r(K,{date:o.item.open_timestamp},null,8,["date"])]),"cell(close_timestamp)":c(o=>[r(K,{date:o.item.close_timestamp},null,8,["date"])]),_:1},8,["items","empty-text","per-page","current-page"]),h("div",De,[t.activeTrades?g("",!0):(u(),B(O,{key:0,modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=o=>f.value=o),"total-rows":S(P),"per-page":S(V),"aria-controls":"my-table"},null,8,["modelValue","total-rows","per-page"])),t.showFilter?(u(),B(R,{key:1,modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=o=>i.value=o),type:"text",placeholder:"Filter",size:"sm",style:{width:"unset"}},null,8,["modelValue"])):g("",!0)]),t.activeTrades?(u(),B(He,{key:0,modelValue:w.value,"onUpdate:modelValue":n[2]||(n[2]=o=>w.value=o),trade:s.value},null,8,["modelValue","trade"])):g("",!0),r(oe,{modelValue:C.value,"onUpdate:modelValue":n[3]||(n[3]=o=>C.value=o),title:"Exit trade",onOk:Q},{default:c(()=>[T(y(p.value),1)]),_:1},8,["modelValue"])])}}});const Re=z(Me,[["__scopeId","data-v-63b0a5c0"]]);export{xe as F,Re as T};
//# sourceMappingURL=TradeList-20a3052b.js.map
