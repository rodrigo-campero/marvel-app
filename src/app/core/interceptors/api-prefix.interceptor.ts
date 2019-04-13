import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiPrefix implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            // tslint:disable-next-line:max-line-length
            url: `${environment.apiUrl}/${request.url}${request.url.includes('?') ? '&' : '?'}apikey=${environment.apikey}&ts=${environment.ts}&hash=${environment.hash}`
        });
        return next.handle(request);
    }
}
