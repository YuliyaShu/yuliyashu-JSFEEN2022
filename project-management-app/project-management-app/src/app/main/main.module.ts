import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { CardComponent } from './card/card.component';
import { DialogModule } from '@angular/cdk/dialog';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './board/column/column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    MainWrapperComponent,
    CardComponent,
    BoardComponent,
    ColumnComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    DialogModule,
    DragDropModule,
  ],
})
export class MainModule { }
