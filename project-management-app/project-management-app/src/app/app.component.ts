import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private backend: BackendService) {};

  onTerm(term: string) {
    this.backend.search(term).subscribe((response) => {
      console.log(response);
    });

  }
}
