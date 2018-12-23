import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'amdocs': '1234',
      'Content-Type': 'application/json'
    });
    const clonedRequest = req.clone({headers});
    return next.handle(clonedRequest);
  }
}
