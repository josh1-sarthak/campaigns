(this.webpackJsonpcampaigns=this.webpackJsonpcampaigns||[]).push([[0],{173:function(e){e.exports=JSON.parse('{"data":[{"name":"Auto Chess","region":"US","createdOn":1572201000000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/autochess.png"},{"name":"Pubg Mobile","region":"CA, FR","createdOn":1608229800000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/pubg.png"},{"name":"Flow Free","region":"AU","createdOn":1623263400000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/flowfree.png"},{"name":"Shadow Fight 3","region":"UK","createdOn":1634581800000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/shadow-fight3.png"},{"name":"Mortal Combat","region":"US","createdOn":1629052200000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/mortal-kombat.png"},{"name":"Summoners War","region":"UK","createdOn":1616351400000,"price":"View Pricing","csv":"CSV","report":"Report","image_url":"/assets/images/summoners-war.png"}]}')},183:function(e){e.exports=JSON.parse('{"Manage Campaigns":"Manage Campaigns","Upcoming Campaigns":"Upcoming Campaigns","Live Campaigns":"Live Campaigns","Past Campaigns":"Past Campaigns","DATE":"DATE","CAMPAIGN":"CAMPAIGN","VIEW":"VIEW","ACTIONS":"ACTIONS","Days":"Days","Ahead":"Ahead","Ago":"Ago","View Pricing":"View Pricing","Schedule Again":"Schedule Again","Report":"Report","Pricing":"Pricing","1 Week - 1 Month":"1 Week - 1 Month","6 Months":"6 Months","1 Year":"1 Year","Close":"Close"}')},184:function(e){e.exports=JSON.parse('{"Manage Campaigns":"Hantera kampanjer","Upcoming Campaigns":"kommande kampanjer","Live Campaigns":"Live kampanjer","Past Campaigns":"tidigare kampanjer","DATE":"DATUM","CAMPAIGN":"KAMPANJ","VIEW":"SE","ACTIONS":"\xc5TG\xc4RDER","Days":"Dagar","Ahead":"Ett huvud","Ago":"Sedan","View Pricing":"Visa priser","Schedule Again":"Schema igen","Report":"Rapportera","Pricing":"Priss\xe4ttning","1 Week - 1 Month":"1 Vecka - 1 M\xe5nad","6 Months":"6 M\xe5nader","1 Year":"1 \xc5r","Close":"St\xe4ng"}')},203:function(e,a,t){},300:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(32),s=t.n(c),i=t(142),r=t(81),l=t(173),o=(t(202),t(311)),d=t(186),j=t(315),g=t(185),m=t(310),p=(t(203),t(314)),b=t(313),O=t(312),h=t.p+"static/media/calendar.a0489425.svg",u=t.p+"static/media/file.bb5c065d.svg",x=t.p+"static/media/Price.9e9bdbdb.svg",C=t.p+"static/media/statistics-report.5cc7cb59.svg",v=t(176),f=t.n(v),A=(t(204),t(5)),S=Date.now(),w=function(e){var a=Object(n.useState)(!1),t=Object(r.a)(a,2),c=t[0],s=t[1],i=function(){s(!c)};return Object(A.jsx)("div",{children:Object(A.jsx)(O.a,{size:"mini",onClose:i,onOpen:i,open:c,trigger:Object(A.jsxs)("span",{className:"viewPrice",children:[Object(A.jsx)(g.a,{src:x,alt:"price",verticalAlign:"middle"})," ",e.tablelocale(e.item.price)," "]}),children:Object(A.jsxs)(O.a.Content,{children:[Object(A.jsxs)("div",{className:"headModal",children:[Object(A.jsx)(g.a,{src:"/campaigns"+e.item.image_url}),Object(A.jsxs)("div",{className:"modalHeadContent",children:[Object(A.jsxs)("strong",{children:[" ",e.item.name," "]})," ",Object(A.jsx)("br",{}),e.item.region," "]})]}),Object(A.jsxs)("div",{className:"bodyModal",children:[Object(A.jsxs)("h3",{children:[" ",e.tablelocale("Pricing")," "]}),[{duration:"1 Week - 1 Month",cost:"$100"},{duration:"6 Months",cost:"$100"},{duration:"1 Year",cost:"$100"}].map((function(a){return Object(A.jsxs)("p",{style:{textAlign:"left"},children:[" ",e.tablelocale(a.duration)," ",Object(A.jsx)("span",{style:{float:"right"},children:Object(A.jsxs)("strong",{children:[" ",a.cost," "]})})," "]},a.duration)}))]}),Object(A.jsx)("div",{className:"modalBtn",children:Object(A.jsxs)("button",{onClick:i,children:[" ",e.tablelocale("Close")," "]})})]})})})},N=function(e){var a=e.item,t=e.onTableUpdate,c=Object(n.useState)(new Date(e.item.createdOn)),s=Object(r.a)(c,2),i=s[0],l=s[1],o=Object(n.useState)(!1),d=Object(r.a)(o,2),j=d[0],m=d[1];Object(n.useEffect)((function(){var e=i.getTime();t(a,e)}),[i]);return Object(A.jsxs)("div",{children:[Object(A.jsxs)("span",{className:"reschedule",onClick:function(){m(!j)},children:[" ",Object(A.jsx)(g.a,{src:h,alt:"calendar",verticalAlign:"middle"})," ",e.tablelocale("Schedule Again")," "]}),j?Object(A.jsxs)("div",{className:"calendar",children:[" ",Object(A.jsx)(f.a,{selected:i,onChange:function(e){l(e)}})," "]}):null]})},P=Object(p.a)()((function(e){var a=e.t;return Object(A.jsxs)(b.a,{children:[Object(A.jsx)(b.a.Header,{children:Object(A.jsxs)(b.a.Row,{children:[Object(A.jsxs)(b.a.HeaderCell,{children:[" ",a("DATE")," "]}),Object(A.jsxs)(b.a.HeaderCell,{children:[" ",a("CAMPAIGN")," "]}),Object(A.jsxs)(b.a.HeaderCell,{children:[" ",a("VIEW")," "]}),Object(A.jsxs)(b.a.HeaderCell,{colSpan:"3",children:[" ",a("ACTIONS")," "]})]})}),Object(A.jsx)(b.a.Body,{children:e.campaignData.map((function(t){return Object(A.jsxs)(b.a.Row,{children:[Object(A.jsxs)(b.a.Cell,{children:[new Date(t.createdOn).toLocaleString("default",{month:"short"})," ",new Date(t.createdOn).getFullYear(),", ",new Date(t.createdOn).getDate()," ",Object(A.jsx)("br",{}),Object(A.jsxs)("em",{children:[" ",Math.abs(Math.ceil((t.createdOn-S)/864e5))," ",a("Days")," ",e.className," "]})]}),Object(A.jsx)(b.a.Cell,{children:Object(A.jsxs)(j.a,{as:"h4",image:!0,children:[Object(A.jsx)(g.a,{src:"/campaigns"+t.image_url}),Object(A.jsxs)(j.a.Content,{children:[t.name,Object(A.jsxs)(j.a.Subheader,{children:[" ",t.region," "]})]})]})}),Object(A.jsx)(b.a.Cell,{children:Object(A.jsx)(w,{item:t,tablelocale:a})}),Object(A.jsxs)(b.a.Cell,{children:[" ",Object(A.jsxs)("span",{className:"noContentInside",children:[" ",Object(A.jsx)(g.a,{src:u,alt:"csv",verticalAlign:"middle"})," ",t.csv," "]})," "]}),Object(A.jsxs)(b.a.Cell,{children:[" ",Object(A.jsxs)("span",{className:"noContentInside",children:[" ",Object(A.jsx)(g.a,{src:C,alt:"report",verticalAlign:"middle"})," ",a(t.report)," "]})," "]}),Object(A.jsx)(b.a.Cell,{children:Object(A.jsx)(N,{item:t,onTableUpdate:e.onTabUpdate,tablelocale:a})})]},t.name)}))})]})})),M=Object(p.a)()((function(e){var a=e.t,t=864e5,n=Date.now(),c=e.campaigns.filter((function(e){return(e.createdOn-n)/t>0})),s=e.campaigns.filter((function(e){return(e.createdOn-n)/t>-1&&(e.createdOn-n)/t<=0})),i=e.campaigns.filter((function(e){return(e.createdOn-n)/t<=-1}));return Object(A.jsx)("div",{children:"Upcoming"===e.className?Object(A.jsx)(P,{campaignData:c,className:a("Ahead"),onTabUpdate:e.onUpdate}):"Live"===e.className?Object(A.jsx)(P,{campaignData:s,onTabUpdate:e.onUpdate}):Object(A.jsx)(P,{campaignData:i,className:a("Ago"),onTabUpdate:e.onUpdate})})})),D=t.p+"static/media/logo.8ceb82e5.png",V=Object(p.a)()((function(e){var a=e.t,t=l.data,c=localStorage.getItem("storeCampaign"),s=Object(n.useState)(c?JSON.parse(c):t),p=Object(r.a)(s,2),b=p[0],O=p[1],h=function(e,a){var t=b.map((function(t){return t.name===e.name?Object(i.a)(Object(i.a)({},t),{},{createdOn:a}):t}));O(t)};Object(n.useEffect)((function(){localStorage.setItem("storeCampaign",JSON.stringify(b))}),[b]);var u=["Upcoming","Live","Past"].map((function(e){return{menuItem:a("".concat(e," Campaigns")),render:function(){return Object(A.jsxs)(o.a.Pane,{attached:!1,children:[" ",Object(A.jsx)(M,{campaigns:b,className:e,onUpdate:h})," "]})}}}));return Object(A.jsx)("div",{children:Object(A.jsxs)(d.a,{centered:!0,children:[Object(A.jsx)(d.a.Row,{children:Object(A.jsx)(d.a.Column,{style:{height:"80px",background:"#1F2640"},children:Object(A.jsxs)(j.a,{children:[" ",Object(A.jsx)(g.a,{src:D,className:"logo",style:{width:"147px",height:"45px",left:"182px",top:"17px"},alt:"logo"})," "]})})}),Object(A.jsx)(d.a.Row,{children:Object(A.jsx)(d.a.Column,{verticalAlign:"top",children:Object(A.jsx)(m.a,{selection:!0,options:[{key:"en",text:"English",value:"en"},{key:"sv",text:"Swedish",value:"sv"}],onChange:function(a,t){return function(a,t){var n=t.value;e.i18n.changeLanguage(n)}(0,t)},placeholder:"Choose a Language"})})}),Object(A.jsxs)(d.a.Row,{children:[Object(A.jsx)(d.a.Column,{width:12,verticalAlign:"middle",children:Object(A.jsxs)(j.a,{as:"h1",textAlign:"left",children:[" ",a("Manage Campaigns")," "]})}),Object(A.jsx)(d.a.Column,{width:12,verticalAlign:"middle",children:Object(A.jsx)(o.a,{menu:{secondary:!0,pointing:!0,className:"wrapped"},panes:u})})]})]})})})),U=t(141),k=t(89),I=t(183),R=t(184),T=localStorage.getItem("language");void 0===T&&(T="en"),U.a.use(k.e).init({resources:{en:{translations:I},sv:{translations:R}},fallbackLng:"en",lng:"en",ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0,useSuspense:!1}});U.a;s.a.render(Object(A.jsx)(V,{}),document.getElementById("root"))}},[[300,1,2]]]);
//# sourceMappingURL=main.50a48c94.chunk.js.map