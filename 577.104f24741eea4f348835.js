(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{wbad:function(n,o,e){"use strict";e.r(o),o.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-dialog-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent3 {\n    money = 1000;\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(content: PolymorpheusContent<TuiDialogContext>): void {\n        this.dialogService.open(content).subscribe();\n    }\n\n    withdraw(): void {\n        this.money -= 100;\n    }\n}\n"}}]);