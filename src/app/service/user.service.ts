import { map } from 'rxjs/operators';
import { AppUser } from './../../models/app-user';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  save(user: firebase.User) {
    // 1. grab the collection 'users
    // 2. get the document with the user's uid
    // 3. set the values
    this.firestore.collection('users').doc(user.uid).set(
      {
        name: user.displayName,
        email: user.email,
      },
      { merge: true }
    );
  }

  get(uid: string) {
    return this.firestore.collection('users').doc(uid).snapshotChanges();
  }

  getUser(uid: string) {
    return this.firestore.collection('users').doc(uid);
  }

  getUserIsAdmin(uid: string) {
    return this.firestore
      .collection('users')
      .doc(uid)
      .snapshotChanges()
      .pipe(
        map((x) => {
          if (x.payload.get('isAdmin') === true) {
            return true;
          } else return false;
        })
      );
  }
}
