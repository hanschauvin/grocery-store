import { take } from 'rxjs/operators';
import { ProductsService } from './../../service/products.service';
import { ProductItemValidator } from './product-item.validators';
import { IAppState } from './../../../redux/store';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import {
  SAVE_PRODUCT_EDITING,
  CATEGORIES,
  RESET_PRODUCT_EDITING,
} from '../../../redux/action';
import { Router, ActivatedRoute } from '@angular/router';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'admin-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class AdminProductItemComponent implements OnInit {
  productForm: FormGroup;
  nutCat;
  @select((s: IAppState) => s.productEditing) testStuff;

  constructor(
    private redux: NgRedux<IAppState>,
    private service: ProductsService,
    private route: Router,
    private actRoute: ActivatedRoute,
    private changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [
        Validators.required,
        ProductItemValidator.ValidPrice,
      ]),
      productCategory: new FormControl('', [Validators.required]),
      productUrl: new FormControl('', [Validators.required]),
    });
  }

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

  UpdateDisplay() {
    this.redux.dispatch({
      type: SAVE_PRODUCT_EDITING,
      form: this.productForm.value,
    });
  }

  reset() {
    this.redux.dispatch({ type: RESET_PRODUCT_EDITING });
  }

  submitForm() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    } else {
      this.service.saveProduct(this.productForm.value);
      this.redux.dispatch({
        type: SAVE_PRODUCT_EDITING,
        form: this.productForm.value,
      });
      this.route.navigate(['/admin/products']);
    }
  }
}
