import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() id ='';

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  deleteBoard(id: string) {
    return this.backend.deleteBoard(id).subscribe(resp => {
      console.log('🚀 ~ resp', resp);
      window.location.reload();
      return resp;
    });
  }

  getAttributes(title: string, id: string, description: string) {
    this.title = title;
    console.log('🚀 ~ this.title ', this.title );
    this.id = id;
    this.description = description;
  }
}
