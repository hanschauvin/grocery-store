import { ProductItemModel } from './../models/productItemModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}

  saveProduct(product) {
    return this.firestore.collection('products').add(product);
  }

  updateProduct(id, product) {
    return this.firestore
      .collection('products')
      .doc(id)
      .set(product, { merge: true });
  }

  deleteProduct(id) {
    return this.firestore.collection('products').doc(id).delete();
  }

  getProd(id) {
    return this.firestore.collection('products').doc(id);
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  getProdsV2(): Observable<ProductItemModel[]> {
    // map switches the return type of the observable to use the
    // productItemModel array instead.
    return this.getProducts().pipe(
      map((x) => {
        let arr: ProductItemModel[] = [];
        // loop through each firebase value and convert it to the model
        x.forEach((item) => {
          let tempId = item.payload.doc.id; // get the id
          let temp = item.payload.doc.data() as ProductItemModel;
          temp.productID = tempId;
          arr.push(temp);
        });
        return arr;
      })
    );
  }
}
