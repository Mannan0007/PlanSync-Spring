import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: false,
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css'
})
export class ProfilePage {

  user: any = null;
  ngOnInit() {
    const userDetails = sessionStorage.getItem('userInfo');

    if (userDetails) {
      this.user = JSON.parse(userDetails);
    }

  }


}
