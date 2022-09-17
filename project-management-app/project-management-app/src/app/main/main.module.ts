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
import { TasksComponent } from './board/column/tasks/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainWrapperComponent,
    CardComponent,
    BoardComponent,
    ColumnComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    DialogModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
})
export class MainModule { }
