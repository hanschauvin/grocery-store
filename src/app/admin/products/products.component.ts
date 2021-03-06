import { ProductsService } from './../../service/products.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import {
  RESET_PRODUCT_EDITING,
  SAVE_PRODUCT_EDITING,
} from '../../../redux/action';
import { IAppState } from 'src/redux/store';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductItemModel } from 'src/app/models/productItemModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  //prodListV2$: Observable<ProductItemModel[]>;
  displayedColumns: string[] = ['name', 'price', 'edit'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource;
  dataArray: TableData[];
  constructor(
    private redux: NgRedux<IAppState>,
    private route: Router,
    private prodServ: ProductsService
  ) {
    // this.prodListV2$ = this.prodServ.getProdsV2();
  }

  ngOnInit(): void {
    this.prodServ.getProdsV2().subscribe((prod) => {
      let data = prod.map((x) => new TableData(x));
      this.dataArray = [...data];
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnDestroy() {}

  addNewClicked() {
    this.redux.dispatch({ type: RESET_PRODUCT_EDITING });
    this.route.navigate(['/admin/products/new']);
  }

  deleteItem(id) {
    this.prodServ.deleteProduct(id);
  }

  //[routerLink]="['/admin/products/', prod.id]"
  editItem(id) {
    let result = this.dataArray.filter((x) => x.id === id);
    if (result.length === 1) {
      const data = {
        productName: result[0].name,
        productID: result[0].id,
        productPrice: result[0].price,
        productUrl: result[0].imgUrl,
      };
      this.redux.dispatch({
        type: SAVE_PRODUCT_EDITING,
        productEditing: data,
      });

      this.route.navigate(['/admin/products/', data.productID]);
    }
    // this.redux.dispatch({type: SAVE_PRODUCT_EDITING, productEditing:{

    // }})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export class TableData {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  constructor(x: ProductItemModel) {
    this.id = x.productID;
    this.name = x.productName;
    this.price = x.productPrice;
    this.imgUrl = x.productUrl;
  }
}
