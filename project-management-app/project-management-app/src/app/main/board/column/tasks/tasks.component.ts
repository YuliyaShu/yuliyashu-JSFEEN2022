import { Component, OnInit, Input } from '@angular/core';
import { ColumnComponent } from '../column.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() columnId = '';

  constructor(private column: ColumnComponent) { }


  ngOnInit(): void {
    console.log('🚀 ~ boardId', this.columnId);
  }

}
