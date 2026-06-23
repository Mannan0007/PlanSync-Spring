import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {

  constructor(private API: Api) { }


  authProperty = 'login';
  newUser: string = '';
  user = '';

  name = '';
  email = '';
  username = '';
  password = '';

  maskingProperty = true;
  masking() {
    this.maskingProperty = !this.maskingProperty;
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onRegister() {
    const newUser = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.API.registerUser(newUser).subscribe({
      next: (res) => {
        alert("User registered")
      },
      error: (err) => {
        console.log(err);
      }
    })




  }

  onLogin() {
    const checkUser = {
      username: this.username,
      password: this.password
    }
    console.log("Data being sent:", checkUser);
    this.API.loginUser(checkUser).subscribe({
      next: (res: any) => {
        alert("User logged in"),
          console.log("Token:", res.token);


        sessionStorage.setItem('authToken', res.token)

        this.username = '';
        this.password = '';

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
