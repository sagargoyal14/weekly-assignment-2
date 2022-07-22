import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './dashboard/item/item.component';
import { CartService } from './cart/cart.service';
import { ItemDetailComponent } from './dashboard/item-detail/item-detail.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { AuthComponent } from './auth/auth.component';
import { OrderService } from './orders/order.service';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationToggleService } from './home/navigation-toggle.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    CartComponent,
    OrdersComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    ItemComponent,
    ItemDetailComponent,
    OrderDetailComponent,
    CartDetailComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CartService, OrderService, AuthService, NavigationToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
