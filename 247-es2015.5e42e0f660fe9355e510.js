(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{tAWm:function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown #dropdown [content]="content">\n    <button\n        tuiIconButton\n        appearance="flat"\n        type="button"\n        [icon]="arrow"\n        [pseudoHovered]="dropdown.open || null"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template #content>\n    <tui-data-list>\n        <tui-opt-group tuiMultiSelectGroup [(ngModel)]="value">\n            <tui-opt-group label="Food">\n                <button\n                    *ngFor="let burger of burgers"\n                    tuiOption\n                    [value]="burger"\n                >\n                    {{burger}}\n                </button>\n            </tui-opt-group>\n            <tui-opt-group label="Drinks">\n                <button *ngFor="let drink of drinks" tuiOption [value]="drink">\n                    {{drink}}\n                </button>\n            </tui-opt-group>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n<p>{{value}}</p>\n'}}]);