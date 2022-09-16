import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BoardComponent } from '../board.component';
import { ColumnResponse } from 'src/app/backend.service';

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

  allColumns: ColumnResponse[] = this.board.columns;

  ngOnInit(): void {
  }
}
