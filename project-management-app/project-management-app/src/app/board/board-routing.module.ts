import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardWrapperComponent } from './board-wrapper/board-wrapper.component';

const routes: Routes = [
  {
    path: 'board',
    component: BoardWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
