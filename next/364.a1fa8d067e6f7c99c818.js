(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{iKse:function(e,i,n){"use strict";n.r(i),i.default='<tui-files>\n    <tui-file\n        *ngFor="let file of files"\n        state="normal"\n        [file]="file"\n    ></tui-file>\n\n    <tui-file\n        *ngFor="let file of rejectedFiles"\n        state="error"\n        [file]="file"\n    ></tui-file>\n\n    <tui-file\n        *ngIf="loadingFile && !isCypress"\n        state="loading"\n        [file]="loadingFile"\n        (removed)="removeLoading()"\n    ></tui-file>\n</tui-files>\n\n<h4>With link</h4>\n<tui-files>\n    <tui-file *tuiItem state="normal" [file]="fileWithLink"></tui-file>\n</tui-files>\n\n<h4>With deleted state</h4>\n<tui-files>\n    <tui-file\n        *ngFor="let file of removedFiles"\n        state="deleted"\n        size="l"\n        [file]="file"\n    >\n        <button tuiLink (click)="restore(file)">Restore</button>\n    </tui-file>\n    <tui-file\n        *ngFor="let file of restoredFiles"\n        state="normal"\n        size="l"\n        [file]="file"\n        [leftContent]="icon"\n        (removed)="remove(file)"\n    ></tui-file>\n</tui-files>\n\n<ng-template #icon><tui-svg src="tuiIconFileLarge"></tui-svg></ng-template>\n'}}]);