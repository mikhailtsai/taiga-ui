"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[7959],{7959:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TuiSvgService} from '@taiga-ui/core';\nimport {tuiIconMaestro, tuiIconMastercard, tuiIconTimeLarge} from '@taiga-ui/icons';\nimport {timer} from 'rxjs';\nimport {mapTo} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-svg-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSvgExample1 {\n    readonly timeout$ = timer(0).pipe(mapTo(true));\n\n    readonly imageUrl = assets`/images/ts.svg#ts`;\n\n    readonly tuiIconTimeLarge = tuiIconTimeLarge;\n\n    constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {\n        svgService.define({\n            customTuiIconMaestro: tuiIconMaestro,\n            customTuiIconMastercard: tuiIconMastercard,\n        });\n    }\n}\n"}}]);