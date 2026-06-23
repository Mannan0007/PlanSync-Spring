import { Component, signal } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  auth = false;
  constructor(private API: Api) { }
  
  ngOnInit() {
    this.API.isLoggedIn$.subscribe(status => {
      this.auth = status;
    });
  }
}
