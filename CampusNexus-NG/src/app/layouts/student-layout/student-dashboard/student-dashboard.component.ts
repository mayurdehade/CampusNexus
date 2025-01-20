import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent {
  constructor(private router: Router) {}

  studentImage: string = '';
  studentData: Object = {};

  ngOnInit(): void {
    const storedData = localStorage.getItem('student_Data');
    const storedImage = localStorage.getItem('student_Image');

    if (storedData) {
      this.studentData = JSON.parse(storedData);
    }

    if (storedImage) {
      this.studentImage = storedImage;
    }

    //if student data not is local storage then don't allow to access dashboard
    if (!storedData) {
      this.router.navigate(['/']);
    }
  }
}
