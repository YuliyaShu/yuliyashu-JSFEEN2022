import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupWrapperComponent } from './signup-wrapper/signup-wrapper.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
