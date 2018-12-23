import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {LoadingBarService} from './loading-bar.service';
import {LoadingBarModule} from '../loading-bar.module';

@Injectable({
    providedIn: LoadingBarModule
})
export class LoadingBarInterceptor implements HttpInterceptor {
    constructor(private loadingBarService: LoadingBarService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.get('disableLoadingBar')) {
            return next.handle(req);
        }

        this.loadingBarService.addRequest();

        const handleObs: Observable<HttpEvent<any>> = next.handle(req);

        const obs = handleObs.pipe(tap(() => {
            this.loadingBarService.removeRequest();
        }, () => {
            this.loadingBarService.removeRequest();
        }));

        this.loadingBarService.setRequestObs(obs);

        return obs;
    }
}
