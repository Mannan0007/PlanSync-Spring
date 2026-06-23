import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../services/api';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  auth = false
  path: String = '';
  showModal: boolean = false;
  constructor(private router: Router, private API: Api) {
    this.router.events.subscribe(() => {
      this.path = this.router.url;
    });

  }

  ngOnInit() {
    this.API.isLoggedIn$.subscribe(status => {
      this.auth = status;
    });
  }

  toPath(path: any) {
    this.router.navigate([path]);
  }
  onlogoutClick() {
    this.showModal = true;
    console.log(this.showModal)
  }
  closeModal() {
    this.showModal = false;
    // this.router.navigate(['/login']);
  }

  logout() {
    this.API.logout();
    this.showModal = false;
    this.router.navigate(['/login']);
  }
}
