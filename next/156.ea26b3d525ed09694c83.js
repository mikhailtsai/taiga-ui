(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{LA0d:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiZoomModule",(function(){return T}));var o=n("An66"),a=n("1VvW"),i=n("SVIu"),l=n("l4xa"),c=n("kZht"),m=n("OZlg"),r=n("e0eB"),s=n("iyc4"),d=n("ZTXN"),p=n("SrNW"),u=n("jIqt"),f=n("YtkY"),b=n("GsCX");let h=(()=>{class e{constructor(){this.delta$=new d.a,this.scale$=this.delta$.pipe(Object(p.a)((e,t)=>Object(l.fc)(e+t,.5,3),1),Object(u.a)(1)),this.transform$=this.scale$.pipe(Object(f.a)(e=>`scale(${e})`))}onZoom({delta:e}){this.delta$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-zoom-example-1"]],decls:7,vars:10,consts:[[1,"t-container",3,"tuiZoom"],[1,"t-zoomable"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275listener"]("tuiZoom",(function(e){return t.onZoom(e)})),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275pipe"](2,"async"),c["\u0275\u0275elementStart"](3,"span"),c["\u0275\u0275text"](4),c["\u0275\u0275pipe"](5,"number"),c["\u0275\u0275pipe"](6,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275styleProp"]("transform",c["\u0275\u0275pipeBind1"](2,3,t.transform$)),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](5,5,c["\u0275\u0275pipeBind1"](6,8,t.scale$),"1.0-3")))},directives:[b.a],pipes:[o.b,o.g],styles:[".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.t-container[_ngcontent-%COMP%]{width:12rem;height:12rem;background-color:var(--tui-secondary)}.t-zoomable[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--tui-primary);border-radius:var(--tui-radius-l)}"],changeDetection:0}),e})();var v=n("u8jZ");const x=["header",$localize`:␟e76cd6dbaa898f85934f363fef654b29e44d004b␟6421460271971606186:Zoom`];var g;g=$localize`:␟8b02657b209c7003ad6767912739abaeba8c40e0␟4091126478260922324:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiZoom${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below `;const y=["heading",$localize`:␟1ea31081e50390f86dac9d44f30ce6d662d9b486␟8227596913155490392:Simple`];function $(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,g),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,y),c["\u0275\u0275element"](5,"tui-zoom-example-1"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1)}}var S,C;function Z(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,S),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,C),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275element"](10,"tui-doc-code",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("code",e.exampleComponent)}}S=$localize`:␟b353d913cbd741c6c16613accf378b4da1d7201a␟2830324911231252653: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiZoomModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,C=$localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;let E=(()=>{class e{constructor(){this.exampleModule="import {TuiZoomModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiZoomModule\n    ],\n...\n",this.exampleHtml='<div (tuiZoom)="onZoom($event)">\n    ...\n</div>\n',this.exampleComponent="scale = 1;\n\nonZoom(scale: TuiScale) {\n    this.scale += scale.delta;\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp, TuiZoom} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-zoom-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiZoomExample1 {\n    readonly delta$ = new Subject<number>();\n\n    readonly scale$ = this.delta$.pipe(\n        scan((scale, next) => clamp(scale + next, 0.5, 3), 1),\n        startWith(1),\n    );\n\n    readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));\n\n    onZoom({delta}: TuiZoom): void {\n        this.delta$.next(delta);\n    }\n}\n",HTML:'<div\n    class="t-container"\n    (tuiZoom)="onZoom($event)"\n>\n    <div\n        class="t-zoomable"\n        [style.transform]="transform$ | async"\n    >\n        <span>{{scale$ | async | number: \'1.0-3\'}}</span>\n    </div>\n</div>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-zoom"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","multiple",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,x),c["\u0275\u0275template"](2,$,6,1,"ng-template",1),c["\u0275\u0275template"](3,Z,11,3,"ng-template",2),c["\u0275\u0275elementEnd"]())},directives:[m.a,r.a,s.a,h,v.a],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,l.bc,i.j,a.f.forChild(Object(i.q)(E))]]}),e})()}}]);