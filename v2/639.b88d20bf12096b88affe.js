(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{yQjl:function(n,e,t){"use strict";t.r(e),e.default="import {Extension, GlobalAttributes} from '@tiptap/core';\n\nexport const EmojiExtension = Extension.create({\n    name: `emoji`,\n    addGlobalAttributes(): GlobalAttributes {\n        return [\n            {\n                types: [`paragraph`],\n                attributes: {\n                    dataType: {\n                        default: ``,\n                        keepOnSplit: false,\n                        renderHTML: ({dataType}) =>\n                            dataType === `emoji`\n                                ? {\n                                      style: `display: inline`,\n                                  }\n                                : null,\n                        parseHTML: element => element.getAttribute(`data-type`),\n                    },\n                },\n            },\n        ];\n    },\n});\n"}}]);