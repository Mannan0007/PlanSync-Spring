import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Api {

  private baseApiUrl = 'http://localhost:4000/api/user'
  private springBaseApiUrl='http://localhost:8080/api'

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) { }


  hasToken(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token
  }

  loginUser(data: any) {
    return this.http.post(`${this.baseApiUrl}/login`, data)
  }

  saveToken(token: string) {
    sessionStorage.setItem('authToken', token);
    this.loggedIn.next(true);
  }

  registerUser(data: any) {
    return this.http.post(`${this.baseApiUrl}/register`, data);
  }

  // addTask(data: any) {
  //   return this.http.post(`${this.baseApiUrl}/addTask`, data);
  // }
  addTask(data: any) {
    return this.http.post(`${this.springBaseApiUrl}/addTask`, data);
  }

  getTask(userId: string) {
    return this.http.get(`${this.baseApiUrl}/${userId}/tasks`, {
    });
  }

  // teams api
  createTeam(data: any) {
    return this.http.post(`${this.baseApiUrl}/createTeam`, data);
  }
  logout() {
    sessionStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

}
