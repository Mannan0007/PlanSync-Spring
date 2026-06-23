import { Component, ElementRef, ViewChild } from '@angular/core';
import { Api } from '../services/api';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private API: Api) { }
  auth: boolean = false;
  name: any = '';




  ngOnInit() {
    const userDetails = sessionStorage.getItem('userInfo');

    if (userDetails) {
      this.name = JSON.parse(userDetails)
    }

    this.API.isLoggedIn$.subscribe(status => {
      this.auth = status;
    });
  }




}
