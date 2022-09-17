import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import { BackendService, NewBoardFields } from 'src/app/backend.service';
import { BoardResponse } from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  closeResult = '';

  constructor(private backend: BackendService, private modalService: NgbModal) { }
  cards = this.cardsConfig();
  title: string = '';
  description: string = '';
  id: string = '';
  authForm = new FormGroup({
    title: new FormControl('',
      [
        Validators.required,
        Validators.minLength(1),
      ],
    ),
    description: new FormControl('',
      [
        Validators.required,
        Validators.minLength(1),
      ],
    ),
  });
  controlTitle = this.authForm.get('title') as FormControl;
  controlDescription = this.authForm.get('description') as FormControl;


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

  inputDescription(event: Event) {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    this.description = value;
  }

  submitNewBoard() {
    if (this.authForm.invalid) {
      return;
    }

    const data = this.authForm.value as NewBoardFields;
    return this.backend.createBoard(
      {
        description: this.description,
        title: this.title,
      }
    ).subscribe(resp => {
      if ('id' in resp) {
        window.location.reload();
      } else {
        this.addInfoAboutError('failed to create your board, try later')
      }
    });
  }

  cardsConfig() {
    let result: BoardResponse[] = [];
    this.backend.getAllBoards().subscribe(resp => {
      if (Array.isArray(resp) && 'id' in resp[0]) {
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
