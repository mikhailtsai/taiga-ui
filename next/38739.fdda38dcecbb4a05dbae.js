"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[38739],{

/***/ 38739:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-mobile-calendar-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMobileCalendarExample2 {\n    min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);\n    max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);\n}\n";

/***/ })

}]);