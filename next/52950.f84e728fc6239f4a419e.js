"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[52950],{

/***/ 52950:
/***/ ((module) => {

module.exports = ".outline {\n    display: inline-block;\n    padding: 0.25rem;\n    margin: -0.25rem 0;\n\n    &_light {\n        background: #30406a;\n    }\n\n    &_dark {\n        background: #e5e7ea;\n    }\n}\n\n@iterations: 20;\n\n.loop (@i) when (@i > 0) {\n    .support-@{i} {\n        background-color: ~'var(--tui-support-@{i}, var(--tui-support-0@{i}))';\n    }\n    .loop(@i - 1);\n}\n.loop (@iterations);\n";

/***/ })

}]);