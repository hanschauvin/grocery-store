import { UserService } from './user.service';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private auth: AuthServiceService,
    private userService: UserService,
    private route: Router
  ) {}

  // 1. Goes into the AuthService and retrieve the Observable of the firebase user.
  // 2. SwitchMap: from the result of that firebase user, retrieves the observable
  // of if the user is an admin which is an Observable<boolean>
  // 3. Then using that Obs<bool> it uses the map operator to map it to that Obs<bool>
  // 4. Finally, return the result of it back.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$
      .pipe(
        switchMap((user) => {
          return this.userService.getUserIsAdmin(user.uid);
        })
      )
      .pipe(
        map((x) => {
          //return x;
          console.log('is admin?', x);
          if (x) {
            return true;
          } else {
            this.route.navigate(['/']);
            return false;
          }
        })
      );
  }
}
