import { Component, OnInit, Input } from '@angular/core';
import { ColumnComponent } from '../column.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() taskId = '';
  @Input() title = '';
  @Input() done = false;
  @Input() order = 0;
  @Input() description = '';
  @Input() userId = '';
  @Input() boardId = '';
  @Input() columnId = '';
  @Input() filename = '';
  @Input() fileSize = 0;

  constructor(private column: ColumnComponent) { }

  tasks = this.column.tasks;

  ngOnInit(): void {
  }

}
