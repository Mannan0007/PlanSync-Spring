import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-teams-dashboard',
  standalone: false,
  templateUrl: './teams-dashboard.html',
  styleUrl: './teams-dashboard.css'
})
export class TeamsDashboard {
  showcreateTeam: boolean = false;
  userId: any;
  team = new FormGroup({
    teamname: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    description: new FormControl(''),
  })
  constructor(private api: Api) { }
  ngOnInit() {
    const userdetails = sessionStorage.getItem('userInfo');
    if (userdetails) {
      const paredDetails = JSON.parse(userdetails);
      this.userId = paredDetails?.user?.id
    }



  }
  openCreateTeam() {
    this.showcreateTeam = true;
  }
  createTeam() {
    if (!this.team.valid) {
      return;
    }
    const body = {
      name: this.team.value.teamname,
      size: this.team.value.size,
      createdBy: this.userId
    }
    this.api.createTeam(body).subscribe({
      next: (res) => {
        this.openTeamSuccessModal();
      },
      error: (err) => {
        console.error(err);
      }
    })

    console.log(body);
  }
  openTeamSuccessModal() {

  }
}
