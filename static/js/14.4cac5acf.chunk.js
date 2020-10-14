(this["webpackJsonpsmart-cssd"]=this["webpackJsonpsmart-cssd"]||[]).push([[14],{1022:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(14),o=a.n(n),i=a(31),l=a(23),c=a(42),s=a(0),m=a.n(s),u=a(909),d=a(78),p=a(930),g=a(166),b=a(948),f=a(929),v=a(287),h=a(4),y=a(528),O=a(951),E=a(940),j=a(943),w=a(944),T=a(164),N=a(965),S=a(888),C=a(913),x=a(924),k=a(911),I=a(968),R=a(914),P=a(994),F=a(870),B=a(950),L=a(875),z=a(933),H=Object(z.a)(m.a.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeftOutlined"),A=Object(z.a)(m.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),M=Object(z.a)(m.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),W=a(935),D=Object(y.a)((function(e){return{root:{},queryButton:{marginLeft:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},queryDivider:{margin:e.spacing(0,3)},queryCard:{minHeight:60,borderRadius:e.spacing(1),padding:e.spacing(2)},queryField:{width:"95%",marginLeft:e.spacing(2),marginRight:e.spacing(1)},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var q=function(e){var t=e.onFilters,a=e.className,r=Object(v.a)(e,["onFilters","className"]),n=D(),o=Object(u.a)([d.e.SETS,d.e.TRANSLATIONS]).t,i=Object.entries(d.a).map((function(e){return{label:e[0],value:e[1]}})),p={surgicalType:"",status:"",borrowedBy:"",borrowTimestampFrom:"",borrowTimestampTo:"",returnedBy:"",returnedTimestampFrom:"",returnedTimestampTo:""},g=Object(W.d)({mode:"onChange",defaultValues:p}),b=g.register,f=g.reset,y=g.handleSubmit,j=g.formState,w=g.errors,z=j.isDirty,q=j.isSubmitting,Y=j.isSubmitted,G=Object(s.useState)(!1),_=Object(c.a)(G,2),V=_[0],K=_[1],Z=function(e){e.persist(),f(Object(l.a)({},p)),!0===Y&&t(Object(l.a)({},p))},J=function(e){return!(!w||!w[e])},Q=function(e){var t,a;return null!==(t=null===(a=w[e])||void 0===a?void 0:a.message)&&void 0!==t?t:null};return console.log(w),m.a.createElement(O.a,Object.assign({maxWidth:"md",className:Object(h.a)(a,n.root)},r),m.a.createElement("form",{onSubmit:y((function(e){z&&t(Object(l.a)({},e))}))},m.a.createElement(N.a,{className:n.queryCard},m.a.createElement(S.a,{display:"flex",alignItems:"center"},m.a.createElement(C.a,{fullWidth:!0,className:n.queryField,size:"small",label:o("borrowingHistory:search surgical type"),placeholder:o("borrowingHistory:search surgical type placeholder"),name:"surgicalType",inputRef:b,error:J("surgicalType"),helperText:Q("surgicalType")}),m.a.createElement(x.a,{only:["md","lg","xl"]},m.a.createElement(k.a,{color:"primary",disabled:q,onClick:Z,size:"small"},m.a.createElement(H,null)),m.a.createElement(k.a,{type:"submit",color:"primary",disabled:q,size:"small"},m.a.createElement(A,null))),m.a.createElement(x.a,{smDown:!0},m.a.createElement(I.a,{orientation:"vertical",flexItem:!0,className:n.queryDivider}),m.a.createElement(R.a,{variant:"outlined",color:"secondary",className:n.queryButton,disabled:q,onClick:Z,size:"small"},m.a.createElement(H,null),o("translations:clear")),m.a.createElement(R.a,{type:"submit",variant:"outlined",color:"primary",className:n.queryButton,disabled:q,size:"small"},m.a.createElement(A,null),o("translations:search"))),m.a.createElement(P.a,{disableSpacing:!0},m.a.createElement(k.a,{className:Object(h.a)(n.expand,Object(T.a)({},n.expandOpen,V)),"aria-label":"Advance filters","aria-expanded":V,onClick:function(){K(!V)},title:o("translations:advance filters"),size:"small"},m.a.createElement(M,null)))),m.a.createElement(F.a,{in:V,timeout:"auto",unmountOnExit:!0},m.a.createElement(B.a,null,m.a.createElement(L.a,{variant:"h4"},o("translations:advance filters")),m.a.createElement(E.a,{container:!0,spacing:2,style:{marginTop:8}},m.a.createElement(E.a,{item:!0,xs:12,md:8},m.a.createElement(C.a,{fullWidth:!0,name:"status",inputRef:b,variant:"outlined",label:o("borrowingHistory:status"),select:!0,SelectProps:{native:!0},InputLabelProps:{shrink:!0},size:"small",error:J("status"),helperText:Q("status")},i.map((function(e){return m.a.createElement("option",{key:e.value,value:e.value},e.label)})))),m.a.createElement(E.a,{item:!0,container:!0,xs:12,spacing:2,direction:"row",justify:"flex-start",alignItems:"center"},m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"borrowedBy",label:o("borrowingHistory:borrowed by"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined"})),m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"borrowTimestampFrom",type:"datetime-local",label:o("borrowingHistory:borrowed timestamp from"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined"})),m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"borrowTimestampTo",type:"datetime-local",label:o("borrowingHistory:borrowed timestamp to"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined"}))),m.a.createElement(E.a,{item:!0,container:!0,xs:12,spacing:2,direction:"row",justify:"flex-start",alignItems:"center"},m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"returnedBy",label:o("borrowingHistory:returned by"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined",error:J("returnedBy"),helperText:Q("returnedBy")})),m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"returnedTimestampFrom",type:"datetime-local",label:o("borrowingHistory:returned timestamp from"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined",error:J("returnedTimestampFrom"),helperText:Q("returnedTimestampFrom")})),m.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6,lg:4},m.a.createElement(C.a,{fullWidth:!0,inputRef:b,name:"returnedTimestampTo",type:"datetime-local",label:o("borrowingHistory:returned timestamp to"),InputLabelProps:{shrink:!0},size:"small",variant:"outlined",error:J("returnedTimestampTo"),helperText:Q("returnedTimestampTo")})))))))))},Y=Object(y.a)((function(e){return{root:{minWidth:"100%"},previousButton:{"&:hover":{textDecoration:"underline"}},titleRow:{paddingTop:e.spacing(1)},headerBackground:Object(l.a)({height:130,zIndex:e.zIndex.drawer+100,marginTop:e.spacing(1)},e.name===d.d.LIGHT?{boxShadow:"none",background:"linear-gradient(90deg, ".concat(e.palette.primary.main," 30%, ").concat(e.palette.secondary.main," 180%)")}:{},{},e.name===d.d.ONE_DARK?{backgroundColor:e.palette.background.default}:{}),filterWrapper:{marginTop:-127}}}));var G=function(e){var t=e.onFilters,a=e.className,r=Object(v.a)(e,["onFilters","className"]),n=Y(),o=Object(u.a)([d.e.TRANSLATIONS,d.e.SETS]).t;return m.a.createElement("div",Object.assign({className:Object(h.a)(n.root,a)},r),m.a.createElement("div",{className:n.headerBackground}),m.a.createElement(O.a,{maxWidth:"md",className:n.filterWrapper},m.a.createElement(E.a,{alignItems:"center",container:!0,justify:"space-between",className:n.titleRow},m.a.createElement(E.a,{item:!0},m.a.createElement(w.a,null,o("borrowingHistory:page title"))),m.a.createElement(E.a,{item:!0},m.a.createElement(j.a,{className:n.previousButton}))),m.a.createElement(q,{onFilters:t})))},_=a(923),V=a(906),K=Object(y.a)((function(e){return{root:Object(T.a)({display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"space-between"}),sortByField:{},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)},displayItemCounts:{}}}));function Z(e){var t=e.itemCounts,a=e.onSortChange,r=(e.onModeChange,e.className),n=Object(v.a)(e,["itemCounts","onSortChange","onModeChange","className"]),o=K(),i=Object(u.a)([d.e.TRANSLATIONS,d.e.SETS]).t,l=[{value:"surgicalType|asc",label:"Surgical Type (Ascending A to Z)"},{value:"surgicalType|desc",label:"Surgical Type (Descending Z to A)"}],p=Object(s.useState)(l[0].value),g=Object(c.a)(p,2),b=g[0],f=g[1];return m.a.createElement(S.a,Object.assign({className:Object(h.a)(r,o.root)},n),m.a.createElement(x.a,{smDown:!0},m.a.createElement(S.a,{display:"flex",alignItems:"center"},m.a.createElement(L.a,{className:o.displayItemCounts,variant:"h5",color:"textPrimary"},"".concat(i("translations:showing")," ").concat(t," ").concat(i("borrowingHistory:items"))))),m.a.createElement(S.a,{display:"flex",alignItems:"center"},m.a.createElement(C.a,{label:i("translations:sort by"),name:"sort",onChange:function(e){e.persist(),f(e.target.value),a(e.target.value)},select:!0,SelectProps:{native:!0},value:b,variant:"outlined",size:"small",className:o.sortByField},l.map((function(e){return m.a.createElement("option",{key:e.value,value:e.value},e.label)})))))}Z.defaultProps={itemCounts:0,onSortChange:function(){},onModeChange:function(){},className:""};var J=Object(V.a)()(Z),Q=a(26),U=a(51),X=a(1002),$=a(983),ee=a(1001),te=a(945),ae=a(949),re=function(e){var t=e.children;return(m.a.createElement(E.a,{item:!0,container:!0,direction:"column",xs:12,sm:6,md:3,lg:3},t))},ne=Object(y.a)((function(){return{root:{minWidth:178}}}));var oe=function(e){var t,a,r,n,o,i,l=e.loading,c=e.borrowTime,s=e.className,p=Object(v.a)(e,["loading","borrowTime","className"]),g=ne(),b=Object(u.a)([d.e.TRANSLATIONS,d.e.BORROWING_HISTORY]).t,f=Object(Q.g)(),y=[{translateKey:"edit",click:function(){},icon:m.a.createElement(ee.a,null)}],O=null!==(t=null===c||void 0===c?void 0:c.surgicalType)&&void 0!==t?t:"",j=null!==(a=null===c||void 0===c?void 0:c.medicalToolsCount)&&void 0!==a?a:0,w=null!==(r=null===c||void 0===c?void 0:c.medicalItemsCount)&&void 0!==r?r:0,T=(null===c||void 0===c?void 0:c.borrowTimestamp)?U(c.borrowTimestamp).format("YYYYMMDD HH:mm"):("",""),C=null!==(n=null===c||void 0===c?void 0:c.borrowBy)&&void 0!==n?n:"",x=(null===c||void 0===c?void 0:c.returnTimestamp)?U(c.returnTimestamp).format("YYYYMMDD HH:mm"):("",""),k=null!==(o=null===c||void 0===c?void 0:c.returnBy)&&void 0!==o?o:"",I=null!==(i=null===c||void 0===c?void 0:c.status)&&void 0!==i?i:"",P=[{label:b("borrowingHistory:medical tools count"),value:j},{label:b("borrowingHistory:medical items count"),value:w},{label:b("borrowingHistory:borrowed by"),value:"".concat(T," | ").concat(C)},{label:b("borrowingHistory:returned by"),value:"".concat(x," | ").concat(k)}];return m.a.createElement(N.a,Object.assign({className:Object(h.a)(g.root,s)},p),m.a.createElement(X.a,{title:l?m.a.createElement($.a,{animation:"wave",variant:"text","data-testid":"skeleton-title"}):m.a.createElement(L.a,{color:"textPrimary",variant:"h3"},O),action:l?null:m.a.createElement(te.a,{buttonList:y})}),m.a.createElement(S.a,{pb:1,px:3},l?m.a.createElement("div",{"data-testid":"skeleton-details"},m.a.createElement($.a,{animation:"wave",height:15,style:{marginBottom:6}}),m.a.createElement($.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),m.a.createElement($.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),m.a.createElement($.a,{animation:"wave",height:10,width:"90%"})):m.a.createElement(E.a,{container:!0,alignItems:"center",justify:"space-between",spacing:1},P.map((function(e){var t=e.label,a=e.value;return(m.a.createElement(re,{key:t},m.a.createElement(E.a,{item:!0},m.a.createElement(L.a,{gutterBottom:!0,variant:"body2",color:"textSecondary"},t)),m.a.createElement(E.a,{item:!0},m.a.createElement(L.a,{variant:"body2"},a))))})))),m.a.createElement(S.a,{py:2,px:2},m.a.createElement(E.a,{alignItems:"center",container:!0,justify:"space-between",spacing:2},m.a.createElement(E.a,{item:!0},l?m.a.createElement("div",{"data-testid":"skeleton-view-details-button"},m.a.createElement($.a,{animation:"wave",height:10,width:"80%"})):m.a.createElement(m.a.Fragment,null,m.a.createElement(R.a,{color:"secondary",onClick:function(e){e.persist();var t="/borrowing-history/".concat(c.id,"/detail");f.push(t)},variant:"outlined",size:"small"},b("borrowingHistory:view details")))),m.a.createElement(E.a,{item:!0},l?m.a.createElement("div",{"data-testid":"skeleton-mode-label"},m.a.createElement($.a,{animation:"wave",height:10,width:"80%"})):m.a.createElement(ae.a,{status:I})))))},ie=Object(y.a)((function(e){return{root:{},sortWrapper:{marginBottom:e.spacing(1)}}}));function le(e){var t=e.loading,a=e.borrowTimes,r=e.itemCounts,n=(e.limit,e.onSortChange),o=(e.onRemove,e.className),i=Object(v.a)(e,["loading","borrowTimes","itemCounts","limit","onSortChange","onRemove","className"]),l=ie(),u=Object(s.useState)(""),d=Object(c.a)(u,2),p=d[0],g=d[1];if(!0===t){for(var b=[],f=0;f<8;f++)b.push({id:Object(_.a)()});a=[].concat(b)}return(m.a.createElement("div",Object.assign({className:Object(h.a)(l.root,o)},i),m.a.createElement(J,{itemCounts:r,onSortChange:n,onModeChange:function(e){g(e)},className:l.sortWrapper}),m.a.createElement(E.a,{container:!0,spacing:1},a.map((function(e){return m.a.createElement(E.a,{item:!0,key:e.id,md:"grid"===p?3:12,sm:"grid"===p?6:12,xs:12},m.a.createElement(oe,{borrowTime:e,loading:t}))})))))}le.defaultProps={loading:!0,itemCounts:0,limit:0,borrowTimes:[],onSortChange:function(){},className:""};var ce=le,se=a(1027),me=Object(y.a)((function(e){return{root:{}}}));function ue(e){var t=e.page,a=e.limit,r=e.count,n=e.onChangePage,o=e.onChangeRowsPerPage,i=e.className,l=Object(v.a)(e,["page","limit","count","onChangePage","onChangeRowsPerPage","className"]),c=me(),s=Object(u.a)([d.e.TRANSLATIONS,d.e.SETS]).t,p=d.c.PAGE_OPTIONS;return m.a.createElement(S.a,Object.assign({className:Object(h.a)(i,c.root)},l,{display:"flex",justifyContent:"center"}),m.a.createElement(se.a,{component:"div",count:r,onChangePage:function(e,t){e.persist(),n(t)},onChangeRowsPerPage:function(e){e.persist(),o(e.target.value)},page:t,rowsPerPage:a,rowsPerPageOptions:p,labelRowsPerPage:s("translations:rows per page"),nextIconButtonText:s("translations:next page"),backIconButtonText:s("translations:previous page")}))}ue.defaultProps={page:d.c.PAGE,limit:d.c.PAGE_SIZES,count:0,onChangePage:function(){},onChangeRowsPerPage:function(){},className:""};var de=ue,pe=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.dark},content:{marginTop:e.spacing(3)}}}));t.default=function(){var e=pe(),t=Object(u.a)([d.e.TRANSLATIONS,d.e.BORROWING_HISTORY]).t,a=Object(g.b)().enqueueSnackbar,n=Object(p.a)(),v=Object(s.useState)(!0),h=Object(c.a)(v,2),y=h[0],E=h[1],j=Object(s.useState)(null),w=Object(c.a)(j,2),T=w[0],N=w[1],C=Object(s.useState)(0),x=Object(c.a)(C,2),k=x[0],I=x[1],R=Object(s.useState)("surgicalType|asc"),P=Object(c.a)(R,2),F=P[0],B=P[1],L=Object(s.useState)(8),z=Object(c.a)(L,2),H=z[0],A=z[1],M=Object(s.useState)({surgicalType:"",status:"",borrowedBy:"",borrowTimestampFrom:"",borrowTimestampTo:"",returnedBy:"",returnedTimestampFrom:"",returnedTimestampTo:""}),W=Object(c.a)(M,2),D=W[0],q=W[1],Y=Object(s.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(t,r,i,l){var c,s,m,u,d,p,g,f,v,h,y,O,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,c=[],s={},m={},Object.entries(t).forEach((function(e){var t=e[0],a=e[1];switch(t){case"surgicalType":case"borrowedBy":case"returnedBy":if(""!==a&&a){c.push({field:t,value:a,operator:"contains"});break}break;case"status":if(""!==a&&a){c.push({field:t,value:a,operator:"eq"});break}break;case"borrowTimestampFrom":case"borrowTimestampTo":if(""!==a&&a){s[t]=a;break}break;case"returnedTimestampFrom":case"returnedTimestampTo":if(""!==a&&a){m[t]=a;break}}})),Object.keys(s).length&&(u=s.borrowTimestampFrom,d=s.borrowTimestampTo,u&&d&&c.push({logic:"and",filters:[{field:"borrowTimestamp",value:u,operator:"gte"},{field:"borrowTimestamp",value:d,operator:"lte"}]}),u&&!d&&c.push({field:"borrowTimestamp",value:u,operator:"gte"}),!u&&d&&c.push({field:"borrowTimestamp",value:d,operator:"lte"})),Object.keys(m).length&&(p=m.returnedTimestampFrom,g=m.returnedTimestampTo,p&&g&&c.push({logic:"and",filters:[{field:"returnedTimestamp",value:p,operator:"gte"},{field:"returnedTimestamp",value:g,operator:"lte"}]}),p&&!g&&c.push({field:"returnedTimestamp",value:p,operator:"gte"}),!p&&g&&c.push({field:"returnedTimestamp",value:g,operator:"lte"})),e.next=10,Object(b.b)({filters:{logic:"and",filters:c},sort:r,page:i,limit:l});case 10:if(f=e.sent,n.current){e.next=13;break}return e.abrupt("return");case 13:console.log("result: ",f),f.resultFlag?N(f.value):a(f.errors.message,{variant:"error"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),n.current&&(v=e.t0.errorCode,h=void 0===v?"":v,y=e.t0.errorMessage,O=void 0===y?"":y,j="".concat(h,": ").concat(O),a(j,{variant:"error"}));case 20:return e.prev=20,n.current&&E(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));return function(t,a,r,n){return e.apply(this,arguments)}}(),[n,a]);Object(s.useEffect)((function(){Y({surgicalType:"",status:"",borrowedBy:"",borrowTimestampFrom:"",borrowTimestampTo:"",returnedBy:"",returnedTimestampFrom:"",returnedTimestampTo:""},"surgicalType|asc",0,8)}),[Y]),console.log("loading: ",y,T);var _=T?Object(r.a)(T.data):[],V=T?T.data.length:0,K=T?T.total:0;return m.a.createElement(f.a,{className:e.root,title:t("borrowingHistory:page title")},m.a.createElement(G,{onFilters:function(e){q((function(){return Object(l.a)({},e)})),Y(e,F,k,H)}}),m.a.createElement(O.a,{maxWidth:"lg",className:e.content},m.a.createElement(S.a,null,m.a.createElement(ce,{loading:y,borrowTimes:_,itemCounts:V,onSortChange:function(e){B((function(){return e})),Y(D,e,k,H)},limit:H}),m.a.createElement(de,{mt:1,page:k,limit:H,count:K,onChangePage:function(e){I((function(){return e})),Y(D,F,e,H)},onChangeRowsPerPage:function(e){A((function(){return e})),Y(D,F,k,e)}}))))}},929:function(e,t,a){"use strict";var r=a(287),n=a(0),o=a.n(n),i=a(932),l=a(26);function c(){var e;window.gtag&&(e=window).gtag.apply(e,arguments)}var s={pageview:function(e){c("config","",e)},event:function(e,t){c("event",e,t)}},m=Object(n.forwardRef)((function(e,t){var a=e.title,c=e.children,m=Object(r.a)(e,["title","children"]),u=Object(l.h)(),d=Object(n.useCallback)((function(){s.pageview({page_path:u.pathname})}),[u]);return Object(n.useEffect)((function(){d()}),[d]),o.a.createElement("div",Object.assign({ref:t},m),o.a.createElement(i.a,null,o.a.createElement("title",null,"Smart CSSD - ",a)),c)}));t.a=m},930:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},933:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(1),n=a(0),o=a.n(n),i=a(133);function l(e,t){var a=o.a.memo(o.a.forwardRef((function(t,a){return o.a.createElement(i.a,Object(r.a)({ref:a},t),e)})));return a.muiName=i.a.muiName,a}},938:function(e,t,a){"use strict";var r=a(164),n=a(287),o=a(0),i=a.n(o),l=a(4),c=a(528),s=a(25),m=Object(c.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function u(e){var t=e.className,a=e.color,o=e.children,c=(e.style,Object(n.a)(e,["className","color","children","style"])),s=m();return i.a.createElement("span",Object.assign({className:Object(l.a)(s.root,Object(r.a)({},s[a],a),t)},c),o)}u.defaultProps={className:"",color:"secondary"},t.a=u},943:function(e,t,a){"use strict";var r=a(287),n=a(0),o=a.n(n),i=a(92),l=a(5),c=a.n(l),s=a(78),m=a(909),u=a(528),d=a(914),p=a(4),g=Object(u.a)((function(e){return{root:{color:e.palette.primary.title}}}));function b(e){var t=e.className,a=Object(r.a)(e,["className"]),n=g(),l=Object(m.a)([s.e.TRANSLATIONS]).t;return o.a.createElement(d.a,Object.assign({component:i.a,to:"/",className:Object(p.a)(n.root,t)},a),l("back to main page"))}b.prototype={className:c.a.string},t.a=Object(n.memo)(b)},944:function(e,t,a){"use strict";var r=a(287),n=a(0),o=a.n(n),i=a(4),l=a(528),c=a(875),s=Object(l.a)((function(e){return{root:{color:e.palette.primary.title}}}));t.a=function(e){var t=e.children,a=e.className,n=Object(r.a)(e,["children","className"]),l=s();return o.a.createElement(c.a,Object.assign({variant:"h3",className:Object(i.a)(a,l.root)},n),t)}},945:function(e,t,a){"use strict";var r=a(42),n=a(287),o=a(0),i=a.n(o),l=a(528),c=a(910),s=a(911),m=a(520),u=a(908),d=a(981),p=a(1e3),g=a(958),b=a.n(g),f=a(78),v=a(909),h=a(999),y=Object(l.a)((function(){return{menu:{maxWidth:"100%"}}}));function O(e){var t=e.buttonList,a=Object(n.a)(e,["buttonList"]),l=y(),g=Object(o.useRef)(null),O=Object(o.useState)(!1),E=Object(r.a)(O,2),j=E[0],w=E[1],T=Object(v.a)([f.e.TRANSLATIONS]).t;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:T("translations:more options")},i.a.createElement(s.a,Object.assign({},a,{onClick:function(){w(!0)},ref:g}),i.a.createElement(b.a,{fontSize:"small"}))),i.a.createElement(m.a,{anchorEl:g.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){w(!1)},open:j,PaperProps:{className:l.menu},transformOrigin:{vertical:"top",horizontal:"left"}},t&&t.map((function(e){return i.a.createElement(u.a,{onClick:function(){var t;"function"===typeof(t=e).click&&(t.click(),w(!1))},key:Object(h.a)(e),value:e},i.a.createElement(d.a,null,e.icon),i.a.createElement(p.a,{primary:T(e.translateKey)}))}))))}O.defaultProps={className:"",buttonList:[]},t.a=Object(o.memo)(O)},948:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return i}));var r=a(41),n=function(e){var t=e.filters,a=e.sort,n=e.page,o=e.limit;return new Promise((function(e,i){r.a.get("/api/borrowing-history/fetch",{params:{sort:a,page:n,limit:o,filters:t}}).then((function(t){t?e({resultFlag:!0,value:t.data}):i({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:"response is ".concat(t),activityId:null})})).catch((function(e){i({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:e.message,activityId:null})}))}))},o=function(e){return new Promise((function(t,a){r.a.get("/api/borrowing-history/getById",{params:{id:e}}).then((function(e){e?t({resultFlag:!0,value:e.data}):a({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:"response is ".concat(e),activityId:null})})).catch((function(e){a({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:e.message,activityId:null})}))}))},i=function(e){return new Promise((function(t,a){r.a.get("/api/borrowing-history/getEquipments",{params:{id:e}}).then((function(e){e?t({resultFlag:!0,value:e.data}):a({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:"response is ".concat(e),activityId:null})})).catch((function(e){a({resultFlag:!1,value:null,errorCode:"Something is wrong.",errorMessage:e.message,activityId:null})}))}))}},949:function(e,t,a){"use strict";var r=a(287),n=a(0),o=a.n(n),i=a(4),l=a(938),c=a(528),s=Object(c.a)((function(){return{root:{}}}));t.a=function(e){var t=e.status,a=e.className,n=Object(r.a)(e,["status","className"]),c=s(),m="";switch(t){case"Borrowed":m="warning";break;case"Returned":m="success";break;case"Created":m="secondary"}return(o.a.createElement(l.a,Object.assign({color:m,className:Object(i.a)(c.root,a)},n),t))}},950:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(5),a(4)),l=a(6),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,m=Object(n.a)(e,["classes","className","component"]);return(o.createElement(s,Object(r.a)({className:Object(i.a)(a.root,l),ref:t},m)))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},994:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(5),a(4)),l=a(6),c=o.forwardRef((function(e,t){var a=e.disableSpacing,l=void 0!==a&&a,c=e.classes,s=e.className,m=Object(n.a)(e,["disableSpacing","classes","className"]);return(o.createElement("div",Object(r.a)({className:Object(i.a)(c.root,s,!l&&c.spacing),ref:t},m)))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)}}]);
//# sourceMappingURL=14.4cac5acf.chunk.js.map