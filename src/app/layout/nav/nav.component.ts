import { take } from 'rxjs/operators';
import { AuthServiceService } from './../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  // by convention, use $ to identify the variable is an observable
  //user$: Observable<firebase.User>;
  constructor(public auth: AuthServiceService) {
    //this.user$ = auth.user$;
    
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
