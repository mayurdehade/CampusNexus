import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css'],
})
export class FacultyDashboardComponent {
  constructor(private router: Router) {}

  studentData: Object = {};

  ngOnInit(): void {
    const storedData = localStorage.getItem('user_Data');

    if (storedData) {
      this.studentData = JSON.parse(storedData);
    }

    //if student data not is local storage then don't allow to access dashboard
    if (!storedData) {
      this.router.navigate(['/']);
    }
  }
}
