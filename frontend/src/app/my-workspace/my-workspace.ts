import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-my-workspace',
  standalone: false,
  templateUrl: './my-workspace.html',
  styleUrl: './my-workspace.css'
})
export class MyWorkspace {
  currentDateTime: Date = new Date();
  private clockSub!: Subscription;
  name: any;
  ngOnInit() {
    const UserDetails = sessionStorage.getItem('userInfo');
    if (UserDetails) {
      this.name = JSON.parse(UserDetails);
    }
    this.clockSub = interval(1000).subscribe(() => {
      this.currentDateTime = new Date();
    });
  }


}
