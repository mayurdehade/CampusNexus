import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  studentRegister = this.formBuilder.group({
    email: '',
    rnumber: '',
    password: '',
  });

  onSubmit(): void {
    if (!this.studentRegister.valid) {
      alert('Fill information correctly');
      this.studentRegister.reset;
    }
    console.log(this.studentRegister.value.email);
    this.studentRegister.reset();
  }
}
