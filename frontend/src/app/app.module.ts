import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ValidateService } from './services/validate.service';
import { AuthenticationService } from './services/authentication.service'
import { AuthenticationGuard } from './guards/authentication.guard';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ValidateService,
              AuthenticationService,
              AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
