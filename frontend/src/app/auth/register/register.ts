import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private API: Api,private router:Router) { }
  password = ''
  username = ''
  email = ''
  name = ''

  showModal: boolean = false;
  showError: any;
  errorMessage: any ;

  maskingProperty = true;
  masking() {
    this.maskingProperty = !this.maskingProperty;
  }


  onRegister() {
    const newUser = {
      name: this.name,  
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.API.registerUser(newUser).subscribe({
      next: (res:any) => {

        console.log("Token:", res.token);
        
        this.API.saveToken(res.token);
        this.showModal = true;
      },
      error: (err) => {
        this.showError = true;
        this.errorMessage = 
        err.error?.message || 
          err.message ||         
          'Something went wrong. Please try again.';
        console.log(err);
      }
    })




  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/']);
  }
  closeErrorModal() {
    this.showError = false;
    // console.log(this.showModal)
  }

}
