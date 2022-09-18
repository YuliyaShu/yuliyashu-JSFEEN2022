import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from 'src/app/backend.service';
import { BoardComponent } from '../../board.component';
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

  constructor(private backend: BackendService, private column: ColumnComponent, private modalService: NgbModal, private board: BoardComponent) { }

  tasks = this.column.tasks;
  boardTitle = this.board.boardName;

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
  }

  deleteTask(taskId: string) {
    return this.backend.deleteTask(this.board.boardId, this.column.id, taskId).subscribe(resp => {
      window.location.reload();
      return resp;
    });
  }

}
