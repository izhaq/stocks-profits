import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LineChartComponent} from './line-chart/line-chart.component';
import {LoadingBarModule} from '../loading-bar/loading-bar.module';
import {ChartModule} from 'primeng/chart';
import {ChartsEventsService} from './services/charts-events.service';

@NgModule({
    declarations: [LineChartComponent],
    imports: [
        CommonModule,
        ChartModule
    ],
    providers: [ChartsEventsService],
    exports: [LineChartComponent]
})
export class CostumeChartsModule {
    constructor(@Optional() @SkipSelf() parentModule: LoadingBarModule) {
        if (parentModule) {
            throw new Error(
                'CostumeChartsModule is loaded already. Import it in th app only'
            );
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CostumeChartsModule,
            providers: [ ChartsEventsService ]
        };
    }
}
