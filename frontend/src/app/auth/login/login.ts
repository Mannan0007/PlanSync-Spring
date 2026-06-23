import { Component, Output, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private API: Api, private router: Router, private modalService: NgbModal) { }
  @ViewChild('successModal') successModal!: TemplateRef<any>;
  @ViewChild('errorModal') errorModal!: TemplateRef<any>;

  isSubmitted: boolean = false;
  errorMessage: string = '';
  Responsemessage: string = '';
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  Login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const body = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.API.loginUser(body).subscribe({
      next: (res: any) => {
        this.API.saveToken(res.token);
        sessionStorage.setItem('userInfo', JSON.stringify(res));
        this.Responsemessage = res?.message;
        this.modalService.open(this.successModal, { windowClass: 'ed-modal', backdrop: 'static', keyboard: false });
        this.router.navigate(['/my-workspace']);

      },
      error: (err) => {
        this.errorMessage = err.error?.message;
        this.modalService.open(this.errorModal, { windowClass: 'error-modal', backdrop: 'static', keyboard: false });
      }
    })
  }
  closeSuccessModal() {
    // this.router.navigate(['/my-workspace']);
    this.closeModal();

  }



  closeModal() {
    this.modalService.dismissAll();

  }

}
