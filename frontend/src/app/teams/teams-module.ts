import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsDashboard } from './teams-dashboard/teams-dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamsDashboard
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TeamsModule { }
