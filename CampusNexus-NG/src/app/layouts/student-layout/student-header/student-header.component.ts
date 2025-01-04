import { Component } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css'],
})
export class StudentHeaderComponent {
  dropdownOpen = false;
  isOpen = false;
  studentData: any;

  ngOnInit(): void {
    this.studentData = localStorage.getItem('student_Data');
    this.studentData = JSON.parse(this.studentData);
  }
}
