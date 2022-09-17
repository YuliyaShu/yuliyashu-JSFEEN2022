import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { BoardComponent } from '../board.component';
import { BackendService, ColumnResponse, TaskResponse } from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  @Input() tasks: TaskResponse[] = [];

  constructor(private board: BoardComponent, private modalService: NgbModal, private backend: BackendService) { }

  boardTitle = this.board.boardName;
  taskTitle = ''; // come from modal
  taskDescription = ''; // come from modal

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  deleteColumn(columnId: string) {
    const boardId = this.board.boardId;
    this.id = columnId;
    return this.backend.deleteColumn(boardId, columnId).subscribe(resp => {
      window.location.reload();
      return resp;
    });
  }

  createNewTask(columnId: string) {
    const tasks = this.backend.getAllTasks(this.board.boardId, columnId);
    const orderFromLength = this.tasks.length + 1;
    const userId = localStorage.getItem('id') as string;
    return this.backend.createTask(
      {
        title: this.taskTitle,
        done: false,
        order: orderFromLength,
        description: this.taskDescription,
        userId: userId,
      },
      this.board.boardId,
      columnId
    ).subscribe(resp => {
      if ('id' in resp) {
        window.location.reload();
      } else {
        this.addInfoAboutError('failed to create your task, try later');
      }
    });
  }

  addInfoAboutError(text: string) {
    alert(text);
  }

}
