import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupWrapperComponent } from './signup-wrapper/signup-wrapper.component';

@NgModule({
  declarations: [
    SignupWrapperComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SignupModule { }
