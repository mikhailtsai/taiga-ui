(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{"G1/N":function(n,t,i){"use strict";i.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <tui-notification i18n>\n        Taiga UI input is compatible with\n        <a\n            tuiLink\n            href="https://www.npmjs.com/package/angular2-text-mask"\n            target="_blank"\n        >\n            angular2-text-mask\n        </a>\n    </tui-notification>\n    <p>\n        <tui-input\n            formControlName="testValue1"\n            [textMask]="textMaskOptions1"\n        >\n            Document number\n            <input\n                tuiTextfield\n                inputmode="numeric"\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            formControlName="testValue2"\n            [textMask]="textMaskOptions2"\n        >\n            Secret number\n            <input\n                tuiTextfield\n                inputmode="numeric"\n            />\n        </tui-input>\n    </p>\n</form>\n<p>Value is stored in control with mask applied:</p>\n<pre>{{testForm.value | json}}</pre>\n'}}]);