(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{EqPA:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateTimeModule",(function(){return se}));var o,a=n("An66"),r=n("3kIJ"),i=n("1VvW"),l=n("SVIu"),d=n("Qq0t"),m=n("dvRg"),u=n("Piem"),c=n("kZht"),p=n("l4xa"),s=n("LusI"),f=n("K/iL"),T=n("OZlg"),S=n("e0eB"),y=n("yZWP"),C=n("iyc4"),h=n("8MTl");o=$localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;let E=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl([new p.TuiDay(2017,2,15),null])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-time-example-1"]],decls:9,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"tui-input-date-time",1),c["\u0275\u0275text"](2," Choose date and time "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p"),c["\u0275\u0275i18n"](4,o),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"pre"),c["\u0275\u0275elementStart"](6,"code"),c["\u0275\u0275text"](7),c["\u0275\u0275pipe"](8,"json"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](7),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](8,2,t.testForm.value)))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName],pipes:[a.k],encapsulation:2,changeDetection:0}),e})();var _,D,A,x;_=$localize`:␟f025901df0cbaf314e7b32707720772c7e995008␟2473136848054292961:Default:`,D=$localize`:␟bc0c7a2511bfa61dc113f7119c46786f9621dffe␟48462401577556644:With seconds:`,A=$localize`:␟2e7211f1a6997fae0f9857838493f0658007bb74␟4462643802911150950:With SS and MS:`,x=$localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;let b=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl([new p.TuiDay(2017,2,15),null])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-time-example-2"]],decls:19,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","timeMode","HH:MM"],["formControlName","testValue","timeMode","HH:MM:SS"],["formControlName","testValue","timeMode","HH:MM:SS.MSS"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275i18n"](2,_),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-input-date-time",1),c["\u0275\u0275text"](4," Choose date and time "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"p"),c["\u0275\u0275i18n"](6,D),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"tui-input-date-time",2),c["\u0275\u0275text"](8," Choose date and time "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"p"),c["\u0275\u0275i18n"](10,A),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-input-date-time",3),c["\u0275\u0275text"](12," Choose date and time "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"p"),c["\u0275\u0275i18n"](14,x),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"pre"),c["\u0275\u0275elementStart"](16,"code"),c["\u0275\u0275text"](17),c["\u0275\u0275pipe"](18,"json"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](17),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](18,2,t.testForm.value)))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName],pipes:[a.k],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.control=new r.FormControl([new p.TuiDay(2017,2,15),new p.TuiTime(12,30)])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-time-example-3"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:p.TUI_DATE_FORMAT,useValue:"YMD"},{provide:p.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-time",0),c["\u0275\u0275text"](1," Choose date and time\n"),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("formControl",t.control)},directives:[h.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();class V{constructor(){this.separator=", "}fromControlValue(e){const[t,n=""]=e.split(this.separator);return t?[p.TuiDay.normalizeParse(t),n?p.TuiTime.fromString(n):null]:[null,null]}toControlValue([e,t]){return e?e.toString()+(t?`${this.separator}${t.toString()}`:""):""}}let g=(()=>{class e{constructor(){this.control=new r.FormControl("19.01.2022, 12:33")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-time-example-4"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:V}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-time",0),c["\u0275\u0275text"](1," Choose date and time\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275text"](3,"Stringified control value:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275elementStart"](5,"code"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formControl",t.control),c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate"](t.control.value))},directives:[h.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var v,P,$,O,F,I=n("EPR0"),w=n("yHor"),G=n("zGJC"),L=n("FSyC"),R=n("RlDx"),H=n("CDxv"),z=n("eB8V"),N=n("pQcr"),Y=n("gEyt"),k=n("2wTY"),U=n("u8jZ");v=$localize`:␟044a4dc175f6a468120b459545b576929c5ece55␟4454597240613417998:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDateTime${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input date and time `,P=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,$=$localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ) ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,$=c["\u0275\u0275i18nPostprocess"]($),O=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,F=$localize`:␟9131d0fb644c4d5aaa930d7412f5df510b08e6be␟3277359903153257463:${"\ufffd#22\ufffd"}:START_TAG_DT:${"[\ufffd#23\ufffd|\ufffd#25\ufffd]"}:START_TAG_CODE:TUI_DATE_TIME_VALUE_TRANSFORMER${"[\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"[\ufffd#23\ufffd|\ufffd#25\ufffd]"}:START_TAG_CODE:[TuiDay | null, TuiTime | null]${"[\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_TAG_CODE: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK: See example ${"\ufffd/#27\ufffd"}:CLOSE_LINK: with string as control's output. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,F=c["\u0275\u0275i18nPostprocess"](F);const j=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],B=["heading",$localize`:␟c2d11aaec69642ed60bc139f0b022de0a9a109d7␟6778729094598431749:With control's output as string`];function J(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275i18nStart"](1,v),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"h3"),c["\u0275\u0275i18n"](4,P),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"dl"),c["\u0275\u0275i18nStart"](6,$),c["\u0275\u0275elementStart"](7,"dt"),c["\u0275\u0275element"](8,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"dd",3),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"dt"),c["\u0275\u0275element"](12,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](13,"dd"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"p",2),c["\u0275\u0275elementStart"](15,"a",4),c["\u0275\u0275text"](16," See example "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](17," with the usage of these tokens. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"h3"),c["\u0275\u0275i18n"](19,O),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"dl"),c["\u0275\u0275i18nStart"](21,F),c["\u0275\u0275elementStart"](22,"dt"),c["\u0275\u0275element"](23,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"dd"),c["\u0275\u0275element"](25,"code"),c["\u0275\u0275elementStart"](26,"p"),c["\u0275\u0275element"](27,"a",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](28,"tui-doc-example",6),c["\u0275\u0275i18nAttributes"](29,j),c["\u0275\u0275element"](30,"tui-input-date-time-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"tui-doc-example",7),c["\u0275\u0275element"](32,"tui-input-date-time-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](33,"tui-doc-example",8),c["\u0275\u0275element"](34,"tui-input-date-time-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](35,"tui-doc-example",9),c["\u0275\u0275i18nAttributes"](36,B),c["\u0275\u0275element"](37,"tui-input-date-time-example-4"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](28),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example4)}}function W(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-time",18),c["\u0275\u0275text"](1," Choose date and time "),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("defaultActiveYearMonth",e.defaultActiveYearMonth)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("timeMode",e.mode)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}var K,Z,q,Q,X,ee,te,ne;function oe(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,K),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function ae(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275text"](1," A handler that gets a date and returns true if it is disabled. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"strong"),c["\u0275\u0275text"](3,"Must be a pure function"),c["\u0275\u0275elementEnd"]())}function re(e,t){1&e&&c["\u0275\u0275i18n"](0,Z)}function ie(e,t){1&e&&c["\u0275\u0275i18n"](0,q)}function le(e,t){1&e&&c["\u0275\u0275i18n"](0,Q)}function de(e,t){1&e&&c["\u0275\u0275i18n"](0,X)}function me(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",10),c["\u0275\u0275template"](1,W,2,19,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,oe,2,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t})),c["\u0275\u0275template"](4,ae,4,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](5,re,1,0,"ng-template",13),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t})),c["\u0275\u0275template"](6,ie,1,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t})),c["\u0275\u0275template"](7,le,1,0,"ng-template",15),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().defaultActiveYearMonth=t})),c["\u0275\u0275template"](8,de,1,0,"ng-template",16),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().mode=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"inherited-documentation",17)}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.defaultActiveYearMonthVariants)("documentationPropertyValue",e.defaultActiveYearMonth),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("dropdown",!0)}}function ue(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",19),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,ee),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",20),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18nStart"](8,te),c["\u0275\u0275element"](9,"code"),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](11,"tui-doc-code",21),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"li"),c["\u0275\u0275i18nStart"](13,ne),c["\u0275\u0275element"](14,"tui-doc-code",22),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleDeclareForm),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}K=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,Z=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,q=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,Q=$localize`:␟8425c8cac8c070aec902511f4cbee7b38034f803␟6827097014556364717: The default active month that is shown when you opens calendar for the first time `,X=$localize`:␟c565c714bb04a047bd1bae3404031386d26d05d8␟1953362032734413793: Time modes for SS and MS support `,ee=$localize`:␟5ac39f9a4865e1fa1076fe6bfc72e1ff99949f29␟5541686400640412405: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputDateTimeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,te=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,te=c["\u0275\u0275i18nPostprocess"](te),ne=$localize`:␟76d52ae838e90b2ba174872346714a031dbc612d␟8794844667839774096: Use in template: ${"\ufffd#14\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#14\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:`;let ce=(()=>{class e extends s.a{constructor(){super(...arguments),this.today=p.TuiDay.currentLocal(),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(),\n    });\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputDateTimeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputDateTimeModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-date-time formControlName="testValue">\n        Choose date and time\n    </tui-input-date-time>\n</form>\n',this.example1={TypeScript:n.e(287).then(n.bind(null,"J9HU")),HTML:n.e(286).then(n.bind(null,"PgU5"))},this.example2={TypeScript:n.e(289).then(n.bind(null,"JUag")),HTML:n.e(288).then(n.bind(null,"alMF"))},this.example3={TypeScript:n.e(291).then(n.bind(null,"SELf")),HTML:n.e(290).then(n.bind(null,"fD5A"))},this.example4={TypeScript:n.e(293).then(n.bind(null,"sVd8")),HTML:n.e(292).then(n.bind(null,"EpuT")),"value-transformer.ts":n.e(294).then(n.bind(null,"1AoG"))},this.minVariants=[p.TUI_FIRST_DAY,new p.TuiDay(2017,2,5),new p.TuiDay(1900,0,1),[this.today.append({day:-1}),new p.TuiTime(12,20)]],this.min=this.minVariants[0],this.maxVariants=[p.TUI_LAST_DAY,new p.TuiDay(2017,11,11),new p.TuiDay(2020,2,5),new p.TuiDay(2300,0,1),[this.today.append({day:1}),new p.TuiTime(16,20)]],this.max=this.maxVariants[0],this.defaultActiveYearMonthVariants=[p.TuiMonth.currentLocal(),new p.TuiMonth(2020,2),new p.TuiMonth(2017,2)],this.defaultActiveYearMonth=this.defaultActiveYearMonthVariants[0],this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new m.TuiNamedDay(p.TUI_LAST_DAY.append({year:-1}),"Unill today")]],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete=null,this.cleaner=!1,this.control=new r.FormControl(null,r.Validators.required),this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return e.\u0275fac=function(t){return pe(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date-time"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],["tuiLink","","routerLink",".","fragment","string-control-output"],["id","base",3,"content",6,"heading"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultActiveYearMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timeMode","documentationPropertyMode","input","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"disabledItemHandler","formControl","focusable","min","max","defaultActiveYearMonth","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","timeMode","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,J,38,4,"ng-template",1),c["\u0275\u0275template"](2,me,10,13,"ng-template",1),c["\u0275\u0275template"](3,ue,15,3,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[T.a,S.a,y.a,i.e,C.a,E,b,M,g,I.a,w.a,G.a,L.a,h.a,r.NgControlStatus,r.FormControlDirective,R.a,H.b,z.b,N.b,Y.b,k.b,U.a],encapsulation:2,changeDetection:0}),e})();const pe=c["\u0275\u0275getInheritedFactory"](ce);let se=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.i,u.a,r.ReactiveFormsModule,r.FormsModule,a.c,d.TuiLinkModule,m.TuiInputDateTimeModule,d.TuiHintControllerModule,d.TuiTextfieldControllerModule,i.f.forChild(Object(l.p)(ce))]]}),e})()}}]);