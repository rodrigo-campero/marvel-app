import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public count: number = 0;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.count = this.checkoutService.getCount();
    this.checkoutService.countEventBus().subscribe(res => {
      this.count = res;
    });

    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }
}
