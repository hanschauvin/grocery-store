import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { RESET_PRODUCT_EDITING } from '../../../redux/action';
import { IAppState } from 'src/redux/store';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  constructor(private redux: NgRedux<IAppState>, private route: Router) {}

  ngOnInit(): void {}

  addNewClicked() {
    this.redux.dispatch({ type: RESET_PRODUCT_EDITING });
    this.route.navigate(['/admin/products/new'])
  }
}
