"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53419],{

/***/ 53419:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-time\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n    >\n        Input time\n    </tui-input-time>\n    <tui-input-time\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_top-2\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Input time\n    </tui-input-time>\n    <p i18n>\n        If field is not required, but you want to mark it invalid if user did not complete it, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-time\n        tuiUnfinishedValidator\n        formControlName=\"testValue\"\n    >\n        Input time\n    </tui-input-time>\n</form>\n";

/***/ })

}]);