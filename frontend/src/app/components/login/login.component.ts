import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    if(!this.validateService.validateLogin(user)) {
      this.toastr.error('All fields are required');
      return false;
    }
    this.authenticationService.authenticate(user).subscribe(data => {
      if(data.success) {
        this.authenticationService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error(data.msg);
      }
    });
  }
}
