import { Component, Injectable, OnInit } from '@angular/core';
import { BackendService, BoardResponse, ColumnsResponse } from 'src/app/backend.service';
import { CardComponent } from '../card/card.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns = this.columnsConfig();

  constructor(private backend: BackendService, private card: CardComponent) { }

  boardName = localStorage.getItem('boardTitle');

  ngOnInit(): void {

  }

  columnsConfig() {
    let result: ColumnsResponse[] = [];
    const boardId = localStorage.getItem('boardId') as string;
    console.log('🚀 ~ this.board', this.card);
    console.log('🚀 ~ boardId', boardId);
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
