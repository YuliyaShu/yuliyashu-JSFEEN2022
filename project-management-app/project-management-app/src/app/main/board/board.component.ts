import { Component, Injectable, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private card: CardComponent) { }

  ngOnInit(): void {
    console.log(this.card);

  }

}
