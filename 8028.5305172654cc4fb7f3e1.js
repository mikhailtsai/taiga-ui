"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[8028],{

/***/ 8028:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-data-list-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample5 {\n    dropdownOpen = false;\n    dateValue: TuiDay = new TuiDay(2020, 0, 1);\n    euro = 87; // 1 euro = 87 rub\n    dollar = 75; // 1 dollar = 75 rub\n\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`mail@mail.ru`),\n    });\n\n    readonly moneyForm = new FormGroup({\n        moneyValue: new FormControl(1000),\n    });\n\n    rangeValue = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    get testValue(): string | null | undefined {\n        return this.testForm.get(`testValue`)?.value;\n    }\n\n    get moneyValue(): number {\n        return Number(this.moneyForm.get(`moneyValue`)?.value) || 0;\n    }\n\n    onDayClick(day: TuiDay): void {\n        this.dateValue = day;\n    }\n}\n";

/***/ })

}]);