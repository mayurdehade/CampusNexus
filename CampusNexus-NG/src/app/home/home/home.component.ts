import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studentLogin = true;
  facultyLogin = false;
  studentRegister = false;

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
    this.studentLogin = false;
    this.facultyLogin = false;
    this.studentRegister = true;
  }

  
}
