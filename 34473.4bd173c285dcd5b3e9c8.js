"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34473],{

/***/ 34473:
/***/ ((module) => {

module.exports = "<div\n    class=\"container tui-text_body-l\"\n    (tuiSwipe)=\"onSwipe($event)\"\n>\n    Swipe left to open\n    <div\n        *tuiSidebar=\"!!(open$ | async); direction: 'right'\"\n        class=\"sidebar tui-text_body-l\"\n        (tuiSwipe)=\"onSwipe($event)\"\n    >\n        Swipe right to close\n    </div>\n</div>\n";

/***/ })

}]);