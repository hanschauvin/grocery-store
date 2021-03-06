import { ProductDisplayComponent } from './Edit/product-display/product-display.component';
import { AdminProdEditComponent } from './admin/admin-prod-edit/admin-prod-edit.component';
import { AdminProductItemComponent } from './admin/product-item/product-item.component';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
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
    path: 'admin/products/new',
    component: ProductDisplayComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/products/:id',
    component: ProductDisplayComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
