import { Component, Injectable, Input, OnInit, ReflectiveInjector, TemplateRef } from '@angular/core';
import { BoardComponent } from '../board.component';
import { BackendService, TaskResponse } from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  @Input() tasksIds: string[] = [];

  constructor(private board: BoardComponent, private modalService: NgbModal, private backend: BackendService) { }

  boardTitle = this.board.boardName;
  taskTitle = '';
  taskDescription = '';
  idsForDragAndDrop = this.board.idsForDragAndDrop;
  res: string[] = [];

  newTaskForm = new FormGroup({

    taskTitle: new FormControl('',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ],
    ),
    taskDescription: new FormControl('',
      [
        Validators.required,
        Validators.minLength(1),
      ],
    ),
    })
  controlTitle = this.newTaskForm.get('taskTitle') as FormControl;
  controlDescription = this.newTaskForm.get('taskDescription') as FormControl;

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
  }

  drop(event: CdkDragDrop<TaskResponse[]>, tasks: TaskResponse[]) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  deleteColumn(columnId: string) {
      const boardId = this.board.boardId;
      this.id = columnId;
      const orderOfDeleted = this.order;
      this.backend.deleteColumn(boardId, columnId).subscribe(resp => {
        this.board.columns.forEach(column => {
          if (column.order > orderOfDeleted) {
              this.backend.updateColumn({
                title: column.title,
                order: column.order - 1,
              }, boardId, column.id).subscribe();
            };
        return;
      });
    })
    setTimeout(()=> window.location.reload(), 1000) ;
}

  inputTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.taskTitle = value;
  }

  inputDescription(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.taskDescription = value;
  }

  submitNewTask(columnId: string) {
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
