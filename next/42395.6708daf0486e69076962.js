"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[42395],{

/***/ 42395:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return tuiInRange(value ?? 13, fromInclude ?? 5, toExclude ?? 42);\n    }\n}\n";

/***/ })

}]);