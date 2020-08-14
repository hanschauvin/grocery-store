import { ProductsService } from './../../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/redux/store';
import { take } from 'rxjs/operators';
import * as ACTIONS from 'src/redux/action';

@Component({
  selector: 'app-admin-prod-edit',
  templateUrl: './admin-prod-edit.component.html',
  styleUrls: ['./admin-prod-edit.component.scss'],
})
export class AdminProdEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private redux: NgRedux<IAppState>,
    private prodServ: ProductsService
  ) {

  }

  ngOnInit(): void {}
}
