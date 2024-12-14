import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder,
    private router: Router
  ) {}


  studentLogin = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    if(!this.studentLogin.valid) {
      alert("Fill information correctly")
      this.studentLogin.reset;
    }
    console.log(this.studentLogin.value.email);
    this.studentLogin.reset();
  }
}
