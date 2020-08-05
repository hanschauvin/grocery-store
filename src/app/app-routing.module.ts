import { MyOrdersComponent } from './purchase/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { AdminProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './purchase/check-out/check-out.component';
import { ShoppingCartComponent } from './purchase/shopping-cart/shopping-cart.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'ordersuccess', component: CheckOutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
