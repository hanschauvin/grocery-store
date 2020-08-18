import { AddToCartAction } from './../../../redux/action';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input } from '@angular/core';
import { IAppState } from 'src/redux/store';

@Component({
  selector: 'app-product-display-card',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayCardComponent implements OnInit {
  @Input() ItemName: string;
  @Input() Category: string;
  @Input() Price: number;
  @Input() Url: string;
  @Input() ItemID: string;
  @Input() ShowCart: boolean;

  constructor(private redux: NgRedux<IAppState>) {}

  ngOnInit(): void {}

  addTocart(count: number) {
    let cartItem = new AddToCartAction(count, this.ItemID);
    console.log('cart item:', cartItem);
    this.redux.dispatch(cartItem.toObject());
  }
}
