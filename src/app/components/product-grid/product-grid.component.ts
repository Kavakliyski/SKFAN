import { Component, OnInit } from '@angular/core';

import { Product } from './product-grid.module';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})

// export class ProductGridComponent implements OnInit {
//   constructor() {  }
//   ngOnInit(): void { }
// }

export class ProductGridComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
   }

  addProduct(name: any, price: any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}