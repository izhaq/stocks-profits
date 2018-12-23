import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingBarComponent} from './loading-bar/loading-bar.component';
import {LoadingBarInterceptor} from './services/loading-bar-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
    declarations: [LoadingBarComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ProgressBarModule,
        ProgressSpinnerModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true}
    ],
    exports: [LoadingBarComponent]
})
export class LoadingBarModule {
    constructor(@Optional() @SkipSelf() parentModule: LoadingBarModule) {
        if (parentModule) {
            throw new Error(
                'LoadingBarModule is loaded already. Import it in th app only'
            );
        }
    }
}
