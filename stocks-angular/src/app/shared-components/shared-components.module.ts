import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingBarModule} from './loading-bar/loading-bar.module';
import {CostumeChartsModule} from './charts-module/costume-charts.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [LoadingBarModule, CostumeChartsModule]
})
export class SharedComponentsModule {
    constructor(@Optional() @SkipSelf() parentModule: LoadingBarModule) {
        if (parentModule) {
            throw new Error(
                'SharedComponentsModule is loaded already. Import it in th app only'
            );
        }
    }
}
