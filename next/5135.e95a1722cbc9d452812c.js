"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[5135],{

/***/ 5135:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE_RES} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\n\n@Component({\n    selector: `tui-token-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample7 {\n    constructor(@Inject(TUI_IS_MOBILE_RES) readonly isMobileRes$: Observable<boolean>) {}\n}\n";

/***/ })

}]);