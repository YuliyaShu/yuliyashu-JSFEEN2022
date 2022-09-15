import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardComponent } from '../board.component';
import { ColumnsResponse } from 'src/app/backend.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() title = '';
  @Input() id = '';
  @Input() order = 0;

  constructor(private board: BoardComponent) { }

  allColumns: ColumnsResponse[] = this.board.columns;

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allColumns, event.previousIndex, event.currentIndex);
  }
}
