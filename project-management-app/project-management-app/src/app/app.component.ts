import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isLogIn = false;
  constructor(private backend: BackendService) {};

  ngOnInit() {
    this.backend.isLogIn$.subscribe((isLogIn) => {
      this.isLogIn = isLogIn
    })

  }
  signOut() {
    this.backend.isLogIn$.next(false);
    localStorage.setItem('isLogIn', '0');
    localStorage.removeItem('token');
    window.location.reload();
  }
}
