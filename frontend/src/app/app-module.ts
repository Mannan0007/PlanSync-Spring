import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Footer } from './footer/footer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from './auth/auth/auth';
import { Users } from './users/users';
import { CardHome } from './card-home/card-home';
import { FeatureCard } from './feature-card/feature-card';
import { ProfilePage } from './profile-page/profile-page';
import { FeatureUser } from './feature-user/feature-user';
import { IndividualTask } from './Features_for_users/individual-task/individual-task';
import { TeamTask } from './Features_for_users/team-task/team-task';
import { Dashboard } from './dashboard/dashboard';
import { MyWorkspace } from './my-workspace/my-workspace';
import { MyTask } from './my-task/my-task';
import { RecentActivity } from './recent-activity/recent-activity';
import { UpcomingDeadlines } from './upcoming-deadlines/upcoming-deadlines';
import { HomeContent } from './home-content/home-content';
import { Notifications } from './notifications/notifications';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Login,
    Register,
    Footer,
    Auth,
    Users,
    CardHome,
    FeatureCard,
    ProfilePage,
    FeatureUser,
    IndividualTask,
    TeamTask,
    Dashboard,
    MyWorkspace,
    MyTask,
    RecentActivity,
    UpcomingDeadlines,
    HomeContent,
    Notifications,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, MatDialogModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
