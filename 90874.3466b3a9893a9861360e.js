"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[90874],{90874:n=>{n.exports='<tui-input-slider\n    tuiTextfieldSize="m"\n    class="slider"\n    [tuiTextfieldCustomContent]="inputCustomContent"\n    [tuiTextfieldLabelOutside]="true"\n    [max]="length - 1"\n    [quantum]="1"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<ng-template #inputCustomContent>index</ng-template>\n\n<tui-pagination\n    [length]="length"\n    [index]="index"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n'}}]);