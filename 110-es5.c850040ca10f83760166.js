var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17;function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,a=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{vlBO:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTextAreaModule",(function(){return fe}));var a,o=n("An66"),r=n("3kIJ"),l=n("1VvW"),i=n("SVIu"),m=n("Qq0t"),c=n("dvRg"),u=n("Piem"),s=n("kZht"),d=n("LusI"),p=n("K/iL"),f=n("OZlg"),x=n("e0eB"),g=n("iyc4"),h=n("oEBb");a=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f11fff1dadcae241490301e6b4ac6826c98d26022\u241f8176877427941181225: It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside\n"])));var b,_,T=((b=_createClass((function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue1:new r.FormControl("A field",r.Validators.required),testValue2:new r.FormControl("This one can be expanded",r.Validators.required)})}))).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=s["\u0275\u0275defineComponent"]({type:b,selectors:[["tui-text-area-example-1"]],decls:10,vars:2,consts:[[1,"container",3,"formGroup"],[1,"tui-row"],[1,"tui-col_md-6"],["formControlName","testValue1"],["formControlName","testValue2",3,"expandable"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,a),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"form",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"div",2),s["\u0275\u0275elementStart"](5,"tui-text-area",3),s["\u0275\u0275text"](6," Type a text "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",2),s["\u0275\u0275elementStart"](8,"tui-text-area",4),s["\u0275\u0275text"](9," Type a text "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("expandable",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-bottom:1.25rem;max-width:43.75rem}"],changeDetection:0}),b);_=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f24c99562aed3fa3a2e251380380be625ceeaf326\u241f2874902685291106196:You can set a custom min-height for component"])));var C,y,O=((C=_createClass((function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue1:new r.FormControl("A field",r.Validators.required)})}))).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=s["\u0275\u0275defineComponent"]({type:C,selectors:[["tui-text-area-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"tui-row"],[1,"tui-col_md-6"],["formControlName","testValue1",1,"tui-space_bottom-4","field-large"],["formControlName","testValue1",1,"field-small",3,"expandable"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,_),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"form",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"div",2),s["\u0275\u0275elementStart"](5,"tui-text-area",3),s["\u0275\u0275text"](6," Type a text "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-text-area",4),s["\u0275\u0275text"](8," Type a text "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("expandable",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName],styles:[".field-large[_ngcontent-%COMP%]{min-height:9.375rem}.field-small[_ngcontent-%COMP%]{min-height:3.5rem}"],changeDetection:0}),C),v=n("1Nkj"),S=n("gEyt");y=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241fd79d1199bdb06711520d14b4a2ccc7357a9b44c2\u241f3036146691798610079: You can use label outside mode with ",":START_TAG_CODE:tuiLabel",":CLOSE_TAG_CODE:"])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var E,L,w=((E=_createClass((function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue1:new r.FormControl("A field",r.Validators.required)})}))).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=s["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-text-area-example-3"]],decls:6,vars:2,consts:[[1,"tui-row",3,"formGroup"],["tuiLabel","","label","Type a text",1,"tui-col_md-6"],["formControlName","testValue1",1,"tui-space_bottom-4",3,"tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,y),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"form",0),s["\u0275\u0275elementStart"](4,"label",1),s["\u0275\u0275element"](5,"tui-text-area",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,v.a,h.a,r.NgControlStatus,r.FormControlName,S.b],styles:[".field[_ngcontent-%COMP%]{min-height:3.5rem}"],changeDetection:0}),E),F=n("RlDx"),j=n("KzL3"),V=n("kNZY");function M(e){return"Maximum length \u2014 "+e.requiredLength}L=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f034801f919cc254ec896b67b2dfb1b78084d686a\u241f3652722326748330703: To highlight extra characters: ",":START_UNORDERED_LIST:",":START_LIST_ITEM: Set ",":START_TAG_CODE:tuiTextfieldMaxLength",":CLOSE_TAG_CODE:",":CLOSE_LIST_ITEM:",":START_LIST_ITEM_1: (Optional) Dont forget to set form validator (for example, ",":START_TAG_CODE:Validators.maxLength",":CLOSE_TAG_CODE: ) if you want to make field invalid on exceeding the characters limit ",":CLOSE_LIST_ITEM:",":CLOSE_UNORDERED_LIST:"])),"\ufffd#2\ufffd","\ufffd#3\ufffd","[\ufffd#4\ufffd|\ufffd#6\ufffd]","[\ufffd/#4\ufffd|\ufffd/#6\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd#5\ufffd","[\ufffd#4\ufffd|\ufffd#6\ufffd]","[\ufffd/#4\ufffd|\ufffd/#6\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd]","\ufffd/#2\ufffd"),L=s["\u0275\u0275i18nPostprocess"](L);var A,P,D,G=((A=_createClass((function e(){_classCallCheck(this,e),this.maxLength=97,this.testForm=new r.FormGroup({testValue1:new r.FormControl("\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n".trim(),[r.Validators.required,r.Validators.maxLength(this.maxLength)])}),this.testForm.markAllAsTouched()}))).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=s["\u0275\u0275defineComponent"]({type:A,selectors:[["tui-text-area-example-4"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:c.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",maxlength:M}}])],decls:12,vars:4,consts:[[1,"description"],[1,"steps"],[1,"steps_optional"],[1,"form","tui-col_md-6",3,"formGroup"],["tuiLabel","","label","Write a wise thought",1,"tui-row"],["formControlName","testValue1","tuiHintContent","it's just a joke",3,"expandable","tuiTextfieldMaxLength","tuiTextfieldLabelOutside"],["formControlName","testValue1"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275i18nStart"](1,L),s["\u0275\u0275elementStart"](2,"ul",1),s["\u0275\u0275elementStart"](3,"li"),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"li",2),s["\u0275\u0275element"](6,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"form",3),s["\u0275\u0275elementStart"](8,"label",4),s["\u0275\u0275elementStart"](9,"tui-text-area",5),s["\u0275\u0275text"](10," Type it "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-field-error",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("expandable",!0)("tuiTextfieldMaxLength",t.maxLength)("tuiTextfieldLabelOutside",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,v.a,h.a,r.NgControlStatus,r.FormControlName,F.a,j.b,S.b,V.a],styles:[".description[_ngcontent-%COMP%]{margin-bottom:2rem}.steps[_ngcontent-%COMP%]{list-style-type:disc;padding-left:.9375rem;margin:1rem 0}.steps_optional[_ngcontent-%COMP%]{list-style-type:circle}tui-root._mobile[_nghost-%COMP%]   .form[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .form[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),A),I=n("eB8V"),N=((P=_createClass((function e(){_classCallCheck(this,e),this.value="\u0645\u0648\u0646\u062a\u0649 \u067e\u0627\u064a\u062b\u0648\u0646 \u0648 \u0633\u0627\u0639\u0627\u062a \u0645\u0639\u0631\u0648\u0641\u064a\u0646 \u0627\u0646\u0647\u0645 \u0630\u0649 \u067e\u0627\u064a\u062b\u0648\u0646\u0632 \u0643\u0627\u0646\u0648 \u0645\u062c\u0645\u0648\u0639\u0629 \u0643\u0648\u0645\u064a\u062f\u064a\u0627 \u0633\u0631\u064a\u0627\u0644\u064a\u0647 \u0645\u0646 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627"}))).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=s["\u0275\u0275defineComponent"]({type:P,selectors:[["tui-text-area-example-5"]],decls:2,vars:3,consts:[["tuiHintContent","\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0647","tuiHintDirection","bottom-right",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldMaxLength","ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-text-area",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),s["\u0275\u0275text"](1," \u0645\u0648\u0646\u062a\u0649 \u0628\u0627\u064a\u062b\u0648\u0646\n"),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("tuiTextfieldMaxLength",100)("ngModel",t.value)},directives:[h.a,F.a,I.b,j.b,r.NgControlStatus,r.NgModel],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),P),R=n("EPR0"),k=n("pQcr"),z=n("2wTY"),H=n("yHor"),$=n("zGJC"),q=n("FSyC"),U=n("u8jZ"),B=["header",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241ffd7489e11e93ebe443891acbd0f862676d1f0563\u241f3625945267826760454:TextArea"])))];D=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fd8e68a67668ed36e11149af4b05578aba184f2d8\u241f3415839972003360203:Textfield for multiline input. It can grow with its content."])));var J,Y,W,X,Z,K,Q=["heading",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fedc570a1a3344698bc10ae22435fcd850d8e1d5c\u241f947387158256125293:A simple field and expandable"])))],ee=["heading",$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241fa1516856d096185f3cd2e884d1c53927efe37878\u241f991068879248914444:Custom size"])))],te=["heading",$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f109f3df315d219bfc11667dd1c45293fef91d174\u241f4716735227862695980:With label outside"])))],ne=["heading",$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241ffea4a8a30133ed301fa9c3aa2501016eb2920272\u241f4290224686448141191:With extra characters highlight"])))],ae=["heading",$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241fe79e58f2fd2e2018afeb160923b2810951e9dbfc\u241f2885218428372331823:Direction: RTL"])))];function oe(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,D),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,Q),s["\u0275\u0275element"](4,"tui-text-area-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,ee),s["\u0275\u0275element"](7,"tui-text-area-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](9,te),s["\u0275\u0275element"](10,"tui-text-area-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](12,ne),s["\u0275\u0275element"](13,"tui-text-area-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](15,ae),s["\u0275\u0275element"](16,"tui-text-area-example-5"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example4),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example5)}}function re(e,t){1&e&&s["\u0275\u0275i18n"](0,J)}function le(e,t){1&e&&s["\u0275\u0275i18n"](0,Y)}function ie(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,W),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function me(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-text-area",7),s["\u0275\u0275text"](2," Textfield for multiline input. It can grow with its content. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-documentation"),s["\u0275\u0275template"](4,re,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().disabled=e})),s["\u0275\u0275template"](5,le,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().expandable=e})),s["\u0275\u0275template"](6,ie,2,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().rows=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"inherited-documentation")}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formControl",a.control)("focusable",a.focusable)("tuiTextfieldCleaner",a.cleaner)("tuiTextfieldExampleText",a.exampleText)("tuiTextfieldLabelOutside",a.labelOutside)("tuiTextfieldMaxLength",a.maxLength)("tuiTextfieldSize",a.size)("expandable",a.expandable)("pseudoInvalid",a.pseudoInvalid)("pseudoFocused",a.pseudoFocused)("pseudoHovered",a.pseudoHovered)("readOnly",a.readOnly)("rows",a.rows)("tuiHintContent",a.hintContent)("tuiHintDirection",a.hintDirection)("tuiHintMode",a.hintMode),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",a.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.expandable),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.rowsVariants)("documentationPropertyValue",a.rows)}}function ce(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",11),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,X),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,Z),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275i18n"](14,K),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](15,"tui-doc-code",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",n.exampleDeclareForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}J=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241f28350648cac40c192feced71459023195fd07d01\u241f9000685466486669878: Disabled state (formControl.disable()) "]))),Y=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241ffe3440932d8de8493b95c5bb7b80235d8019c4e7\u241f8181128573063666297: Control height can be expanded to show all content "]))),W=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241fa96e8afcd84a7e13d809bf3cf105ae4fceb93ee3\u241f3033193110728465870: A number of visible rows in ",":START_TAG_CODE:expandable",":CLOSE_TAG_CODE: mode "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),X=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241faeec6378605dd6e8426702c0c1a0ac3534fb3376\u241f103194612379487642: Import ",":START_TAG_CODE:TuiTextAreaModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),Z=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f456424fe8e0d32d35e8189a73951290607573253\u241f6039324497180220606: Declare a form ( ",":START_TAG_CODE:FormGroup",":CLOSE_TAG_CODE: ) or a control ( ",":START_TAG_CODE:FormControl",":CLOSE_TAG_CODE: ) in your component: "])),"[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]","[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"),Z=s["\u0275\u0275i18nPostprocess"](Z),K=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var ue,se,de=((ue=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-text-area-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('A field', Validators.required),\n        testValue2: new FormControl('This one can be expanded', Validators.required),\n    });\n}\n",HTML:'<p i18n>\n    It has a fixed size and content scroll by default. But there is also an\n    expandable mode with height increase from content inside\n</p>\n\n<form class="container" [formGroup]="testForm">\n    <div class="tui-row">\n        <div class="tui-col_md-6">\n            <tui-text-area formControlName="testValue1">\n                Type a text\n            </tui-text-area>\n        </div>\n        <div class="tui-col_md-6">\n            <tui-text-area formControlName="testValue2" [expandable]="true">\n                Type a text\n            </tui-text-area>\n        </div>\n    </div>\n</form>\n',LESS:":host {\n    display: block;\n}\n\n.container {\n    margin-bottom: 1.25rem;\n    max-width: 43.75rem;\n}\n"},e.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-text-area-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('A field', Validators.required),\n    });\n}\n",HTML:'<p i18n>You can set a custom min-height for component</p>\n\n<form [formGroup]="testForm">\n    <div class="tui-row">\n        <div class="tui-col_md-6">\n            <tui-text-area\n                formControlName="testValue1"\n                class="tui-space_bottom-4 field-large"\n            >\n                Type a text\n            </tui-text-area>\n            <tui-text-area\n                formControlName="testValue1"\n                class="field-small"\n                [expandable]="true"\n            >\n                Type a text\n            </tui-text-area>\n        </div>\n    </div>\n</form>\n',LESS:".field-large {\n    min-height: 9.375rem;\n}\n\n.field-small {\n    min-height: 3.5rem;\n}\n"},e.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-text-area-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('A field', Validators.required),\n    });\n}\n",HTML:'<p i18n>\n    You can use label outside mode with\n    <code>tuiLabel</code>\n</p>\n\n<form class="tui-row" [formGroup]="testForm">\n    <label tuiLabel label="Type a text" class="tui-col_md-6">\n        <tui-text-area\n            formControlName="testValue1"\n            class="tui-space_bottom-4"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-text-area>\n    </label>\n</form>\n',LESS:".field {\n    min-height: 3.5rem;\n}\n"},e.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\nconst LONG_TEXT_EXAMPLE = `\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n`;\n\nexport function maxLengthMessageFactory(context: {requiredLength: string}): string {\n    return `Maximum length \u2014 ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-text-area-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                maxlength: maxLengthMessageFactory,\n            },\n        },\n    ],\n})\nexport class TuiTextAreaExample4 {\n    readonly maxLength = 97;\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [\n            Validators.required,\n            Validators.maxLength(this.maxLength),\n        ]),\n    });\n\n    constructor() {\n        this.testForm.markAllAsTouched();\n    }\n}\n",HTML:'<div i18n class="description">\n    To highlight extra characters:\n    <ul class="steps">\n        <li>\n            Set\n            <code>tuiTextfieldMaxLength</code>\n        </li>\n        <li class="steps_optional">\n            (Optional) Dont forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters\n            limit\n        </li>\n    </ul>\n</div>\n\n<form class="form tui-col_md-6" [formGroup]="testForm">\n    <label tuiLabel label="Write a wise thought" class="tui-row">\n        <tui-text-area\n            formControlName="testValue1"\n            tuiHintContent="it\'s just a joke"\n            [expandable]="true"\n            [tuiTextfieldMaxLength]="maxLength"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Type it\n        </tui-text-area>\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n</form>\n',LESS:"@import 'taiga-ui-local';\n\n.description {\n    margin-bottom: 2rem;\n}\n\n.steps {\n    list-style-type: disc;\n    padding-left: 0.9375rem;\n    margin: 1rem 0;\n\n    &_optional {\n        list-style-type: circle;\n    }\n}\n\n.form {\n    :host-context(tui-root._mobile) & {\n        width: 100%;\n    }\n}\n"},e.example5={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-text-area-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample5 {\n    value =\n        '\u0645\u0648\u0646\u062a\u0649 \u067e\u0627\u064a\u062b\u0648\u0646 \u0648 \u0633\u0627\u0639\u0627\u062a \u0645\u0639\u0631\u0648\u0641\u064a\u0646 \u0627\u0646\u0647\u0645 \u0630\u0649 \u067e\u0627\u064a\u062b\u0648\u0646\u0632 \u0643\u0627\u0646\u0648 \u0645\u062c\u0645\u0648\u0639\u0629 \u0643\u0648\u0645\u064a\u062f\u064a\u0627 \u0633\u0631\u064a\u0627\u0644\u064a\u0647 \u0645\u0646 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627';\n}\n",HTML:'<tui-text-area\n    tuiHintContent="\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0647"\n    tuiHintDirection="bottom-right"\n    class="input"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldMaxLength]="100"\n    [(ngModel)]="value"\n>\n    \u0645\u0648\u0646\u062a\u0649 \u0628\u0627\u064a\u062b\u0648\u0646\n</tui-text-area>\n',LESS:".input {\n    width: 20rem;\n    direction: rtl;\n    text-align: right;\n}\n"},e.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiTextAreaModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiTextAreaModule\n    ],\n...\n",e.exampleInsertTemplate='<div [formGroup]="testForm">\n    <tui-text-area formControlName="testValue"\n                   [expandable]="true"\n                   [rows]="10"></tui-text-area>\n</div>\n',e.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl('Content')\n    });\n}\n",e.maxLengthVariants=[50,100,500],e.maxLength=null,e.rowsVariants=[8,15,30],e.rows=e.rowsVariants[0],e.expandable=!1,e.control=new r.FormControl,e.sizeVariants=["m","l"],e.size=e.sizeVariants[1],e}return _createClass(n)}(d.a)).\u0275fac=function(e){return pe(e||ue)},ue.\u0275cmp=s["\u0275\u0275defineComponent"]({type:ue,selectors:[["example-tui-text-area"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:p.a,useExisting:Object(s.forwardRef)((function(){return ue}))}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:0,consts:[["package","KIT","type","components",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","large",3,"content",6,"heading"],["id","label-outside",3,"content",6,"heading"],["id","extra-chars-highlight",3,"content",6,"heading"],["id","rtl",3,"content",6,"heading"],[1,"b-form",3,"formControl","focusable","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldMaxLength","tuiTextfieldSize","expandable","pseudoInvalid","pseudoFocused","pseudoHovered","readOnly","rows","tuiHintContent","tuiHintDirection","tuiHintMode"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rows","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,B),s["\u0275\u0275template"](2,oe,17,5,"ng-template",1),s["\u0275\u0275template"](3,me,8,20,"ng-template",1),s["\u0275\u0275template"](4,ce,16,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[f.a,x.a,g.a,T,O,w,G,N,R.a,h.a,r.NgControlStatus,r.FormControlDirective,I.b,k.b,S.b,j.b,z.b,F.a,H.a,$.a,q.a,U.a],encapsulation:2,changeDetection:0}),ue),pe=s["\u0275\u0275getInheritedFactory"](de),fe=((se=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:se}),se.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||se)},imports:[[c.TuiTextAreaModule,i.h,u.a,r.ReactiveFormsModule,r.FormsModule,m.TuiSvgModule,o.c,c.TuiRadioListModule,m.TuiButtonModule,m.TuiLinkModule,m.TuiLabelModule,m.TuiTextfieldControllerModule,m.TuiHintControllerModule,c.TuiFieldErrorModule,l.f.forChild(Object(i.o)(de))]]}),se)}}]);