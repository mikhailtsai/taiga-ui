(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{"3F+j":function(n,o,t){"use strict";t.r(o),o.default='<div (tuiActiveZoneChange)="onActiveZone($event)">\n    <div\n        #editor\n        contenteditable\n        tuiDropdownDirection="top"\n        class="editor tui-editor-socket"\n        [class.editor_active]="open"\n        [tuiDropdown]="open"\n        [tuiDropdownContent]="dropdown"\n        [(ngModel)]="model"\n    ></div>\n    <ng-template #dropdown>\n        <tui-toolbar [editor]="editor"></tui-toolbar>\n    </ng-template>\n</div>\n'}}]);