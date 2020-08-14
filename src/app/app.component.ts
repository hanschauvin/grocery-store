import { UserService } from './service/user.service';
import { AuthServiceService } from './service/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Produce Deez';

  constructor(
    private auth: AuthServiceService,
    private userService: UserService
  ) {
    let userUid = '';
    auth.user$.subscribe((user) => {
      if (user) {
        userService.save(user);
      }
    });
  }
}
