import { UserService } from './../../service/user.service';
import { take, switchMap } from 'rxjs/operators';
import { AuthServiceService } from './../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/redux/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @select((s: IAppState) => s.itemsInCart) itemCount: number;
  //  @select((s: IAppState) => s.productEditing.productUrl) url;
  // by convention, use $ to identify the variable is an observable
  //user$: Observable<firebase.User>;
  isAdmin$;
  constructor(public auth: AuthServiceService, public userServ: UserService) {
    //this.user$ = auth.user$;
    this.isAdmin$ = this.auth.user$.pipe(
      switchMap((user) => {
        return this.userServ.getUserIsAdmin(user.uid);
      })
    );
  }

  ngOnInit(): void {}

  logout() {
    this.auth
      .logout()
      .pipe(take(1))
      .subscribe((response) => {
        //console.log('logout', response);
      });
  }
}
