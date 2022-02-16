import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiSliderExample1} from './examples/1';
import {TuiSliderExample2} from './examples/2';
import {TuiSliderExample3} from './examples/3';
import {TuiSliderExample4} from './examples/4';
import {ExampleTuiSliderComponent} from './slider.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiSliderModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSliderComponent)),
    ],
    declarations: [
        ExampleTuiSliderComponent,
        TuiSliderExample1,
        TuiSliderExample2,
        TuiSliderExample3,
        TuiSliderExample4,
    ],
})
export class ExampleTuiSliderModule {}