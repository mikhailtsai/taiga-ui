var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{"3kn6":function(e,t,a){"use strict";a.r(t),a.d(t,"ExampleTuiFormatNumberModule",(function(){return z}));var n,r,o,i=a("An66"),l=a("3kIJ"),m=a("1VvW"),c=a("SVIu"),p=a("Qq0t"),u=a("dvRg"),d=a("kZht"),s=a("OZlg"),b=a("e0eB"),f=a("yZWP"),g=a("iyc4"),_=a("vtKl"),y=((n=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d["\u0275\u0275defineComponent"]({type:n,selectors:[["tui-format-number-example-1"]],decls:6,vars:8,template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"tuiFormatNumber"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275text"](4),d["\u0275\u0275pipe"](5,"tuiFormatNumber"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("Formatted number by default: ",d["\u0275\u0275pipeBind1"](2,2,10500.33),""),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" Formatted number with custom params: ",d["\u0275\u0275pipeBind3"](5,4,10500.33,4,"."),"\n"))},pipes:[_.a],encapsulation:2,changeDetection:0}),n),h=a("cc69"),C=a("yHor"),O=a("zGJC"),T=a("u8jZ");r=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f799bc21ea304574853b3a233c5fd7ade5ceb99f7\u241f4562263761854336809:Pipe to format number values to separate thousands"]))),o=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f0198de482ad16d583e51cf5d513123183dba1f58\u241f3089968062191477089: Number formatting can be customized by using ",":START_LINK:TUI_NUMBER_FORMAT",":CLOSE_LINK:"])),"\ufffd#4\ufffd","\ufffd/#4\ufffd");var x,S,j,v,E,P=["heading",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))];function L(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,r),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,o),d["\u0275\u0275element"](4,"a",2),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,P),d["\u0275\u0275element"](7,"tui-format-number-example-1"),d["\u0275\u0275elementEnd"]()),2&e){var a=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("content",a.example1)}}function w(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,S),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function N(e,t){1&e&&d["\u0275\u0275i18n"](0,j)}function M(e,t){if(1&e){var a=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"p",4),d["\u0275\u0275i18n"](1,x),d["\u0275\u0275pipe"](2,"tuiFormatNumber"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-input-slider",5),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](a),d["\u0275\u0275nextContext"]().value=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-doc-documentation"),d["\u0275\u0275template"](5,w,2,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](a),d["\u0275\u0275nextContext"]().decimalLimit=e})),d["\u0275\u0275template"](6,N,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](a),d["\u0275\u0275nextContext"]().decimalSeparator=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275i18nExp"](d["\u0275\u0275pipeBind3"](2,8,n.value,n.decimalLimit,n.decimalSeparator)),d["\u0275\u0275i18nApply"](1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("max",1e7)("quantum",.111)("ngModel",n.value),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",n.decimalLimitVariants)("documentationPropertyValue",n.decimalLimit),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",n.decimalSeparatorVariants)("documentationPropertyValue",n.decimalSeparator)}}function V(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",8),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,v),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,E),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var a=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",a.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",a.exampleInsertTemplate)}}x=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f9690b88de41048d0eee44af3396498b04ca90585\u241f7421813233942810555: Formatted number: ",":INTERPOLATION: "])),"\ufffd0\ufffd"),S=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241faeb43e1bfdb629dd83ff36b41224284e06e1e372\u241f4472373434645547204: Digits after comma (use ",":START_TAG_CODE:null",":CLOSE_TAG_CODE: not to change) "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),j=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f66eb6cf6218c547a2ec9635a00ef187009e46892\u241f588884307384509273: Symbol for separating fraction "]))),v=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241feaaccbdd2f44fbc362efb5e7add38f2f31235558\u241f6706651127349434236: Import ",":START_TAG_CODE:TuiFormatNumberPipe",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),E=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241fd904032ec7cbd3e61941f6929b1c472bea849960\u241f734140032111794013: Use pipe in template with function and its arguments: "])));var F,I,k=((I=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiFormatNumberPipeModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFormatNumberPipeModule\n    ],\n...\n",this.exampleInsertTemplate="Fomatted number: {{index | tuiFormatNumber}}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-format-number-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatNumberExample1 {}\n",HTML:"<p>Formatted number by default: {{10500.33 | tuiFormatNumber}}</p>\n\n<p>\n    Formatted number with custom params: {{10500.33 | tuiFormatNumber: 4: '.'}}\n</p>\n"},this.value=100,this.decimalLimitVariants=[0,2,4],this.decimalLimit=null,this.decimalSeparatorVariants=[",",".","/"],this.decimalSeparator=this.decimalSeparatorVariants[0]}))).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=d["\u0275\u0275defineComponent"]({type:I,selectors:[["example-tui-format-number"]],decls:4,vars:0,consts:[["header","FormatNumber","package","CORE","type","pipes"],["pageTab",""],["tuiLink","","routerLink","/utils/tokens"],["id","base",3,"content",6,"heading"],[1,"text","b-full-width"],["size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],["documentationPropertyName","decimalLimit","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,L,8,1,"ng-template",1),d["\u0275\u0275template"](2,M,7,12,"ng-template",1),d["\u0275\u0275template"](3,V,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[s.a,b.a,f.a,m.e,g.a,y,h.a,l.NgControlStatus,l.NgModel,C.a,O.a,T.a],pipes:[_.a],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),I),z=((F=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:F}),F.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||F)},imports:[[p.TuiFormatNumberPipeModule,u.TuiInputSliderModule,l.ReactiveFormsModule,l.FormsModule,i.c,u.TuiRadioListModule,c.h,p.TuiLinkModule,m.f.forChild(Object(c.o)(k))]]}),F)}}]);