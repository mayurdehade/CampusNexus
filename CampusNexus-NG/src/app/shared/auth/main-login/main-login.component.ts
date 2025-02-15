import { Component } from '@angular/core';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css'],
})
export class MainLoginComponent {
  loginAcc = true;
  studentLogin = true;
  facultyLogin = false;
  createAcct = false;
  studentRegister = false;
  facutlyRegister = false;

  sLogin() {
    this.studentLogin = true;
    this.facultyLogin = false;
    this.studentRegister = false;
  }

  fLogin() {
    this.studentLogin = false;
    this.facultyLogin = true;
    this.studentRegister = false;
  }

  sRegister() {
    this.facutlyRegister = false;
    this.studentRegister = true;
  }

  fRegister() {
    this.studentRegister = false;
    this.facutlyRegister = true;
  }

  createAcc() {
    this.createAcct = true;
    this.loginAcc = false;
    this.studentRegister = true;
    this.facutlyRegister = false;
    this.studentLogin = false;
    this.facultyLogin = false;
  }

  login() {
    this.loginAcc = true;
    this.createAcct = false;
    this.studentRegister = false;
    this.facutlyRegister = false;
    this.studentLogin = true;
    this.facultyLogin = false;
  }
}
