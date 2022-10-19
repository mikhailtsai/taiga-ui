"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[99460],{

/***/ 99460:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-miscellaneous-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample4 {\n    readonly items = [\n        `6734567890123456`,\n        `5536567890123456`,\n        `2202567890123456`,\n        `4405567890123456`,\n        `4000567890123456`,\n    ];\n\n    parametersForm = new FormGroup({\n        cardNumber: new FormControl(``),\n    });\n\n    get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return tuiGetPaymentSystem(cardNumber ?? ``);\n    }\n}\n";

/***/ })

}]);