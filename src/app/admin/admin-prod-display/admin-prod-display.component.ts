import { IAppState } from './../../../redux/store';
import * as ACTIONS from '../../../redux/action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
@Component({
  selector: 'admin-prod-display',
  templateUrl: './admin-prod-display.component.html',
  styleUrls: ['./admin-prod-display.component.scss'],
})
export class AdminProdDisplayComponent implements OnInit, OnDestroy {
  @select((s: IAppState) => s.productEditing.productName) name;
  @select((s: IAppState) => s.productEditing.productCategory) category;
  @select((s: IAppState) => s.productEditing.productPrice) price;
  @select((s: IAppState) => s.productEditing.productUrl) url;
  constructor(private redux: NgRedux<IAppState>) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    //console.log('component destroyed');
    this.redux.dispatch({ type: ACTIONS.RESET_PRODUCT_EDITING });
  }
}
