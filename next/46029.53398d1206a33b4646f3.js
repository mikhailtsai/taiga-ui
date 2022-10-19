"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46029],{

/***/ 46029:
/***/ ((module) => {

module.exports = "import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-dropdown-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample3 {\n    open = false;\n\n    value = `some data`;\n\n    showBigText = false;\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(3000)\n            .pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.showBigText = !this.showBigText;\n            });\n    }\n}\n";

/***/ })

}]);