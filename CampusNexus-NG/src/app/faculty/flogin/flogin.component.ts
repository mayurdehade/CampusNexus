import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flogin',
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css'],
})
export class FloginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  facultyLogin = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    if (!this.facultyLogin.valid) {
      alert('Fill information correctly');
      this.facultyLogin.reset;
    }
    console.log(this.facultyLogin.value.email);
    this.facultyLogin.reset();
  }
}
