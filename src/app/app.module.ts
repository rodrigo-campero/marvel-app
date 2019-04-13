import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComicsModule } from './modules/comics/comics.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { CartModule } from './modules/cart/cart.module';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ComicsModule,
    CartModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/marvel-app/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
