import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RequestPasswordComponent } from './request-password/request-password.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, RequestPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    SharedModule
  ]
})
export class AuthModule { }
