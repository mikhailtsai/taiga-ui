"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[42559],{

/***/ 42559:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dropdown-hover-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownHoverExample2 {\n    readonly testForm = new FormGroup({\n        option: new FormControl(false),\n    });\n\n    open = false;\n    openSettings = false;\n\n    index = 0;\n\n    onClick(): void {\n        this.open = false;\n        this.index = 1;\n    }\n}\n";

/***/ })

}]);