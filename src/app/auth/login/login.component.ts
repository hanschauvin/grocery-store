import { AuthServiceService } from './../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  googleIcon = faGoogle;
  failedLogin = false;
  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.failedLogin = false;
    
    this.auth
      .loginViaGoogle()
      .pipe(
        take(1),
        catchError((error) => {
          console.log('login error:', error);
          this.failedLogin = true;
          return EMPTY;
        })
      )
      .subscribe((response) => {
        //console.log('login success:', response);
        this.router.navigate(['/']);
      });
  }
}
