import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainWrapperComponent,
  },
  {
    path: 'board/:id',
    component: BoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
