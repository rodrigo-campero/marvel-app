import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { DiscountCoupon } from '../mocks/discount-coupon.mock';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const discountCoupons = new DiscountCoupon().createDb();
        return of(null).pipe(mergeMap(() => {
            if (request.url.includes('/coupon/validate') && request.method === 'POST') {
                const filteredCoupons = discountCoupons.filter(coupon => {
                    return coupon.number === parseInt(request.body.coupon, 10);
                });

                if (filteredCoupons.length) {
                    const coupon = filteredCoupons[0];
                    const body = {
                        number: coupon.number,
                        percentage: coupon.percentage,
                        isRare: coupon.isRare,
                    };
                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError({ error: { message: 'Discount coupon not found' } });
                }
            }
            return next.handle(request);
        }))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};