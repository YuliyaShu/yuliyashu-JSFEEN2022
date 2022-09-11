import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupWrapperComponent } from './signup-wrapper/signup-wrapper.component';


@NgModule({
  declarations: [
    SignupWrapperComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
})
export class SignupModule { }
