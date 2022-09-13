import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { AllBoardsResponse } from 'src/app/backend.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  constructor(private backend: BackendService) { }
  cards = this.cardsConfig();

  ngOnInit(): void {

  }

  cardsConfig() {
    let result: AllBoardsResponse[] = [];
    this.backend.getAllBoards().subscribe(resp => {
      if (Array.isArray(resp) && 'id' in resp[0]) {
        console.log('🚀 ~ test', resp);
        Array.from(resp).forEach((element) => {
          result.push({
            id: element?.id,
            title: element?.title,
            description: element?.description,
          })
        });
      } else if ('noConnection' in resp) {
        this.addInfoAboutError('no Internet Connection, failed to load your boards')
      } else if ('unAuthorized' in resp) {
        this.addInfoAboutError("not authorized, try to login")
      } else {
        this.addInfoAboutError('failed to load your boards, try later')
      }
    })
    return result;
  }

  addInfoAboutError(text: string) {
    alert(text);
  }
}
