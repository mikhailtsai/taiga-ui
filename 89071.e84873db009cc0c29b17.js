"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89071],{89071:(Te,p,l)=>{l.r(p),l.d(p,{ExampleTuiCalendarModule:()=>se});var c=l(12057),C=l(33982),s=l(29851),u=l(72002),d=l(36692),e=l(74788),R=l(88331),L=l(37159),x=l(66596),v=l(57068),m=l(49746);function I(t,r){if(1&t&&(e.TgZ(0,"div"),e.SDv(1,2),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.pQV(n.value),e.QtT(1)}}let F=(()=>{class t{constructor(){this.value=null}onDayClick(n){this.value=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:function(){let r;return r=$localize`:␟2feeb35068c5f0d54e2e1997546b856a08da841d␟2620900202482217567: Chosen date: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[3,"value","dayClick"],[4,"ngIf"],r]},template:function(n,a){1&n&&(e.TgZ(0,"tui-calendar",0),e.NdJ("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.YNc(1,I,2,1,"div",1)),2&n&&(e.Q6J("value",a.value),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[m.a,c.O5],encapsulation:2,changeDetection:0}),t})();function V(t,r){if(1&t&&(e.TgZ(0,"div"),e.SDv(1,5),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.pQV(n.value),e.QtT(1)}}let $=(()=>{class t{constructor(){this.value=null,this.firstMonth=d.TuiMonth.currentLocal(),this.middleMonth=d.TuiMonth.currentLocal().append({month:1}),this.lastMonth=d.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(n){(null===this.value||!this.value.isSingleDay)&&(this.value=new d.TuiDayRange(n,n)),this.value=d.TuiDayRange.sort(this.value.from,n)}onMonthChangeFirst(n){this.firstMonth=n,this.middleMonth=n.append({month:1}),this.lastMonth=n.append({month:2})}onMonthChangeMiddle(n){this.firstMonth=n.append({month:-1}),this.middleMonth=n,this.lastMonth=n.append({month:1})}onMonthChangeLast(n){this.firstMonth=n.append({month:-2}),this.middleMonth=n.append({month:-1}),this.lastMonth=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:function(){let r;return r=$localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[1,"wrapper"],[3,"value","showAdjacent","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"],r]},template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-calendar",1),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeFirst(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.TgZ(2,"tui-calendar",2),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeMiddle(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.TgZ(3,"tui-calendar",3),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeLast(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.qZA(),e.YNc(4,V,2,1,"div",4)),2&n&&(e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("maxViewedMonth",a.firstMonth)("month",a.firstMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("month",a.middleMonth)("minViewedMonth",a.middleMonth)("maxViewedMonth",a.middleMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("minViewedMonth",a.lastMonth)("month",a.lastMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[m.a,c.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function J(t,r){if(1&t&&(e.TgZ(0,"div"),e.SDv(1,5),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.pQV(n.value),e.QtT(1)}}const U=["var(--tui-primary)","var(--tui-info-fill)"],Z=["var(--tui-success-fill)"];let H=(()=>{class t{constructor(){this.value=null,this.firstMonth=d.TuiMonth.currentLocal(),this.middleMonth=d.TuiMonth.currentLocal().append({month:1}),this.lastMonth=d.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=n=>n.day%2==0?U:Z}onDayClick(n){(null===this.value||!this.value.isSingleDay)&&(this.value=new d.TuiDayRange(n,n)),this.value=d.TuiDayRange.sort(this.value.from,n)}onMonthChangeFirst(n){this.firstMonth=n,this.middleMonth=n.append({month:1}),this.lastMonth=n.append({month:2})}onMonthChangeMiddle(n){this.firstMonth=n.append({month:-1}),this.middleMonth=n,this.lastMonth=n.append({month:1})}onMonthChangeLast(n){this.firstMonth=n.append({month:-2}),this.middleMonth=n.append({month:-1}),this.lastMonth=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:function(){let r;return r=$localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[1,"wrapper"],[3,"value","showAdjacent","markerHandler","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"],r]},template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-calendar",1),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeFirst(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.TgZ(2,"tui-calendar",2),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeMiddle(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.TgZ(3,"tui-calendar",3),e.NdJ("hoveredItemChange",function(o){return a.hoveredItem=o})("monthChange",function(o){return a.onMonthChangeLast(o)})("dayClick",function(o){return a.onDayClick(o)}),e.qZA(),e.qZA(),e.YNc(4,J,2,1,"div",4)),2&n&&(e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("markerHandler",a.markerHandler)("maxViewedMonth",a.firstMonth)("month",a.firstMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("markerHandler",a.markerHandler)("month",a.middleMonth)("minViewedMonth",a.middleMonth)("maxViewedMonth",a.middleMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("value",a.value)("showAdjacent",!1)("markerHandler",a.markerHandler)("minViewedMonth",a.lastMonth)("month",a.lastMonth)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[m.a,c.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})(),X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-calendar-example-4"]],features:[e._Bn([{provide:u.TUI_FIRST_DAY_OF_WEEK,useValue:0}])],decls:1,vars:0,template:function(n,a){1&n&&e._UZ(0,"tui-calendar")},directives:[m.a],encapsulation:2,changeDetection:0}),t})();const w=t=>10===t.day?"holiday":t.isWeekend?"weekend":"weekday";let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-calendar-example-5"]],features:[e._Bn([{provide:u.TUI_DAY_TYPE_HANDLER,useValue:w}])],decls:1,vars:0,template:function(n,a){1&n&&e._UZ(0,"tui-calendar")},directives:[m.a],styles:["tui-primitive-calendar [data-type=holiday]{background-color:var(--tui-support-09)}\n"],encapsulation:2,changeDetection:0}),t})();var Q=l(31823),k=l(20546),z=l(17023),b=l(76349);function Y(t,r){1&t&&(e._uU(0," Use "),e.TgZ(1,"a",10),e._uU(2," TUI_FIRST_DAY_OF_WEEK "),e.qZA(),e._uU(3," token to change start day of the week (Monday by default). "))}function j(t,r){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"TUI_DAY_TYPE_HANDLER"),e.qZA(),e._uU(3," token to change cell's data-type attribute and customize its color. (The default color for Saturday and Sunday is var(--tui-negative)) "))}const W=function(){return["/components/input-date"]},B=function(){return["/components/input-date-range"]};function K(t,r){if(1&t&&(e.TgZ(0,"p"),e._uU(1," A simple calendar. If you want a textfield with date, see "),e.TgZ(2,"a",2),e._uU(3," InputDate "),e.qZA(),e._uU(4," and "),e.TgZ(5,"a",2),e._uU(6," InputDateRange "),e.qZA(),e.qZA(),e.TgZ(7,"tui-doc-example",3),e._UZ(8,"tui-calendar-example-1"),e.qZA(),e.TgZ(9,"tui-doc-example",4),e._UZ(10,"tui-calendar-example-2"),e.qZA(),e.TgZ(11,"tui-doc-example",5),e._UZ(12,"tui-calendar-example-3"),e.qZA(),e.TgZ(13,"tui-doc-example",6),e.YNc(14,Y,4,0,"ng-template",null,7,e.W1O),e._UZ(16,"tui-calendar-example-4"),e.qZA(),e.TgZ(17,"tui-doc-example",8),e.YNc(18,j,4,0,"ng-template",null,9,e.W1O),e._UZ(20,"tui-calendar-example-5"),e.qZA()),2&t){const n=e.MAs(15),a=e.MAs(19),i=e.oxw();e.xp6(2),e.Q6J("routerLink",e.DdM(9,W)),e.xp6(3),e.Q6J("routerLink",e.DdM(10,B)),e.xp6(2),e.Q6J("content",i.example1),e.xp6(2),e.Q6J("content",i.example2),e.xp6(2),e.Q6J("content",i.example3),e.xp6(2),e.Q6J("content",i.example4)("description",n),e.xp6(4),e.Q6J("content",i.example5)("description",a)}}function q(t,r){1&t&&(e.tHW(0,23),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function ee(t,r){1&t&&e.SDv(0,24)}function ne(t,r){1&t&&e.SDv(0,25)}function te(t,r){1&t&&e.SDv(0,26)}function ae(t,r){1&t&&e.SDv(0,27)}function oe(t,r){1&t&&e.SDv(0,28)}function le(t,r){1&t&&e.SDv(0,29)}function ie(t,r){1&t&&e.SDv(0,30)}function re(t,r){1&t&&e.SDv(0,31)}function de(t,r){1&t&&e.SDv(0,32)}function _e(t,r){1&t&&e.SDv(0,33)}function ue(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-calendar",11),e.NdJ("monthChange",function(i){return e.CHM(n),e.oxw().month=i})("hoveredItemChange",function(i){return e.CHM(n),e.oxw().hoveredItem=i})("dayClick",function(i){return e.CHM(n),e.oxw().onDayClick(i)}),e.qZA(),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,q,3,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().disabledItemHandler=i}),e.YNc(4,ee,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().showAdjacent=i}),e.YNc(5,ne,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().hoveredItem=i}),e.YNc(6,te,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().markerHandler=i}),e.YNc(7,ae,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().max=i}),e.YNc(8,oe,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().max=i}),e.YNc(9,le,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().min=i}),e.YNc(10,ie,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().min=i}),e.YNc(11,re,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().month=i}),e.YNc(12,de,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().value=i}),e.YNc(13,_e,1,0,"ng-template",22),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("value",n.value)("disabledItemHandler",n.disabledItemHandler)("min",n.min)("max",n.max)("markerHandler",n.markerHandler)("minViewedMonth",n.minViewedMonth)("maxViewedMonth",n.maxViewedMonth)("showAdjacent",n.showAdjacent)("month",n.month)("hoveredItem",n.hoveredItem),e.xp6(2),e.Q6J("documentationPropertyValues",n.disabledItemHandlerVariants)("documentationPropertyValue",n.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValue",n.showAdjacent),e.xp6(1),e.Q6J("documentationPropertyValue",n.hoveredItem),e.xp6(1),e.Q6J("documentationPropertyValues",n.markerHandlerVariants)("documentationPropertyValue",n.markerHandler),e.xp6(1),e.Q6J("documentationPropertyValues",n.maxVariants)("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValues",n.maxVariants)("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValues",n.minVariants)("documentationPropertyValue",n.min),e.xp6(1),e.Q6J("documentationPropertyValues",n.minVariants)("documentationPropertyValue",n.min),e.xp6(1),e.Q6J("documentationPropertyValue",n.month),e.xp6(1),e.Q6J("documentationPropertyValues",n.valueVariants)("documentationPropertyValue",n.value)}}function me(t,r){if(1&t&&(e.TgZ(0,"ol",34),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,35),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",36),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,37),e.qZA(),e._UZ(9,"tui-doc-code",38),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}const ce=["var(--tui-primary)","var(--tui-info-fill)"],Ce=["var(--tui-success-fill)"];let pe=(()=>{class t{constructor(n){this.alertService=n,this.exampleModule=l.e(21580).then(l.t.bind(l,21580,17)),this.exampleHtml=l.e(84034).then(l.t.bind(l,84034,17)),this.example1={TypeScript:l.e(73773).then(l.t.bind(l,73773,17)),HTML:l.e(22029).then(l.t.bind(l,22029,17))},this.example2={TypeScript:l.e(80785).then(l.t.bind(l,80785,17)),HTML:l.e(97571).then(l.t.bind(l,97571,17))},this.example3={TypeScript:l.e(38596).then(l.t.bind(l,38596,17)),HTML:l.e(38918).then(l.t.bind(l,38918,17))},this.example4={TypeScript:l.e(92432).then(l.t.bind(l,92432,17)),HTML:l.e(48887).then(l.t.bind(l,48887,17))},this.example5={TypeScript:l.e(5657).then(l.t.bind(l,5657,17)),HTML:l.e(90903).then(l.t.bind(l,90903,17)),LESS:l.e(45575).then(l.t.bind(l,45575,17))},this.showAdjacent=!0,this.minVariants=[d.TUI_FIRST_DAY,new d.TuiDay(2017,2,5),new d.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[d.TUI_LAST_DAY,new d.TuiDay(2020,3,30),new d.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new d.TuiMonth(0,0),new d.TuiMonth(2017,2),new d.TuiMonth(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[d.TUI_LAST_DAY,new d.TuiMonth(2020,3),new d.TuiMonth(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[d.ALWAYS_FALSE_HANDLER,({day:a})=>a%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[u.TUI_DEFAULT_MARKER_HANDLER,a=>a.day%2==0?ce:Ce],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[d.TuiDay.currentLocal(),new d.TuiDayRange(d.TuiDay.currentLocal(),d.TuiDay.currentLocal().append({day:3})),new d.TuiDay(2020,3,21)],this.value=null,this.month=d.TuiMonth.currentLocal(),this.hoveredItem=null}onDayClick(n){this.alertService.open(String(n)).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.TuiAlertService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:function(){let r,n,a,i,o,T,E,h,M,g,N,S,O,A,D,f,y,P;return r=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,n=$localize`:␟0ed6cbeb3b69bb940c9e3365663a6bff540311e7␟8823844911216143942:range`,a=$localize`:␟f0ad0067675751d24dcae9afde2a56fe3ecf3c45␟5871122953070556647:With markers`,i=$localize`:␟e061ac5bfcd825eb1f33d30b974df79546114460␟2732752787737094710:Localization`,o=$localize`:␟7c405c0017b9c14c53784c9c91f711c555ee7d1a␟7701042301555222443:Color customization`,T=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,E=$localize`:␟93468ee263f0453e046cd2a7d140d971a77a21d6␟427026901846333904: Show adjacent months days `,h=$localize`:␟eda1485e51ac095aaacc17acf52331ccf5582c55␟285023532423922220: Hovered date `,M=$localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `,g=$localize`:␟0ec2997ebb79ee39672ca03c45b62d3720263ca6␟945025041805688144: Maximal date to choose `,N=$localize`:␟76712405dc083e287b7d84203f246883bf2195c8␟4446534518832798635: Maximal month to access `,S=$localize`:␟5e6b74ad89b862a2b83b5d77e43f763b57137112␟2791094226136211105: Minimum date to choose `,O=$localize`:␟7b0768860406832abc45b69314b993a46a099dc6␟4181665065525097983: Minimum month to access `,A=$localize`:␟cac850ce7e80ef75f9715f1603460f9575f1df49␟3915704723653985372: Current month `,D=$localize`:␟06c2894e3ec228f0e65407118a02fbd4a6947389␟2084704973569232503: Selected day or range `,f=$localize`:␟30dc64dde7c5b72b981802ac51cffe74453e08c2␟1956037044112739727: Date click `,y=$localize`:␟a7ee2d166f9049940b6c8619f3c1e4a0e35a5c25␟9069493769412225703: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,P=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","base","heading",r,3,"content"],["id","range","heading",n,3,"content"],["id","markers","heading",a,3,"content"],["id","localization","heading",i,3,"content","description"],["localizationDescription",""],["id","color","heading",o,3,"content","description"],["colorDescription",""],["tuiLink","","routerLink","/utils/tokens","fragment","first-day-of-week"],[3,"value","disabledItemHandler","min","max","markerHandler","minViewedMonth","maxViewedMonth","showAdjacent","month","hoveredItem","monthChange","hoveredItemChange","dayClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showAdjacent","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hoveredItem","documentationPropertyMode","input-output","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","month","documentationPropertyMode","input-output","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dayClick","documentationPropertyMode","output","documentationPropertyType","TuiDay"],T,E,h,M,g,N,S,O,A,D,f,[1,"b-demo-steps"],y,["filename","myComponent.module.ts",3,"code"],P,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,K,21,11,"ng-template",1),e.YNc(2,ue,14,27,"ng-template",1),e.YNc(3,me,10,2,"ng-template",1),e.qZA())},directives:[R.q,L.n,x.V,C.yS,v.f,F,$,H,X,G,Q.F,m.a,k.z,z.B,b.c],encapsulation:2,changeDetection:0}),t})(),se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,C.Bz,u.TuiLinkModule,u.TuiCalendarModule,s.fV,C.Bz.forChild((0,s.Ve)(pe))]]}),t})()}}]);