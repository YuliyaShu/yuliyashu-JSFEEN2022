import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import { BackendService, ColumnResponse } from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns = this.columnsConfig();

  constructor(private backend: BackendService, private modalService: NgbModal) { }

  boardName = localStorage.getItem('boardTitle');
  boardId = localStorage.getItem('boardId') as string;
  title: string = '';

  ngOnInit(): void {

  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
  }

  inputTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    this.title = value;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  submitNewColumn() {
    const orderFromLength = this.columns.length + 1
    return this.backend.createColumn(
      {
        title: this.title,
        order: orderFromLength,
      },
      this.boardId
    ).subscribe(resp => {
      if ('id' in resp) {
        window.location.reload();
      } else {
        this.addInfoAboutError('failed to create your board, try later')
      }
    });
  }

  columnsConfig() {
    let result: ColumnResponse[] = [];
    const boardId = localStorage.getItem('boardId') as string;
    this.backend.getAllColumns(boardId).subscribe(resp => {
      if (Array.isArray(resp) && !resp.length) {
        return;
      }
      if (Array.isArray(resp) && 'id' in resp[0]) {
        Array.from(resp).forEach((element) => {
          result.push({
            id: element?.id,
            title: element?.title,
            order: element?.order,
          })
        });
      } else if ('noConnection' in resp) {
        this.addInfoAboutError('no Internet Connection, failed to load your columns')
      } else if ('boardNotFound' in resp) {
        this.addInfoAboutError("board does not exist or has been removed")
      } else {
        this.addInfoAboutError('failed to load your columns, try later')
      }
    })
    return result;
  }

  addInfoAboutError(text: string) {
    alert(text);
  }
}
