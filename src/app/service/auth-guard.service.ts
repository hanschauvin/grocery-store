import { map } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService, private router: Router) {}

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          // navigate has a parameter to send query params
          // the state param contains the url where the user is attempting to navigate to
          this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        }
      })
    );
  }
}
