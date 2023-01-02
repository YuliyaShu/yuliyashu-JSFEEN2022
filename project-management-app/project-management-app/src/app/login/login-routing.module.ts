import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWrapperComponent } from './login-wrapper/login-wrapper.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
