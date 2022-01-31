import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

export function importStarterKit(): Promise<unknown> {
    return import('@tiptap/starter-kit').then(m => m.default);
}

@Component({
    selector: 'tui-editor-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [importStarterKit()],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample2 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('', Validators.required);
}