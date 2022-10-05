(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-scale-in-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiScaleIn} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-scale-in-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiScaleIn],\n})\nexport class TuiScaleInExample {\n    @Input()\n    speed = 0;\n\n    readonly todoTasks = [\n        {title: `Install Angular`, completed: true},\n        {title: `Install Taiga UI`, completed: false},\n        {title: `Look into \"Getting Started\"`, completed: false},\n    ];\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-scale-in-index-ts.js.map