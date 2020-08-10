import { IAppState, rootReducer, INITIAL_STATE } from './../redux/store';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './service/auth-guard.service';
import { AuthServiceService } from './service/auth-service.service';
import { AdminProductsComponent } from './admin/products/products.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './purchase/shopping-cart/shopping-cart.component';
import { MatComponentsModule } from './modules/mat-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './layout/nav/nav.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './layout/home/home.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CheckOutComponent } from './purchase/check-out/check-out.component';
import { OrderSuccessComponent } from './purchase/order-success/order-success.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { MyOrdersComponent } from './purchase/my-orders/my-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductItemComponent } from './admin/product-item/product-item.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AdminProdDisplayComponent } from './admin/admin-prod-display/admin-prod-display.component';
import { AdminProdEditComponent } from './admin/admin-prod-edit/admin-prod-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShoppingCartComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    MyOrdersComponent,
    AdminProductItemComponent,
    AdminProdDisplayComponent,
    AdminProdEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [AuthServiceService, AuthGuard, UserService, AdminAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(redux: NgRedux<IAppState>) {
    redux.configureStore(rootReducer, INITIAL_STATE);
  }
}
