var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{eg8U:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleFormatModule",(function(){return V}));var r,a,o=n("An66"),m=n("3kIJ"),i=n("1VvW"),l=n("SVIu"),p=n("Qq0t"),c=n("dvRg"),u=n("kZht"),s=n("OZlg"),d=n("e0eB"),f=n("iyc4"),g=n("l4xa"),C=n("YjIA"),h=((r=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl(11)})}return _createClass(e,[{key:"px",get:function(){var e=this.parametersForm.value.value;return Object(g.px)(e)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,C.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),r),S=n("GdrL"),v=((a=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({sourceString:new m.FormControl("Friend!"),minResultLength:new m.FormControl(21),padString:new m.FormControl("Hey, ")})}return _createClass(e,[{key:"paddedStart",get:function(){var e=this.parametersForm.value,t=e.sourceString,n=e.minResultLength,r=e.padString;return Object(g.padStart)(t||"",n||0,r||" ")}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=u["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," sourceString "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," minResultLength "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input",4),u["\u0275\u0275text"](8," padString "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,S.a,m.NgControlStatus,m.FormControlName,C.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),a),b=n("T8fS"),_=n("TjIJ"),F=n("fP8s"),y=n("OWJi");function x(e,t){if(1&e&&u["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("items",n.items)}}var w,E,N,O,G,L=((O=function(){function e(){_classCallCheck(this,e),this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new m.FormGroup({currency:new m.FormControl(null)})}return _createClass(e,[{key:"currency",get:function(){var e=this.parametersForm.value.currency;return Object(b.getCurrencySymbol)(e)}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=u["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-select",2),u["\u0275\u0275text"](4," currency "),u["\u0275\u0275template"](5,x,1,1,"tui-data-list-wrapper",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,_.a,m.NgControlStatus,m.FormControlName,F.a,y.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),O),j=((N=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl("roman sEdOv")})}return _createClass(e,[{key:"capitalized",get:function(){var e=this.parametersForm.value.value;return Object(p.capitalize)(e)}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=u["\u0275\u0275defineComponent"]({type:N,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,S.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),N),k=((E=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl("+79991234567"),countryCode:new m.FormControl("+7"),phoneMask:new m.FormControl("### ###-##-##")})}return _createClass(e,[{key:"formattedPhone",get:function(){var e=this.parametersForm.value,t=e.value,n=e.countryCode,r=e.phoneMask;return Object(p.formatPhone)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=u["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input",3),u["\u0275\u0275text"](6," countryCode "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input",4),u["\u0275\u0275text"](8," phoneMask "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,S.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),E),T=((w=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl(123456.789),decimalLimit:new m.FormControl(2),decimalSeparator:new m.FormControl("."),thousandSeparator:new m.FormControl(" ")})}return _createClass(e,[{key:"formattedNumber",get:function(){var e=this.parametersForm.value,t=e.value,n=e.decimalLimit,r=e.decimalSeparator,a=e.thousandSeparator;return Object(p.formatNumber)(t,n,r,a)}}]),e}()).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=u["\u0275\u0275defineComponent"]({type:w,selectors:[["tui-format-example-6"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input",3),u["\u0275\u0275text"](6," decimalLimit "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input",4),u["\u0275\u0275text"](8," decimalSeparator "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"tui-input",5),u["\u0275\u0275text"](10," thousandSeparator "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.formattedNumber,"' = formatNumber(value, decimalLimit, decimalSeparator,\nthousandSeparator); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,S.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),w),D=n("u8jZ"),M=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f8b68cb0e9623325effd2712982bfc6c2ddc96d58\u241f5358165867706649494:Format utils"])))],P=["pageTab",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"])))];G=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f1da832a39ea4c0c3bd7976d78c971ebce6435c13\u241f1341457636714080363:A set of format utils"])));var z,R=["description",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f8603e981f7ca02a7bf59688e4767351180b4250d\u241f5245623836371299072:Adds 'px' to a number"])))],U=["description",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f7d1831d06991cb25671ca5b74e6c0327bbf87280\u241f1473019084371139706:Adds a fillter to a string"])))],I=["description",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241ff58552f0761b83792b2492e1439aa12357c39d15\u241f7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217"])))],A=["description",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fff19b55733851de9847ac9886b9640b108dadb82\u241f6708488179256599720:Capitalizes every word in a string"])))],H=["description",$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241fb945a41118e9fa647ee7e77517ecf6f5b69643d2\u241f1504114262974304913:Formats a phone number with separators"])))],$=["description",$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f1980b95105c67951c5039793433db28092117edb\u241f7477502181232818354:Formats a number with separators"])))];function B(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,G),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](3,R),u["\u0275\u0275element"](4,"tui-format-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](6,U),u["\u0275\u0275element"](7,"tui-format-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"tui-doc-example",5),u["\u0275\u0275i18nAttributes"](9,I),u["\u0275\u0275element"](10,"tui-format-example-3"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](12,A),u["\u0275\u0275element"](13,"tui-format-example-4"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"tui-doc-example",7),u["\u0275\u0275i18nAttributes"](15,H),u["\u0275\u0275element"](16,"tui-format-example-5"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"tui-doc-example",8),u["\u0275\u0275i18nAttributes"](18,$),u["\u0275\u0275element"](19,"tui-format-example-6"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",n.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example2),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example3),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example4),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example5),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example6)}}function J(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",9),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18n"](3,z),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](4,"tui-doc-code",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",n.importComponentExample)}}z=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f331439c9b8ee5b975fc037bbc742a75012cb302f\u241f5059560669993049040:Import into component and use:"])));var K,W,Z=((W=_createClass((function e(){_classCallCheck(this,e),this.importComponentExample="import {getCurrencySymbol} from '@taiga-ui/kit';\n\n...\n    currency = getCurrencySymbol(currency);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {px} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n",HTML:'\'{{ px }}\' = px(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {padStart} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('Friend!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('Hey, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n",HTML:'{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="sourceString" class="tui-space_top-2">\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName="minResultLength"\n            class="tui-space_top-2"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input formControlName="padString" class="tui-space_top-2">\n            padString\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: 'tui-format-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF', 'EUR', 'GBP'];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n",HTML:'{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="currency" class="tui-space_top-2">\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {capitalize} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('roman sEdOv'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n",HTML:'\'{{ capitalized }}\' = capitalize(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n",HTML:'\'{{ formattedPhone }}\' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n        <tui-input formControlName="countryCode" class="tui-space_top-2">\n            countryCode\n        </tui-input>\n        <tui-input formControlName="phoneMask" class="tui-space_top-2">\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example6={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatNumber} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample6 {\n    parametersForm = new FormGroup({\n        value: new FormControl(123456.789),\n        decimalLimit: new FormControl(2),\n        decimalSeparator: new FormControl('.'),\n        thousandSeparator: new FormControl(' '),\n    });\n\n    get formattedNumber(): string {\n        const {value, decimalLimit, decimalSeparator, thousandSeparator} =\n            this.parametersForm.value;\n\n        return formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);\n    }\n}\n",HTML:'\'{{ formattedNumber }}\' = formatNumber(value, decimalLimit, decimalSeparator,\nthousandSeparator);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n        <tui-input formControlName="decimalLimit" class="tui-space_top-2">\n            decimalLimit\n        </tui-input>\n        <tui-input formControlName="decimalSeparator" class="tui-space_top-2">\n            decimalSeparator\n        </tui-input>\n        <tui-input formControlName="thousandSeparator" class="tui-space_top-2">\n            thousandSeparator\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"}}))).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=u["\u0275\u0275defineComponent"]({type:W,selectors:[["example-format"]],decls:5,vars:0,consts:[["package","CDK / CORE","path","cdk/utils/format",6,"header"],["pageTab",""],[6,"pageTab"],["id","px","heading","px",3,"content",6,"description"],["id","padStart","heading","padStart",3,"content",6,"description"],["id","getCurrencySymbol","heading","getCurrencySymbol",3,"content",6,"description"],["id","capitalize","heading","capitalize",3,"content",6,"description"],["id","formatPhone","heading","formatPhone",3,"content",6,"description"],["id","formatNumber","heading","formatNumber",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,M),u["\u0275\u0275template"](2,B,20,6,"ng-template",1),u["\u0275\u0275template"](3,J,5,1,"ng-template",2),u["\u0275\u0275i18nAttributes"](4,P),u["\u0275\u0275elementEnd"]())},directives:[s.a,d.a,f.a,h,v,L,j,k,T,D.a],encapsulation:2,changeDetection:0}),W),V=((K=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[o.c,c.TuiInputNumberModule,m.FormsModule,m.ReactiveFormsModule,c.TuiInputModule,c.TuiSelectModule,p.TuiDataListModule,c.TuiDataListWrapperModule,l.h,i.f.forChild(Object(l.o)(Z))]]}),K)}}]);