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

}
