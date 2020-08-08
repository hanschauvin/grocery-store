import { IAppState } from './../../../redux/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { SAVE_PRODUCT_EDITING } from '../../../redux/action';

@Component({
  selector: 'admin-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class AdminProductItemComponent implements OnInit {
  productForm: FormGroup;
  nutCat = ['Cashew', 'Peanut', 'Macadamia', 'Pecan', 'Walnut'];
  @select((s: IAppState) => s.productEditing) testStuff;
  constructor(private redux: NgRedux<IAppState>) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required]),
      productUrl: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.productForm.get('productName');
  }

  get price() {
    return this.productForm.get('productPrice');
  }

  get category() {
    return this.productForm.get('productCategory');
  }

  get url() {
    return this.productForm.get('productUrl');
  }

  submitForm() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    } else {
      console.log('submit form:', this.productForm.value);
      this.redux.dispatch({
        type: SAVE_PRODUCT_EDITING,
        form: this.productForm.value,
      });
    }
  }
}
