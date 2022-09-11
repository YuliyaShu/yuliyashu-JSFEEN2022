import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginWrapperComponent } from './login-wrapper/login-wrapper.component';


@NgModule({
  declarations: [
    LoginWrapperComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
