import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardWrapperComponent } from './board-wrapper/board-wrapper.component';


@NgModule({
  declarations: [
    BoardWrapperComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
