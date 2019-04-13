import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [CartDetailsComponent]
})
export class CartModule { }
