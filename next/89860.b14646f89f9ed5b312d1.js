"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89860],{

/***/ 89860:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-reorder-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiReorderExample1 {\n    items: readonly string[] = [\n        `John Cleese`,\n        `Eric Idle`,\n        `Michael Palin`,\n        `Terry Gilliam`,\n        `Terry Jones`,\n        `Graham Chapman`,\n    ];\n\n    enabled = this.items;\n}\n";

/***/ })

}]);