import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private user: BehaviorSubject<
    Observable<firebase.User>
  > = new BehaviorSubject<Observable<firebase.User>>(null);

  user$ = this.user
    .asObservable()
    .pipe(switchMap((user: Observable<firebase.User>) => user));

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user.next(this.afAuth.authState);
  }

  loginViaGoogle(): Observable<auth.UserCredential> {
    return from(
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.auth.signOut());
  }

  getLoggedInUser(): Observable<firebase.User> {
    return from(this.afAuth.authState);
  }
}
