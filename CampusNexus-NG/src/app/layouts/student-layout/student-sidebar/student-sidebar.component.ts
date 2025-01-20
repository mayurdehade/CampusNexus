import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css'],
})
export class StudentSidebarComponent {
  constructor(private router: Router) {}

  studentImage: string = '';
  studentAltImage: string = '';
  studentData: any = {};

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('student_Data');
    const storedImage = localStorage.getItem('student_Image');

    if (storedData) {
      this.studentData = JSON.parse(storedData);
      this.studentAltImage = this.studentData.fullName.charAt(0).toUpperCase();
    }

    if (storedImage) {
      this.studentImage = storedImage;
    }
  }
}
