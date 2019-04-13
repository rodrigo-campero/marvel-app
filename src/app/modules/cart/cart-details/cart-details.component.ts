import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { DiscountCouponService } from 'src/app/core/services/discount-coupon.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  public products: any;
  public total: number = 0;
  public discountCoupon: number;
  public discountPercentage: number;

  private discounted: boolean;

  constructor(
    private checkoutService: CheckoutService,
    private discountCouponService: DiscountCouponService,
    public toastr: ToastrManager,
    private router: Router,
  ) { }

  ngOnInit() {
    this.products = this.checkoutService.getCart();
    this.getTotal();
  }

  getTotal() {
    if (this.products && Object.keys(this.products).length > 0) {
      let money = 0;
      for (const key in this.products) {
        if (this.products.hasOwnProperty(key)) {
          money += this.products[key].comic.prices[0].price * this.products[key].count;
        }
      }
      this.total = money;
      this.total = parseFloat(this.total.toFixed(2));
    } else {
      this.total = 0;
    }
  }

  getDiscount() {
    if (!this.discounted && this.discountCoupon) {
      this.discountCouponService.validateCoupon(this.discountCoupon).subscribe(coupon => {
        if (coupon) {
          this.discountPercentage = coupon.percentage;
          this.total = this.total - ((this.total * this.discountPercentage) / 100);
          this.total = parseFloat(this.total.toFixed(2));
          this.discountCoupon = null;
          this.discounted = true;
        }
      }, error => {
        this.toastr.errorToastr(error.error.message, 'Oops!', { position: 'bottom-right' });
        this.discountCoupon = null;
      });
    }
  }

  closeOrder() {
    if (this.products && Object.keys(this.products).length > 0) {
      this.checkoutService.closeOrder();
      this.toastr.successToastr('Order completed, thank you!', 'Success!', { position: 'bottom-right' });
      this.router.navigate(['']);
    }
  }

  remove(id: number) {
    this.checkoutService.remove(id);
    this.products = this.checkoutService.getCart();
    this.getTotal();
    this.toastr.successToastr('Item removed!', 'Success!', { position: 'bottom-right' });
  }

  changeQuantity(id: number, count: number) {
    this.checkoutService.changeCount(id, count);
    this.products = this.checkoutService.getCart();
    this.getTotal();
  }
}
