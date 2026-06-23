import { Component } from '@angular/core';

@Component({
  selector: 'app-team-task',
  standalone: false,
  templateUrl: './team-task.html',
  styleUrl: './team-task.css'
})
export class TeamTask {
  name: any;
  showModal: any = false;
  ngOnInit() {
    const userDetails = sessionStorage.getItem('userInfo')
    if (userDetails) {
      this.name = JSON.parse(userDetails);
    }
  }

  addButton() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
