import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import { HomeContent } from './home-content/home-content';
import { Register } from './auth/register/register';
import { Auth } from './auth/auth/auth';
import { ProfilePage } from './profile-page/profile-page';
import { IndividualTask } from './Features_for_users/individual-task/individual-task';
import { TeamTask } from './Features_for_users/team-task/team-task';
import { MyWorkspace } from './my-workspace/my-workspace';
import { TeamsDashboard } from './teams/teams-dashboard/teams-dashboard';
const routes: Routes = [
  { path: '', component: HomeContent },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'auth', component: Auth },
  { path: 'user-profile', component: ProfilePage },
  { path: 'individual-task', component: IndividualTask },
  { path: 'team-creation', component: TeamTask },
  { path: 'my-workspace', component: MyWorkspace },
  { path: 'teams-dashboard', component: TeamsDashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
