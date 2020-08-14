import { ProductItemModel } from './../models/productItemModel';
import { take, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from './../service/products.service';
import { CATEGORIES } from './../../redux/action';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  nutCats: string[] = CATEGORIES;
  products: ProductItemModel[];
  nutModel: string[]; // holds the selected filter
  constructor(private prodServ: ProductsService) {
    this.prodServ
      .getProdsV2()
      .pipe(take(1))
      .subscribe((x) => {
        this.products = x;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {}

  selectedChange() {
    console.log('nutmodel:', this.nutModel);
    if (
      this.nutModel.length === 0 ||
      this.nutModel.length === this.nutCats.length
    ) {
      // show all the products
      this.GetAllProducts();
    } else {
      // show the filtered list of products
      this.GetFilteredProducts();
    }
  }

  private GetAllProducts() {
    this.prodServ
      .getProdsV2()
      .pipe(take(1))
      .subscribe((x) => {
        this.products = x;
      });
  }

  private GetFilteredProducts() {
    this.prodServ
      .getProdsV2()
      .pipe(take(1))
      .subscribe((allItems) => {
        let filteredResult: ProductItemModel[] = [];
        this.nutModel.forEach((filter) => {
          console.log('filter:', filter);
          let result = allItems.filter((x) => x.productCategory === filter);
          filteredResult = [...filteredResult, ...result];
        });
        console.log('filtered result: ', filteredResult);
        this.products = filteredResult;
      });
  }
}
