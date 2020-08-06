import { AuthGuard } from './service/auth-guard.service';
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
  // Anonymous User Routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },

  // Logged in User Routes
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: 'ordersuccess',
    component: CheckOutComponent,
    canActivate: [AuthGuard],
  },
  { path: 'orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

  // Admin Routes
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
