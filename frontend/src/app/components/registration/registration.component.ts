import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  name: String;
  username: String;
  password: String;
  email: String;

  constructor(
    private validateService: ValidateService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
    if(!this.validateService.validateRegister(user)) {
      this.toastr.error('All fields are required');
      return false;
    }
    if(!this.validateService.validateEmail(user.email)) {
      this.toastr.error('Wrong email format');
      return false;
    }
    this.authenticationService.registerUser(user).subscribe(data => {
      this.toastr.success('Sucessfully registered');
      this.router.navigate(['/']);
    })
  }

}
