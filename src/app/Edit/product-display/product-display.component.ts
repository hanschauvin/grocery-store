import { take } from 'rxjs/operators';
import { ProductsService } from './../../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from './../../../redux/action';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductItemValidator } from '../../admin/product-item/product-item.validators';

@Component({
  selector: 'product-display-v2',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent implements OnInit {
  productForm: FormGroup;
  nutCat;
  formId: string;

  constructor(
    private actRoute: ActivatedRoute,
    private service: ProductsService,
    private route: Router
  ) {
    this.nutCat = CATEGORIES;
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [
        Validators.required,
        ProductItemValidator.ValidPrice,
      ]),
      productCategory: new FormControl('', [Validators.required]),
      productUrl: new FormControl('', [Validators.required]),
    });

    this.formId = this.actRoute.snapshot.paramMap.get('id');
    if (this.formId && this.formId !== '') {
      this.service
        .getProd(this.formId)
        .snapshotChanges()
        .pipe(take(1))
        .subscribe((x) => {
          this.productForm.patchValue(x.payload.data());
        });
    }
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

  SubmitForm() {
    if (this.formId && this.formId !== '') {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    } else {
      this.service.saveProduct(this.productForm.value);

      this.route.navigate(['/admin/products']);
    }
  }

  updateProduct() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    } else {
      this.service.updateProduct(this.formId, this.productForm.value);
      this.route.navigate(['/admin/products']);
    }


  }
}
