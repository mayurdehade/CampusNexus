import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent {
  studentData: any;

  constructor() {}

  ngOnInit(): void {
    this.studentData = localStorage.getItem('student_Data');
    if (this.studentData == null) {
      window.location.href = '/';
    }
    this.studentData = JSON.parse(this.studentData);
    // console.log(this.studentData.fullName);
  }
}
