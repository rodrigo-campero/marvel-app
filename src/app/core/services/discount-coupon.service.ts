import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountCouponService {

  constructor(private http: HttpClient) { }

  validateCoupon(couponNumber: number): Observable<any> {
    return this.http.post('coupon/validate', { coupon: couponNumber });
  }
}
