"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[52399],{

/***/ 52399:
/***/ ((module) => {

module.exports = "<span class=\"text\">Your balance:</span>\n&nbsp;\n<tui-money [value]=\"value\"></tui-money>\n<div\n    tuiMode=\"onLight\"\n    class=\"controls tui-space_top-3\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"outline\"\n        size=\"m\"\n        class=\"tui-space_right-3\"\n        (click)=\"submit()\"\n    >\n        Submit\n    </button>\n    <button\n        tuiLink\n        type=\"button\"\n        [pseudo]=\"true\"\n        (click)=\"increaseBalance()\"\n    >\n        Increase\n    </button>\n</div>\n";

/***/ })

}]);