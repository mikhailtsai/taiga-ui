"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[96223],{96223:(B,T,n)=>{n.r(T),n.d(T,{ExampleTuiHintManualModule:()=>z});var S=n(12057),M=n(12021),d=n(78697),c=n(66187),A=n(89570),r=n(75695),t=n(74788),H=n(93352),f=n(98204),O=n(88331),h=n(37159),I=n(57068),p=n(76189),s=n(67446),E=n(29070),_=n(54255),N=n(15491),g=n(56059),D=n(30644),x=n(66596);function L(e,i){1&e&&(t.TgZ(0,"div",2),t._uU(1," Use "),t.TgZ(2,"a",3),t._uU(3," Hint "),t.qZA(),t.qZA())}let v=(()=>{class e{constructor(){this.hintShown=!1}toggleHint(){this.hintShown=!this.hintShown}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hint-manual-example-1"]],decls:4,vars:2,consts:[["tuiButton","","type","button",3,"tuiHint","tuiHintManual","click"],["template",""],["tuiMode","onDark"],["tuiLink","","routerLink","hint",1,"link"]],template:function(o,a){if(1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.toggleHint()}),t._uU(1," Hint\n"),t.qZA(),t.YNc(2,L,4,0,"ng-template",null,1,t.W1O)),2&o){const l=t.MAs(3);t.Q6J("tuiHint",l)("tuiHintManual",a.hintShown)}},directives:[p.v,s.D,E.x,_.t,N.D,g.Z,D.w,x.V,M.yS],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e})();var R=n(31823),U=n(44051),y=n(17023),P=n(54218),Z=n(76349);function $(e,i){if(1&e&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-hint-manual-example-1"),t.qZA()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("content",o.example1)}}function F(e,i){1&e&&t.SDv(0,7)}function J(e,i){1&e&&t.SDv(0,8)}function V(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"button",4),t.NdJ("click",function(){return t.CHM(o),t.oxw().sayHi()}),t._uU(2," A strange button "),t.qZA(),t.qZA(),t.TgZ(3,"tui-doc-documentation"),t.YNc(4,F,1,0,"ng-template",5),t.YNc(5,J,1,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(o),t.oxw().show=l}),t.qZA(),t._UZ(6,"inherited-documentation")}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("tuiHintManual",o.show)("tuiHintAppearance",o.appearance)("tuiHintDirection",o.direction),t.xp6(4),t.Q6J("documentationPropertyValue",o.show)}}function G(e,i){if(1&e&&(t.TgZ(0,"ol",9),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,10),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",11),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,12),t.qZA(),t._UZ(9,"tui-doc-code",13),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(5),t.Q6J("code",o.exampleModule),t.xp6(4),t.Q6J("code",o.exampleHtml)}}let X=(()=>{class e extends H.l{constructor(){super(...arguments),this.exampleModule=n.e(74277).then(n.t.bind(n,74277,17)),this.exampleHtml=n.e(67707).then(n.t.bind(n,67707,17)),this.example1={TypeScript:n.e(69206).then(n.t.bind(n,69206,17)),HTML:n.e(64104).then(n.t.bind(n,64104,17))},this.show=!1}sayHi(){console.info("Hi all!")}}return e.\u0275fac=function(){let i;return function(a){return(i||(i=t.n5z(e)))(a||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["example-hint-manual"]],features:[t._Bn([{provide:f.x,useExisting:(0,t.Gpc)(()=>e)}]),t.qOj],decls:4,vars:0,consts:function(){let i,o,a,l,m,C;return i=$localize`:␟c8c45ebec06566ef7a3a59ef2384321feec36e37␟3855161587228143615:Directive to show a hint manually`,o=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,l=$localize`:␟402b0978874aa99343a9ae1d9c7fc1a460f92eff␟2409354495697805229: Show/hide hint `,m=$localize`:␟bd4c8562b8e0cd2b4ea6c4f68710df9ccca0988f␟5383102618544615785: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiHintModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,C=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","HintManual","package","CORE","type","directives"],["pageTab",""],i,["id","base","heading",o,3,"content"],["tuiButton","","type","button","tuiHint","It says 'Hi all!' into console",3,"tuiHintManual","tuiHintAppearance","tuiHintDirection","click"],["documentationPropertyName","tuiHint","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiHintManual","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],a,l,[1,"b-demo-steps"],m,["filename","myComponent.module.ts",3,"code"],C,["filename","myComponent.template.html",3,"code"]]},template:function(o,a){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,$,4,1,"ng-template",1),t.YNc(2,V,7,4,"ng-template",1),t.YNc(3,G,10,2,"ng-template",1),t.qZA())},directives:[O.q,h.n,I.f,v,R.F,p.v,s.D,E.x,_.t,N.D,g.Z,U.z,y.B,P.w,Z.c],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.fNO,c.goS,c.jzK,c.zw7,A.wq,S.ez,r.f,d.fV,M.Bz.forChild((0,d.Ve)(X))]]}),e})()}}]);