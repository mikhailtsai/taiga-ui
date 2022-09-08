"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[32525],{32525:(G,r,e)=>{e.r(r),e.d(r,{IconSetModule:()=>P});var l=e(50506),C=e(12057),T=e(23738),g=e(12021),D=e(78697),i=e(66187),E=e(91068),p=e(67350),F=e(74788),I=e(88331),f=e(66596),m=e(76189),M=e(88618),S=e(79121),N=e(57068),A=e(92483),$=e(48706),y=e(84848),h=e(64374);const O={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function Z(o){return`assets/icons/${O[o]}.svg#${O[o]}`}let L=(()=>{class o{constructor(){this.date=null}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=F.Xpm({type:o,selectors:[["tui-icon-set-example-1"]],features:[F._Bn([{provide:i.kiY,useValue:Z}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(n,t){1&n&&(F.TgZ(0,"div",0),F.TgZ(1,"tui-notification"),F._uU(2," As usual with the DI this is hierarchical. Meaning you can provide different "),F.TgZ(3,"code"),F._uU(4,"TUI_ICONS_PATH"),F.qZA(),F._uU(5," and use different icons across your app. "),F.qZA(),F.TgZ(6,"tui-input-date-range",1),F.NdJ("ngModelChange",function(a){return t.date=a}),F._uU(7," Pick your favorite date range "),F.qZA(),F.qZA()),2&n&&(F.xp6(6),F.Q6J("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[S.L,A.H,$.d,y.b,h.b,T.JJ,T.On],encapsulation:2}),o})();var U=e(76349),R=e(92164);function v(o,u){if(1&o&&(F.TgZ(0,"tui-doc-copy",18),F.TgZ(1,"code"),F._uU(2),F.qZA(),F.qZA()),2&o){const n=u.$implicit;F.Q6J("cdkCopyToClipboard",n),F.xp6(2),F.Oqu(n)}}let x=(()=>{class o{constructor(){this.exampleSanitizer=e.e(79654).then(e.t.bind(e,79654,17)),this.example1={"process-icons.js":e.e(31832).then(e.t.bind(e,31832,17)),"process-icons.ts":e.e(37650).then(e.t.bind(e,37650,17)),TypeScript:e.e(35222).then(e.t.bind(e,35222,17)),HTML:e.e(27390).then(e.t.bind(e,27390,17))},this.names=Object.keys(p.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=F.Xpm({type:o,selectors:[["icon-set"]],decls:45,vars:4,consts:function(){let u,n,t,s,a,_,d;return u=$localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`,n=$localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\ufffd#3\ufffd"}:START_LINK:${"\ufffd#4\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `,t=$localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiCoreIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiKitIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `,t=F.Zx4(t),s=$localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:img src="xxx"${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: style. `,s=F.Zx4(s),a=$localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:processIcons${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: as seen in example below: `,a=F.Zx4(a),_=$localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`,d=$localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\ufffd#40\ufffd"}:START_LINK: Editor component ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: you need to provide ${"\ufffd#41\ufffd"}:START_TAG_CODE:TUI_SANITIZER${"\ufffd/#41\ufffd"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\ufffd#42\ufffd"}:START_LINK_1: NgDompurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\ufffd#43\ufffd"}:START_LINK_2: DOMPurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `,d=F.Zx4(d),[["header",u],n,["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],t,s,["status","warning"],a,["id","material","heading",_,3,"content"],["id","sanitizer",1,"sanitizer-example"],d,["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]]},template:function(n,t){1&n&&(F.TgZ(0,"tui-doc-page",0),F.TgZ(1,"p"),F.tHW(2,1),F.TgZ(3,"a",2),F._UZ(4,"code"),F.qZA(),F.N_p(),F.qZA(),F.TgZ(5,"p"),F.TgZ(6,"button",3),F.NdJ("click",function(){return t.toggle()}),F._uU(7," Show names "),F.qZA(),F.qZA(),F.TgZ(8,"tui-expand",4),F.TgZ(9,"div",5),F.YNc(10,v,3,2,"tui-doc-copy",6),F.qZA(),F.qZA(),F.TgZ(11,"p"),F.tHW(12,7),F._UZ(13,"code"),F._UZ(14,"code"),F.N_p(),F.qZA(),F.TgZ(15,"p"),F.tHW(16,8),F._UZ(17,"code"),F._UZ(18,"code"),F.N_p(),F.qZA(),F.TgZ(19,"tui-notification",9),F._uU(20," Make sure you mark regions in your icons that need to be colored with "),F.TgZ(21,"code"),F._uU(22,'fill="currentColor"'),F.qZA(),F._uU(23," or "),F.TgZ(24,"code"),F._uU(25,'stroke="currentColor"'),F.qZA(),F._uU(26," . "),F.qZA(),F.TgZ(27,"p"),F.tHW(28,10),F._UZ(29,"code"),F._UZ(30,"code"),F._UZ(31,"code"),F._UZ(32,"code"),F.N_p(),F.qZA(),F.TgZ(33,"tui-doc-example",11),F._UZ(34,"tui-icon-set-example-1"),F.qZA(),F.TgZ(35,"section",12),F.TgZ(36,"h2"),F._uU(37,"Sanitizer"),F.qZA(),F.TgZ(38,"p"),F.tHW(39,13),F._UZ(40,"a",14),F._UZ(41,"code"),F._UZ(42,"a",15),F._UZ(43,"a",16),F.N_p(),F.qZA(),F._UZ(44,"tui-doc-code",17),F.qZA(),F.qZA()),2&n&&(F.xp6(8),F.Q6J("expanded",t.expanded),F.xp6(2),F.Q6J("ngForOf",t.names),F.xp6(23),F.Q6J("content",t.example1),F.xp6(11),F.Q6J("code",t.exampleSanitizer))},directives:[I.q,f.V,g.yS,m.v,M.S,C.sg,S.L,N.f,L,U.c,R.f,l.i3],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),o})(),P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=F.oAB({type:o}),o.\u0275inj=F.cJS({imports:[[C.ez,T.u5,l.Iq,D.k7,i.jzK,i.ijq,i.fNO,E.sR_,i.HiG,i.cnw,i.goS,D.fV,g.Bz.forChild((0,D.Ve)(x))]]}),o})()}}]);