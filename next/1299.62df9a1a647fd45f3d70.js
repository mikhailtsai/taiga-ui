(window.webpackJsonp=window.webpackJsonp||[]).push([[1299],{FMRb:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiClamp} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-slider-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample6 {\n    min = 0.5;\n    max = 2;\n    value = 1;\n\n    change(step: number): void {\n        this.value = tuiClamp(this.value + step, this.min, this.max);\n    }\n}\n"}}]);