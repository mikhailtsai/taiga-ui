"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[18710],{

/***/ 18710:
/***/ ((module) => {

module.exports = "<table class=\"tui-table table\">\n    <thead>\n        <tr>\n            <th class=\"tui-table__th cell_name\">Name</th>\n            <th class=\"tui-table__th cell_sum\">Sum, $</th>\n        </tr>\n        <tr *ngFor=\"let item of items | tuiFilter: matcher:300\">\n            <td class=\"tui-table__td cell_name\">{{ item.name }}</td>\n            <td class=\"tui-table__td cell_sum\">{{ item.price }}</td>\n        </tr>\n    </thead>\n</table>\n";

/***/ })

}]);