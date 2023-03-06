import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule, AuthRoutes } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignupComponent,
  
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule.forChild(AuthRoutes)
  ],
  exports :[RouterModule]
})
export class AuthModule { }
